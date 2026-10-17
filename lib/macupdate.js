// macOS self-updater for ad-hoc signed builds (Squirrel.Mac refuses them: their designated requirement is a
// per-build cdhash). Downloads the release zip, checks GitHub's SHA-256 digest, unpacks and verifies the bundle,
// then a detached shell script swaps it in after the app quits and (optionally) relaunches it.
const { execFile, spawn } = require('child_process');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const BUNDLE_ID = 'dev.buddyhud.app';
const ASSET_PREFIX = 'https://github.com/premanand8800/buddy-hud/releases/download/';
const MAX_BYTES = 600e6;

const run = (cmd, args) => new Promise((resolve, reject) => execFile(cmd, args, { timeout: 120000 }, (e, out, err) => (e ? reject(new Error(`${path.basename(cmd)}: ${String(err || e.message).trim().split('\n')[0]}`)) : resolve(String(out).trim()))));

// The release zip for this Mac's architecture, with its "sha256:<hex>" digest (null if either is missing).
function pickZip(assets, arch = process.arch) {
  const want = new RegExp(`mac-${arch === 'arm64' ? 'arm64' : 'x64'}\\.zip$`);
  const a = (assets || []).find((x) => want.test(x.name));
  if (!a || !/^sha256:[0-9a-f]{64}$/.test(String(a.digest || '')) || !String(a.browser_download_url || '').startsWith(ASSET_PREFIX)) return null;
  return { url: a.browser_download_url, sha256: a.digest.slice(7), size: a.size || 0 };
}

// "/Applications/Buddy HUD.app" from ".../Buddy HUD.app/Contents/MacOS/Buddy HUD", or null when not inside a bundle.
function bundleOf(execPath) {
  const b = path.posix.resolve(execPath, '..', '..', '..');
  return /\.app$/.test(b) && path.posix.basename(path.posix.dirname(execPath)) === 'MacOS' ? b : null;
}

// Why this copy cannot replace itself (empty string = it can).
function blocker(bundle) {
  if (!bundle) return 'not running from an app bundle';
  if (bundle.includes('/AppTranslocation/')) return 'running from a quarantined location; move Buddy HUD to Applications first';
  if (bundle.startsWith('/Volumes/')) return 'running from the disk image; drag Buddy HUD to Applications first';
  try { fs.accessSync(path.dirname(bundle), fs.constants.W_OK); fs.accessSync(bundle, fs.constants.W_OK); } catch { return `no write access to ${path.dirname(bundle)}`; }
  return '';
}

// Stream url to dest over https (redirects only to GitHub hosts), hashing as it goes. Resolves to the hex SHA-256.
function download(url, dest, onProgress, opts = {}, hops = 0) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const okHost = u.protocol === 'https:' && (u.hostname === 'github.com' || u.hostname.endsWith('.githubusercontent.com'));
    if (!okHost && !(opts.allowHttp && u.protocol === 'http:')) return reject(new Error('refusing download host ' + u.host));
    const lib = u.protocol === 'http:' ? require('http') : require('https');
    const req = lib.get(u, { headers: { 'User-Agent': 'buddy-hud-updater' }, timeout: 30000 }, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
        res.resume();
        if (hops > 5) return reject(new Error('too many redirects'));
        return download(new URL(res.headers.location, u).href, dest, onProgress, opts, hops + 1).then(resolve, reject);
      }
      if (res.statusCode !== 200) { res.resume(); return reject(new Error('download failed: HTTP ' + res.statusCode)); }
      const total = +res.headers['content-length'] || 0;
      const hash = crypto.createHash('sha256');
      const out = fs.createWriteStream(dest);
      let got = 0;
      res.on('data', (d) => {
        got += d.length; hash.update(d);
        if (got > MAX_BYTES) { req.destroy(new Error('download too large')); return; }
        if (onProgress && total) onProgress(got / total);
      });
      res.on('error', reject);
      out.on('error', reject);
      out.on('finish', () => resolve(hash.digest('hex')));
      res.pipe(out);
    });
    req.on('timeout', () => req.destroy(new Error('download timed out')));
    req.on('error', reject);
  });
}

// Download + verify into a fresh staging dir. Resolves to the path of the verified, unquarantined new .app.
async function prepare({ zip, version, stagingDir, onProgress, downloadOpts }) {
  fs.rmSync(stagingDir, { recursive: true, force: true });
  fs.mkdirSync(stagingDir, { recursive: true });
  const file = path.join(stagingDir, 'update.zip');
  const sha = await download(zip.url, file, onProgress, downloadOpts);
  if (sha !== zip.sha256) throw new Error('checksum mismatch, update discarded');
  const out = path.join(stagingDir, 'app');
  await run('/usr/bin/ditto', ['-x', '-k', file, out]);
  fs.rmSync(file, { force: true });
  const name = fs.readdirSync(out).find((n) => n.endsWith('.app'));
  if (!name) throw new Error('no app in the update');
  const app = path.join(out, name);
  const plist = path.join(app, 'Contents', 'Info.plist');
  const id = await run('/usr/bin/plutil', ['-extract', 'CFBundleIdentifier', 'raw', plist]);
  const ver = await run('/usr/bin/plutil', ['-extract', 'CFBundleShortVersionString', 'raw', plist]);
  if (id !== BUNDLE_ID) throw new Error('unexpected app id ' + id);
  if (ver !== String(version)) throw new Error(`version mismatch (${ver}, expected ${version})`);
  await run('/usr/bin/codesign', ['--verify', '--deep', '--strict', app]);
  await run('/usr/bin/xattr', ['-dr', 'com.apple.quarantine', app]).catch(() => {});
  return app;
}

// Waits for pid to exit, swaps target for staged (restoring the old copy on failure), optionally relaunches.
const SWAP_SCRIPT = `#!/bin/sh
NEW="$1"; DEST="$2"; PID="$3"; RELAUNCH="$4"; STAGING="$5"; BAK="$DEST.updating"
i=0
while kill -0 "$PID" 2>/dev/null; do
  i=$((i+1)); [ "$i" -gt 150 ] && exit 1
  sleep 0.2
done
rm -rf "$BAK"
if mv "$DEST" "$BAK"; then
  if /usr/bin/ditto "$NEW" "$DEST"; then rm -rf "$BAK"; else rm -rf "$DEST"; mv "$BAK" "$DEST"; fi
fi
/usr/bin/xattr -dr com.apple.quarantine "$DEST" 2>/dev/null
[ "$RELAUNCH" = "1" ] && /usr/bin/open "$DEST"
rm -rf "$STAGING"
`;

// Hand off to the detached swap script; the caller must quit right after.
function install({ staged, target, pid, relaunch, stagingDir }) {
  const script = path.join(stagingDir, 'swap.sh');
  fs.writeFileSync(script, SWAP_SCRIPT, { mode: 0o755 });
  const child = spawn('/bin/sh', [script, staged, target, String(pid), relaunch ? '1' : '0', stagingDir], { detached: true, stdio: 'ignore' });
  child.unref();
}

module.exports = { pickZip, bundleOf, blocker, download, prepare, install, SWAP_SCRIPT, BUNDLE_ID };

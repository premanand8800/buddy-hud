// Self-update for Windows (NSIS installer) and Linux (AppImage): same trust chain as the macOS updater
// (GitHub asset digest + Ed25519 signature bound to "<file name>:<sha256>"), then a detached helper swaps the app in
// after it quits. The .deb, the portable .exe and dev builds fall back to the manual Download button.
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const mu = require('./macupdate');

const ASSET_PREFIX = 'https://github.com/premanand8800/buddy-hud/releases/download/';

// The installer asset for this platform with its digest and signature asset (null if anything is missing).
function pickAsset(assets, platform = process.platform, arch = process.arch) {
  const want = platform === 'win32' ? /win-setup\.exe$/ : platform === 'linux' ? (arch === 'arm64' ? /(arm64|aarch64)\.AppImage$/ : /x86_64\.AppImage$/) : null;
  if (!want) return null;
  const a = (assets || []).find((x) => want.test(x.name));
  if (!a || !/^sha256:[0-9a-f]{64}$/.test(String(a.digest || '')) || !String(a.browser_download_url || '').startsWith(ASSET_PREFIX)) return null;
  const sig = (assets || []).find((x) => x.name === a.name + '.sig');
  if (!sig || !String(sig.browser_download_url || '').startsWith(ASSET_PREFIX)) return null;
  return { url: a.browser_download_url, sha256: a.digest.slice(7), size: a.size || 0, name: a.name, sigUrl: sig.browser_download_url };
}

// Why this copy cannot replace itself ('' = it can).
function blocker({ platform = process.platform, execPath = process.execPath, env = process.env } = {}) {
  if (platform === 'win32') {
    const dir = path.win32.dirname(execPath);
    return fs.existsSync(path.join(dir, 'Uninstall Buddy HUD.exe')) ? '' : 'portable or unpacked copy: download the installer to update';
  }
  if (platform === 'linux') {
    const img = env.APPIMAGE;
    if (!img) return 'not an AppImage (.deb and source installs update through their own channel)';
    try { fs.accessSync(path.dirname(img), fs.constants.W_OK); fs.accessSync(img, fs.constants.W_OK); } catch { return `no write access to ${path.dirname(img)}`; }
    return '';
  }
  return 'unsupported platform';
}

// Download + verify the installer into a fresh staging dir. Resolves to the path of the verified file.
async function prepare({ zip, version, stagingDir, onProgress, downloadOpts, pubKey }) {
  if (!String(zip.name).includes(`-${version}-`)) throw new Error('asset name does not match the release version');
  fs.rmSync(stagingDir, { recursive: true, force: true });
  fs.mkdirSync(stagingDir, { recursive: true });
  const sigFile = path.join(stagingDir, 'update.sig');
  await mu.download(zip.sigUrl, sigFile, null, downloadOpts);
  const sig = fs.readFileSync(sigFile, 'utf8');
  const file = path.join(stagingDir, zip.name);
  const sha = await mu.download(zip.url, file, onProgress, downloadOpts);
  if (sha !== zip.sha256) throw new Error('checksum mismatch, update discarded');
  if (!mu.verifySignature(`${zip.name}:${sha}`, sig, pubKey)) throw new Error('signature check failed, update discarded');
  fs.chmodSync(file, 0o755);
  return file;
}

// Windows: wait for this process to exit, then run the installer silently (same flags electron-updater uses).
function windowsCommand({ staged, pid, relaunch }) {
  const q = (s) => `'${String(s).replace(/'/g, "''")}'`;
  const args = ['--updated', '/S'].concat(relaunch ? ['--force-run'] : []);
  const script = `$p=${Number(pid)}; while (Get-Process -Id $p -ErrorAction SilentlyContinue) { Start-Sleep -Milliseconds 300 }; Start-Process -FilePath ${q(staged)} -ArgumentList ${args.map(q).join(',')}`;
  return { cmd: 'powershell.exe', args: ['-NoProfile', '-NonInteractive', '-WindowStyle', 'Hidden', '-Command', script] };
}
function installWindows({ staged, pid, relaunch }) {
  const { cmd, args } = windowsCommand({ staged, pid, relaunch });
  spawn(cmd, args, { detached: true, stdio: 'ignore', windowsHide: true }).unref();
}

// Linux: wait for exit, copy next to the old AppImage and rename over it (atomic, keeps the same path so launchers keep working).
const LINUX_SCRIPT = `#!/bin/sh
NEW="$1"; DEST="$2"; PID="$3"; RELAUNCH="$4"; STAGING="$5"
i=0
while kill -0 "$PID" 2>/dev/null; do
  i=$((i+1)); [ "$i" -gt 150 ] && exit 1
  sleep 0.2
done
if cp "$NEW" "$DEST.new" && chmod 755 "$DEST.new" && mv -f "$DEST.new" "$DEST"; then :; else rm -f "$DEST.new"; fi
[ "$RELAUNCH" = "1" ] && (setsid "$DEST" >/dev/null 2>&1 &)
rm -rf "$STAGING"
`;
function installLinux({ staged, target, pid, relaunch, stagingDir }) {
  const script = path.join(stagingDir, 'swap.sh');
  fs.writeFileSync(script, LINUX_SCRIPT, { mode: 0o755 });
  spawn('/bin/sh', [script, staged, target, String(pid), relaunch ? '1' : '0', stagingDir], { detached: true, stdio: 'ignore' }).unref();
}

module.exports = { pickAsset, blocker, prepare, windowsCommand, installWindows, installLinux, LINUX_SCRIPT };

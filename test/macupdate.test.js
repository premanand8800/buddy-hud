const assert = require('assert');
const { execFileSync } = require('child_process');
const crypto = require('crypto');
const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');
const mu = require('../lib/macupdate');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const REL = 'https://github.com/premanand8800/buddy-hud/releases/download/v9.9.9/';
const SHA = 'a'.repeat(64);
const kp = crypto.generateKeyPairSync('ed25519');
const PUB = kp.publicKey.export({ type: 'spki', format: 'pem' });
const sign = (name, sha) => crypto.sign(null, Buffer.from(`${name}:${sha}`), kp.privateKey).toString('base64');

(async () => {
  // pickZip: this arch's zip, only with a GitHub digest and a URL from this repo's releases
  const assets = [
    { name: 'buddy-hud-9.9.9-mac-arm64.dmg', browser_download_url: REL + 'buddy-hud-9.9.9-mac-arm64.dmg', digest: 'sha256:' + SHA },
    { name: 'buddy-hud-9.9.9-mac-arm64.zip', browser_download_url: REL + 'buddy-hud-9.9.9-mac-arm64.zip', digest: 'sha256:' + SHA, size: 5 },
    { name: 'buddy-hud-9.9.9-mac-arm64.zip.sig', browser_download_url: REL + 'buddy-hud-9.9.9-mac-arm64.zip.sig' },
    { name: 'buddy-hud-9.9.9-mac-x64.zip', browser_download_url: REL + 'buddy-hud-9.9.9-mac-x64.zip' },
  ];
  assert.deepStrictEqual(mu.pickZip(assets, 'arm64'), { url: REL + 'buddy-hud-9.9.9-mac-arm64.zip', sha256: SHA, size: 5, name: 'buddy-hud-9.9.9-mac-arm64.zip', sigUrl: REL + 'buddy-hud-9.9.9-mac-arm64.zip.sig' });
  assert.strictEqual(mu.pickZip(assets.filter((x) => !x.name.endsWith('.sig')), 'arm64'), null, 'unsigned release -> no auto update');

  // signatures: only our private key's signature over name:sha256 verifies
  assert.ok(mu.verifySignature('f.zip:' + SHA, sign('f.zip', SHA), PUB));
  assert.ok(!mu.verifySignature('f.zip:' + SHA, sign('g.zip', SHA), PUB), 'signature is bound to the file name');
  assert.ok(!mu.verifySignature('f.zip:' + 'b'.repeat(64), sign('f.zip', SHA), PUB), 'signature is bound to the content hash');
  assert.ok(!mu.verifySignature('f.zip:' + SHA, 'AAAA', PUB) && !mu.verifySignature('f.zip:' + SHA, '', PUB));
  assert.ok(!mu.verifySignature('f.zip:' + SHA, sign('f.zip', SHA)), 'the embedded public key does not accept a foreign signature');
  assert.strictEqual(mu.pickZip(assets, 'x64'), null, 'no digest -> no auto update');
  assert.strictEqual(mu.pickZip([{ ...assets[1], browser_download_url: 'https://evil.example/buddy-hud-9.9.9-mac-arm64.zip' }], 'arm64'), null);

  // bundleOf / blocker
  assert.strictEqual(mu.bundleOf('/Applications/Buddy HUD.app/Contents/MacOS/Buddy HUD'), '/Applications/Buddy HUD.app');
  assert.strictEqual(mu.bundleOf('/usr/local/bin/electron'), null);
  assert.ok(/not running/.test(mu.blocker(null)));
  assert.ok(/quarantined/.test(mu.blocker('/private/var/folders/x/AppTranslocation/ABC/d/Buddy HUD.app')));
  assert.ok(/disk image/.test(mu.blocker('/Volumes/Buddy HUD 9.9.9/Buddy HUD.app')));
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'buddy-macupd-'));
  assert.ok(/no write access/.test(mu.blocker(path.join(dir, 'missing', 'X.app'))));
  fs.mkdirSync(path.join(dir, 'Ok.app'));
  assert.strictEqual(mu.blocker(path.join(dir, 'Ok.app')), '');

  // download: hashes the stream, follows redirects, refuses non-GitHub hosts and plain http
  const files = {};
  const srv = http.createServer((q, r) => {
    if (q.url === '/hop') { r.writeHead(302, { Location: '/file' }); return r.end(); }
    const b = files[q.url]; if (!b) { r.writeHead(404); return r.end(); }
    r.writeHead(200, { 'Content-Length': b.length }); r.end(b);
  }).listen(0, '127.0.0.1');
  await new Promise((r) => srv.once('listening', r));
  const base = `http://127.0.0.1:${srv.address().port}`;
  files['/file'] = Buffer.from('hello update');
  const progress = [];
  const sha = await mu.download(base + '/hop', path.join(dir, 'd.bin'), (f) => progress.push(f), { allowHttp: true });
  assert.strictEqual(sha, crypto.createHash('sha256').update('hello update').digest('hex'));
  assert.strictEqual(fs.readFileSync(path.join(dir, 'd.bin'), 'utf8'), 'hello update');
  assert.strictEqual(progress[progress.length - 1], 1);
  await assert.rejects(mu.download(base + '/file', path.join(dir, 'x'), null), /refusing/);
  await assert.rejects(mu.download('https://evil.example/x.zip', path.join(dir, 'x'), null), /refusing/);
  await assert.rejects(mu.download(base + '/nope', path.join(dir, 'x'), null, { allowHttp: true }), /HTTP 404/);

  if (process.platform === 'darwin') {
    // a fake app bundle, ad-hoc signed and zipped like electron-builder's mac zip
    const mkApp = (where, version) => {
      const app = path.join(where, 'Buddy HUD.app');
      fs.mkdirSync(path.join(app, 'Contents', 'MacOS'), { recursive: true });
      fs.writeFileSync(path.join(app, 'Contents', 'Info.plist'), `<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0"><dict><key>CFBundleIdentifier</key><string>${mu.BUNDLE_ID}</string><key>CFBundleShortVersionString</key><string>${version}</string><key>CFBundleExecutable</key><string>Buddy HUD</string></dict></plist>\n`);
      fs.writeFileSync(path.join(app, 'Contents', 'MacOS', 'Buddy HUD'), '#!/bin/sh\nexit 0\n', { mode: 0o755 });
      execFileSync('/usr/bin/codesign', ['-s', '-', '--force', app]);
      return app;
    };
    const src = path.join(dir, 'src'); fs.mkdirSync(src);
    const zipFile = path.join(dir, 'u.zip');
    execFileSync('/usr/bin/ditto', ['-c', '-k', '--keepParent', mkApp(src, '9.9.9'), zipFile]);
    files['/u.zip'] = fs.readFileSync(zipFile);
    const zsha = crypto.createHash('sha256').update(files['/u.zip']).digest('hex');
    const staging = path.join(dir, 'staging');
    const NAME = 'buddy-hud-9.9.9-mac-arm64.zip';
    files['/u.sig'] = Buffer.from(sign(NAME, zsha));
    files['/bad.sig'] = Buffer.from(sign(NAME, SHA));
    const Z = (extra = {}) => ({ url: base + '/u.zip', sha256: zsha, name: NAME, sigUrl: base + '/u.sig', ...extra });

    // wrong checksum or wrong version: nothing staged
    await assert.rejects(mu.prepare({ zip: Z({ sha256: SHA }), version: '9.9.9', stagingDir: staging, downloadOpts: { allowHttp: true }, pubKey: PUB }), /checksum mismatch/);
    await assert.rejects(mu.prepare({ zip: Z(), version: '9.9.8', stagingDir: staging, downloadOpts: { allowHttp: true }, pubKey: PUB }), /version mismatch/);

    await assert.rejects(mu.prepare({ zip: Z({ sigUrl: base + '/bad.sig' }), version: '9.9.9', stagingDir: staging, downloadOpts: { allowHttp: true }, pubKey: PUB }), /signature check failed/);
    await assert.rejects(mu.prepare({ zip: Z(), version: '9.9.9', stagingDir: staging, downloadOpts: { allowHttp: true } }), /signature check failed/); // default key is the real one, not the test key
    const staged = await mu.prepare({ zip: Z(), version: '9.9.9', stagingDir: staging, downloadOpts: { allowHttp: true }, pubKey: PUB });
    assert.ok(fs.existsSync(path.join(staged, 'Contents', 'Info.plist')));

    // swap: waits for the "app" process to exit, replaces the installed copy, cleans up staging
    const inst = path.join(dir, 'Applications'); fs.mkdirSync(inst);
    const target = mkApp(inst, '1.0.0');
    const proc = require('child_process').spawn('/bin/sleep', ['1']);
    mu.install({ staged, target, pid: proc.pid, relaunch: false, stagingDir: staging });
    const ver = () => { try { return execFileSync('/usr/bin/plutil', ['-extract', 'CFBundleShortVersionString', 'raw', path.join(target, 'Contents', 'Info.plist')]).toString().trim(); } catch { return ''; } };
    await sleep(300);
    assert.strictEqual(ver(), '1.0.0', 'must not swap while the app is still running');
    for (let i = 0; i < 50 && (ver() !== '9.9.9' || fs.existsSync(staging)); i++) await sleep(200);
    assert.strictEqual(ver(), '9.9.9');
    assert.ok(!fs.existsSync(target + '.updating'), 'backup removed');
    assert.ok(!fs.existsSync(staging), 'staging removed');
    execFileSync('/usr/bin/codesign', ['--verify', '--deep', '--strict', target]);
  }

  srv.close();
  fs.rmSync(dir, { recursive: true, force: true });
  console.log('macupdate: all tests passed');
})().catch((e) => { console.error(e); process.exit(1); });

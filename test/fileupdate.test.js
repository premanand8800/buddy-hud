const assert = require('assert');
const crypto = require('crypto');
const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const fu = require('../lib/fileupdate');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const REL = 'https://github.com/premanand8800/buddy-hud/releases/download/v9.9.9/';
const SHA = 'a'.repeat(64);
const kp = crypto.generateKeyPairSync('ed25519');
const PUB = kp.publicKey.export({ type: 'spki', format: 'pem' });
const sign = (name, sha) => crypto.sign(null, Buffer.from(`${name}:${sha}`), kp.privateKey).toString('base64');

(async () => {
  // asset picking: right file per platform, digest + signature asset required, repo URLs only
  const W = 'buddy-hud-9.9.9-win-setup.exe', L = 'buddy-hud-9.9.9-linux-x86_64.AppImage';
  const assets = [
    { name: W, browser_download_url: REL + W, digest: 'sha256:' + SHA, size: 7 }, { name: W + '.sig', browser_download_url: REL + W + '.sig' },
    { name: 'buddy-hud-9.9.9-win-portable.exe', browser_download_url: REL + 'p.exe', digest: 'sha256:' + SHA },
    { name: L, browser_download_url: REL + L, digest: 'sha256:' + SHA }, { name: L + '.sig', browser_download_url: REL + L + '.sig' },
    { name: 'buddy-hud-9.9.9-linux-amd64.deb', browser_download_url: REL + 'x.deb', digest: 'sha256:' + SHA },
  ];
  assert.strictEqual(fu.pickAsset(assets, 'win32').name, W);
  assert.strictEqual(fu.pickAsset(assets, 'linux', 'x64').name, L);
  assert.strictEqual(fu.pickAsset(assets, 'darwin'), null);
  assert.strictEqual(fu.pickAsset(assets.filter((x) => !x.name.endsWith('.sig')), 'win32'), null, 'unsigned -> manual');
  assert.strictEqual(fu.pickAsset(assets.map((x) => (x.name === W ? { ...x, digest: undefined } : x)), 'win32'), null, 'no digest -> manual');
  assert.strictEqual(fu.pickAsset(assets.map((x) => (x.name === L ? { ...x, browser_download_url: 'https://evil.example/' + L } : x)), 'linux', 'x64'), null);

  // blockers
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'buddy-fu-'));
  assert.ok(/AppImage/.test(fu.blocker({ platform: 'linux', env: {} })));
  const img = path.join(dir, 'Buddy.AppImage'); fs.writeFileSync(img, 'old');
  assert.strictEqual(fu.blocker({ platform: 'linux', env: { APPIMAGE: img } }), '');
  assert.ok(/no write access/.test(fu.blocker({ platform: 'linux', env: { APPIMAGE: path.join(dir, 'missing', 'x.AppImage') } })));

  // prepare: signed asset is staged; bad signature, wrong hash, wrong version are all refused
  const files = {};
  const srv = http.createServer((q, r) => { const b = files[q.url]; if (!b) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'Content-Length': b.length }); r.end(b); }).listen(0, '127.0.0.1');
  await new Promise((r) => srv.once('listening', r));
  const base = `http://127.0.0.1:${srv.address().port}`;
  files['/' + L] = Buffer.from('#!/bin/sh\necho new\n');
  const lsha = crypto.createHash('sha256').update(files['/' + L]).digest('hex');
  files['/good.sig'] = Buffer.from(sign(L, lsha)); files['/bad.sig'] = Buffer.from(sign(L, SHA));
  const Z = (extra = {}) => ({ url: base + '/' + L, sha256: lsha, name: L, sigUrl: base + '/good.sig', ...extra });
  const o = (extra = {}) => ({ version: '9.9.9', stagingDir: path.join(dir, 'staging'), downloadOpts: { allowHttp: true }, pubKey: PUB, ...extra });
  await assert.rejects(fu.prepare({ zip: Z({ sha256: SHA }), ...o() }), /checksum mismatch/);
  await assert.rejects(fu.prepare({ zip: Z({ sigUrl: base + '/bad.sig' }), ...o() }), /signature check failed/);
  await assert.rejects(fu.prepare({ zip: Z(), ...o({ pubKey: undefined }) }), /signature check failed/); // real key, not the test key
  await assert.rejects(fu.prepare({ zip: Z(), ...o({ version: '9.9.8' }) }), /does not match the release version/);
  const staged = await fu.prepare({ zip: Z(), ...o() });
  assert.strictEqual(fs.readFileSync(staged, 'utf8'), '#!/bin/sh\necho new\n');

  // windows: the detached command waits for our pid, then runs the installer silently; quotes in paths are escaped
  const wc = fu.windowsCommand({ staged: "C:\\Temp\\it's\\setup.exe", pid: 4242, relaunch: true });
  assert.strictEqual(wc.cmd, 'powershell.exe');
  const script = wc.args[wc.args.length - 1];
  assert.ok(script.includes('$p=4242') && script.includes("'C:\\Temp\\it''s\\setup.exe'") && script.includes("'--updated','/S','--force-run'"), script);
  assert.ok(!fu.windowsCommand({ staged: 'x', pid: 1, relaunch: false }).args.at(-1).includes('--force-run'));

  // linux: replaces the AppImage only after the old process exits, keeps the path, cleans up
  if (process.platform !== 'win32') {
    const proc = spawn('/bin/sleep', ['1']);
    fu.installLinux({ staged, target: img, pid: proc.pid, relaunch: false, stagingDir: path.join(dir, 'staging') });
    await sleep(300);
    assert.strictEqual(fs.readFileSync(img, 'utf8'), 'old', 'must not swap while the app is still running');
    for (let i = 0; i < 50 && (fs.readFileSync(img, 'utf8') === 'old' || fs.existsSync(path.join(dir, 'staging'))); i++) await sleep(200);
    assert.strictEqual(fs.readFileSync(img, 'utf8'), '#!/bin/sh\necho new\n');
    assert.ok(fs.statSync(img).mode & 0o100, 'executable');
    assert.ok(!fs.existsSync(img + '.new') && !fs.existsSync(path.join(dir, 'staging')));
  }
  srv.close(); fs.rmSync(dir, { recursive: true, force: true });
  console.log('fileupdate: all tests passed');
})().catch((e) => { console.error(e); process.exit(1); });

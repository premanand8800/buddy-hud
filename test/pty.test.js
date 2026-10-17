// buddy-claude helper: text sent to its socket is typed into the child like keystrokes (Linux/macOS only)
const assert = require('assert');
const fs = require('fs');
const net = require('net');
const os = require('os');
const path = require('path');
const { spawn, spawnSync } = require('child_process');

if (process.platform === 'win32') { console.log('pty: skipped on Windows'); process.exit(0); }
if (spawnSync('python3', ['--version']).status !== 0) { console.log('pty: skipped (no python3)'); process.exit(0); }

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'buddy-pty-'));
const child = spawn('python3', [path.join(__dirname, '..', 'bin', 'buddy-claude')], { env: { ...process.env, HOME: home, BUDDY_CLAUDE_BIN: '/bin/cat' }, stdio: ['pipe', 'pipe', 'pipe'] });
let out = '';
child.stdout.on('data', (d) => (out += d));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  let failed = false;
  try {
    const dir = path.join(home, '.buddy-hud', 'pty');
    let sock;
    for (let i = 0; i < 50 && !sock; i++) { await sleep(100); try { sock = fs.readdirSync(dir).find((f) => f.endsWith('.sock')); } catch {} }
    assert.ok(sock, 'helper creates its socket');
    assert.strictEqual(fs.statSync(path.join(dir, sock)).mode & 0o777, 0o600, 'socket is owner-only');
    const c = net.createConnection(path.join(dir, sock));
    await new Promise((r) => c.once('connect', r));
    c.write('hello from the buddy\r');
    for (let i = 0; i < 40 && !out.includes('hello from the buddy'); i++) await sleep(100);
    assert.ok(out.includes('hello from the buddy'), 'text sent to the socket is typed into the child (cat echoes it): ' + JSON.stringify(out));
    // typing on the real terminal still works too
    child.stdin.write('direct typing\r');
    for (let i = 0; i < 40 && !out.includes('direct typing'); i++) await sleep(100);
    assert.ok(out.includes('direct typing'), 'normal input still passes through');
    c.destroy();
    console.log('pty: all tests passed');
  } catch (e) { failed = true; console.error('pty FAILED:', e.message); }
  finally { child.kill('SIGKILL'); try { fs.rmSync(home, { recursive: true, force: true }); } catch {} process.exit(failed ? 1 : 0); }
})();

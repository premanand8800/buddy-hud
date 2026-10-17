// End-to-end: launches the real app (hidden, temp HOME, test port), feeds it hook events
// the way Claude Code does, and asserts on the resulting state. Linux CI: xvfb-run -a npm run test:e2e
const assert = require('assert');
const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');
const { spawn, exec } = require('child_process');

const PORT = 47811;
const home = fs.mkdtempSync(path.join(os.tmpdir(), 'buddy-e2e-'));
fs.mkdirSync(path.join(home, 'AppData', 'Roaming'), { recursive: true }); // Windows: Electron resolves userData under USERPROFILE
const env = { ...process.env, HOME: home, USERPROFILE: home, HUD_TEST: '1', HUD_PHONE: '1', BUDDY_PHONE_PORT: '47813', BUDDY_PORT: String(PORT), XDG_SESSION_TYPE: 'x11' };
process.env.HOME = home; process.env.USERPROFILE = home; process.env.BUDDY_PORT = String(PORT);
const { run } = require('../install-hooks');
run(false); // real installer, into the temp HOME
fs.mkdirSync(path.join(home, '.buddy-hud'), { recursive: true });
fs.writeFileSync(path.join(home, '.buddy-hud', 'settings.json'), JSON.stringify({ phone: { enabled: true, token: 'tok123' }, replyMode: true }));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const req = (method, url, body, headers = {}) => new Promise((resolve, reject) => {
  const r = http.request({ host: '127.0.0.1', port: PORT, path: url, method, headers, agent: false }, (res) => {
    let out = ''; res.on('data', (d) => (out += d)); res.on('end', () => resolve({ status: res.statusCode, body: out }));
  });
  r.on('error', (e) => reject(Object.assign(e, { where: method + ' ' + url + ' len=' + (body ? body.length : 0) }))); if (body) r.write(body); r.end();
});
const post = (ev, headers) => req('POST', '/hook', JSON.stringify(ev), headers);
const state = async () => JSON.parse((await req('GET', '/__state')).body);
const waitFor = async (fn, what, ms = 6000) => { const t = Date.now(); for (;;) { const v = await fn(); if (v) return v; if (Date.now() - t > ms) throw new Error('timeout waiting for ' + what); await sleep(80); } };

(async () => {
  const electron = require('electron');
  const args = ['.', '--no-sandbox'];
  const app = spawn(electron, args, { cwd: path.join(__dirname, '..'), env, stdio: 'ignore' });
  let failed = false;
  try {
    await waitFor(async () => { try { return (await req('GET', '/__state')).status === 200; } catch { return false; } }, 'server start', 20000);

    let st = await state();
    assert.strictEqual(st.health.state, 'waiting', 'health before any event: ' + JSON.stringify(st.health));
    assert.ok(st.hooksInstalled);

    // a real curl run of the installed hook command, retargeted at the test port
    const cfg = JSON.parse(fs.readFileSync(path.join(home, '.claude', 'settings.json'), 'utf8'));
    const cmd = cfg.hooks.UserPromptSubmit[0].hooks[0].command;
    const payload = JSON.stringify({ session_id: 's1', cwd: '/tmp/proj', hook_event_name: 'UserPromptSubmit', prompt: 'fix the bug' });
    await new Promise((resolve, reject) => { const c = exec(cmd, (e) => (e ? reject(e) : resolve())); c.stdin.end(payload); });
    st = await waitFor(async () => { const s = await state(); return s.sessions.length && s; }, 'session from real curl hook');
    assert.strictEqual(st.sessions[0].status, 'thinking');
    assert.strictEqual(st.sessions[0].project, 'proj');

    // edit with a real file -> diff with line number, files tracked
    const f = path.join(home, 'a.txt'); fs.writeFileSync(f, 'one\ntwo\nthree\n');
    await post({ session_id: 's1', hook_event_name: 'PreToolUse', tool_name: 'Edit', tool_use_id: 't1', tool_input: { file_path: f, old_string: 'three', new_string: '3\n4' } });
    st = await state();
    const s1 = st.sessions[0];
    assert.strictEqual(s1.status, 'tool');
    assert.strictEqual(s1.tool.diff.hunks[0].start, 3, 'diff starts at line 3');
    assert.deepStrictEqual(s1.files.edited, [f]);
    await post({ session_id: 's1', hook_event_name: 'PreToolUse', tool_name: 'Read', tool_use_id: 't2', tool_input: { file_path: '/x/y.ts' } });
    await post({ session_id: 's1', hook_event_name: 'PostToolUse', tool_name: 'Read', tool_use_id: 't2', tool_response: { is_error: true } });
    st = await state();
    assert.deepStrictEqual(st.sessions[0].files.read, ['/x/y.ts']);
    assert.strictEqual(st.sessions[0].turn.errors, 1);

    // stop: last message + model + usage come from the transcript
    const tr = path.join(home, 't.jsonl');
    fs.writeFileSync(tr, JSON.stringify({ type: 'assistant', message: { id: 'm1', model: 'claude-opus-5-5', content: [{ type: 'text', text: '**Done** with `x`' }], usage: { input_tokens: 10, cache_read_input_tokens: 90000, output_tokens: 50 } } }) + '\n');
    await post({ session_id: 's1', hook_event_name: 'Stop', transcript_path: tr });
    st = await state();
    assert.strictEqual(st.sessions[0].status, 'done');
    assert.ok(st.sessions[0].lastMsg.includes('**Done**'));
    assert.ok(/opus/.test(st.sessions[0].model));
    assert.ok(st.sessions[0].ctx.used >= 90000);
    assert.strictEqual(st.sessions[0].ctx.max, 200000, 'standard window auto-detected');
    assert.strictEqual(st.sessions[0].summary.edited.length, 1);
    assert.strictEqual(st.health.state, 'ok');

    // hold mode is on (settings) but the chat panel is closed, so the Stop hook must return at once: no "running stop hooks" in the terminal
    const t0 = Date.now();
    const stopRes = await post({ session_id: 's1', hook_event_name: 'Stop', transcript_path: tr });
    assert.strictEqual(stopRes.body, '{}'); assert.ok(Date.now() - t0 < 1500, 'Stop hook must not be held while the chat is not open');

    // permission request is held, then cleaned up when Claude Code goes away
    const held = http.request({ host: '127.0.0.1', port: PORT, path: '/hook', method: 'POST' }); held.on('error', () => {});
    held.end(JSON.stringify({ session_id: 's1', hook_event_name: 'PermissionRequest', tool_name: 'Bash', tool_input: { command: 'rm -rf x' } }));
    st = await waitFor(async () => { const s = await state(); return s.perms.length === 1 && s; }, 'permission pending');
    assert.strictEqual(st.perms[0].tool, 'Bash');
    held.destroy();
    await waitFor(async () => (await state()).perms.length === 0, 'permission cleared after disconnect');

    // questions are not yes/no: answered immediately, terminal handles them
    const q = await post({ session_id: 's1', hook_event_name: 'PermissionRequest', tool_name: 'AskUserQuestion', tool_input: { questions: [{ question: 'Which DB?' }] } });
    assert.strictEqual(q.body, '{}');
    st = await state();
    assert.strictEqual(st.sessions[0].status, 'waiting');
    assert.ok(st.sessions[0].note.includes('Which DB?'));

    // hostile / broken input never crashes or creates junk
    assert.strictEqual((await req('POST', '/hook', 'not json')).body, '{}');
    assert.strictEqual((await req('POST', '/hook', '')).body, '{}');
    assert.strictEqual((await req('POST', '/hook', '{}', { Origin: 'http://evil.example' })).status, 403);
    await post({ session_id: '__selftest', hook_event_name: 'Notification', message: 'x' });
    st = await state();
    assert.strictEqual(st.sessions.length, 1, 'self-test must not create a session');
    const big = await req('POST', '/hook', 'x'.repeat(6e6)).catch(() => ({ status: 'closed' }));
    assert.ok(big.status === 413 || big.status === 'closed');
    assert.strictEqual((await state()).sessions.length, 1, 'app still alive after oversized body');

    // regressions found by the audit: null bodies, null tool_input, permission notifications
    assert.strictEqual((await req('POST', '/hook', 'null')).body, '{}');
    assert.strictEqual((await req('POST', '/hook', '[1,2]')).body, '{}');
    await post({ session_id: 's1', hook_event_name: 'PreToolUse', tool_name: 'Edit', tool_input: null });
    await post({ session_id: 's1', hook_event_name: 'Notification', notification_type: 'permission_prompt', message: 'Claude needs your permission to use Bash' });
    assert.strictEqual((await state()).sessions[0].status, 'permission', 'permission notification must not offer a reply box');
    await post({ session_id: 's1', hook_event_name: 'Notification', message: 'Claude is waiting for your input' });
    assert.strictEqual((await state()).sessions[0].status, 'waiting');

    // context window is auto-detected: [1m] model setting or usage above 200k means 1M, otherwise 200k
    const mkTr = (name, used) => { const p = path.join(home, name); fs.writeFileSync(p, JSON.stringify({ type: 'assistant', message: { id: name, model: 'claude-sonnet-5-5', content: [{ type: 'text', text: 'x' }], usage: { input_tokens: 10, cache_read_input_tokens: used, output_tokens: 5 } } }) + '\n'); return p; };
    await post({ session_id: 'c1', cwd: '/tmp/c1', hook_event_name: 'SessionStart', model: 'claude-sonnet-5-5[1m]', transcript_path: mkTr('c1.jsonl', 50000) });
    await post({ session_id: 'c2', cwd: '/tmp/c2', hook_event_name: 'SessionStart', model: 'claude-sonnet-5-5', transcript_path: mkTr('c2.jsonl', 300000) });
    await post({ session_id: 'c3', cwd: '/tmp/c3', hook_event_name: 'SessionStart', model: 'claude-sonnet-5-5', transcript_path: mkTr('c3.jsonl', 50000) });
    for (const id of ['c1', 'c2', 'c3']) await post({ session_id: id, hook_event_name: 'Stop', transcript_path: path.join(home, id + '.jsonl') });
    st = await state();
    const ctxOf = (id) => st.sessions.find((x) => x.id === id).ctx;
    assert.strictEqual(ctxOf('c1').max, 1000000, '[1m] on the model string means 1M: ' + ctxOf('c1').why);
    assert.strictEqual(ctxOf('c2').max, 1000000, 'usage above 200k proves 1M');
    assert.strictEqual(ctxOf('c3').max, 200000, 'no signal means the standard 200k window');
    for (const id of ['c1', 'c2', 'c3']) await post({ session_id: id, hook_event_name: 'SessionEnd' });

    // sessions that started before the hooks (or the app): discovered from recent transcripts, shown with their live chat
    const projDir = path.join(home, '.claude', 'projects', '-tmp-found'); fs.mkdirSync(projDir, { recursive: true });
    const tfile = path.join(projDir, 'found-1.jsonl');
    const row = (o) => JSON.stringify({ timestamp: new Date().toISOString(), cwd: '/tmp/found-proj', sessionId: 'found-1', ...o }) + '\n';
    fs.writeFileSync(tfile, row({ type: 'user', uuid: 'f1', message: { role: 'user', content: 'hello from another terminal' } }) + row({ type: 'assistant', uuid: 'f2', message: { id: 'fm1', role: 'assistant', model: 'claude-sonnet-5-5', content: [{ type: 'text', text: 'Hi! **Ready.**' }], usage: { input_tokens: 5, output_tokens: 3 } } }));
    st = await waitFor(async () => { const s = await state(); return s.sessions.some((x) => x.id === 'found-1') && s; }, 'discovered session (up to ~12 s)', 16000);
    const fs1 = st.sessions.find((x) => x.id === 'found-1');
    assert.strictEqual(fs1.project, 'found-proj'); assert.ok(fs1.discovered);
    await req('POST', '/__select/found-1');
    st = await state();
    assert.strictEqual(st.chat.id, 'found-1');
    assert.deepStrictEqual(st.chat.msgs.map((x) => x.role), ['user', 'assistant']);
    assert.ok(st.chat.msgs[1].text.includes('**Ready.**'));
    fs.appendFileSync(tfile, row({ type: 'user', uuid: 'f3', message: { role: 'user', content: 'a second question' } }));
    st = await state(); assert.strictEqual(st.chat.msgs.length, 3, 'chat follows the transcript live');
    const phc = (url, body) => new Promise((resolve, reject) => { const r = http.request({ host: '127.0.0.1', port: 47813, path: url, method: 'POST', agent: false, headers: { 'Content-Type': 'application/json' } }, (res) => { let o = ''; res.on('data', (d) => (o += d)); res.on('end', () => resolve(o)); }); r.on('error', reject); r.end(body); });
    await waitFor(async () => { try { await phc('/api/reply?t=tok123', JSON.stringify({ sessionId: 'found-1', text: 'typed from the buddy' })); return true; } catch { return false; } }, 'phone reply');
    st = await state();
    assert.ok(st.chat.pending.some((p) => p.text === 'typed from the buddy' && p.mode === 'queued'), 'undelivered message shows as pending/queued');
    fs.appendFileSync(tfile, row({ type: 'user', uuid: 'f4', message: { role: 'user', content: 'typed from the buddy' } }));
    st = await state(); assert.strictEqual(st.chat.pending.length, 0, 'pending disappears once it appears in the transcript');
    await req('POST', '/__select/s1');
    await post({ session_id: 'found-1', hook_event_name: 'SessionEnd' });

    // issue #1: one permission prompt = one alert; idle pings are quiet; real questions alert once per 30 s
    await post({ session_id: 'n1', cwd: '/tmp/n', hook_event_name: 'UserPromptSubmit', prompt: 'x' });
    const askCount = async () => (await state()).alertLog.filter((a) => a.startsWith('ask:')).length;
    const base0 = await askCount();
    const heldP = http.request({ host: '127.0.0.1', port: PORT, path: '/hook', method: 'POST', agent: false }); heldP.on('error', () => {});
    heldP.end(JSON.stringify({ session_id: 'n1', hook_event_name: 'PermissionRequest', tool_name: 'Bash', tool_input: { command: 'ls' } }));
    await waitFor(async () => (await state()).perms.length > 0, 'n1 permission');
    await post({ session_id: 'n1', hook_event_name: 'Notification', notification_type: 'permission_prompt', message: 'Claude needs your permission to use Bash' });
    assert.strictEqual(await askCount(), base0 + 1, 'permission prompt must alert exactly once');
    heldP.destroy();
    await waitFor(async () => (await state()).perms.length === 0, 'n1 permission cleared');
    for (let i = 0; i < 3; i++) await post({ session_id: 'n1', hook_event_name: 'Notification', notification_type: 'idle_prompt', message: 'Claude is waiting for your input' });
    assert.strictEqual(await askCount(), base0 + 1, 'idle pings must not toast');
    await post({ session_id: 'n1', hook_event_name: 'Notification', message: 'Claude has a question about the database' });
    await post({ session_id: 'n1', hook_event_name: 'Notification', message: 'Claude has another question' });
    assert.strictEqual(await askCount(), base0 + 1, 'alerts for one session are rate limited (30 s), so no second toast right after the permission one');
    await post({ session_id: 'n2', cwd: '/tmp/n2', hook_event_name: 'Notification', message: 'Claude has a question about the database' });
    assert.strictEqual(await askCount(), base0 + 2, 'a different session still alerts');
    await post({ session_id: 'n2', hook_event_name: 'SessionEnd' });
    await post({ session_id: 'n1', hook_event_name: 'SessionEnd' });

    // phone access: token required, state readable, Allow/Deny works and releases the held hook
    const ph = (method, url, body) => new Promise((resolve, reject) => {
      const r = http.request({ host: '127.0.0.1', port: 47813, path: url, method, agent: false, headers: { 'Content-Type': 'application/json' } }, (res) => { let o = ''; res.on('data', (d) => (o += d)); res.on('end', () => resolve({ status: res.statusCode, body: o })); });
      r.on('error', reject); if (body) r.write(body); r.end();
    });
    await waitFor(async () => { try { return (await ph('GET', '/?t=tok123')).status === 200; } catch { return false; } }, 'phone server');
    assert.strictEqual((await ph('GET', '/?t=nope')).status, 403);
    assert.strictEqual((await ph('GET', '/api/state')).status, 403);
    const heldAllow = new Promise((resolve) => { const r = http.request({ host: '127.0.0.1', port: PORT, path: '/hook', method: 'POST', agent: false }, (res) => { let o = ''; res.on('data', (d) => (o += d)); res.on('end', () => resolve(o)); }); r.on('error', () => resolve('ERR')); r.end(JSON.stringify({ session_id: 's1', hook_event_name: 'PermissionRequest', tool_name: 'Bash', tool_input: { command: 'ls' } })); });
    const pend = await waitFor(async () => { const s = JSON.parse((await ph('GET', '/api/state?t=tok123')).body); return s.perms.length && s; }, 'permission visible on phone');
    assert.strictEqual(pend.perms[0].tool, 'Bash');
    await ph('POST', '/api/decide?t=tok123', JSON.stringify({ id: pend.perms[0].id, behavior: 'allow' }));
    assert.ok(JSON.parse(await heldAllow).hookSpecificOutput.decision.behavior === 'allow', 'phone Allow reaches the waiting hook');
    assert.strictEqual((await ph('POST', '/api/decide?t=nope', JSON.stringify({ id: 'x', behavior: 'allow' }))).status, 403);

    // session end removes it
    await post({ session_id: 's1', hook_event_name: 'SessionEnd' });
    assert.strictEqual((await state()).sessions.length, 0);
    console.log('e2e: all checks passed');
  } catch (e) {
    failed = true; console.error('e2e FAILED:', e.message, e.where || '');
  } finally {
    const exited = new Promise((r) => app.once('exit', r));
    app.kill('SIGKILL'); await exited;
    try { fs.rmSync(home, { recursive: true, force: true, maxRetries: 10, retryDelay: 200 }); } catch {} // Windows: helper processes release files late
    process.exit(failed ? 1 : 0);
  }
})();

const { execFile } = require('child_process');
const { app, BrowserWindow, ipcMain, screen, Notification, Menu, Tray, nativeImage, dialog, shell } = require('electron');
const crypto = require('crypto');
const usageLib = require('./lib/usage');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = +process.env.BUDDY_PORT || 47800;
const PHONE_PORT = +process.env.BUDDY_PHONE_PORT || 47801;
const HOOK_URL = `127.0.0.1:${PORT}/hook`;
const HOOK_EVENTS = ['SessionStart', 'SessionEnd', 'UserPromptSubmit', 'PreToolUse', 'PostToolUse', 'Notification', 'SubagentStop', 'PermissionRequest', 'Stop'];
const TEST = !!process.env.HUD_TEST;
const SETTINGS_FILE = path.join(os.homedir(), '.buddy-hud', 'settings.json');
const isLinux = process.platform === 'linux';
const isMac = process.platform === 'darwin';

// Wayland compositors ignore always-on-top for native windows, so run through XWayland on Linux.
// The ozone backend is chosen before JS runs, so re-launch once with the flag.
if (isLinux && process.env.XDG_SESSION_TYPE === 'wayland' && !process.argv.some((a) => a.startsWith('--ozone-platform'))) {
  app.relaunch({ args: [...process.argv.slice(1), '--ozone-platform=x11'] });
  app.exit(0);
}
const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  // usually "already running"; can also mean userData could not be resolved (e.g. an empty USERPROFILE on Windows)
  console.error('Buddy HUD: single-instance lock not acquired (another copy running, or userData unavailable). Exiting.');
  app.exit(0);
}

// ---------- state ----------
const sessions = new Map(); // id -> session
const pendingPerms = new Map(); // id -> { res, sessionId, tool, summary, diff }
const stopHolds = new Map(); // sessionId -> res
const queued = new Map(); // sessionId -> [text]
const DEFAULTS = { alwaysShow: true, walk: true, phone: { enabled: false, token: '' }, replyMode: false, ctxMax: 200000, scale: 1, privacy: false, pos: null, skin: 'bot', alerts: { notify: true, sound: true, done: true, ask: true, stuck: true, dnd: false } };
let settings = { ...DEFAULTS };
try { const saved = JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf8')); settings = { ...DEFAULTS, ...saved, alerts: { ...DEFAULTS.alerts, ...(saved.alerts || {}) } }; } catch {}
const DAILY_FILE = path.join(os.homedir(), '.buddy-hud', 'daily.json');
let prices = {};
try { prices = JSON.parse(fs.readFileSync(path.join(os.homedir(), '.buddy-hud', 'prices.json'), 'utf8')); } catch {}
let daily = { day: '', ids: {} };
try { daily = JSON.parse(fs.readFileSync(DAILY_FILE, 'utf8')); } catch {}
const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
let dailyTimer;
function updateDaily(s) {
  const key = dayKey();
  if (daily.day !== key) daily = { day: key, ids: {} };
  for (const [id, v] of usageLib.todayEntries(s, key, prices)) daily.ids[id] = v;
  clearTimeout(dailyTimer);
  dailyTimer = setTimeout(() => { try { fs.mkdirSync(path.dirname(DAILY_FILE), { recursive: true }); fs.writeFileSync(DAILY_FILE, JSON.stringify(daily)); } catch {} }, 3000);
}
function dailyTotals() {
  if (daily.day !== dayKey()) return { in: 0, out: 0, cr: 0, cw: 0, cost: 0, partial: false };
  const t = { in: 0, out: 0, cr: 0, cw: 0, cost: 0, partial: false };
  for (const v of Object.values(daily.ids)) { t.in += v.in; t.out += v.out; t.cr += v.cr; t.cw += v.cw; if (v.cost === null) t.partial = true; else t.cost += v.cost; }
  return t;
}
let eventCount = 0, lastEventAt = 0, selfTestSeen = 0, selfTest = null;
let win, hideTimer, seq = 0, pinned = false, userHidden = false, hooksCache = { t: 0, v: false };

const saveSettings = () => {
  try {
    fs.mkdirSync(path.dirname(SETTINGS_FILE), { recursive: true });
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings));
  } catch {}
};

// Machines whose GPU process keeps crashing fall back to (stable, cheaper) software rendering next launch
// Linux: transparent always-on-top windows are cheaper and more stable without GPU compositing (measured ~2x less CPU).
const useGpu = settings.gpu === 'on' || (settings.gpu !== 'off' && !isLinux);
if (!useGpu || settings.gpuBroken || process.env.BUDDY_NO_GPU) {
  app.disableHardwareAcceleration();
  app.commandLine.appendSwitch('enable-unsafe-swiftshader'); // keep WebGL (3D look) working in software
}
let gpuCrashes = 0;
app.on('child-process-gone', (_e, d) => {
  if (d.type !== 'GPU' || settings.gpuBroken) return;
  if (++gpuCrashes >= 2) { settings.gpuBroken = true; saveSettings(); app.relaunch(); app.exit(0); }
});

const TOOL_EMOJI = {
  Read: '📖', Edit: '✏️', MultiEdit: '✏️', Write: '📝', NotebookEdit: '📓', Bash: '💻',
  Grep: '🔍', Glob: '🗂️', WebFetch: '🌐', WebSearch: '🔎', Task: '🤖', Agent: '🤖',
  TodoWrite: '📋', AskUserQuestion: '🙋',
};
const emojiFor = (t) => TOOL_EMOJI[t] || (t && t.startsWith('mcp__') ? '🔌' : '🛠️');

const addUnique = (arr, v, max = 300) => { if (!arr.includes(v)) { arr.push(v); if (arr.length > max) arr.shift(); } };
const plainText = (t) => String(t || '').replace(/\*\*|__|`/g, '').replace(/^#{1,6}\s+/gm, '').replace(/\s*\n\s*/g, ' ').trim();
let lastSeenAt = Date.now();
const famOf = (m) => ((String(m || '').match(/fable|opus|sonnet|haiku/i) || [''])[0]).toLowerCase();

function getSession(id, ev) {
  let s = sessions.get(id);
  if (!s) {
    userHidden = false; // a brand-new session is worth showing again
    s = {
      id, cwd: ev.cwd || '', project: path.basename(ev.cwd || '') || 'session', model: '',
      status: 'idle', note: '', tool: null, feed: [], ctx: { used: 0, max: settings.ctxMax },
      stats: { reads: 0, edits: 0, cmds: 0, other: 0 }, files: { read: [], edited: [] }, prompt: '', transcript: ev.transcript_path || '',
      started: Date.now(), updated: Date.now(), ctxWarn: 0,
    };
    sessions.set(id, s);
  }
  if (ev.cwd) { s.cwd = ev.cwd; s.project = path.basename(ev.cwd) || s.project; }
  if (ev.transcript_path) s.transcript = ev.transcript_path;
  if (ev.hud && ev.hud.pane) s.tmux = { socket: ev.hud.tmux.split(',')[0], pane: ev.hud.pane };
  s.updated = Date.now();
  return s;
}

// ---------- tool summaries / diffs ----------
const clip = (str, n = 160) => (str.length > n ? str.slice(0, n - 1) + '…' : str);
const short = (p) => (p ? p.replace(os.homedir(), '~') : '');

function summarize(tool, i) {
  i = i && typeof i === 'object' ? i : {};
  switch (tool) {
    case 'Read': return { file: i.file_path, text: short(i.file_path) + (i.offset ? `  L${i.offset}–${i.offset + (i.limit || 2000)}` : '') };
    case 'Edit': case 'MultiEdit': case 'Write': case 'NotebookEdit':
      return { file: i.file_path || i.notebook_path, text: short(i.file_path || i.notebook_path) };
    case 'Bash': return { text: clip(i.command || '', 200) };
    case 'Grep': return { text: `/${i.pattern}/ ${short(i.path || '')}` };
    case 'Glob': return { text: `${i.pattern} ${short(i.path || '')}` };
    case 'WebFetch': return { text: i.url };
    case 'WebSearch': return { text: i.query };
    case 'Task': case 'Agent': return { text: i.description || i.subagent_type || '' };
    case 'TodoWrite': return { text: `${(i.todos || []).length} todos` };
    default: return { text: clip(JSON.stringify(i), 140) };
  }
}

const diffStore = new Map(); // diffId -> full diff, so the feed stays small but the diff window shows everything
let diffSeq = 0;
function storeDiff(full) {
  if (!full) return null;
  const id = ++diffSeq; diffStore.set(id, full);
  if (diffStore.size > 60) diffStore.delete(diffStore.keys().next().value);
  const trim = (a, n = 40) => (a.length > n ? [...a.slice(0, n), `… ${a.length - n} more lines`] : a);
  return { ...full, diffId: id, hunks: full.hunks.map((h) => ({ ...h, del: trim(h.del), add: trim(h.add) })) };
}
const lines = (s) => String(s ?? '').split('\n');
const cap = (a, n = 600) => (a.length > n ? [...a.slice(0, n), `… ${a.length - n} more lines`] : a);

function buildDiff(tool, i) {
  i = i && typeof i === 'object' ? i : {};
  try {
    const file = i.file_path;
    if (tool === 'Edit' || tool === 'MultiEdit') {
      const edits = tool === 'Edit' ? [i] : i.edits || [];
      let content = '';
      try { content = fs.readFileSync(file, 'utf8'); } catch {}
      const hunks = edits.map((e) => {
        const idx = content.indexOf(e.old_string);
        const start = idx >= 0 ? content.slice(0, idx).split('\n').length : null;
        return { start, del: cap(lines(e.old_string)), add: cap(lines(e.new_string)) };
      });
      return { file, hunks };
    }
    if (tool === 'Write') {
      let old = null;
      try { old = fs.readFileSync(file, 'utf8'); } catch {}
      const nw = lines(i.content);
      if (old === null) return { file, isNew: true, hunks: [{ start: 1, del: [], add: cap(nw) }] };
      const o = lines(old);
      let p = 0;
      while (p < o.length && p < nw.length && o[p] === nw[p]) p++;
      let e = 0;
      while (e < o.length - p && e < nw.length - p && o[o.length - 1 - e] === nw[nw.length - 1 - e]) e++;
      return { file, hunks: [{ start: p + 1, del: cap(o.slice(p, o.length - e)), add: cap(nw.slice(p, nw.length - e)) }] };
    }
  } catch {}
  return null;
}

// ---------- context window ----------
function readContext(s) {
  if (!s.transcript) return;
  try {
    const fd = fs.openSync(s.transcript, 'r');
    const { size } = fs.fstatSync(fd);
    const len = Math.min(size, 256 * 1024);
    const buf = Buffer.alloc(len);
    fs.readSync(fd, buf, 0, len, size - len);
    fs.closeSync(fd);
    const rows = buf.toString('utf8').split('\n');
    for (let k = rows.length - 1; k >= 0; k--) {
      if (!rows[k].includes('"usage"')) continue;
      let m;
      try { m = JSON.parse(rows[k]); } catch { continue; }
      const u = m.message && m.message.usage;
      if (!u || m.message.model === '<synthetic>') continue;
      if (!(u.input_tokens || u.cache_read_input_tokens || u.cache_creation_input_tokens || u.output_tokens)) continue;
      s.ctx.used = (u.input_tokens || 0) + (u.cache_read_input_tokens || 0) + (u.cache_creation_input_tokens || 0) + (u.output_tokens || 0);
      if (m.message.model) s.model = m.message.model;
      break;
    }
  } catch {}
  s.ctx.max = /1m/i.test(s.model) || s.ctx.used > settings.ctxMax ? Math.max(1000000, settings.ctxMax) : settings.ctxMax;
  try { usageLib.scan(s, s.transcript, prices); updateDaily(s); } catch {}
  // context nearly full: warn once per level, re-arm after /compact or /clear
  const pct = s.ctx.max ? (s.ctx.used / s.ctx.max) * 100 : 0;
  if (pct < 60) s.ctxWarn = 0;
  else if (pct >= 95 && s.ctxWarn < 2) { s.ctxWarn = 2; alertUser('stuck', `🧠 ${s.project}: context ${pct.toFixed(0)}% full`, 'Almost out of room. Run /compact or start fresh.'); }
  else if (pct >= 85 && s.ctxWarn < 1) { s.ctxWarn = 1; alertUser('stuck', `🧠 ${s.project}: context ${pct.toFixed(0)}% full`, 'Consider /compact before it fills up.'); }
}

function lastAssistantText(s) {
  if (!s.transcript) return '';
  try {
    const fd = fs.openSync(s.transcript, 'r');
    const { size } = fs.fstatSync(fd);
    const len = Math.min(size, 8 * 1024 * 1024);
    const buf = Buffer.alloc(len);
    fs.readSync(fd, buf, 0, len, size - len);
    fs.closeSync(fd);
    const rows = buf.toString('utf8').split('\n');
    for (let k = rows.length - 1; k >= 0; k--) {
      if (!rows[k].includes('"assistant"')) continue;
      let m;
      try { m = JSON.parse(rows[k]); } catch { continue; }
      if (m.type !== 'assistant' || !m.message || !Array.isArray(m.message.content)) continue;
      const text = m.message.content.filter((c) => c.type === 'text').map((c) => c.text).join('\n').trim();
      if (text) return clip(text, 2400);
    }
  } catch {}
  return '';
}

// ---------- event handling ----------
function pushFeed(s, entry) {
  s.feed.unshift({ id: ++seq, t: Date.now(), ...entry });
  if (s.feed.length > 60) s.feed.length = 60;
  return s.feed[0];
}

function handleEvent(ev) {
  eventCount++; lastEventAt = Date.now();
  if (ev.session_id === '__selftest') { selfTestSeen = Date.now(); return null; }
  const id = ev.session_id || 'unknown';
  const s = getSession(id, ev);
  s.stuckNotified = false;
  const name = ev.hook_event_name;
  let extra = null;

  switch (name) {
    case 'SessionStart':
      if (ev.model) s.model = ev.model;
      s.status = 'idle'; s.note = ev.source || 'started';
      pushFeed(s, { emoji: '🚀', text: `session ${ev.source || 'start'}`, kind: 'info' });
      break;
    case 'UserPromptSubmit':
      s.status = 'thinking'; s.prompt = clip(ev.prompt || '', 300); s.tool = null; s.note = ''; s.summary = null;
      s.turn = { start: Date.now(), edited: [], reads: 0, cmds: 0, errors: 0 };
      releaseStop(id);
      pushFeed(s, { emoji: '💬', text: clip(ev.prompt || '', 120), kind: 'prompt' });
      extra = takeQueued(id, 'UserPromptSubmit');
      break;
    case 'PreToolUse': {
      const tool = ev.tool_name;
      const sum = summarize(tool, ev.tool_input);
      const diff = storeDiff(buildDiff(tool, ev.tool_input));
      s.status = 'tool';
      s.tool = { name: tool, emoji: emojiFor(tool), ...sum, diff, started: Date.now() };
      const fp = (ev.tool_input || {}).file_path || (ev.tool_input || {}).notebook_path;
      if (!s.turn) s.turn = { start: Date.now(), edited: [], reads: 0, cmds: 0, errors: 0 };
      if (fp && tool === 'Read') { addUnique(s.files.read, fp); s.turn.reads++; }
      else if (fp && /Edit|Write|Notebook/.test(tool)) { addUnique(s.files.edited, fp); addUnique(s.turn.edited, fp); }
      if (tool === 'Bash') s.turn.cmds++;
      if (/^Read$|^Grep$|^Glob$/.test(tool)) s.stats.reads++;
      else if (/Edit|Write|Notebook/.test(tool)) s.stats.edits++;
      else if (tool === 'Bash') s.stats.cmds++;
      else s.stats.other++;
      pushFeed(s, { emoji: emojiFor(tool), tool, text: sum.text, diff, toolUseId: ev.tool_use_id, kind: 'tool', running: true });
      break;
    }
    case 'PostToolUse': {
      const f = s.feed.find((x) => x.toolUseId && x.toolUseId === ev.tool_use_id);
      if (f) { f.running = false; f.ms = Date.now() - f.t; }
      const tr = ev.tool_response;
      if (s.turn && tr && typeof tr === 'object' && (tr.is_error || tr.error || tr.interrupted)) { s.turn.errors++; if (f) f.failed = true; }
      s.tool = null; s.status = 'thinking';
      readContext(s);
      extra = takeQueued(id, 'PostToolUse');
      break;
    }
    case 'Notification':
      // a permission dialog is not an idle prompt: never offer to type into it
      s.status = (ev.notification_type === 'permission_prompt' || /permission/i.test(ev.message || '')) ? 'permission' : 'waiting';
      s.note = ev.message || 'needs your attention';
      pushFeed(s, { emoji: '🙋', text: clip(s.note, 140), kind: 'ask' });
      // Quiet by design (issue #1): the PermissionRequest hook already alerts for permission prompts, and Claude Code's
      // idle "waiting for your input" ping repeats every minute or so. Only genuinely new questions get a toast.
      if (s.status !== 'permission' && !/waiting for your input|idle/i.test(ev.message || '') && ev.notification_type !== 'idle_prompt')
        alertUser('ask', `Claude · ${s.project}`, s.note, s.id);
      break;
    case 'Stop':
      s.status = 'done'; s.tool = null; readContext(s); s.lastMsg = ev.last_assistant_message || lastAssistantText(s);
      if (s.turn) s.summary = { ms: Date.now() - s.turn.start, edited: s.turn.edited.slice(), reads: s.turn.reads, cmds: s.turn.cmds, errors: s.turn.errors, away: Date.now() - lastSeenAt > 60000 };
      alertUser('done', `✅ ${s.project}: Claude finished`, clip(plainText(s.lastMsg) || 'Waiting for you', 120), s.id);
      pushFeed(s, { emoji: '💬', text: clip(s.lastMsg || 'waiting for you', 120), kind: 'done' });
      break;
    case 'SubagentStop':
      pushFeed(s, { emoji: '🤖', text: 'subagent finished', kind: 'info' });
      break;
    case 'SessionEnd':
      queued.delete(id);
      for (const [pid, p] of pendingPerms) if (p.sessionId === id) { try { p.res.end('{}'); } catch {} pendingPerms.delete(pid); }
      releaseStop(id);
      sessions.delete(id);
      break;
  }
  if (name !== 'SessionEnd') readContext(s);
  emit();
  return extra;
}

// Types text into the tmux pane Claude Code runs in. `--` stops tmux treating "-x" text as flags; newlines become spaces
// so a multi-line reply cannot submit half-written. Calls back with ok=false if tmux refused.
function typeIntoPane(s, text, cb) {
  const base = ['-S', s.tmux.socket];
  const one = String(text).replace(/\r?\n+/g, ' ');
  execFile('tmux', [...base, 'send-keys', '-t', s.tmux.pane, '-l', '--', one], (err) => {
    if (err) return cb(false);
    setTimeout(() => execFile('tmux', [...base, 'send-keys', '-t', s.tmux.pane, 'Enter'], (e2) => cb(!e2)), 120);
  });
}

function takeQueued(id, evName) {
  const q = queued.get(id);
  if (!q || !q.length) return null;
  queued.delete(id);
  emit();
  return JSON.stringify({
    hookSpecificOutput: {
      hookEventName: evName,
      additionalContext: `Message from the user, sent from the Buddy HUD desktop overlay while you were working:\n${q.join('\n')}\nTake it into account now.`,
    },
  });
}

function releaseStop(id) {
  const res = stopHolds.get(id);
  if (res) { stopHolds.delete(id); try { res.end('{}'); } catch {} }
}

function toast(title, body) {
  try { if (Notification.isSupported()) new Notification({ title, body, silent: false }).show(); } catch {}
}

// kind: 'done' | 'ask' | 'stuck'. Honours per-kind toggles, sound/notification switches and do-not-disturb.
const alertLog = []; // test hook
const lastAlert = new Map(); // `${sessionId}:${kind}` -> time; stops the same session buzzing repeatedly
function alertUser(kind, title, body, sessionId) {
  const a = settings.alerts;
  if (a.dnd || a[kind] === false) return;
  if (sessionId) {
    const key = sessionId + ':' + kind, now = Date.now();
    if (now - (lastAlert.get(key) || 0) < (kind === 'ask' ? 30000 : 10000)) return;
    lastAlert.set(key, now);
  }
  if (TEST) alertLog.push(kind + ':' + title);
  if (a.notify) toast(title, settings.privacy ? 'Open Buddy HUD for details' : body);
  if (a.sound && win && !win.isDestroyed()) win.webContents.send('alert', kind);
}

// ---------- HTTP bridge ----------
const server = http.createServer((req, res) => {
  // browsers always send Origin on cross-site requests; hooks (curl) never do
  if (req.headers.origin) { res.statusCode = 403; return res.end('{}'); }
  if (TEST && req.method === 'GET' && req.url === '/__state') { res.setHeader('Content-Type', 'application/json'); return res.end(JSON.stringify(snapshot())); }
  const chunks = []; let got = 0;
  req.on('data', (d) => { got += d.length; if (got > 5e6) { res.statusCode = 413; res.end('{}'); req.destroy(); } else chunks.push(d); });
  req.on('end', () => {
    try { handleHook(req, res, Buffer.concat(chunks).toString('utf8')); }
    catch (e) { console.error('hook handler error:', e); try { res.end('{}'); } catch {} } // never leave a hook hanging
  });
});

function handleHook(req, res, body) {
    let ev;
    try { ev = JSON.parse(body); } catch { return res.end('{}'); }
    if (!ev || typeof ev !== 'object' || Array.isArray(ev)) return res.end('{}');
    const route = req.url === '/hook'
      ? (ev.hook_event_name === 'PermissionRequest' ? '/permission' : ev.hook_event_name === 'Stop' ? '/stop' : '/event')
      : req.url;
    const hdr = (k) => { const v = String(req.headers[k] || ''); return v.startsWith('$') ? '' : v; };
    if (hdr('x-buddy-pane')) ev.hud = { tmux: hdr('x-buddy-tmux'), pane: hdr('x-buddy-pane') };
    const id = ev.session_id || 'unknown';
    const extra = handleEvent(ev);

    if (route === '/permission' && /^(AskUserQuestion|ExitPlanMode)$/.test(ev.tool_name || '')) {
      // These are conversations, not yes/no permissions: show the buddy asking and let the terminal handle it.
      const s = getSession(id, ev);
      const q = ev.tool_name === 'ExitPlanMode' ? 'Plan ready for your review' : ((ev.tool_input && ev.tool_input.questions && ev.tool_input.questions[0] && ev.tool_input.questions[0].question) || 'Claude has a question');
      s.status = 'waiting'; s.note = clip(q, 200); s.tool = null;
      pushFeed(s, { emoji: '🙋', text: clip(q, 140), kind: 'ask' });
      alertUser('ask', `🙋 ${s.project}`, clip(q, 120), s.id);
      emit();
      return res.end('{}');
    }
    if (route === '/permission') {
      const pid = 'p' + ++seq;
      const s = getSession(id, ev);
      const tool = ev.tool_name;
      const sum = summarize(tool, ev.tool_input);
      pendingPerms.set(pid, { res, sessionId: id, tool, emoji: emojiFor(tool), summary: sum.text, diff: storeDiff(buildDiff(tool, ev.tool_input)), input: ev.tool_input, t: Date.now() });
      s.status = 'permission';
      pushFeed(s, { emoji: '🔐', text: `permission: ${tool} ${clip(sum.text, 90)}`, kind: 'ask' });
      alertUser('ask', `🔐 ${s.project}: allow ${tool}?`, clip(sum.text, 120), s.id);
      res.on('close', () => { if (!res.writableEnded && pendingPerms.delete(pid)) { if (s.status === 'permission') s.status = 'tool'; emit(); } });
      emit();
      return;
    }
    if (route === '/stop') {
      if (!settings.replyMode) return res.end('{}');
      const q = queued.get(id);
      if (q && q.length) {
        queued.delete(id);
        return res.end(JSON.stringify({ decision: 'block', reason: `The user replied via the Buddy HUD desktop overlay:\n${q.join('\n')}` }));
      }
      releaseStop(id);
      stopHolds.set(id, res);
      res.on('close', () => { if (!res.writableEnded && stopHolds.get(id) === res) { stopHolds.delete(id); emit(); } });
      emit();
      return;
    }
    res.end(extra || '{}');
}
server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    dialog.showErrorBox('Buddy HUD', `Port ${PORT} is already in use. Is Buddy HUD already running? Quit the other copy and try again.`);
    app.exit(1);
  } else throw e;
});
if (gotLock) server.listen(PORT, '127.0.0.1');

// ---------- window ----------
// Which of our hooks are actually present in ~/.claude/settings.json
function hooksStatus() {
  if (Date.now() - hooksCache.t < 4000) return hooksCache.v;
  let present = [];
  try {
    const hooks = JSON.parse(fs.readFileSync(path.join(os.homedir(), '.claude', 'settings.json'), 'utf8')).hooks || {};
    present = HOOK_EVENTS.filter((ev) => (hooks[ev] || []).some((g) => (g.hooks || []).some((h) => String(h.command || '').includes(HOOK_URL))));
  } catch {}
  const v = { any: present.length > 0, all: present.length === HOOK_EVENTS.length, missing: HOOK_EVENTS.filter((e) => !present.includes(e)) };
  hooksCache = { t: Date.now(), v };
  return v;
}
const hooksInstalled = () => hooksStatus().any;

function computeHealth() {
  const hs = hooksStatus();
  const now = Date.now();
  if (!hs.any) return { state: 'off', msg: 'Hooks are not installed.' };
  if (!hs.all) return { state: 'partial', msg: `Some hooks are missing: ${hs.missing.join(', ')}.` };
  const stuck = [...sessions.values()].find((s) => ['thinking', 'tool'].includes(s.status) && !pendingPerms.size && now - s.updated > 180000);
  if (stuck) return { state: 'stuck', msg: `No activity from ${stuck.project} for ${Math.round((now - stuck.updated) / 60000)} min${stuck.tool ? ` (running ${stuck.tool.name})` : ''}. A long command, or stuck?` };
  if (!eventCount) return { state: 'waiting', msg: 'Hooks installed. No events yet: start a NEW Claude Code session.' };
  return { state: 'ok', msg: `Connected. ${eventCount} events, last ${Math.max(0, Math.round((now - lastEventAt) / 1000))}s ago.` };
}

// Runs the installed hook command for real (same curl Claude Code runs) and checks the event arrives.
function runSelfTest() {
  let command = '';
  try {
    const hooks = JSON.parse(fs.readFileSync(path.join(os.homedir(), '.claude', 'settings.json'), 'utf8')).hooks || {};
    for (const g of hooks.Notification || []) for (const h of g.hooks || []) if (String(h.command || '').includes(HOOK_URL)) command = h.command;
  } catch {}
  if (!command) { selfTest = { t: Date.now(), ok: false, detail: 'No Buddy HUD hook found in ~/.claude/settings.json. Install the hooks first.' }; emit(); return; }
  selfTest = { t: Date.now(), ok: null, detail: 'Running…' }; emit();
  const before = selfTestSeen;
  const child = require('child_process').exec(command, { timeout: 8000 }, (err, _out, stderr) => {
    const ok = selfTestSeen > before;
    selfTest = { t: Date.now(), ok, detail: ok ? 'Hook command ran and Buddy HUD received the event.' : `Hook ran but nothing arrived${err ? ' (' + String(err.message).split('\n')[0] + ')' : ''}${stderr ? ': ' + String(stderr).trim().split('\n')[0] : ''}. Is curl installed?` };
    emit();
  });
  child.stdin.end(JSON.stringify({ session_id: '__selftest', hook_event_name: 'Notification', message: 'self-test' }));
}

function snapshot() {
  return {
    ...(TEST ? { alertLog } : {}), pet: { phase: pet.phase, dir: pet.dir }, settings: { ...settings, phone: undefined }, phone: phoneInfo(), hooksInstalled: hooksInstalled(), health: computeHealth(), selfTest, daily: dailyTotals(), version: app.getVersion(),
    sessions: [...sessions.values()].sort((a, b) => b.updated - a.updated).map((s) => ({
      ...s, _usageState: undefined, usage: s._usage || null, canReply: stopHolds.has(s.id), canType: !!s.tmux, queued: (queued.get(s.id) || []).length,
    })),
    perms: [...pendingPerms.entries()].map(([id, p]) => ({ id, sessionId: p.sessionId, tool: p.tool, emoji: p.emoji, summary: p.summary, diff: p.diff, t: p.t })),
  };
}

let emitTimer;
function emit() {
  clearTimeout(emitTimer);
  emitTimer = setTimeout(() => {
    if (!win || win.isDestroyed()) return;
    win.webContents.send('state', snapshot());
    const active = sessions.size > 0;
    clearTimeout(hideTimer);
    if (active) {
      if (!TEST && !win.isVisible() && (!userHidden || pendingPerms.size || stopHolds.size)) win.showInactive();
    } else {
      hideTimer = setTimeout(() => { if (!sessions.size && !pinned && !process.env.HUD_KEEP && hooksInstalled() && settings.alwaysShow === false) win.hide(); }, 15000);
    }
  }, 30);
}

function fit(w, h) {
  if (!win || win.isDestroyed()) return;
  w *= settings.scale || 1; h *= settings.scale || 1;
  const wa = screen.getDisplayMatching(win.getBounds()).workArea;
  w = Math.max(160, Math.min(520, Math.ceil(w))); h = Math.max(120, Math.min(wa.height - 20, Math.ceil(h)));
  const b = win.getBounds();
  if (b.width === w && b.height === h) return;
  const disp = screen.getDisplayMatching(b).workArea;
  // keep bottom-right corner anchored so bubbles grow up/left
  let x = b.x + b.width - w;
  let y = b.y + b.height - h;
  x = Math.max(disp.x, Math.min(x, disp.x + disp.width - w));
  y = Math.max(disp.y, Math.min(y, disp.y + disp.height - h));
  win.setBounds({ x, y, width: w, height: h });
}

let lastFitW = 0;
let posTimer;
function savePos() {
  clearTimeout(posTimer);
  posTimer = setTimeout(() => {
    if (!win || win.isDestroyed()) return;
    const b = win.getBounds();
    settings.pos = { r: b.x + b.width, b: b.y + b.height };
    saveSettings();
  }, 400);
}

function createWindow() {
  const disp = screen.getPrimaryDisplay().workArea;
  const w = 260, h = 190;
  let startX = disp.x + disp.width - w - 24, startY = disp.y + disp.height - h - 24;
  if (settings.pos) {
    const x = settings.pos.r - w, y = settings.pos.b - h;
    const d = screen.getDisplayNearestPoint({ x, y }).workArea;
    if (x >= d.x - 20 && y >= d.y - 20 && x + w <= d.x + d.width + 20 && y + h <= d.y + d.height + 20) { startX = x; startY = y; }
  }
  win = new BrowserWindow({
    width: w, height: h, x: startX, y: startY,
    frame: false, transparent: true, resizable: false, alwaysOnTop: true, skipTaskbar: true,
    hasShadow: false, show: false, focusable: true, backgroundColor: '#00000000', title: 'Buddy HUD', icon: path.join(__dirname, 'build', 'icon.png'), type: isMac ? 'panel' : undefined,
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true },
  });
  win.setAlwaysOnTop(true, 'screen-saver');
  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  win.loadFile(path.join(__dirname, 'renderer', 'index.html'));
  if (process.env.HUD_DEBUG) win.webContents.on('console-message', (_e, lvl, msg, line, src) => console.log('[renderer]', lvl, msg, src + ':' + line));
  win.webContents.on('did-finish-load', () => {
    win.webContents.setZoomFactor(settings.scale || 1);
    win.webContents.send('state', snapshot());
    if (!TEST && (process.env.HUD_KEEP || sessions.size || !hooksInstalled() || settings.alwaysShow !== false)) win.showInactive();
    if (process.env.HUD_UI) setTimeout(() => win.webContents.executeJavaScript(`__ui(${process.env.HUD_UI})`), 4500);
    if (process.env.HUD_SHOT) setTimeout(async () => {
      const img = await win.webContents.capturePage();
      fs.writeFileSync(process.env.HUD_SHOT, img.toPNG());
      if (process.env.HUD_QUIT) app.quit();
    }, +process.env.HUD_SHOT_DELAY || 2500);
  });
}

function decidePerm(id, behavior) {
  const p = pendingPerms.get(id);
  if (!p) return;
  pendingPerms.delete(id);
  const s = sessions.get(p.sessionId);
  if (s) s.status = behavior === 'terminal' ? 'waiting' : 'tool';
  if (behavior === 'allow') p.res.end(JSON.stringify({ hookSpecificOutput: { hookEventName: 'PermissionRequest', decision: { behavior: 'allow' } } }));
  else if (behavior === 'deny') p.res.end(JSON.stringify({ hookSpecificOutput: { hookEventName: 'PermissionRequest', decision: { behavior: 'deny', message: 'Denied by the user from the Buddy HUD overlay.' } } }));
  else p.res.end('{}'); // fall back to the terminal dialog
  emit();
}
function sendReply(sessionId, text) {
  const res = stopHolds.get(sessionId);
  if (res) {
    stopHolds.delete(sessionId);
    res.end(JSON.stringify({ decision: 'block', reason: `The user replied via the Buddy HUD desktop overlay:\n${text}` }));
    const s = sessions.get(sessionId);
    if (s) { s.status = 'thinking'; pushFeed(s, { emoji: '📨', text: clip(text, 120), kind: 'prompt' }); }
  } else if (sessions.get(sessionId) && sessions.get(sessionId).tmux && ['done', 'idle'].includes(sessions.get(sessionId).status)) {
    // Claude idle at its prompt inside tmux: type the reply straight into the pane
    const s = sessions.get(sessionId);
    typeIntoPane(s, text, (ok) => {
      if (ok) { s.status = 'thinking'; pushFeed(s, { emoji: '📨', text: clip(text, 120), kind: 'prompt' }); }
      else {
        const q = queued.get(sessionId) || []; q.push(text); queued.set(sessionId, q);
        pushFeed(s, { emoji: '📬', text: 'tmux refused the text, queued instead: ' + clip(text, 80), kind: 'prompt' });
      }
      emit();
    });
  } else {
    const q = queued.get(sessionId) || [];
    q.push(text);
    queued.set(sessionId, q);
    const s = sessions.get(sessionId);
    if (s) pushFeed(s, { emoji: '📬', text: (['done', 'idle', 'waiting'].includes(s.status) ? 'NOT delivered yet (Claude is idle) — it arrives when you start the next turn: ' : 'queued for Claude’s next step: ') + clip(text, 100), kind: 'prompt' });
  }
  emit();
}
ipcMain.on('decide', (_e, { id, behavior }) => decidePerm(id, behavior));
ipcMain.on('reply', (_e, { sessionId, text }) => sendReply(sessionId, text));
const knownFile = (p) => typeof p === 'string' && path.isAbsolute(p) && (
  [...sessions.values()].some((s) => s.files.read.includes(p) || s.files.edited.includes(p)) || (currentDiff && currentDiff.file === p));
ipcMain.on('openFile', (_e, p) => { if (knownFile(p) && fs.existsSync(p)) shell.openPath(p); });

let diffWin = null, currentDiff = null;
ipcMain.handle('diff:get', () => currentDiff);
ipcMain.on('openDiff', (_e, id) => {
  const d = diffStore.get(+id);
  if (!d) return;
  currentDiff = d;
  if (diffWin && !diffWin.isDestroyed()) { diffWin.loadFile(path.join(__dirname, 'renderer', 'diff.html')); diffWin.show(); return; }
  diffWin = new BrowserWindow({ width: 920, height: 700, title: 'Buddy HUD diff', backgroundColor: '#181513', autoHideMenuBar: true, icon: path.join(__dirname, 'build', 'icon.png'), webPreferences: { preload: path.join(__dirname, 'preload-diff.js'), contextIsolation: true } });
  diffWin.loadFile(path.join(__dirname, 'renderer', 'diff.html'));
});

// ---------- phone access (opt-in, LAN only, token protected) ----------
let phoneServer = null, phoneQr = '';
const phoneFails = new Map();
// The address a phone can actually reach: skip Docker/VM/virtual bridges, prefer Wi-Fi/Ethernet and private ranges.
const lanIp = () => {
  const cands = [];
  for (const [name, list] of Object.entries(os.networkInterfaces())) {
    if (/^(lo|docker|br-|veth|virbr|vmnet|vboxnet|utun|awdl|llw|tailscale|zt)/i.test(name)) continue;
    for (const i of list || []) if (i.family === 'IPv4' && !i.internal) cands.push({ name, ip: i.address, score: (/^(wl|wi|en|eth)/i.test(name) ? 2 : 0) + (/^(192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\.)/.test(i.address) ? 1 : 0) });
  }
  cands.sort((a, b) => b.score - a.score);
  return cands.length ? cands[0].ip : '127.0.0.1';
};
let phoneSeenAt = 0;
function phoneUrl() { return `http://${lanIp()}:${PHONE_PORT}/?t=${settings.phone.token}`; }
function phoneInfo() { return settings.phone && settings.phone.enabled ? { enabled: true, url: phoneUrl(), qr: phoneQr, ip: lanIp(), seenAt: phoneSeenAt, platform: process.platform } : { enabled: false }; }
function tokenOk(t) {
  const a = Buffer.from(String(t || '')), b = Buffer.from(String(settings.phone.token));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
function startPhone() {
  if (phoneServer || (TEST && !process.env.HUD_PHONE)) return;
  if (!settings.phone) settings.phone = {};
  if (!settings.phone.token) settings.phone.token = crypto.randomBytes(16).toString('hex');
  settings.phone.enabled = true; saveSettings();
  require('qrcode').toDataURL(phoneUrl(), { margin: 1, width: 220 }).then((d) => { phoneQr = d; emit(); }).catch(() => {});
  phoneServer = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://x');
    const ip = req.socket.remoteAddress;
    const fails = phoneFails.get(ip) || { n: 0, t: Date.now() };
    if (Date.now() - fails.t > 60000) { fails.n = 0; fails.t = Date.now(); }
    if (fails.n >= 10) { res.statusCode = 429; return res.end('too many attempts'); }
    if (!tokenOk(u.searchParams.get('t'))) { fails.n++; phoneFails.set(ip, fails); res.statusCode = 403; return res.end('forbidden'); }
    if (u.pathname === '/' || u.pathname === '/api/state') { const first = !phoneSeenAt; phoneSeenAt = Date.now(); if (first) emit(); }
    const json = (o) => { res.setHeader('Content-Type', 'application/json'); res.setHeader('Cache-Control', 'no-store'); res.end(JSON.stringify(o)); };
    if (req.method === 'GET' && u.pathname === '/') { res.setHeader('Content-Type', 'text/html; charset=utf-8'); return res.end(fs.readFileSync(path.join(__dirname, 'renderer', 'phone.html'))); }
    if (req.method === 'GET' && u.pathname === '/api/state') {
      const snap = snapshot();
      return json({
        sessions: snap.sessions.map((s) => ({ id: s.id, project: s.project, status: s.status, model: s.model, tool: s.tool && { name: s.tool.name, text: s.tool.text }, lastMsg: s.lastMsg })),
        perms: snap.perms.map((p) => ({ id: p.id, tool: p.tool, summary: p.summary, project: (sessions.get(p.sessionId) || {}).project })),
      });
    }
    if (req.method === 'POST' && (u.pathname === '/api/decide' || u.pathname === '/api/reply')) {
      let body = '';
      req.on('data', (d) => { body += d; if (body.length > 1e5) req.destroy(); });
      req.on('end', () => {
        try {
          const o = JSON.parse(body);
          if (u.pathname === '/api/decide' && ['allow', 'deny', 'terminal'].includes(o.behavior)) decidePerm(String(o.id), o.behavior);
          else if (u.pathname === '/api/reply' && o.text && String(o.text).length < 4000) sendReply(String(o.sessionId), String(o.text));
        } catch {}
        json({ ok: true });
      });
      return;
    }
    res.statusCode = 404; res.end('not found');
  });
  phoneServer.on('error', (e) => { settings.phone.enabled = false; saveSettings(); phoneServer = null; toast('Buddy HUD', 'Phone access could not start: ' + e.code); emit(); });
  phoneServer.listen(PHONE_PORT, '0.0.0.0', () => emit());
}
function stopPhone() {
  if (settings.phone) { settings.phone.enabled = false; saveSettings(); }
  if (phoneServer) { phoneServer.close(); phoneServer.closeAllConnections && phoneServer.closeAllConnections(); phoneServer = null; }
  phoneQr = ''; emit();
}
ipcMain.on('phone', (_e, { enabled, regenerate }) => {
  if (regenerate) { settings.phone = { ...(settings.phone || {}), token: crypto.randomBytes(16).toString('hex') }; saveSettings(); if (phoneServer) { stopPhone(); startPhone(); return; } }
  if (enabled) startPhone(); else stopPhone();
});

ipcMain.on('release', (_e, sessionId) => { releaseStop(sessionId); emit(); });
ipcMain.on('fit', (_e, { w, h }) => fit(w, h));
ipcMain.on('seen', () => { lastSeenAt = Date.now(); });
ipcMain.on('selfTest', () => runSelfTest());
ipcMain.on('set', (_e, patch) => {
  if (patch.alerts) patch = { ...patch, alerts: { ...settings.alerts, ...patch.alerts } };
  settings = { ...settings, ...patch };
  if (patch.alerts || 'walk' in patch) refreshTray();
  saveSettings();
  if (!settings.replyMode) for (const id of [...stopHolds.keys()]) releaseStop(id);
  if ('scale' in patch && win) { win.webContents.setZoomFactor(settings.scale || 1); lastFitW = 0; win.webContents.send('refit'); }
  for (const s of sessions.values()) readContext(s);
  emit();
});
ipcMain.on('move', (_e, { dx, dy }) => {
  const [x, y] = win.getPosition();
  win.setPosition(Math.round(x + dx), Math.round(y + dy));
  savePos();
  pet.dragPauseUntil = Date.now() + 15000;
  if (pet.phase) setPhase(null);
});
ipcMain.on('ui', (_e, u) => { uiState = { ...uiState, ...u }; });
ipcMain.on('quit', () => app.quit());
ipcMain.on('hide', () => { pinned = false; userHidden = true; win.hide(); });
ipcMain.on('installHooks', () => {
  try { toast('Buddy HUD', require('./install-hooks').run(false)); } catch (e) { toast('Buddy HUD', 'Hook install failed: ' + e.message); }
  hooksCache.t = 0; emit();
});


app.on('second-instance', () => { if (win) { pinned = true; win.showInactive(); emit(); } });
// drop sessions whose Claude Code process died without sending SessionEnd
setInterval(() => {
  let changed = false;
  for (const s of sessions.values()) {
    if (['thinking', 'tool'].includes(s.status) && !pendingPerms.size && !s.stuckNotified && Date.now() - s.updated > 180000) {
      s.stuckNotified = true; changed = true;
      pushFeed(s, { emoji: '⏳', text: `no activity for 3 min${s.tool ? ' (' + s.tool.name + ')' : ''}`, kind: 'info' });
      alertUser('stuck', `⏳ ${s.project}: seems stuck`, 'No activity for 3 minutes. A long command, or stuck?');
    }
  }
  for (const [id, s] of sessions) {
    if (Date.now() - s.updated > 45 * 60 * 1000 && !stopHolds.has(id) && ![...pendingPerms.values()].some((p) => p.sessionId === id)) { sessions.delete(id); queued.delete(id); changed = true; }
  }
  if (changed) emit();
}, 15000);

// ---------- desktop pet: stroll along the screen while Claude is idle, run home when Claude needs you ----------
let uiState = { drawer: false, typing: false };
const pet = { phase: null, dir: -1, until: 0, dragPauseUntil: 0 };
const rand = (a, b) => a + Math.random() * (b - a);
function setPhase(phase, ms = 0) {
  pet.phase = phase; pet.until = Date.now() + ms;
  if (win && !win.isDestroyed()) win.webContents.send('pet', { phase: pet.phase, dir: pet.dir });
}
function needsYou() {
  return pendingPerms.size > 0 || stopHolds.size > 0 || [...sessions.values()].some((s) => ['waiting', 'permission'].includes(s.status) || (s.status === 'done' && Date.now() - s.updated < 15000));
}
function mayWander() {
  if (!settings.walk || TEST || !win || win.isDestroyed() || !win.isVisible()) return false;
  if (Date.now() < pet.dragPauseUntil || uiState.drawer || uiState.typing || needsYou()) return false;
  return ![...sessions.values()].some((s) => ['thinking', 'tool'].includes(s.status));
}
function homeX(b) { return settings.pos ? settings.pos.r - b.width : null; }
setInterval(() => {
  if (!win || win.isDestroyed() || !win.isVisible()) return;
  const b = win.getBounds();
  const wa = screen.getDisplayMatching(b).workArea;
  // Claude needs you: run back to where the user parked the buddy
  if (settings.walk && needsYou() && !TEST) {
    const hx = homeX(b);
    if (hx !== null && Math.abs(hx - b.x) > 6) {
      const dir = hx > b.x ? 1 : -1;
      if (pet.phase !== 'run' || pet.dir !== dir) { pet.dir = dir; setPhase('run'); }
      win.setPosition(Math.round(b.x + dir * Math.min(10, Math.abs(hx - b.x))), b.y);
    } else if (pet.phase) setPhase(null);
    return;
  }
  if (!mayWander()) { if (pet.phase) setPhase(null); return; }
  const now = Date.now();
  if (!pet.phase || pet.phase === 'run' || now > pet.until) {
    const idle = !sessions.size;
    const r = Math.random();
    if (r < 0.5) { if (Math.random() < 0.45) pet.dir *= -1; setPhase('walk', rand(3500, 8000)); }
    else if (r < 0.75) setPhase('look', rand(2500, 5000));
    else if (r < 0.9 || !idle) setPhase('sit', rand(5000, 10000));
    else setPhase('sleep', rand(15000, 30000));
  }
  if (pet.phase === 'walk') {
    let x = b.x + pet.dir * 2;
    if (x < wa.x) { x = wa.x; pet.dir = 1; setPhase('walk', pet.until - now); }
    if (x + b.width > wa.x + wa.width) { x = wa.x + wa.width - b.width; pet.dir = -1; setPhase('walk', pet.until - now); }
    win.setPosition(Math.round(x), b.y);
  }
}, 33);

let tray, refreshTray = () => {};
function buildTray() {
  try {
    const img = nativeImage.createFromPath(path.join(__dirname, 'build', isMac ? 'tray.png' : 'tray@2x.png'));
    tray = new Tray(img.resize({ width: 18, height: 18 }));
  } catch { return; }
  const refresh = () => tray.setContextMenu(Menu.buildFromTemplate([
    { label: 'Show / hide buddy', click: () => { if (win.isVisible()) { pinned = false; userHidden = true; win.hide(); } else { pinned = true; userHidden = false; win.showInactive(); } } },
    { label: 'Install Claude Code hooks', click: () => { try { toast('Buddy HUD', require('./install-hooks').run(false)); } catch (e) { toast('Buddy HUD', 'Hook install failed: ' + e.message); } } },
    { label: 'Walk around when idle', type: 'checkbox', checked: settings.walk, click: () => { settings.walk = !settings.walk; saveSettings(); refreshTray(); emit(); } },
    { label: 'Run hook self-test', click: () => runSelfTest() },
    { label: 'Do not disturb', type: 'checkbox', checked: settings.alerts.dnd, click: () => { settings.alerts.dnd = !settings.alerts.dnd; saveSettings(); refreshTray(); emit(); } },
    { label: 'Remove Claude Code hooks', click: () => { try { toast('Buddy HUD', require('./install-hooks').run(true)); } catch (e) { toast('Buddy HUD', 'Hook removal failed: ' + e.message); } } },
    { label: 'Start at login', type: 'checkbox', checked: app.getLoginItemSettings().openAtLogin, click: (i) => { app.setLoginItemSettings({ openAtLogin: i.checked }); refresh(); } },
    { type: 'separator' },
    { label: 'Quit', click: () => app.quit() },
  ]));
  refresh(); refreshTray = refresh;
  tray.setToolTip('Buddy HUD');
  tray.on('click', () => { if (win.isVisible()) { pinned = false; userHidden = true; win.hide(); } else { pinned = true; userHidden = false; win.showInactive(); } });
}

app.setAppUserModelId('dev.buddyhud.app'); // Windows toast notifications need an app id
app.whenReady().then(async () => {
  Menu.setApplicationMenu(null);
  if (isMac && app.dock) app.dock.hide();
  // Security fix: replace Windows hooks from older versions (cmd /c ran hook payloads as commands under Git Bash)
  try {
    const ih = require('./install-hooks');
    if (process.platform === 'win32' && ih.hasUnsafeWindowsHook()) { ih.run(false); hooksCache.t = 0; toast('Buddy HUD', 'Updated your Claude Code hooks to a safer Windows command. Restart running Claude sessions.'); }
  } catch (e) { console.error('hook migration failed:', e); }
  const firstRun = !TEST && !fs.existsSync(SETTINGS_FILE);
  createWindow();
  if (!TEST) buildTray();
  if (settings.phone && settings.phone.enabled) { settings.phone.enabled = false; startPhone(); }
  if (firstRun) {
    saveSettings();
    app.setLoginItemSettings({ openAtLogin: true });
    const { response } = await dialog.showMessageBox({
      type: 'question', buttons: ['Install hooks', 'Not now'], defaultId: 0, title: 'Buddy HUD',
      message: 'Connect Buddy HUD to Claude Code?',
      detail: 'This adds a few curl hooks to ~/.claude/settings.json (a backup is saved next to it). You can remove them any time from the tray menu. Buddy HUD also starts at login; toggle that in the tray menu.',
    });
    if (response === 0) { try { toast('Buddy HUD', require('./install-hooks').run(false)); } catch (e) { toast('Buddy HUD', 'Hook install failed: ' + e.message); } }
  }
});
app.on('window-all-closed', (e) => e.preventDefault());
app.on('before-quit', () => { for (const id of [...stopHolds.keys()]) releaseStop(id); for (const [, p] of pendingPerms) try { p.res.end('{}'); } catch {} });

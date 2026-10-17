const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = (n) => (n >= 1e6 ? (n / 1e6).toFixed(n >= 1e7 ? 0 : 1) + 'M' : n >= 1000 ? (n / 1000).toFixed(n >= 100000 ? 0 : 1) + 'k' : String(n));
const ago = (t) => { const s = Math.max(0, (Date.now() - t) / 1000 | 0); return s < 60 ? s + 's' : s < 3600 ? (s / 60 | 0) + 'm' : (s / 3600 | 0) + 'h'; };

const VERB = { Read: 'Reading', Edit: 'Editing', MultiEdit: 'Editing', Write: 'Writing', NotebookEdit: 'Editing notebook', Bash: 'Running command', Grep: 'Searching', Glob: 'Finding files', WebFetch: 'Fetching page', WebSearch: 'Searching the web', Task: 'Delegating to agent', Agent: 'Delegating to agent', TodoWrite: 'Planning' };
const ACT = { Read: 'read', Edit: 'type', MultiEdit: 'type', Write: 'type', NotebookEdit: 'type', Bash: 'type', Grep: 'search', Glob: 'search', WebSearch: 'search', WebFetch: 'search', Task: 'think', Agent: 'think', TodoWrite: 'type' };
const ITEM2 = { Edit: '✨', MultiEdit: '✨', Write: '✨', Bash: '⌨️', TodoWrite: '📋' };

// ---------- model themes ----------
const FAMILIES = {
  fable: { name: 'Fable', c: '#d65db1', c2: '#f59bd9', arg: 'claude-fable-5-1' },
  opus: { name: 'Opus', c: '#9b7bf2', c2: '#c4b0ff', arg: 'opus' },
  sonnet: { name: 'Sonnet', c: '#d97757', c2: '#f0956f', arg: 'sonnet' },
  haiku: { name: 'Haiku', c: '#2fb7a3', c2: '#7ee2d1', arg: 'haiku' },
};
const famOf = (m) => ((String(m || '').match(/fable|opus|sonnet|haiku/i) || [''])[0]).toLowerCase();
const modelLabel = (m) => {
  const x = String(m || '').match(/claude-(fable|opus|sonnet|haiku)-(\d+)(?:-(\d{1,2})(?!\d))?/i);
  if (x) return FAMILIES[x[1].toLowerCase()].name + ' ' + x[2] + (x[3] ? '.' + x[3] : '');
  return famOf(m) ? FAMILIES[famOf(m)].name : '';
};

// minimal, safe markdown for Claude's replies (escape first, then format)
function md(src) {
  let t = esc(src);
  const blocks = [], codes = [];
  t = t.replace(/```[a-zA-Z0-9_+-]*\n?([\s\S]*?)```/g, (_, c) => { blocks.push(c.replace(/\n$/, '')); return `\u0000B${blocks.length - 1}\u0000`; });
  t = t.replace(/`([^`\n]+)`/g, (_, c) => { codes.push(c); return `\u0000C${codes.length - 1}\u0000`; });
  t = t.replace(/^#{1,6}\s+(.+)$/gm, '<div class="mdh">$1</div>');
  t = t.replace(/\*\*([^*\n]+)\*\*/g, '<b>$1</b>').replace(/__([^_\n]+)__/g, '<b>$1</b>');
  t = t.replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,!?:;]|$)/g, '$1<i>$2</i>');
  t = t.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<span class="lnk">$1</span>');
  t = t.replace(/^\s*[-*]\s+/gm, '• ');
  t = t.replace(/\u0000C(\d+)\u0000/g, (_, i) => `<code>${codes[i]}</code>`).replace(/\u0000B(\d+)\u0000/g, (_, i) => `<pre>${blocks[i]}</pre>`);
  return t;
}
// Only touch the DOM when the markup changed, and keep scroll position: re-rendering under the cursor
// swallowed clicks and reset scrolling.
function setHtml(el, html) {
  if (el.__html === html) return;
  const top = el.scrollTop;
  el.innerHTML = html; el.__html = html; el.scrollTop = top;
}
const plain = (s) => String(s ?? '').replace(/\*\*|__|`/g, '').replace(/^#{1,6}\s+/gm, '').replace(/^\s*[-*]\s+/gm, '').replace(/\s*\n\s*/g, ' ');
const base = (p) => String(p).split(/[\\/]/).pop();

let pet = { phase: null, dir: -1 };
let lastUi = {};
let lastSel = null;
let chatTabSeen = '';
let state = { sessions: [], perms: [], settings: {}, hooksInstalled: true };

let selected = null;
let drawer = false;
let tab = 'details';
const open = new Set();
let lastFit = '';

// ---------- sound alerts (WebAudio, no files) ----------
let actx;
function chime(kind) {
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const notes = { done: [[660, 0], [880, .13]], ask: [[880, 0], [660, .12], [880, .24]], stuck: [[330, 0], [247, .18]] }[kind] || [[660, 0]];
    for (const [f, d] of notes) {
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = kind === 'stuck' ? 'triangle' : 'sine'; o.frequency.value = f;
      const t = actx.currentTime + d;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
      o.connect(g); g.connect(actx.destination); o.start(t); o.stop(t + 0.3);
    }
  } catch {}
}
hud.onAlert(chime);
const showAura = (a) => {
  if (!state.settings || !state.settings.aura || state.settings.aura === 'off') return;
  const el = document.createElement('div');
  el.className = 'aurapop' + (a.n < 0 ? ' neg' : '');
  el.innerHTML = `${a.n > 0 ? '+' : '−'}${Math.abs(a.n).toLocaleString()} aura<small>${a.n < 0 ? 'CRINGE' : a.long ? 'LEGENDARY GRIND' : 'AURA FARMED'}</small>`;
  $('aurapops').appendChild(el);
  setTimeout(() => el.remove(), 2800);
};
hud.onAura(showAura);
window.__aura = showAura;
hud.onPet((p) => { pet = p; render(); });
let seenAt = 0;
addEventListener('mousemove', () => { if (Date.now() - seenAt > 4000) { seenAt = Date.now(); hud.send('seen'); } });
// live clocks are filled in by a 1s ticker instead of re-rendering, so buttons never get replaced under the cursor
function tickClock() {
  document.querySelectorAll('.el').forEach((el) => { el.textContent = '⏱ ' + dur(Date.now() - +el.dataset.since); });
  document.querySelectorAll('.ago').forEach((el) => { el.textContent = ago(+el.dataset.t); });
}
setInterval(tickClock, 1000);
const dur = (ms) => { const s = Math.max(0, Math.round(ms / 1000)); return s < 60 ? s + 's' : s < 3600 ? Math.floor(s / 60) + 'm ' + (s % 60) + 's' : Math.floor(s / 3600) + 'h ' + Math.floor((s % 3600) / 60) + 'm'; };

// open files / full diffs from anywhere in the UI (paths are re-validated in the main process)
document.addEventListener('click', (e) => {
  const o = e.target.closest('[data-open]'); if (o) { e.stopPropagation(); hud.send('openFile', o.dataset.open); return; }
  const d = e.target.closest('[data-diff]'); if (d) { e.stopPropagation(); hud.send('openDiff', d.dataset.diff); }
}, true);

// ---------- drag / click ----------
function dragger(el, onClick) {
  el.addEventListener('mousedown', (e) => {
    if (e.target.closest('button') && el !== $('mascot')) return;
    let moved = 0, lx = e.screenX, ly = e.screenY;
    const mv = (m) => { const dx = m.screenX - lx, dy = m.screenY - ly; moved += Math.abs(dx) + Math.abs(dy); lx = m.screenX; ly = m.screenY; if (moved > 4) hud.send('move', { dx, dy }); };
    const up = () => { removeEventListener('mousemove', mv); removeEventListener('mouseup', up); if (moved <= 4 && onClick) onClick(); };
    addEventListener('mousemove', mv); addEventListener('mouseup', up);
  });
}
dragger($('mascot'), toggleDrawer);
$('pill').onclick = toggleDrawer;
function openTab(t) { if (drawer && tab === t) drawer = false; else { drawer = true; tab = t; } render(); }
function toggleDrawer() { openTab('details'); }
document.querySelectorAll('.seg').forEach((b) => (b.onclick = () => { tab = b.dataset.tab; render(); }));
$('btnSet').onclick = () => openTab('settings');
$('btnChat').onclick = () => openTab('chat');
$('btnCust').onclick = () => openTab('custom');

$('btnQuit').onclick = () => hud.send('quit');
$('optReply').onchange = (e) => hud.send('set', { replyMode: e.target.checked });
$('optScale').onchange = (e) => hud.send('set', { scale: +e.target.value });
$('optAlways').onchange = (e) => hud.send('set', { alwaysShow: e.target.checked });
$('optWalk').onchange = (e) => hud.send('set', { walk: e.target.checked });
$('optShades').onchange = (e) => hud.send('set', { shades: e.target.value });
$('optCoffee').onchange = (e) => hud.send('set', { coffee: e.target.checked });
$('optThink').onchange = (e) => hud.send('set', { thinkPose: e.target.value });
$('optAura').onchange = (e) => hud.send('set', { aura: e.target.value });
$('optUpd').onchange = (e) => hud.send('set', { checkUpdates: e.target.checked });
$('btnUpdNow').onclick = () => hud.send('checkUpdate');
$('btnHelper').onclick = () => hud.send('installHelper');
$('btnAlias').onclick = () => navigator.clipboard.writeText(`alias claude='${(state.helper && state.helper.path) || '~/.buddy-hud/bin/buddy-claude'}'`).catch(() => {});
$('optSkin').onchange = (e) => hud.send('set', { skin: e.target.value });
$('optPhone').onchange = (e) => hud.send('phone', { enabled: e.target.checked });
$('optPrivacy').onchange = (e) => hud.send('set', { privacy: e.target.checked });
$('btnHide').onclick = () => hud.send('hide');
$('btnClose').onclick = () => { drawer = false; render(); };
for (const [id, key] of [['alNotify', 'notify'], ['alSound', 'sound'], ['alDone', 'done'], ['alAsk', 'ask'], ['alStuck', 'stuck'], ['alDnd', 'dnd']])
  $(id).onchange = (e) => { hud.send('set', { alerts: { [key]: e.target.checked } }); if (key === 'sound' && e.target.checked) chime('done'); };
hud.onRefit(() => { lastFit = ''; fit(); });

// ---------- reply ----------
function send() {
  const text = $('replyInput').value.trim();
  if (!text || !selected) return;
  hud.send('reply', { sessionId: selected, text });
  $('replyInput').value = ''; autosize();
}
const autosize = () => { const t = $('replyInput'); t.style.height = 'auto'; t.style.height = Math.min(t.scrollHeight, 90) + 'px'; t.style.overflowY = t.scrollHeight > 90 ? 'auto' : 'hidden'; };
$('btnSend').onclick = send;
$('btnSkip').onclick = () => selected && hud.send('release', selected);
$('replyInput').addEventListener('input', () => { autosize(); const t = !!$('replyInput').value; if (t !== lastUi.typing) { lastUi = { ...lastUi, typing: t }; hud.send('ui', lastUi); } });
$('replyInput').addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } });

// ---------- helpers ----------
function diffHtml(d, max = 14) {
  if (!d || !d.hunks) return '';
  let budget = max;
  const out = d.hunks.map((h) => {
    const head = `<div class="hunk">${d.isNew ? '✨ new file' : h.start ? 'line ' + h.start : 'line ?'} · <span style="color:#ffc2c2">−${h.del.length}</span> <span style="color:#b6f0cc">+${h.add.length}</span></div>`;
    const take = (arr, cls, sign) => arr.slice(0, Math.max(0, budget)).map((l) => { budget--; return `<div class="l ${cls}">${sign} ${esc(l)}</div>`; }).join('');
    return head + take(h.del, 'del', '-') + take(h.add, 'add', '+');
  }).join('');
  return `<div class="diff">${out}</div>${d.diffId ? `<div><button class="linkbtn" data-diff="${d.diffId}">Open full diff ↗</button></div>` : ''}`;
}

function actFor(s, perms) {
  // desktop-pet moves win only while Claude doesn't need the buddy for real work
  if (pet.phase === 'run') return { act: 'run', eyes: 'wide', item: '❗', item2: '', look: '' };
  if (pet.phase && !perms.length && (!s || ['idle', 'done'].includes(s.status))) {
    if (pet.phase === 'walk') return { act: 'walk', eyes: 'open', item: '', item2: '', look: '' };
    if (pet.phase === 'look') return { act: 'look', eyes: 'open', item: '❔', item2: '', look: '' };
    if (pet.phase === 'sit') return { act: 'sit', eyes: 'happy', item: '🎵', item2: '', look: '' };
    if (pet.phase === 'sleep') return { act: 'idle', eyes: 'sleep', item: '💤', item2: '', look: '' };
  }
  if (perms.length) return { act: 'wait', eyes: 'wide', item: '❗', item2: '', look: '' };
  if (!s) return { act: 'idle', eyes: 'sleep', item: '💤', item2: '', look: '' };
  if (s.tool) {
    const a = ACT[s.tool.name] || (s.tool.name.startsWith('mcp__') ? 'type' : 'type');
    return { act: a, eyes: a === 'type' ? 'squint' : 'open', item: s.tool.emoji, item2: ITEM2[s.tool.name] || '', look: a === 'type' ? '' : '' };
  }
  switch (s.status) {
    case 'tool': // between tools (e.g. a permission was just answered)
    case 'thinking': return { act: 'think', eyes: 'open', item: '💭', item2: '', look: 'up' };
    case 'waiting': return { act: 'wait', eyes: 'wide', item: '💬', item2: '', look: '' };
    case 'permission': return { act: 'wait', eyes: 'wide', item: '🔐', item2: '', look: '' };
    case 'done': return { act: 'wait', eyes: 'wide', item: '💬', item2: '', look: '' };
    default: return { act: 'idle', eyes: 'sleep', item: '💤', item2: '', look: '' };
  }
}

// ---------- render ----------
function render() {
  const ss = state.sessions;
  ss.forEach((x) => { x.files = x.files || { read: [], edited: [] }; });
  if (!ss.find((s) => s.id === selected)) selected = ss[0] ? ss[0].id : null;
  // a session holding a reply or a permission must never hide behind another tab
  const needy = state.perms.length ? ss.find((x) => x.id === state.perms[0].sessionId) : ss.find((x) => x.canReply);
  const cur0 = ss.find((x) => x.id === selected);
  if (needy && cur0 && !cur0.canReply && !state.perms.some((p) => p.sessionId === cur0.id)) selected = needy.id;
  const s = ss.find((x) => x.id === selected);
  if (selected !== lastSel) { lastSel = selected; hud.send('select', selected); }
  const perms = state.perms;
  let a = actFor(s, perms);
  const farm = ((state.settings && state.settings.aura) === 'max') && ['idle'].includes(a.act) && !(pet.phase === 'walk' || pet.phase === 'run');
  if (farm) a = { act: 'farm', eyes: 'open', item: '🌊', item2: '', look: '' };
  document.body.dataset.act = a.act;

  // theme follows the model (picked model shows immediately, real model confirms later)
  const fam = (s && famOf(s.model)) || 'sonnet';
  const th = FAMILIES[fam] || FAMILIES.sonnet;
  const rs = document.documentElement.style;
  rs.setProperty('--orange', th.c); rs.setProperty('--orange2', th.c2);
  document.body.classList.toggle('privacy', !!(state.settings && state.settings.privacy));
  const label = s ? (modelLabel(s.model) || th.name) : '';

  const zoom = (state.settings && state.settings.scale) || 1;
  document.documentElement.style.setProperty('--maxdrawer', Math.max(220, Math.floor(screen.availHeight / zoom - 330)) + 'px');
  // 3D look: load the bundle on first use; fall back to Classic if WebGL is unavailable
  const skin = (state.settings && state.settings.skin) || 'bot';
  if (skin === '3d' && !window.__buddy3d && !window.__buddy3dLoading) {
    window.__buddy3dLoading = true;
    const sc = document.createElement('script'); sc.src = 'buddy3d.bundle.js';
    sc.onload = () => { if (!window.__buddy3d || !window.__buddy3d.ok) { console.warn('3D unavailable:', window.__buddy3d && window.__buddy3d.error); hud.send('set', { skin: 'classic' }); } render(); };
    document.body.appendChild(sc);
  }
  document.body.classList.toggle('skin3d', skin === '3d' && !!(window.__buddy3d && window.__buddy3d.ok));
  const svg = $('clawd');
  svg.style.setProperty('--dir', String(pet.dir || 1));
  const st0 = state.settings || {};
  svg.dataset.skin = st0.skin || 'bot';
  svg.dataset.shades = farm ? 'sunglasses' : (st0.shades || 'none'); svg.dataset.coffee = st0.coffee ? '1' : '0'; svg.dataset.think = st0.thinkPose || 'scratch';
  document.body.dataset.aura = st0.aura || 'off';
  svg.dataset.act = a.act; svg.dataset.eyes = a.eyes; svg.dataset.look = a.look;
  $('item').textContent = a.item; $('item2').textContent = a.item2;
  if (window.__buddy3d && window.__buddy3d.ok && skin === '3d') window.__buddy3d.update({ act: a.act, eyes: a.eyes, item: a.item, dir: pet.dir, color: th.c, color2: th.c2, shades: farm ? 'sunglasses' : (st0.shades || 'none'), coffee: !!st0.coffee, think: st0.thinkPose || 'scratch' });

  // context pill
  const pct = s && s.ctx.max ? Math.min(100, (s.ctx.used / s.ctx.max) * 100) : 0;
  const col = pct > 85 ? 'var(--red)' : pct > 60 ? 'var(--amber)' : 'var(--green)';
  $('arc').style.strokeDasharray = `${pct} 100`; $('arc').style.stroke = col;
  $('pillPct').textContent = s ? `${pct.toFixed(0)}% · ${fmt(s.ctx.used)}` : '—';
  $('pillSub').textContent = s ? `📖 ${s.files.read.length}  ✏️ ${s.files.edited.length}  💻 ${s.stats.cmds}` : 'no session';
  $('pill').title = s ? `${s.files.read.length} files read · ${s.files.edited.length} files edited · ${s.stats.cmds} commands` : '';

  // health
  const hl = state.health || { state: 'ok', msg: '' };
  $('hdot').className = hl.state; $('hdot').title = hl.msg;

  // permission bubbles
  setHtml($('perms'), perms.map((p) => {
    const proj = (ss.find((x) => x.id === p.sessionId) || {}).project || '';
    return `<div class="bubble perm"><div class="h">${p.emoji} <span>Can I use <b>${esc(p.tool)}</b>?</span><span class="grow"></span><span class="dim">${esc(proj)}</span></div>
      <div class="sub">${esc(p.summary)}</div>${diffHtml(p.diff)}
      <div class="acts"><button class="allow" data-d="allow" data-id="${p.id}">✅ Allow</button><button class="deny" data-d="deny" data-id="${p.id}">⛔ Deny</button><button data-d="terminal" data-id="${p.id}">⌨️ Terminal</button></div></div>`;
  }).join(''));
  $('perms').querySelectorAll('button').forEach((b) => (b.onclick = () => hud.send('decide', { id: b.dataset.id, behavior: b.dataset.d })));

  // action bubble: current tool, or last tool for 3s, or done summary
  const act = $('action');
  let html = '';
  if (s && s.tool && !perms.length) {
    html = `<div class="h"><span class="dot"></span>${s.tool.emoji} <span>${VERB[s.tool.name] || esc(s.tool.name)}</span><span class="grow"></span><span class="dim el" data-since="${(s.turn && s.turn.start) || s.tool.started}"></span></div><div class="sub">${esc(s.tool.text)}</div>${diffHtml(s.tool.diff, 10)}`;
  } else if (s && !perms.length) {
    const last = s.feed.find((f) => f.kind === 'tool' && !f.running);
    const recent = last && Date.now() - (last.t + (last.ms || 0)) < 3500;
    if (s.status === 'done' && Date.now() - s.updated > 30000) {
      html = '';
    } else if (s.status === 'done') {
      const sm = s.summary;
      const sumHtml = sm ? `<div class="sum">${sm.away ? `<span class="away">While you were away (${dur(sm.ms)})</span>` : ''}<span class="pillx">⏱ ${dur(sm.ms)}</span>${sm.edited.slice(0, 6).map((p) => `<span class="pillx" data-open="${esc(p)}" title="${esc(p)}">✏️ ${esc(base(p))}</span>`).join('')}${sm.edited.length > 6 ? `<span class="pillx">+${sm.edited.length - 6} more</span>` : ''}<span class="pillx">📖 ${sm.reads} read</span><span class="pillx">💻 ${sm.cmds} cmd${sm.cmds === 1 ? '' : 's'}</span>${sm.errors ? `<span class="pillx bad">⚠️ ${sm.errors} error${sm.errors === 1 ? '' : 's'}</span>` : ''}</div>` : '';
      html = `<div class="h">💬 <span>Claude</span></div>${sumHtml}${s.lastMsg ? `<div class="say">${md(s.lastMsg)}</div>` : ''}`;
    } else if (s.status === 'waiting') {
      html = `<div class="h">🙋 <span>${esc(s.note || 'Needs you')}</span></div>`;
    } else if (s.status === 'thinking' && recent) {
      html = `<div class="fade"><div class="h">✓ ${last.emoji} <span>${esc(last.tool)}</span></div><div class="sub">${esc(last.text)}</div></div>`;
    } else if (s.status === 'thinking') {
      html = `<div class="h"><span class="dot"></span>💭 <span>Thinking…</span><span class="grow"></span><span class="dim el" data-since="${(s.turn && s.turn.start) || Date.now()}"></span></div>${s.prompt ? `<div class="sub">${esc(s.prompt)}</div>` : ''}`;
    }
  }
  act.hidden = !html || drawer;
  if (html && !drawer) setHtml(act, html);

  // drawer
  $('drawer').hidden = !drawer;
  $('drawer').dataset.tab = tab;
  document.querySelectorAll('#drawer [data-t]').forEach((el) => { el.hidden = el.dataset.t !== tab; });
  document.querySelectorAll('.seg').forEach((b) => b.classList.toggle('on', b.dataset.tab === tab));
  $('btnChat').classList.toggle('on', drawer && tab === 'chat'); $('btnSet').classList.toggle('on', drawer && tab === 'settings'); $('btnCust').classList.toggle('on', drawer && tab === 'custom');
  if (drawer) {
    $('optReply').checked = !!state.settings.replyMode;
    $('optScale').value = String(state.settings.scale || 1);
    $('optPrivacy').checked = !!state.settings.privacy;
    $('optWalk').checked = state.settings.walk !== false;
    $('optAlways').checked = state.settings.alwaysShow !== false;
    setHtml($('lastmsg'), s && s.lastMsg ? `<div class="fh">💬 Claude’s last message</div><div class="say">${md(s.lastMsg)}</div>` : '');
    $('ctxNote').textContent = s ? `${fmt(s.ctx.max)} window for ${s.project}. ${s.ctx.why || ''}` : 'Detected automatically from the model Claude is using.';
    $('optShades').value = st0.shades || 'none'; $('optCoffee').checked = !!st0.coffee; $('optThink').value = st0.thinkPose || 'scratch'; $('optAura').value = st0.aura || 'off';
    const hp = state.helper || {};
    $('helperNote').textContent = !hp.supported ? 'Not available on Windows yet.' : hp.installed ? `Installed. Start Claude Code with ${hp.path} (or press "Copy alias", paste it in your shell profile, and keep typing \`claude\`). Sessions started that way can receive your chat messages even while idle.` : 'Lets you chat from the buddy with an idle Claude Code session on macOS and Linux, with no tmux. One click installs a tiny launcher you start Claude with.';
    $('btnHelper').hidden = !hp.supported || hp.installed; $('btnAlias').hidden = !hp.supported || !hp.installed;
    const up0 = state.update; $('optUpd').checked = st0.checkUpdates !== false; $('updStatus').textContent = up0 && up0.stage === 'downloading' ? `downloading ${up0.version}… ${Math.round(up0.progress * 100)}%` : (state.updateStatus || '');
    $('optSkin').value = (state.settings && state.settings.skin) || 'bot';
    const ph = state.phone || {};
    $('optPhone').checked = !!ph.enabled;
    $('phoneBox').hidden = !ph.enabled;
    const subnet = ph.ip ? ph.ip.split('.').slice(0, 3).join('.') + '.0/24' : '192.168.1.0/24';
    const tip = ph.platform === 'linux' ? `Can't connect? Your firewall may block port 47801. Run: <code>sudo ufw allow from ${subnet} to any port 47801 proto tcp</code>` : ph.platform === 'darwin' ? `Can't connect? Allow incoming connections for Buddy HUD in System Settings → Network → Firewall.` : `Can't connect? Allow Buddy HUD through Windows Defender Firewall on private networks.`;
    setHtml($('phoneBox'), ph.enabled ? `${ph.qr ? `<img alt="QR" src="${ph.qr}">` : ''}<div style="flex:1"><div class="url">${esc(ph.url)}</div><div class="warn">Anyone on this Wi-Fi who has this link can approve commands. Use only on networks you trust. <button class="linkbtn" id="phoneNew">New link</button></div></div><div class="stat">${ph.seenAt ? '✅ Phone connected' : '⏳ Waiting for your phone to open the link…'}</div><div class="tip">Your phone must be on the same Wi-Fi as this computer (${esc(ph.ip || '')}). ${tip}</div>` : '');
    if ($('phoneNew')) $('phoneNew').onclick = () => hud.send('phone', { enabled: true, regenerate: true });
    // usage
    const u = s && s.usage, dd = state.daily;
    const money = (c, partial) => '≈$' + c.toFixed(c < 10 ? 2 : 1) + (partial ? '+' : '');
    setHtml($('usage'), s ? `<div class="row"><span>Tokens this session</span><span>${u ? `${fmt(u.in + u.cacheRead + u.cacheWrite)} in · ${fmt(u.out)} out` : '—'}</span></div><div class="row"><span>Estimated cost</span><span title="${u && u.unpriced.length ? 'No price known for: ' + esc(u.unpriced.join(', ')) + '. Add prices in ~/.buddy-hud/prices.json' : 'Uses public list prices'}">${u ? (u.cost > 0 || !u.unpriced.length ? money(u.cost, u.unpriced.length) : 'price unknown') + (u.unpriced.length ? ' (some models unpriced)' : '') : '—'}</span></div><div class="row"><span>Aura 🔥</span><span>${(st0.auraScore || 0).toLocaleString()}</span></div><div class="row"><span>Today (all sessions)</span><span>${dd ? `${fmt(dd.in + dd.cr + dd.cw)} in · ${fmt(dd.out)} out · ${dd.cost > 0 || !dd.partial ? money(dd.cost, dd.partial) : 'price unknown'}` : '—'}</span></div>` : '');
    $('ver').textContent = 'Buddy HUD v' + (state.version || '');
    const st = state.selfTest;
    setHtml($('health'), `<span class="msg">${hl.state === 'ok' ? '🟢' : hl.state === 'waiting' ? '⚪' : hl.state === 'off' ? '🔴' : '🟠'} ${esc(hl.msg)}</span>${hl.state === 'off' || hl.state === 'partial' ? '<button id="btnFix">Fix</button>' : ''}<button id="btnSelf">Self-test</button>${st ? `<span class="st">${st.ok === null ? '⏳' : st.ok ? '✅' : '❌'} ${esc(st.detail)}</span>` : ''}`);
    $('btnSelf').onclick = () => hud.send('selfTest');
    if ($('btnFix')) $('btnFix').onclick = () => hud.send('installHooks');
    const al = (state.settings && state.settings.alerts) || {};
    $('alNotify').checked = al.notify !== false; $('alSound').checked = al.sound !== false; $('alDone').checked = al.done !== false;
    $('alAsk').checked = al.ask !== false; $('alStuck').checked = al.stuck !== false; $('alDnd').checked = !!al.dnd;
    $('tabs').hidden = ss.length < 2;
    setHtml($('tabs'), ss.map((x) => `<button data-id="${esc(x.id)}" class="${x.id === selected ? 'on' : ''}">${esc(x.project)}</button>`).join(''));
    $('tabs').querySelectorAll('button').forEach((b) => (b.onclick = () => { selected = b.dataset.id; render(); }));
    setHtml($('chips'), s ? `<span class="chip" title="${esc(s.ctx.why || '')}">🧠 ${fmt(s.ctx.used)} / ${fmt(s.ctx.max)} <small style="opacity:.6">auto</small></span><span class="chip">📖 ${s.stats.reads} reads</span><span class="chip">✏️ ${s.stats.edits} edits</span><span class="chip">💻 ${s.stats.cmds} cmds</span><span class="chip">🛠️ ${s.stats.other} other</span><span class="chip proj">${esc(s.project)}</span>` : '');
    setHtml($('files'), s ? `<div><div class="fh">✏️ Edited — ${s.files.edited.length} file${s.files.edited.length === 1 ? '' : 's'}</div><div class="fl ed">${s.files.edited.slice(-12).reverse().map((p) => `<span data-open="${esc(p)}" title="${esc(p)}">${esc(base(p))}</span>`).join('') || '<span>none yet</span>'}</div></div><div><div class="fh">📖 Read — ${s.files.read.length} file${s.files.read.length === 1 ? '' : 's'}</div><div class="fl">${s.files.read.slice(-12).reverse().map((p) => `<span data-open="${esc(p)}" title="${esc(p)}">${esc(base(p))}</span>`).join('') || '<span>none yet</span>'}</div></div>` : '');
    setHtml($('feed'), s ? s.feed.map((f) => `<div class="item ${f.kind || ''}" data-id="${f.id}"><span class="e">${f.running ? '⏳' : f.emoji}</span><span class="t">${f.tool ? `<b>${esc(f.tool)}</b> ` : ''}${esc(plain(f.text))}</span><span class="m">${f.ms != null ? f.ms + 'ms · ' : ''}<span class="ago" data-t="${f.t}"></span></span>${f.diff && open.has(f.id) ? diffHtml(f.diff, 30) : ''}</div>`).join('') : '');
    $('feed').querySelectorAll('.item').forEach((el) => (el.onclick = () => { const id = +el.dataset.id; open.has(id) ? open.delete(id) : open.add(id); render(); }));
  }

  // update available (shown once per version until dismissed; also always reachable in Settings)
  const up = state.update;
  // macOS self-update downloads quietly; the bar appears once it is ready to install (or if it has to fall back to a manual download)
  const showUpd = !!up && up.stage !== 'downloading' && state.settings.dismissedUpdate !== up.version;
  $('updbar').hidden = !showUpd;
  if (showUpd && up.stage === 'ready') {
    setHtml($('updbar'), `<div class="h">⬆️ <span>Buddy HUD ${esc(up.version)} is ready to install</span><span class="grow"></span><span class="dim">you have v${esc(state.version || '')}</span></div>${up.notes ? `<div class="notes">${esc(up.notes)}</div>` : ''}<div class="btnRow"><button class="primary" id="updGo">Restart to update</button><button id="updPage">Release notes</button><button id="updLater">Later</button></div><div class="dim">Later installs it the next time you quit.</div>`);
    $('updGo').onclick = () => hud.send('installUpdate');
  } else if (showUpd) {
    setHtml($('updbar'), `<div class="h">⬆️ <span>Buddy HUD ${esc(up.version)} is available</span><span class="grow"></span><span class="dim">you have v${esc(state.version || '')}</span></div>${up.notes ? `<div class="notes">${esc(up.notes)}</div>` : ''}${up.err ? `<div class="dim">Couldn’t update automatically: ${esc(up.err)}</div>` : ''}<div class="btnRow"><button class="primary" id="updGo">Download${up.download ? '' : ' page'}</button><button id="updPage">Release notes</button><button id="updLater">Later</button></div>`);
    $('updGo').onclick = () => hud.send('openUpdate', 'download');
  }
  if (showUpd) { $('updPage').onclick = () => hud.send('openUpdate', 'page'); $('updLater').onclick = () => hud.send('dismissUpdate'); }

  // onboarding / empty states
  const ob = $('onboard');
  if (state.hooksInstalled === false) {
    ob.hidden = false;
    setHtml(ob, `<div class="h">👋 <span>Hi! I’m your Claude Code buddy</span></div><div class="sub" style="font-family:inherit">Connect me so I can show what Claude is doing. This adds a few hooks to <code>~/.claude/settings.json</code> (backup saved, removable any time).</div><div class="btnRow"><button class="primary" id="obInstall">Connect to Claude Code</button></div>`);
    $('obInstall').onclick = () => hud.send('installHooks');
  } else if (!ss.length) {
    ob.hidden = false;
    setHtml(ob, `<div class="h">😴 <span>Waiting for Claude Code…</span></div><div class="sub" style="font-family:inherit">Start <code>claude</code> in a terminal and I’ll wake up. New sessions only; restart any that were already running.</div>`);
  } else ob.hidden = true;

  // session strip: every Claude Code session at a glance; the selected one also carries the model name
  const stat = (x) => (state.perms.some((p) => p.sessionId === x.id) || ['permission', 'waiting'].includes(x.status) ? 'needs' : ['thinking', 'tool'].includes(x.status) ? 'working' : x.status === 'done' ? 'done' : 'idle');
  $('strip').hidden = !ss.length;
  setHtml($('strip'), ss.map((x) => `<div class="sc ${stat(x)} ${x.id === selected ? 'on' : ''}" data-id="${esc(x.id)}" title="${esc(x.cwd)}"><i></i><b>${esc(x.project)}</b>${x.id === selected && label ? `<small>${esc(label)}</small>` : ''}<button data-dismiss="${esc(x.id)}" title="Hide this session">✕</button></div>`).join(''));
  $('strip').querySelectorAll('.sc').forEach((el) => (el.onclick = (e) => {
    if (e.target.closest('[data-dismiss]')) { hud.send('dismiss', e.target.closest('[data-dismiss]').dataset.dismiss); return; }
    selected = el.dataset.id; render();
  }));

  // chat: the live conversation of the selected session, in the buddy
  if (drawer && tab === 'chat') {
    const ch = state.chat && s && state.chat.id === s.id ? state.chat : null;
    const sttTxt = !s ? '' : (stat(s) === 'working' ? '💭 working…' : stat(s) === 'needs' ? '🙋 needs you' : stat(s) === 'done' ? '💬 finished' : '😴 idle');
    setHtml($('chathead'), s ? `<span class="nm">${esc(s.project)}</span><span class="stt">${sttTxt}</span><span class="grow"></span><label title="While on and this chat is open, Claude pauses for up to a minute at the end of each turn so you can answer from here (the terminal shows “running stop hooks” meanwhile). Closing the chat or switching it off releases it."><input type="checkbox" id="chatLive" ${state.settings.replyMode ? 'checked' : ''}> Live chat</label>` : '<span class="stt">No session selected</span>');
    if ($('chatLive')) $('chatLive').onchange = (e) => hud.send('set', { replyMode: e.target.checked });
    const log = $('chatlog');
    const near = log.scrollHeight - log.scrollTop - log.clientHeight < 70 || chatTabSeen !== (s && s.id);
    const msgs = ch ? ch.msgs.slice(-40) : [];
    const pend = ch ? ch.pending : [];
    const html = msgs.map((m) => m.role === 'user'
      ? `<div class="cm user">${esc(m.text)}</div>`
      : `<div class="cm asst">${m.text ? md(m.text) : ''}${m.tools.length ? `<div class="tl">${m.tools.map((t) => `<span>${esc(t.name)}${t.text ? ' · ' + esc(t.text) : ''}</span>`).join('')}</div>` : ''}</div>`).join('')
      + pend.map((p) => `<div class="cm user pend">${esc(p.text)}<small>${p.mode === 'queued' ? '⏳ waiting for Claude’s next step (not delivered yet)' : '✓ sent to Claude'}</small></div>`).join('');
    setHtml(log, html || `<div class="empty">${s ? 'No messages yet in this session.' : 'Start Claude Code and it will show up here.'}</div>`);
    if (near) { log.scrollTop = log.scrollHeight; chatTabSeen = s && s.id; }
  }

  // reply bubble (auto when Claude waits, or in drawer)
  const can = s && s.canReply;
  const idle = s && s.status === 'done';
  const showReply = !!s && (can || drawer || (idle && s.canType));
  $('reply').hidden = !showReply;
  const wontDeliver = !!s && !can && !(idle && s.canType) && s && ['done', 'idle', 'waiting'].includes(s.status);
  $('replyHint').className = 'hint' + (can ? ' live' : wontDeliver ? ' warn' : '');
  if (!wontDeliver) $('replyHint').__html = null;
  if (can) $('replyHint').textContent = '🟢 Claude is waiting — your reply goes straight into the session';
  else if (idle && s && s.canType) $('replyHint').textContent = '⌨️ Typed into your tmux pane';
  else if (wontDeliver) {
    setHtml($('replyHint'), `⚠️ Claude is idle, and I can't type into this terminal. Your message <b>waits</b> until you start the next turn there. ${state.helper && state.helper.supported ? '<button class="linkbtn" id="hintHelper">Set up the terminal helper</button>' : ''}${state.settings.replyMode ? '' : ' <button class="linkbtn" id="hintHold">or turn on Live chat</button>'}`);
    if ($('hintHelper')) $('hintHelper').onclick = () => openTab('settings');
    if ($('hintHold')) $('hintHold').onclick = () => hud.send('set', { replyMode: true });
  } else $('replyHint').textContent = '📬 Claude is working — your message is delivered at its next step';
  $('btnSkip').hidden = !can;

  const ui = { drawer, typing: document.activeElement === $('replyInput') && !!$('replyInput').value };
  if (ui.drawer !== lastUi.drawer || ui.typing !== lastUi.typing) { lastUi = ui; hud.send('ui', ui); }
  tickClock();
  requestAnimationFrame(fit);
}

function fit() {
  const st = $('stage');
  const w = st.offsetWidth + 20, h = st.offsetHeight + 20;
  const k = w + 'x' + h;
  if (k !== lastFit) { lastFit = k; hud.send('fit', { w, h }); }
}
new ResizeObserver(fit).observe($('stage'));

hud.onState((s) => { state = s; if (s.pet) pet = s.pet; render(); });
window.__push = (s) => { state = s; render(); };
window.__ui = (o) => { if (o.sel) { const f = state.sessions.find((x) => x.id.startsWith(o.sel)); if (f) selected = f.id; } if (o.tab) tab = o.tab; if (o.log) console.log('DBG', JSON.stringify({ act: $('clawd').dataset.act, torso: document.querySelector('#clawd .torso').getBoundingClientRect(), mascot: $('mascot').getBoundingClientRect(), dpr: devicePixelRatio, iw: innerWidth, ih: innerHeight, zoom: getComputedStyle(document.documentElement).zoom })); if (o.pet) pet = o.pet; if (o.set) hud.send('set', o.set); if ('drawer' in o) drawer = o.drawer; render(); if (o.click) { const el = document.querySelector(o.click); if (el) el.click(); } };
setInterval(render, 1500);
render();

if (location.search.includes('promo') || location.search.includes('dance')) { const s = document.createElement('script'); s.src = location.search.includes('dance') ? 'dance.js' : 'promo.js'; document.body.appendChild(s); }

addEventListener('keydown', (e) => { if (e.key === 'Escape' && drawer) { drawer = false; render(); } });

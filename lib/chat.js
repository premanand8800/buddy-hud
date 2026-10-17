// Live conversation view from a Claude Code transcript (JSONL). Incremental: each call reads only new bytes.
const fs = require('fs');
const path = require('path');

const MAX_MSGS = 80;
const clip = (s, n) => (s.length > n ? s.slice(0, n - 1) + '…' : s);

function toolText(name, i) {
  i = i && typeof i === 'object' ? i : {};
  const f = i.file_path || i.notebook_path;
  if (f) return path.basename(String(f));
  if (name === 'Bash') return clip(String(i.command || ''), 90);
  if (name === 'Grep') return clip('/' + (i.pattern || '') + '/', 60);
  if (name === 'Glob') return clip(String(i.pattern || ''), 60);
  if (name === 'WebFetch') return clip(String(i.url || ''), 70);
  if (name === 'WebSearch') return clip(String(i.query || ''), 70);
  if (name === 'Task' || name === 'Agent') return clip(String(i.description || ''), 70);
  return '';
}

// Strip things the terminal shows differently or hides; return '' to drop the line.
function cleanUserText(t) {
  t = String(t || '');
  t = t.replace(/<system-reminder>[\s\S]*?<\/system-reminder>/g, '')
    .replace(/<local-command-caveat>[\s\S]*?<\/local-command-caveat>/g, '')
    .replace(/<local-command-stdout>[\s\S]*?<\/local-command-stdout>/g, '')
    .replace(/<user-prompt-submit-hook>[\s\S]*?<\/user-prompt-submit-hook>/g, '').trim();
  const cmd = t.match(/^<command-name>\s*([^<]*)<\/command-name>(?:\s*<command-message>[\s\S]*?<\/command-message>)?(?:\s*<command-args>([\s\S]*?)<\/command-args>)?/);
  if (cmd) return (cmd[1] + (cmd[2] ? ' ' + cmd[2].trim() : '')).trim();
  return t;
}

function newState() { return { off: 0, rem: Buffer.alloc(0), msgs: [], byId: new Map() }; }

function ingest(st, o) {
  if (!o || o.isSidechain || o.isMeta || o.isCompactSummary) return;
  const m = o.message;
  if (!m) return;
  const ts = o.timestamp ? Date.parse(o.timestamp) : Date.now();
  if (o.type === 'user') {
    let text = '';
    if (typeof m.content === 'string') text = cleanUserText(m.content);
    else if (Array.isArray(m.content)) {
      const parts = [];
      for (const b of m.content) {
        if (b.type === 'text') parts.push(cleanUserText(b.text));
        else if (b.type === 'image') parts.push('[image]');
        // tool_result blocks are the machine's answer to a tool call, not something the user said
      }
      text = parts.filter(Boolean).join('\n').trim();
    }
    if (!text) return;
    st.msgs.push({ id: o.uuid || 'u' + st.msgs.length, role: 'user', text: clip(text, 6000), tools: [], ts });
  } else if (o.type === 'assistant' && Array.isArray(m.content)) {
    const id = m.id || o.uuid;
    let msg = st.byId.get(id);
    const fresh = !msg;
    if (fresh) { msg = { id, role: 'assistant', text: '', tools: [], ts, model: m.model }; st.byId.set(id, msg); }
    for (const b of m.content) {
      if (b.type === 'text' && b.text && b.text.trim()) msg.text = clip((msg.text ? msg.text + '\n\n' : '') + b.text.trim(), 12000);
      else if (b.type === 'tool_use') { const key = b.id || JSON.stringify(b.input).slice(0, 40); if (!msg.tools.some((t) => t.key === key)) msg.tools.push({ key, name: b.name, text: toolText(b.name, b.input) }); }
    }
    if (fresh) st.msgs.push(msg); // keep arrival order; later blocks of the same message mutate it in place
    if (!msg.text && !msg.tools.length) { /* thinking-only so far: shown once it has text or tools */ }
  }
  while (st.msgs.length > MAX_MSGS) { const d = st.msgs.shift(); if (d.role === 'assistant') st.byId.delete(d.id); }
}

// Returns messages (oldest first) that have something to show.
function scan(holder, file) {
  if (!file) return [];
  const st = holder._chatState || (holder._chatState = newState());
  let size;
  try { size = fs.statSync(file).size; } catch { return visible(st); }
  if (size < st.off) { Object.assign(st, newState()); }
  if (size === st.off) return visible(st);
  let fd;
  try {
    fd = fs.openSync(file, 'r');
    // first read of a big transcript: only the tail matters for a chat view
    if (st.off === 0 && size > 6 * 1024 * 1024) st.off = size - 6 * 1024 * 1024, st.skipFirst = true;
    while (st.off < size) {
      const len = Math.min(size - st.off, 8 * 1024 * 1024);
      const buf = Buffer.alloc(len);
      const n = fs.readSync(fd, buf, 0, len, st.off);
      if (!n) break;
      st.off += n;
      let data = Buffer.concat([st.rem, buf.subarray(0, n)]);
      const nl = data.lastIndexOf(10);
      if (nl < 0) { st.rem = data; continue; }
      st.rem = data.subarray(nl + 1);
      const lines = data.subarray(0, nl).toString('utf8').split('\n');
      if (st.skipFirst) { lines.shift(); st.skipFirst = false; } // partial line after a mid-file seek
      for (const line of lines) {
        if (!line.includes('"user"') && !line.includes('"assistant"')) continue;
        try { ingest(st, JSON.parse(line)); } catch { /* skip garbage */ }
      }
    }
  } catch { /* unreadable: keep what we have */ } finally { if (fd !== undefined) try { fs.closeSync(fd); } catch {} }
  return visible(st);
}

const visible = (st) => st.msgs.filter((m) => m.role === 'user' || m.text || m.tools.length);

module.exports = { scan, cleanUserText, toolText };

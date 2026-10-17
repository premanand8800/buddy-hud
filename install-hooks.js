#!/usr/bin/env node
// Adds / removes Buddy HUD hooks in ~/.claude/settings.json (idempotent, backs the file up first).
// Hooks are plain `curl` calls, so users need no Node install and the same command works on Linux, macOS and Windows 10+.
const fs = require('fs');
const os = require('os');
const path = require('path');

const FILE = path.join(os.homedir(), '.claude', 'settings.json');
const URL = `http://127.0.0.1:${process.env.BUDDY_PORT || 47800}/hook`;
const LEGACY = 'claude-hud/hook.js';
// Permission / Stop hooks wait for the overlay, so they get a long timeout and no curl cap.
const EVENTS = { SessionStart: 0, SessionEnd: 0, UserPromptSubmit: 0, PreToolUse: 0, PostToolUse: 0, Notification: 0, SubagentStop: 0, PermissionRequest: 900, Stop: 900 };

// POSIX: `|| true` keeps Claude Code quiet when the app is not running.
// Windows: Claude Code runs hooks through Git Bash, which rewrites a bare "/c" into "C:/" (MSYS path conversion),
// so any `cmd /c "..."` wrapper turns into an interactive cmd that executes the hook's JSON as commands.
// Plain curl.exe with a quoted "@-" works unchanged in Git Bash, cmd.exe and PowerShell 5.1. Trade-off: if the app is
// not running, curl exits non-zero and Claude Code shows a non-blocking hook error.
const command = (long) => process.platform === 'win32'
  ? `curl.exe -s ${long ? '' : '-m 3 '}-X POST -H Content-Type:application/json --data-binary "@-" ${URL}`
  : `curl -s ${long ? '' : '-m 3 '}-X POST -H "Content-Type: application/json" -H "X-Buddy-Tmux: \${TMUX:-}" -H "X-Buddy-Pane: \${TMUX_PANE:-}" -H "X-Buddy-Pty: \${BUDDY_PTY_SOCK:-}" --data-binary @- ${URL} || true`;

function readSettings() {
  if (!fs.existsSync(FILE)) return {};
  const raw = fs.readFileSync(FILE, 'utf8');
  return raw.trim() ? JSON.parse(raw) : {};
}
function writeSettings(settings) {
  fs.mkdirSync(path.dirname(FILE), { recursive: true });
  const tmp = FILE + '.tmp-buddy';
  fs.writeFileSync(tmp, JSON.stringify(settings, null, 2) + '\n');
  fs.renameSync(tmp, FILE); // atomic: Claude Code never sees a half-written file
}
function backupOnce() { if (fs.existsSync(FILE) && !fs.existsSync(FILE + '.bak-buddy-hud')) fs.copyFileSync(FILE, FILE + '.bak-buddy-hud'); }

function run(uninstall) {
  const settings = readSettings();
  backupOnce();
  settings.hooks = settings.hooks || {};
  const ours = (h) => String(h.command || '').includes(URL) || String(h.command || '').includes(LEGACY);
  for (const [ev, timeout] of Object.entries(EVENTS)) {
    const groups = (settings.hooks[ev] || [])
      .map((g) => ({ ...g, hooks: (g.hooks || []).filter((h) => !ours(h)) }))
      .filter((g) => g.hooks.length);
    if (!uninstall) groups.push({ matcher: '*', hooks: [{ type: 'command', command: command(!!timeout), timeout: timeout || 5 }] });
    if (groups.length) settings.hooks[ev] = groups; else delete settings.hooks[ev];
  }
  if (!Object.keys(settings.hooks).length) delete settings.hooks;
  writeSettings(settings);
  return uninstall ? 'Hooks removed from ' + FILE : 'Hooks installed in ' + FILE + ' - restart running Claude Code sessions';
}

// Hooks written by v0.2.0-v0.4.1 on Windows used `cmd /c`, which is unsafe under Git Bash (see above).
function hasUnsafeWindowsHook() {
  try { return fs.readFileSync(FILE, 'utf8').includes('cmd /c \\"curl.exe'); } catch { return false; }
}

// Hooks from before the terminal helper existed do not forward BUDDY_PTY_SOCK; re-run the installer to add it.
function hasOutdatedHooks() {
  try { const t = fs.readFileSync(FILE, 'utf8'); return process.platform !== 'win32' && t.includes('X-Buddy-Tmux') && !t.includes('X-Buddy-Pty'); } catch { return false; }
}

module.exports = { run, hasUnsafeWindowsHook, hasOutdatedHooks };
if (require.main === module) console.log(run(process.argv.includes('--uninstall')));

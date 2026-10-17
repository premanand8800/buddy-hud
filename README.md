# Buddy HUD

A floating pixel buddy for [Claude Code](https://claude.com/claude-code). It sits on top of your windows and acts out what Claude is doing, so you can see it without watching the terminal.

> Unofficial community project. Not affiliated with or endorsed by Anthropic.

![preview](docs/preview.png)

[Watch the 40-second demo](docs/demo.mp4)

## What it does

- **The buddy reacts to the work.** Typing hands for edits and commands, eyes sweeping for reads, a swinging magnifier for searches, a hand on the head while thinking, a wave when Claude needs you, asleep when idle.
- **Live diffs.** See the file, the line number and the exact lines Claude is changing.
- **File counts.** The pill beside the buddy always shows unique files read and edited plus commands run. Open details for the file lists.
- **Model colours.** The buddy and the UI change colour to match the model Claude is using, with the model name under the buddy.
- **Context window.** A ring shows how full the context is. The window size (200k or 1M) is detected automatically from the model Claude Code is using; there is nothing to configure.
- **Readable replies.** Claude's last message renders as formatted text (bold, code, lists), not raw markdown.
- **Privacy mode.** One toggle blurs paths, code and conversation, handy for screen sharing and streaming.
- **Permissions.** Allow, Deny or "ask in terminal" from the overlay, with a desktop notification.
- **Replies.** When Claude stops, its last message appears in a bubble. Type back from the overlay (see [Replying](#replying)).
- **Alerts.** Sound and desktop notification when Claude finishes, needs you, seems stuck (3 min of silence) or the context is 85% / 95% full. Per-alert switches and do-not-disturb.
- **Timers and summary.** Live elapsed time while Claude works. When it finishes you see how long it took, the files it edited (click to open), commands run and errors, flagged "While you were away" if you were not looking.
- **Usage and cost.** Tokens per session and today, with an estimated cost for models whose price is known (add or override prices in `~/.buddy-hud/prices.json`, e.g. `{"claude-opus-5-5":[5,25]}` in USD per million tokens in/out). Unpriced models are counted in tokens only.
- **Full diffs.** "Open full diff" shows the whole change in its own window.
- **Health indicator.** A dot on the pill: green connected, grey waiting, amber missing hooks or silent, red not installed. Details and a self-test button in the panel and tray.
- **Phone access (opt-in).** Approve permissions and reply from your phone on the same Wi-Fi. Off by default; see Privacy.
- **Walks around.** When Claude is idle the buddy strolls along your screen, stops to look around, sits down or naps. When Claude needs you it runs back to the spot where you parked it and waves. Drag it to set its home; turn walking off in settings or the tray.
- **Accessories and aura.** Sunglasses or goggles, a coffee mug it sips from, a hand-on-chin thinking pose, and an aura (up to full "aura farming"), all in Customize.
- **Looks.** Bot (default), Cat, Classic (logo homage), or **3D (beta)**: a soft-voxel buddy with real lighting that turns to face where it walks, types on a little keyboard, holds up a book while reading and swings a magnifying glass while searching. 3D uses more CPU on machines without GPU acceleration (measured on a laptop without it: about 10% asleep, about 34% while Claude works, versus about 8% / 13% for the flat looks).
- **Every session, live chat.** All your Claude Code sessions appear as chips (even ones started before Buddy HUD). The 💬 Chat tab shows the selected session's conversation live and lets you reply from there. Delivery depends on the situation, see [Replying](#replying).

Click the buddy (or the pill) for details; the ⚙️ and 🎨 buttons beside it open Settings (alerts, privacy, phone) and Customize (look, size, walking). Drag it anywhere.

## Install

Download the installer for your system from the [Releases page](https://github.com/premanand8800/buddy-hud/releases):

| OS | File |
|---|---|
| Linux | `.AppImage` or `.deb` |
| macOS | `.dmg` (`arm64` for Apple Silicon, `x64` for Intel) |
| Windows | `win-setup.exe` installer or `win-portable.exe` |

On first launch Buddy HUD asks to add its hooks to `~/.claude/settings.json` (a backup is saved as `settings.json.bak-buddy-hud`) and to start at login. Both are in the tray menu later.

> **Unsigned builds.** macOS: the app is ad-hoc signed but not notarized. Drag it to Applications, then right-click it and choose Open (on macOS 15+ use System Settings, Privacy & Security, "Open Anyway"), or run `xattr -cr "/Applications/Buddy HUD.app"` once. If an older build says "Buddy HUD is damaged", that same `xattr` command fixes it. Windows: on the SmartScreen warning click "More info", then "Run anyway".

### From source

```bash
git clone https://github.com/premanand8800/buddy-hud && cd buddy-hud
npm install
npm start          # run the app
npm run hooks      # add the Claude Code hooks (npm run hooks:remove to undo)
```

Then restart any running Claude Code session.

## Model colours

Buddy HUD shows which model Claude is really using, from the conversation transcript, and tints the buddy and the UI to match (purple Opus, orange Sonnet, teal Haiku, magenta Fable). It is display only. It does not switch models; use `/model` in Claude Code for that.

## How it works

Claude Code [hooks](https://docs.claude.com/en/docs/claude-code/hooks) POST each event (tool use, prompt, stop, permission request) with `curl` to a server on `127.0.0.1:47800`. The Electron app turns those events into animation, diffs and bubbles. Nothing leaves your machine. The hooks need only `curl`, which ships with macOS, Linux and Windows 10+.

## Replying

- **Claude is working:** your message is queued and handed to Claude at its next step.
- **Claude is idle, inside tmux:** the text is typed straight into the pane.
- **Claude is idle, elsewhere:** the message is queued until Claude's next step. Start the next turn in the terminal.
- **Live chat (experimental):** turn it on in the Chat tab or Settings. While that session's chat panel is open, Claude pauses at the end of a turn (at most a minute) so your reply goes straight in. The terminal shows "running stop hooks" during the pause; closing the panel releases it.

## Platform notes

- **Linux:** runs through XWayland so it can stay on top under Wayland. Tested on Ubuntu 26.04 / GNOME.
- **Windows:** tested by a community member on Windows 11 (hooks, buddy, tests). **macOS:** not yet tested on a real machine. Please open an issue with what you see.
- On Windows the hook is a plain `curl.exe` call (works from Git Bash, cmd and PowerShell). If Buddy HUD is not running, Claude Code may show a harmless non-blocking hook error. Reported working on Windows 11 by a tester.

## Privacy and security

- Everything stays on your machine. The app listens only on `127.0.0.1:47800` and sends nothing to any server.
- It reads the conversation transcript Claude Code already writes locally, only to show context use and Claude's last message.
- The server rejects requests that carry a browser `Origin` header, so web pages cannot talk to it.
- Allow/Deny works because the hook waits for your click; if the app is closed, Claude Code falls back to its normal prompt.
- Turn on privacy mode in settings before screen sharing.
- **Phone access opens a second server on your local network** (port 47801, only while enabled). Anyone on the same Wi-Fi with the secret link can approve commands and reply as you. The link carries a random token, repeated wrong guesses are blocked, and traffic is plain HTTP, so use it only on networks you trust and press "New link" if it leaks.

## Troubleshooting

| Symptom | Fix |
|---|---|
| macOS: "Buddy HUD is damaged and can't be opened" | Run `xattr -cr "/Applications/Buddy HUD.app"` (clears the download quarantine flag), then open it again. Fixed in 0.4.5 and later. |
| Nothing appears | Start a new `claude` session (existing ones keep the old hook config). Check the tray menu: "Install Claude Code hooks". |
| "Port 47800 is already in use" | Another copy is running. Quit it from its tray icon. |
| Buddy is not on top (Linux) | Needs X11 or XWayland. The app relaunches itself with `--ozone-platform=x11`. |
| Terminal shows "hook running" | You enabled "Hold turn-end for replies". Turn it off in settings. |

## Uninstall

Tray menu, "Remove Claude Code hooks", then quit and delete the app. Settings live in `~/.buddy-hud/`.

## Development

```bash
npm start            # run
npm run dist         # build installers for the current OS
npm test             # unit + end-to-end tests (temp HOME, test ports)
npm run build:3d     # rebuild renderer/buddy3d.bundle.js after editing renderer/src/buddy3d.js
npm run promo        # re-record the demo video (needs ffmpeg)
```

Layout: `main.js` (server, window, tray), `renderer/` (mascot SVG, CSS animations, UI), `install-hooks.js`, `promo/` (deterministic video recorder).

## License

MIT. The pixel mascot is a fan homage to the Claude Code logo; if Anthropic asks, it will be replaced.

# Changelog

## 0.12.1

- **New release signing key.** The previous key was never installed in the release pipeline, so 0.12.0 shipped without update signatures and 0.11.0/0.12.0 cannot update themselves to it. Install 0.12.1 by hand once (Download button or the GitHub release page); automatic updates work again from 0.12.1 onward, on macOS, Windows and Linux.

## 0.12.0

- **Emotes** (🎭 button beside 💬 ⚙️ 🎨): a tray of 14 animated meme gestures: nope finger-wag, point, finger guns, dab, shrug, vibe with headphones, facepalm, shh, scheming, chef's-kiss "perfect", royal head pat, side-eye, nervous sweat and the scuba dance. While emoting the buddy gets a detailed cartoon look (eyes with lids and irises, brows, nose, mouths, blush, white gloves, sneakers and props) in every look, including 3D. Esc closes the tray.

- **Designer-made hero costumes.** The seven hero costumes are now real illustrated outfits instead of tinted shapes: masks and cowls, winged helmet, star-and-stripe chest, gold faceplate with arc reactor, collar and amulet, chest emblems, belts, boots and shading. One art source (`renderer/costumes.js`) drives both the flat looks and the 3D look, where it is painted onto the body as a texture.

- **Hero stunts are now real sequences** (flat looks and 3D): the web-slinger shoots a web to the far corner, swings across and lands, then shoots back; the thunder god's storm gathers, lightning strikes and he arrives in a shockwave, raises the hammer and leaves in a second bolt; the sorcerer opens a glowing portal, steps in and comes out of another one; the armored hero's suit assembles piece by piece (boots, gauntlets, faceplate, chest reactor), ignites its jets, flies across the sky and lands.

- **Hero costumes** (Customize → Hero costumes): seven original look-alike costumes with their own idle stunts, in the flat looks and in 3D: 🕷️ Web Slinger (swings from a web), ⚡ Thunder God (hammer, storm cloud and lightning), 🛡️ Star Shield (throws and catches its shield), 🤖 Iron Armor (hovers on jets, fires a repulsor), 🔮 Mystic Sorcerer (spinning mandalas), 🦸 Sky Guardian (flies) and 🦇 Night Vigilante (bat-signal, grapple, billowing cape). While Claude works the hero keeps its costume and does the usual typing/reading moves. They are unofficial fan-style costumes with neutral names, not licensed characters.

## 0.11.0

- **Automatic updates on macOS.** When a new release is out, Buddy HUD downloads it in the background, checks it against GitHub's SHA-256 checksum, verifies the app's identity, version and signature, and then offers **Restart to update** (or installs it the next time you quit). No browser download, so no "damaged" or "can't be checked for malware" prompt on updates. Needs the app in a folder it can write to (e.g. Applications); otherwise, and on Windows/Linux, you get the Download button as before. This version still has to be installed by hand once; updates after it are automatic.
- Fix: the update check treated every check as a new release, re-alerting every 12 hours.
- **Signed updates**: the macOS updater only installs a zip carrying a valid Ed25519 signature from the release key (checked against a public key built into the app), on top of the checksum and bundle checks. Releases are signed by a CI job that runs in a protected `release` environment and needs the owner's approval. Unsigned releases fall back to the manual Download button.
- **Automatic updates on Windows and Linux** (on top of the macOS updater above). When a newer release exists, Buddy HUD downloads it in the background, verifies the checksum **and** the release signature, then offers "Restart to update" (or installs on quit). Windows runs the signed installer silently; Linux replaces the AppImage in place. The portable `.exe`, `.deb` installs and unwritable locations still get the manual Download button.

## 0.10.1

- **Compact layout** by @Samir-kumal: the buddy now hugs the right edge in a narrow column. The 💬 ⚙️ 🎨 buttons stack beside the buddy, the usage pill sits under it on one line, session chips stack vertically and the selected one carries the model name. Shown even with a single session.

## 0.10.0

- **Chat with an idle Claude Code session from the buddy, on macOS and Linux, without tmux** (reported: a message sent from the chat to an idle terminal session was never delivered). New terminal helper `buddy-claude`: start Claude Code through it instead of `claude` (same arguments) and the buddy can type your message into that exact session, as if you had typed it. It is a small Python launcher that runs Claude Code in a pseudo-terminal and exposes an owner-only socket. One-click install and a "Copy alias" button in Settings → Terminal helper. Existing hooks are upgraded automatically so sessions can announce the helper.
- The "not delivered yet" hint now points to the helper. Windows support needs a different mechanism and is not included.

## 0.9.0

- **Update notifications.** Buddy HUD checks GitHub's public releases once at launch and every 12 hours (one request; switch it off in Settings → Updates, or press "Check now"). When a newer version exists, a bubble offers **Download** (the installer for your OS), **Release notes** or **Later**, and a desktop notification appears once. This is a notifier, not a silent installer: true auto-update needs code-signed builds on macOS, which this project does not have yet.

## 0.8.0

- **Aura farming mode** 🔥 (Customize → Aura → "Aura farming"), inspired by the Pacu Jalur "boat kid" meme: when Claude is idle the buddy puts on shades, stands in a little canoe on gentle waves and sways with its arms out, calm and unbothered, with a rotating aura. Works in the flat looks and 3D.
- **Aura score**: every finished turn floats a glowing "+500 aura" (a long task earns "LEGENDARY GRIND" +1000; a turn with tool errors is "CRINGE" −100). The running total is in Details. Popups only show when the aura setting is on.

## 0.7.0

- **Fix: terminal stuck on "running stop hooks".** Reply-hold mode held every turn's Stop hook open for up to 15 minutes. It now only holds while you have that session's chat panel open, for at most 60 s (extended only while you type a reply), and closing the panel releases it. The self-test never holds. Everyone who had hold mode on was seeing this.
- **More ways to customise** (Customize tab), in both the flat and 3D looks: 😎 sunglasses or 🥽 goggles, ☕ coffee break (holds a steaming mug and sips while idle), a 🤔 hand-on-chin thinking pose, and an aura (Glow, or 🔥 Aura farming with rotating rings and rising sparks) that follows the model colour.

## 0.6.0

- **Every Claude Code session is shown** (requested by a tester running three terminals). Sessions that were already open before Buddy HUD or its hooks existed are discovered from their transcripts. A strip of session chips shows each one's state (working, needs you, finished, idle); click to switch, ✕ to hide one.
- **Live chat tab** 💬: the full conversation of the selected session, updating as it happens (your messages, Claude's replies in readable markdown, and the tools it used). Type a reply from the same panel. Messages show whether they were delivered or are still waiting for Claude's next step.
- Tabs are now icon-only except the active one, so four fit.

## 0.5.0

- **Settings reorganised** (requested by a Mac tester): the panel now has three tabs: **Details** (health, usage, files, activity), **Settings** (all notification and sound switches, replies, privacy, phone, quit) and **Customize** (character, size, walking, always show). Quick ⚙️ and 🎨 buttons beside the pill open Settings and Customize directly.
- **Context window is auto-detected** (reported by the same tester): the manual 200k/1M selector is gone. The window is read from the model Claude Code is using (`[1m]` in the session's model or in your Claude Code `model` setting) and usage above 200k also proves 1M. The panel explains how it decided.

## 0.4.5

- CI: every pull request now runs syntax, stale-3D-bundle, secret-scan, dependency-audit, unit (3 OS), end-to-end and packaging (3 OS) checks; `main` requires them to pass.
- Fix (macOS): the downloaded app was reported as "damaged and can't be opened". With no Apple certificate electron-builder skipped signing, so after the bundle was renamed and its Info.plist edited, Electron's original signature no longer matched and Apple Silicon refused the quarantined app. Builds are now signed ad-hoc (`identity: "-"`, hardened runtime off), which gives a valid bundle signature. macOS still shows the normal "unidentified developer" prompt because the app is not notarized (see the README for how to open it). Thanks to @Samir-kumal for finding and fixing this. Already-downloaded 0.4.4 and older builds: run `xattr -cr "/Applications/Buddy HUD.app"`.

## 0.4.4

- Fix #1 (notification spam): a permission prompt now alerts once instead of twice, Claude Code's repeating idle "waiting for your input" pings no longer pop toasts (the buddy still waves quietly), and alerts are rate limited per session.
- Fix #2 (replies that seem to vanish): when Claude is idle and Buddy HUD cannot type into the terminal, the reply box now says so clearly ("your message waits until you start the next turn") with a one-click "Hold turns open" option, and the feed marks such messages "NOT delivered yet".
- Thanks to @daari-git for both reports.

## 0.4.3

- Fix: the buddy was hidden at login whenever no Claude session was open. New setting "Always show" (on by default) keeps it on screen like a desktop pet.

## 0.4.2

- **Security / Windows:** the Windows hook command used `cmd /c "..."`. Claude Code runs hooks through Git Bash, which rewrites `/c` to `C:/`, so cmd started interactively and executed the hook's JSON payload as commands (junk files, and a payload containing `&` could run arbitrary commands). Hooks are now a plain `curl.exe ... --data-binary "@-"` call that works in Git Bash, cmd and PowerShell. Existing Windows installs are repaired automatically on launch. Reported, with a verified fix, by a Windows tester. Thank you!
- Windows test fixes: e2e creates `AppData\Roaming` in the temp home and waits for Electron to exit before cleanup.
- Log a reason when the single-instance lock fails instead of exiting silently.

## 0.4.1

- Fix: after switching from 3D to another look, the 3D buddy stayed on screen next to the new one.

## 0.4.0

- New **3D (beta)** look built with Three.js: soft-voxel body, lighting, turns toward its walking direction, real props (keyboard, book, magnifier), blinking eyes and all expressions.
- Big power cut for every look: removed per-frame drop-shadow and backdrop blur, idle animations tick a few times per second, 3D sleeps without redrawing. Measured idle CPU on Linux went from ~50% to ~8%.
- Linux renders without GPU compositing by default (cheaper and avoids GPU-process crashes); set `"gpu": "on"` in `~/.buddy-hud/settings.json` to override. Automatic fallback if the GPU process keeps crashing.

## 0.3.0

- Desktop pet mode: the buddy walks along the screen while Claude is idle (walk, look around, sit, nap) and runs home when Claude needs you. Dragging sets home; toggle in settings or tray.
- Finished-message bubble tucks away after 30 s; the full message is in the details panel.

## 0.2.1

- Release packaging: Intel and Apple Silicon Mac builds, separate Windows installer and portable exe.

## 0.2.0

- Health indicator and hook self-test; end-to-end test suite that drives the real app (runs in CI).
- Sound and desktop alerts with per-alert switches and do-not-disturb; "seems stuck" and context-full warnings; elapsed timers.
- Token and estimated cost tracking per session and per day.
- Click files to open them, full diff window, "while you were away" summary.
- Optional phone approvals over LAN; Bot, Cat and Classic looks.
- Audit fixes: a malformed hook body can no longer hang Claude Code; tmux replies are escaped and never typed into permission dialogs; reply box follows the session that needs you; hidden window reappears for holds; atomic settings writes with a backup that is never overwritten; Windows hook command; multibyte-safe request bodies; stale pick/queue cleanup.

## 0.1.2

- Removed the in-app model switcher: Claude Code cannot be driven reliably from outside, so it never matched the terminal. The buddy still shows and tints to the model actually in use.

## 0.1.1

- Model picker lists every version per family, like `/model`, with a 1M toggle; fixes wrong version labels and false "in use" marks.
- Fixed clicks being swallowed by re-renders, scroll resets, and missing slim scrollbars.
- AskUserQuestion and plan approval are no longer shown as Allow/Deny; the buddy asks and the terminal answers.
- Hide stays hidden until a new session or a permission request; stale sessions are pruned; Esc closes menus.

## 0.1.0

- Animated pixel buddy reacting to tool use: typing, reading, searching, thinking, waiting for you, asleep.
- Live diffs with line numbers, permission Allow/Deny from the overlay, context ring, multi-session tabs.
- Colour theme follows the model in use (Fable, Opus, Sonnet, Haiku).
- Unique file counts (read / edited) always visible, with file lists in details.
- Claude's replies render markdown. Privacy mode, size setting, remembered position.
- Curl-based hooks (no Node needed), tray menu, start at login, first-run connect prompt.
- Linux, macOS and Windows packaging via electron-builder (macOS and Windows untested).

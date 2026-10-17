// Builds "Buddy HUD Dev": the current checkout packaged as a separate app (own name, app id and settings) to try changes
// before a release. It never updates itself. On macOS it is installed to /Applications/Buddy HUD Dev.app; elsewhere the
// unpacked app is left in dist-dev/. Both copies listen on the same port for Claude Code's hooks, so run one at a time.
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const NAME = 'Buddy HUD Dev';
const r = spawnSync(process.execPath, [require.resolve('electron-builder/cli.js'), '--dir',
  '-c.appId=dev.buddyhud.app.dev', `-c.productName=${NAME}`, '-c.directories.output=dist-dev', '-c.extraMetadata.buddyChannel=dev'], { cwd: root, stdio: 'inherit' });
if (r.status !== 0) process.exit(r.status || 1);
if (process.platform !== 'darwin') { console.log(`\nBuilt into ${path.join(root, 'dist-dev')}. Quit Buddy HUD, then start ${NAME} from there.`); process.exit(0); }
const dir = fs.readdirSync(path.join(root, 'dist-dev')).find((d) => d.startsWith('mac') && fs.existsSync(path.join(root, 'dist-dev', d, NAME + '.app')));
if (!dir) { console.error('built app not found in dist-dev/'); process.exit(1); }
const src = path.join(root, 'dist-dev', dir, NAME + '.app'), dest = `/Applications/${NAME}.app`;
spawnSync('/usr/bin/osascript', ['-e', `tell application "${NAME}" to quit`]);
for (let i = 0; i < 20 && spawnSync('/usr/bin/pgrep', ['-f', `${NAME}.app/Contents/MacOS`]).status === 0; i++) spawnSync('/bin/sleep', ['0.5']); // let it exit before replacing it
fs.rmSync(dest, { recursive: true, force: true });
const c = spawnSync('/usr/bin/ditto', [src, dest], { stdio: 'inherit' });
if (c.status !== 0) process.exit(c.status || 1);
console.log(`\nInstalled ${dest}. Quit Buddy HUD (menu bar → Quit), then open ${NAME}.`);

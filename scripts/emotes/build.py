# Regenerates the emote artwork from emo.py: the detail layer in renderer/index.html and the 3D face decal
# data in renderer/src/emoteface.js. Usage: python3 scripts/emotes/build.py && npm run build:3d
# (The emote CSS in renderer/style.css comes from emo.css('#clawd'); paste its output over that block when it changes.)
import os, pathlib, re, subprocess, sys
here = pathlib.Path(__file__).resolve().parent
os.chdir(here.parent.parent)  # repo root
sys.path.insert(0, str(here))
import emo

p = pathlib.Path('renderer/index.html'); s = p.read_text()
s, n = re.subn(r'<g class="emo">.*?(?=\n *<g class="acc" id="shades">)', lambda m: emo.LAYER, s, flags=re.S)
assert n == 1, 'emote layer not found in index.html'
p.write_text(s)
subprocess.run([sys.executable, str(here / 'emo3d.py'), 'renderer/src/emoteface.js'], check=True)

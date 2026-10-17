# Regenerates the emote artwork from emo.py: in renderer/index.html the glove/effect defs, the sneakers and the detail
# layer; in renderer/style.css the emote block; and the 3D face data in renderer/src/emoteface.js.
# Usage: python3 scripts/emotes/build.py && npm run build:3d
import os, pathlib, re, subprocess, sys
here = pathlib.Path(__file__).resolve().parent
os.chdir(here.parent.parent)  # repo root
sys.path.insert(0, str(here))
import emo

p = pathlib.Path('renderer/index.html'); s = p.read_text()
# defs: one line per def in emo.DEFS, matched by its id
for line in emo.DEFS.split('\n')[1:-1]:
    i = re.match(r'<\w+ id="([^"]+)"', line).group(1)
    s, n = re.subn(rf'<(\w+) id="{re.escape(i)}".*?</\1>|<path id="{re.escape(i)}"[^>]*/>', lambda m: line, s, count=1, flags=re.S)
    assert n == 1, f'def #{i} not found in index.html'
shoes = iter(emo.shoes([0, 36, 107, 144]).replace('</g><g class="shoe">', '</g>\n<g class="shoe">').split('\n'))
s, n = re.subn(r'<g class="shoe">.*?</g>', lambda m: next(shoes), s, flags=re.S)
assert n == 4, 'expected 4 sneakers in index.html'
s, n = re.subn(r'<g class="emo">.*?(?=\n *<g class="acc" id="shades">)', lambda m: emo.LAYER, s, flags=re.S)
assert n == 1, 'emote layer not found in index.html'
p.write_text(s)

p = pathlib.Path('renderer/style.css'); s = p.read_text()
a = s.index('#clawd .emo, #clawd .emo > g, #clawd .eground')
end = '/* end emotes */\n'
b = s.index(end) + len(end) if end in s else s.index('\n', s.index('@keyframes eKickB')) + 1
s = s[:a] + emo.css('#clawd') + emo.theme_css('#clawd') + end + s[b:]
p.write_text(s)

subprocess.run([sys.executable, str(here / 'emo3d.py'), 'renderer/src/emoteface.js'], check=True)

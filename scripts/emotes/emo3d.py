# Emits renderer/src/emoteface.js: the emote face/fx layer as flat draw ops for the 3D look's face decal.
# Gloves, arms and the props tagged class="p3" are left out (the 3D look builds those as meshes).
import json, sys, xml.etree.ElementTree as ET
import emo

defs = ET.fromstring(emo.DEFS)
DEF = {d.get('id'): d for d in defs}

def mul(a, b):
    return [a[0]*b[0]+a[2]*b[1], a[1]*b[0]+a[3]*b[1], a[0]*b[2]+a[2]*b[3], a[1]*b[2]+a[3]*b[3], a[0]*b[4]+a[2]*b[5]+a[4], a[1]*b[4]+a[3]*b[5]+a[5]]

def has_glove(el):
    return any(u.tag == 'use' and u.get('href', '').startswith('#gv') for u in el.iter())

PAINT = ('fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'stroke-dasharray')
def r(v): return round(float(v), 2)

def walk(el, m, inh, out):
    if el.get('class') in ('p3', 'eshade') or (el.tag == 'g' and has_glove(el)):
        return
    if el.get('transform'):
        m = mul(m, emo._mat(el.get('transform')))
    inh = dict(inh)
    for k in PAINT:
        if el.get(k) is not None: inh[k] = el.get(k)
    if el.get('class') == 'lidf': inh['fill'] = 'LIDF'
    op = float(el.get('opacity', 1)) * inh.get('o', 1)
    inh['o'] = op
    t = el.tag
    if t in ('g', 'svg'):
        for c in el: walk(c, m, inh, out)
        return
    if t == 'use':
        walk(DEF[el.get('href')[1:]], m, inh, out)
        return
    g = None
    if t == 'path': g = {'k': 'p', 'd': el.get('d')}
    elif t == 'ellipse': g = {'k': 'e', 'g': [r(el.get('cx')), r(el.get('cy')), r(el.get('rx')), r(el.get('ry'))]}
    elif t == 'circle': g = {'k': 'e', 'g': [r(el.get('cx')), r(el.get('cy')), r(el.get('r')), r(el.get('r'))]}
    elif t == 'rect': g = {'k': 'r', 'g': [r(el.get('x', 0)), r(el.get('y', 0)), r(el.get('width')), r(el.get('height')), r(el.get('rx', 0))]}
    else: raise ValueError(t)
    if m != [1, 0, 0, 1, 0, 0]: g['m'] = [round(v, 4) for v in m]
    f = inh.get('fill', '#000')
    if f != 'none': g['f'] = f
    if inh.get('stroke', 'none') != 'none':
        g['s'] = inh['stroke']; g['w'] = r(inh.get('stroke-width', 1))
        if inh.get('stroke-linecap'): g['lc'] = inh['stroke-linecap']
        if inh.get('stroke-linejoin'): g['lj'] = inh['stroke-linejoin']
        if inh.get('stroke-dasharray'): g['da'] = [r(v) for v in inh['stroke-dasharray'].split()]
    if op != 1: g['o'] = round(op, 3)
    if 'f' in g or 's' in g: out.append(g)

FACE = {}
for k, v in emo.E.items():
    root = ET.fromstring(f"<svg>{v}</svg>")
    ops = []
    walk(root, [1, 0, 0, 1, 0, 0], {}, ops)
    FACE[k] = ops

src = ('// Generated: the emote face and effects (2D layer) as draw ops for the 3D face decal. Coordinates are the flat\n'
       '// artwork\'s (x 0..160, y 0..114 is the body front). k: p path / e ellipse / r rect; m: transform; LIDF: lid colour.\n'
       'export const EMOTE_FACE = ' + json.dumps(FACE, separators=(',', ':')) + ';\n')
open(sys.argv[1], 'w').write(src)
print({k: len(v) for k, v in FACE.items()}, len(src))

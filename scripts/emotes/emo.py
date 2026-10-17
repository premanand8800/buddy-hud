# Shared emote detail layer for the app (#clawd) and the canvas board (.bud).
# Everything here only shows while the buddy is emoting; the default buddy is untouched.
import math, re

INK = '#17120f'
GV = 'fill="#fff" stroke="#8f88a3" stroke-width="2.5" stroke-linejoin="round"'
GS = 'fill="#e6e1ee"'
GC = 'fill="none" stroke="#b7b0c6" stroke-width="2" stroke-linecap="round"'
ST = 'fill="none" stroke="#c4bdd2" stroke-width="1.6" stroke-linecap="round"'
FD = f'fill="none" stroke="{INK}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"'

def f1(v): return f'{v:.1f}'

# ---------------- gloves (white cartoon gloves, shaded, stitched) ----------------
CUFF = f'<rect x="-15" y="-8" width="31" height="13" rx="5" {GV}/><path d="M-12 -2 H13" {ST}/><path d="M-10 2 H11" {ST}/>'
FIST = (f'<rect x="-16" y="-36" width="32" height="32" rx="13" {GV}/><path d="M6 -34 Q15 -30 15 -18 Q15 -8 6 -5 Z" {GS}/>'
        f'<path d="M-11 -27 Q-2 -24 7 -27 M-11 -18 Q-2 -15 7 -18 M-11 -10 Q-4 -8 2 -10" {GC}/>')
FINGER_SHADE = lambda x, y, h: f'<rect x="{x+5}" y="{y+3}" width="3" height="{h-6}" rx="1.5" {GS}/>'
PALM_BACK = f'<path d="M-7 -31 V-20 M0 -32 V-21 M7 -31 V-20" {ST}/>'

DEFS = f'''<defs>
<linearGradient id="eShade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#14002e" stop-opacity=".28"/></linearGradient>
<g id="gvIndex"><rect x="-1" y="-64" width="12" height="38" rx="6" {GV}/>{FINGER_SHADE(-1,-64,38)}<path d="M1 -58 Q5 -61 9 -58" {ST}/>{FIST}<rect x="-24" y="-32" width="12" height="20" rx="6" transform="rotate(-20 -18 -22)" {GV}/>{CUFF}</g>
<g id="gvGun"><rect x="-1" y="-66" width="12" height="40" rx="6" {GV}/>{FINGER_SHADE(-1,-66,40)}{FIST}<rect x="-34" y="-34" width="22" height="11" rx="5.5" {GV}/><path d="M-30 -27 H-18" {ST}/>{CUFF}</g>
<g id="gvPalm"><rect x="-16" y="-58" width="8" height="30" rx="4" {GV}/><rect x="-7" y="-64" width="8" height="36" rx="4" {GV}/><rect x="2" y="-62" width="8" height="34" rx="4" {GV}/><rect x="11" y="-54" width="7" height="26" rx="3.5" {GV}/><path d="M-14 -40 V-36 M-5 -46 V-42 M4 -45 V-41 M13 -38 V-35" {ST}/><rect x="-18" y="-38" width="37" height="34" rx="12" {GV}/><path d="M10 -36 Q19 -30 18 -16 Q17 -7 9 -5 Z" {GS}/>{PALM_BACK}<rect x="-30" y="-36" width="10" height="24" rx="5" transform="rotate(35 -25 -24)" {GV}/><path d="M-8 -14 Q1 -10 10 -15" {GC}/>{CUFF}</g>
<g id="gvOk"><rect x="-1" y="-62" width="8" height="34" rx="4" {GV}/><rect x="8" y="-60" width="8" height="32" rx="4" {GV}/><rect x="16" y="-52" width="7" height="24" rx="3.5" {GV}/><path d="M1 -44 V-40 M10 -43 V-39 M18 -37 V-34" {ST}/><rect x="-18" y="-38" width="40" height="34" rx="12" {GV}/><path d="M13 -36 Q22 -30 21 -16 Q20 -7 12 -5 Z" {GS}/>{PALM_BACK}<circle cx="-13" cy="-40" r="10" fill="none" stroke="#8f88a3" stroke-width="12"/><circle cx="-13" cy="-40" r="10" fill="none" stroke="#fff" stroke-width="7"/><path d="M-21 -46 Q-13 -52 -5 -46" {ST}/>{CUFF}</g>
<g id="gvPinch"><rect x="-24" y="-46" width="10" height="24" rx="5" transform="rotate(28 -19 -34)" {GV}/><rect x="-17" y="-34" width="34" height="30" rx="12" {GV}/><path d="M9 -32 Q17 -26 16 -14 Q15 -7 8 -5 Z" {GS}/><path d="M-15 -26 C-13 -48 -5 -62 1 -64 C9 -62 15 -48 15 -26 Z" {GV}/><path d="M7 -28 C9 -42 6 -54 2 -61 C10 -56 14 -44 14 -28 Z" {GS}/><path d="M-6 -28 C-5 -44 -2 -56 0 -62 M6 -28 C5 -44 3 -56 1 -62" {GC}/>{CUFF}</g>
<g id="gvTowel"><path d="M-34 -10 Q-8 -22 26 -12 L30 18 Q4 26 -30 16 Z" fill="#f3efe6" stroke="#8f88a3" stroke-width="2.5" stroke-linejoin="round"/><path d="M-32 -2 Q-6 -12 27 -3 M-31 8 Q-4 -2 29 7" fill="none" stroke="#7cc8ff" stroke-width="3"/><path d="M-16 -14 L-12 20 M6 -14 L10 22" {GC}/><path d="M-30 16 l-2 6 M-22 19 l-1 6 M-14 21 l0 6 M-6 22 l1 6 M2 22 l1 6 M10 21 l2 6 M18 20 l2 6 M26 18 l3 6" stroke="#cfc8bd" stroke-width="1.6" stroke-linecap="round"/></g>
<path id="note" d="M0 0 V-16 L10 -19 V-4 M0 0 a4 3 -20 1 1 -1 -1 M10 -4 a4 3 -20 1 1 -1 -1" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
<path id="spark" d="M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z" fill="#ffe27a" stroke="#c99a1f" stroke-width="1"/>
</defs>'''

# ---------------- arms ----------------
def _mat(tf):
    m = [1, 0, 0, 1, 0, 0]
    def mul(a, b): return [a[0]*b[0]+a[2]*b[1], a[1]*b[0]+a[3]*b[1], a[0]*b[2]+a[2]*b[3], a[1]*b[2]+a[3]*b[3], a[0]*b[4]+a[2]*b[5]+a[4], a[1]*b[4]+a[3]*b[5]+a[5]]
    for op, args in re.findall(r'(translate|rotate|scale)\(([^)]*)\)', tf):
        v = [float(x) for x in args.replace(',', ' ').split()]
        if op == 'translate': t = [1, 0, 0, 1, v[0], v[1] if len(v) > 1 else 0]
        elif op == 'scale': t = [v[0], 0, 0, v[1] if len(v) > 1 else v[0], 0, 0]
        else: r = math.radians(v[0]); t = [math.cos(r), math.sin(r), -math.sin(r), math.cos(r), 0, 0]
        m = mul(m, t)
    return m
def _inv(m, p):
    a, b, c, d, e, f = m; det = a*d - b*c; x, y = p[0]-e, p[1]-f
    return ((d*x - c*y)/det, (-b*x + a*y)/det)
SHOULDER_R, SHOULDER_L = (146, 60), (14, 60)
def arm(tf, pts):
    m = _mat(tf); s = math.sqrt(abs(m[0]*m[3]-m[1]*m[2]))
    loc = [_inv(m, p) for p in pts]
    d = 'M0 4 ' + ' '.join(f'L{f1(x)} {f1(y)}' for x, y in loc)
    return (f'<path class="armo" d="{d}" stroke-width="{f1(19/s)}"/><path class="armi" d="{d}" stroke-width="{f1(14/s)}"/>'
            f'<path class="armh" d="{d}" stroke-width="{f1(3/s)}" transform="translate({f1(-3/s)} {f1(-2/s)})"/>')
def glove(ref, tf, cls='a1', pts=None, world=None):
    if pts is None:
        wx = _mat(world or tf)[4]
        pts = [SHOULDER_R if wx > 80 else SHOULDER_L]
    a = arm(world or tf, pts) if pts else ''
    return f'<g transform="{tf}"><g class="{cls}">{a}<use href="#{ref}"/></g></g>'

# ---------------- eyes: whites, iris, pupil, shine, lids, lashes ----------------
def eye(cx, cy, side, kind='open', lid=0.0, tilt=0.0, look=(0, 0), rx=14, ry=17, iris=8, bags=False):
    """side: -1 left eye, +1 right eye. tilt > 0 = angry (lid lower at the inner corner), < 0 = sad."""
    out = []
    if kind == 'happy':
        return f'<path d="M{cx-13} {cy+6} Q{cx} {cy-14} {cx+13} {cy+6}" fill="none" stroke="{INK}" stroke-width="6" stroke-linecap="round"/><path d="M{cx+side*13} {cy+6} l{side*6} -4" stroke="{INK}" stroke-width="3" stroke-linecap="round"/>'
    if kind == 'closed':
        return f'<path d="M{cx-13} {cy} Q{cx} {cy+9} {cx+13} {cy}" fill="none" stroke="{INK}" stroke-width="5" stroke-linecap="round"/><path d="M{cx+side*13} {cy} l{side*5} 4 M{cx+side*8} {cy+5} l{side*3} 5" stroke="{INK}" stroke-width="2.6" stroke-linecap="round"/>'
    if kind == 'squint':
        return f'<path d="M{cx+side*12} {cy-12} L{cx-side*10} {cy} L{cx+side*12} {cy+12}" fill="none" stroke="{INK}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
    out.append(f'<ellipse cx="{cx}" cy="{cy}" rx="{rx}" ry="{ry}" fill="#fff" stroke="{INK}" stroke-width="3"/>')
    out.append(f'<path d="M{cx-rx+3} {f1(cy+ry*0.35)} Q{cx} {cy+ry+1} {cx+rx-3} {f1(cy+ry*0.35)}" fill="none" stroke="#d9d3e6" stroke-width="3"/>')
    lx, ly = look
    out.append(f'<g class="pup"><circle cx="{f1(cx+lx)}" cy="{f1(cy+ly)}" r="{iris}" fill="#4b2d8f"/><circle cx="{f1(cx+lx)}" cy="{f1(cy+ly)}" r="{iris*0.62:.1f}" fill="#0b0812"/>'
               f'<circle cx="{f1(cx+lx+iris*0.35)}" cy="{f1(cy+ly-iris*0.4)}" r="{iris*0.32:.1f}" fill="#fff"/><circle cx="{f1(cx+lx-iris*0.35)}" cy="{f1(cy+ly+iris*0.35)}" r="{iris*0.14:.1f}" fill="#fff"/></g>')
    if lid > 0:
        base = cy - ry + 2 * ry * lid
        k = tilt * 8
        def liney(x):  # the inner corner is toward the face centre (-side)
            u = (x - cx) / rx
            return base + (-side * u) * k
        n = 160
        pts = []
        for i in range(n):
            t = 2 * math.pi * i / n
            x, y = cx + rx * math.cos(t), cy + ry * math.sin(t)
            pts.append((x, y, y <= liney(x)))
        start = next((i for i in range(n) if pts[i][2] and not pts[i-1][2]), 0)
        run = []
        for j in range(n):
            p = pts[(start + j) % n]
            if not p[2]: break
            run.append(p)
        if len(run) > 2:
            d = 'M' + ' L'.join(f'{f1(x)} {f1(y)}' for x, y, _ in run) + 'Z'
            out.append(f'<path class="lidf" d="{d}" stroke="{INK}" stroke-width="3" stroke-linejoin="round"/>')
            a, b = run[0], run[-1]
            out.append(f'<path d="M{f1(a[0])} {f1(a[1])} L{f1(b[0])} {f1(b[1])}" stroke="{INK}" stroke-width="4.5" stroke-linecap="round"/>')
            outer = a if (a[0] - cx) * side > 0 else b
            out.append(f'<path d="M{f1(outer[0])} {f1(outer[1])} l{side*6} -5 M{f1(outer[0]-side*4)} {f1(outer[1]-1)} l{side*4} -6" stroke="{INK}" stroke-width="2.4" stroke-linecap="round"/>')
    else:
        out.append(f'<path d="M{cx+side*(rx-2)} {f1(cy-ry*0.55)} l{side*6} -6 M{cx+side*(rx-6)} {f1(cy-ry*0.8)} l{side*4} -7" stroke="{INK}" stroke-width="2.4" stroke-linecap="round"/>')
    if bags:
        out.append(f'<path d="M{cx-10} {cy+ry+5} Q{cx} {cy+ry+10} {cx+10} {cy+ry+5}" fill="none" stroke="#5b3fb0" stroke-width="2.4" stroke-linecap="round"/>')
    return ''.join(out)

def eyes(l, r):
    return eye(29, 50, -1, **l) + eye(131, 50, 1, **r)

# ---------------- brows: tapered, filled ----------------
def brow(p0, p1, p2, w0=7.5, w1=3.0):
    def q(t):
        x = (1-t)**2*p0[0] + 2*(1-t)*t*p1[0] + t*t*p2[0]
        y = (1-t)**2*p0[1] + 2*(1-t)*t*p1[1] + t*t*p2[1]
        dx = 2*(1-t)*(p1[0]-p0[0]) + 2*t*(p2[0]-p1[0]); dy = 2*(1-t)*(p1[1]-p0[1]) + 2*t*(p2[1]-p1[1])
        n = math.hypot(dx, dy) or 1
        return x, y, -dy/n, dx/n
    top, bot = [], []
    for i in range(13):
        t = i / 12; x, y, nx, ny = q(t); w = (w0 + (w1 - w0) * t) / 2
        top.append((x + nx*w, y + ny*w)); bot.append((x - nx*w, y - ny*w))
    pts = top + bot[::-1]
    return '<path d="M' + ' L'.join(f'{f1(x)} {f1(y)}' for x, y in pts) + f'Z" fill="{INK}" stroke="{INK}" stroke-width="1.5" stroke-linejoin="round"/>'

# ---------------- face parts ----------------
NOSE = ('<path d="M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z" fill="rgba(20,8,40,.22)"/>'
        '<ellipse cx="78" cy="66.5" rx="2.6" ry="1.6" fill="#fff" opacity=".45"/><circle cx="76.5" cy="73" r="1.6" fill="rgba(20,8,40,.5)"/><circle cx="83.5" cy="73" r="1.6" fill="rgba(20,8,40,.5)"/>')
def blush(lines=True):
    s = '<ellipse cx="22" cy="80" rx="12" ry="6.5" fill="#ff8fb1" opacity=".55"/><ellipse cx="138" cy="80" rx="12" ry="6.5" fill="#ff8fb1" opacity=".55"/>'
    if lines:
        s += '<path d="M15 82 l4 -6 M21 82 l4 -6 M27 82 l4 -6 M131 82 l4 -6 M137 82 l4 -6 M143 82 l4 -6" stroke="#e8577f" stroke-width="1.8" stroke-linecap="round"/>'
    return s
def teeth_row(x0, x1, y, h, n):
    w = (x1 - x0) / n
    return f'<rect x="{x0}" y="{y}" width="{x1-x0}" height="{h}" rx="3" fill="#fff"/>' + ''.join(f'<path d="M{f1(x0+w*i)} {y} V{y+h}" stroke="#cfc8da" stroke-width="1.5"/>' for i in range(1, n))
MOUTH_OPEN = ('<path d="M60 81 Q80 110 100 81 Q80 86 60 81Z" fill="#3a0d24" stroke="#17120f" stroke-width="3" stroke-linejoin="round"/>'
              '<path d="M64 83 Q80 87.5 96 83 L95 87 Q80 91 65 87Z" fill="#fff"/>'
              '<path d="M69 98 Q80 91 91 98 Q86 104.5 80 104.5 Q74 104.5 69 98Z" fill="#ff6f8e"/><path d="M80 96 V102" stroke="#d94a6e" stroke-width="1.6" stroke-linecap="round"/>')
LIPS_PURSED = ('<path d="M69 88 Q74 80 80 83 Q86 80 91 88 Q86 96 80 95 Q74 96 69 88Z" fill="#8a4fae" stroke="#17120f" stroke-width="2.6" stroke-linejoin="round"/>'
               '<path d="M72 88 Q80 86 88 88" stroke="#4d2167" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cx="76" cy="91.5" rx="3" ry="1.3" fill="#fff" opacity=".5"/>')
CHIN = '<path d="M74 106 Q80 109 86 106" fill="none" stroke="rgba(20,8,40,.3)" stroke-width="2" stroke-linecap="round"/>'
SHADE = ('<rect x="0" y="0" width="160" height="114" rx="34" fill="url(#eShade)"/>'
         '<ellipse cx="36" cy="14" rx="20" ry="7" transform="rotate(-14 36 14)" fill="#fff" opacity=".28"/><circle cx="60" cy="9" r="2.6" fill="#fff" opacity=".35"/>'
         '<path d="M150 22 Q158 56 148 96" fill="none" stroke="#fff" stroke-opacity=".14" stroke-width="3" stroke-linecap="round"/>')
def drops(spots):
    return '<g class="drops">' + ''.join(f'<g transform="translate({x} {y}) scale({s})"><path d="M0 -8 C4 -2 6 2 0 5 C-6 2 -4 -2 0 -8Z" fill="#7cc8ff" stroke="#3d8fd1" stroke-width="1.2"/><ellipse cx="-1.5" cy="0" rx="1.2" ry="2" fill="#fff" opacity=".8"/></g>' for x, y, s in spots) + '</g>'
def spark(x, y, s=1, cls='fxb'):
    return f'<g transform="translate({x} {y}) scale({s})"><g class="{cls}"><use href="#spark"/></g></g>'
def lines(d, cls='fxb', color='#fff', w=3):
    return f'<path class="{cls}" d="{d}" fill="none" stroke="{color}" stroke-width="{w}" stroke-linecap="round"/>'

HEADPHONES = ('<g class="p3"><path d="M-4 52 Q-6 -18 80 -22 Q166 -18 164 52" fill="none" stroke="#2b2733" stroke-width="9" stroke-linecap="round"/>'
              '<path d="M-4 52 Q-6 -18 80 -22 Q166 -18 164 52" fill="none" stroke="#4a4458" stroke-width="3" stroke-linecap="round"/>'
              '<rect x="-16" y="34" width="20" height="34" rx="9" fill="#ff5d8f" stroke="#17120f" stroke-width="2.5"/><rect x="156" y="34" width="20" height="34" rx="9" fill="#ff5d8f" stroke="#17120f" stroke-width="2.5"/>'
              '<rect x="-12" y="40" width="5" height="22" rx="2.5" fill="#fff" opacity=".35"/><rect x="160" y="40" width="5" height="22" rx="2.5" fill="#fff" opacity=".35"/></g>')
CROWN = ('<g class="p3" transform="translate(80 -10)"><path d="M-26 0 L-30 -26 L-14 -12 L0 -32 L14 -12 L30 -26 L26 0 Z" fill="#ffcc33" stroke="#17120f" stroke-width="2.6" stroke-linejoin="round"/>'
         '<rect x="-27" y="-6" width="54" height="8" rx="2" fill="#f0a800" stroke="#17120f" stroke-width="2.4"/>'
         '<circle cx="0" cy="-2" r="3.2" fill="#ff4d6d"/><circle cx="-15" cy="-2" r="2.4" fill="#4dc3ff"/><circle cx="15" cy="-2" r="2.4" fill="#4dc3ff"/>'
         '<circle cx="-30" cy="-26" r="3" fill="#ffcc33" stroke="#17120f" stroke-width="2"/><circle cx="0" cy="-32" r="3" fill="#ffcc33" stroke="#17120f" stroke-width="2"/><circle cx="30" cy="-26" r="3" fill="#ffcc33" stroke="#17120f" stroke-width="2"/>'
         '<path d="M-20 -10 L-16 -4" stroke="#fff" stroke-width="2" opacity=".6" stroke-linecap="round"/></g>')
MUSTACHE = ('<path d="M56 83 Q62 72 72 75 Q78 76 80 80 Q82 76 88 75 Q98 72 104 83 Q108 90 100 92 Q94 84 86 86 Q82 87 80 85 Q78 87 74 86 Q66 84 60 92 Q52 90 56 83Z" fill="#e8b84a" stroke="#17120f" stroke-width="2.6" stroke-linejoin="round"/>'
            '<path d="M62 84 Q70 79 77 82 M98 84 Q90 79 83 82 M64 88 Q70 84 76 85 M96 88 Q90 84 84 85" fill="none" stroke="#b07d17" stroke-width="1.6" stroke-linecap="round"/>')
BUBBLES = '<g class="bubbles">' + ''.join(f'<circle cx="{x}" cy="{y}" r="{r}" fill="rgba(160,220,255,.25)" stroke="#bfe8ff" stroke-width="2"/><circle cx="{x-r*0.35:.1f}" cy="{y-r*0.35:.1f}" r="{r*0.25:.1f}" fill="#fff"/>' for x, y, r in [(172, -40, 6), (182, -58, 4), (166, -70, 5)]) + '</g>'

E = {}  # per-emote layer
E['nope'] = (eyes(dict(lid=.45, tilt=-.2, look=(-3, 2)), dict(lid=.38, tilt=.1, look=(-3, 2))) + brow((12, 26), (28, 12), (44, 22)) + brow((116, 30), (132, 27), (148, 29))
             + NOSE + '<path d="M62 88 Q82 98 102 83" fill="none" stroke="#17120f" stroke-width="5" stroke-linecap="round"/><path d="M100 80 Q106 82 104 88" fill="none" stroke="#17120f" stroke-width="2.5" stroke-linecap="round"/>' + CHIN
             + glove('gvIndex', 'translate(178 94) scale(1.1)') + lines('M162 14 Q170 4 180 2 M196 4 Q204 10 206 18'))
E['point'] = (eyes(dict(look=(2, 0), ry=19, iris=7), dict(look=(2, 0), ry=19, iris=7)) + brow((12, 20), (28, 6), (44, 16)) + brow((116, 16), (132, 6), (148, 20))
              + NOSE + MOUTH_OPEN + glove('gvIndex', 'translate(152 62) rotate(35)')
              + spark(-14, -10, 1.2) + lines('M-22 18 L-34 12 M-24 30 L-38 30 M-22 42 L-34 48', 'fxb', '#ffe27a'))
E['guns'] = (eye(29, 50, -1, kind='happy') + eye(131, 50, 1, lid=.15, look=(3, 0)) + brow((12, 30), (28, 30), (44, 36)) + brow((116, 22), (132, 10), (148, 22))
             + NOSE + '<path d="M58 81 Q80 102 102 81 Q80 89 58 81Z" fill="#3a0d24" stroke="#17120f" stroke-width="3" stroke-linejoin="round"/>' + teeth_row(66, 94, 83, 5, 5)
             + '<path d="M56 79 Q54 84 58 86 M104 79 Q106 84 102 86" fill="none" stroke="#17120f" stroke-width="2.4" stroke-linecap="round"/>' + blush(False)
             + glove('gvGun', 'translate(152 76) rotate(40)') + glove('gvGun', 'translate(-14 92) scale(-1 1) scale(1.05)', 'a2')
             + spark(8, 22, .8) + spark(156, -4, 1))
E['dab'] = (eye(29, 50, -1, kind='squint') + eye(131, 50, 1, kind='squint') + NOSE + '<path d="M66 94 Q80 90 94 94" fill="none" stroke="#17120f" stroke-width="4" stroke-linecap="round"/>'
            + glove('gvPalm', 'translate(178 -38) rotate(30)', 'a1', [(150, 46)]) + glove('gvPalm', 'translate(132 -2) rotate(36) scale(1.05)', 'a2', [(92, 50), (16, 58)])
            + lines('M184 2 L196 10 M176 14 L188 24', 'fxb', '#ffe27a', 3.5) + spark(-16, 8, 1.1) + spark(176, 80, .8))
E['shrug'] = (eyes(dict(lid=.1, look=(0, -4)), dict(lid=.1, look=(0, -4))) + brow((12, 22), (28, 8), (44, 18)) + brow((116, 18), (132, 8), (148, 22))
              + NOSE + '<path d="M60 90 Q66 84 72 90 T84 90 T96 90 T104 88" fill="none" stroke="#17120f" stroke-width="4.5" stroke-linecap="round"/>' + CHIN
              + glove('gvPalm', 'translate(166 66) rotate(30) scale(.95)') + glove('gvPalm', 'translate(-18 80) scale(-1 1) rotate(22) scale(.95)', 'a2')
              + drops([(150, 18, 1)]))
E['vibe'] = (HEADPHONES + eye(29, 50, -1, kind='happy') + eye(131, 50, 1, kind='happy') + brow((12, 24), (28, 16), (44, 22), 6, 3) + brow((116, 22), (132, 16), (148, 24), 6, 3)
             + blush() + NOSE + MOUTH_OPEN
             + glove('gvPalm', 'translate(164 40) rotate(12)') + glove('gvPalm', 'translate(-4 40) scale(-1 1) rotate(12)', 'a2')
             + '<g class="notes"><use href="#note" transform="translate(-18 -30)"/><use href="#note" transform="translate(170 -40) scale(.8)"/><use href="#note" transform="translate(60 -48) scale(.7)"/></g>')
E['facepalm'] = (eye(29, 50, -1, kind='closed') + brow((12, 34), (28, 30), (44, 26)) + NOSE
                 + '<path d="M60 98 Q80 84 100 98" fill="none" stroke="#17120f" stroke-width="5" stroke-linecap="round"/>' + CHIN
                 + glove('gvPalm', 'translate(168 52) rotate(-90) scale(1.35)')
                 + '<g class="gloom">' + ''.join(f'<path d="M{x} -40 V-20" stroke="#6b6880" stroke-width="3" stroke-dasharray="5 5" stroke-linecap="round"/>' for x in (20, 44, 116, 140)) + '</g>'
                 + '<g class="puff"><circle cx="40" cy="104" r="6" fill="#d8d4e6" opacity=".8"/><circle cx="30" cy="110" r="4.5" fill="#d8d4e6" opacity=".7"/><circle cx="22" cy="115" r="3" fill="#d8d4e6" opacity=".6"/></g>')
E['shh'] = (eyes(dict(lid=.5, tilt=-.5, look=(-4, 3), bags=True), dict(lid=.5, tilt=-.5, look=(-4, 3), bags=True)) + brow((12, 30), (26, 26), (44, 18)) + brow((116, 18), (134, 26), (148, 30))
            + NOSE + LIPS_PURSED + glove('gvIndex', 'translate(74 132) scale(1.05)')
            + lines('M100 76 Q108 82 100 90 M108 72 Q120 82 108 94', 'fxb', '#fff', 2.5))
E['scheme'] = ('<rect x="0" y="0" width="160" height="62" rx="30" fill="rgba(20,0,40,.22)"/>'
               + eyes(dict(lid=.48, tilt=.8, look=(4, 1)), dict(lid=.48, tilt=.8, look=(4, 1))) + brow((10, 20), (28, 26), (46, 36), 9, 4) + brow((150, 20), (132, 26), (114, 36), 9, 4)
               + NOSE + '<path d="M52 79 Q80 106 110 74 Q82 91 52 79Z" fill="#3a0d24" stroke="#17120f" stroke-width="3" stroke-linejoin="round"/>' + teeth_row(64, 98, 80, 4, 6)
               + '<path d="M50 77 L46 72 M112 72 L117 67" stroke="#17120f" stroke-width="2.6" stroke-linecap="round"/>'
               + glove('gvPinch', 'translate(44 130) rotate(-12) scale(1.1)') + spark(142, 40, .6))
E['perfect'] = (eyes(dict(lid=.55, look=(-3, 1), bags=True), dict(lid=.55, look=(-3, 1), bags=True)) + brow((12, 32), (28, 31), (44, 32)) + brow((116, 20), (132, 8), (148, 20))
                + NOSE + '<path d="M74 88 Q80 77 92 80 Q102 80 104 87 Q102 95 92 96 Q80 98 74 88Z" fill="#8a4fae" stroke="#17120f" stroke-width="2.6" stroke-linejoin="round"/><path d="M78 88 Q90 85 102 87" stroke="#4d2167" stroke-width="2" fill="none"/><ellipse cx="92" cy="92" rx="5" ry="1.6" fill="#fff" opacity=".5"/>'
                + glove('gvOk', 'translate(-16 106) rotate(-8) scale(1.1)') + spark(-28, 40, .9) + spark(-6, 16, .6))
E['pat'] = (CROWN + eyes(dict(lid=.55, tilt=-.2, look=(-3, -2)), dict(lid=.55, tilt=-.2, look=(-3, -2))) + brow((12, 30), (28, 24), (44, 28)) + brow((116, 28), (132, 24), (148, 30))
            + blush() + NOSE + MUSTACHE + '<path d="M70 97 Q80 102 90 97" fill="none" stroke="#17120f" stroke-width="3.5" stroke-linecap="round"/>' + CHIN
            + glove('gvPalm', 'translate(124 -6) rotate(-90) scale(1.05)') + lines('M128 -40 Q136 -48 146 -46 M132 -30 Q142 -34 150 -30', 'fxb', '#fff', 2.5))
E['sideeye'] = (eyes(dict(lid=.52, look=(0, 2)), dict(lid=.52, look=(0, 2))) + brow((10, 32), (28, 36), (46, 38), 10, 6) + brow((114, 24), (132, 10), (150, 20))
                + '<path d="M18 70 Q26 74 36 72 M124 72 Q134 74 142 70" fill="none" stroke="rgba(20,8,40,.3)" stroke-width="2" stroke-linecap="round"/>'
                + NOSE + '<path d="M64 92 Q80 90 98 93" fill="none" stroke="#17120f" stroke-width="5" stroke-linecap="round"/>' + CHIN
                + '<g class="dots"><circle cx="172" cy="6" r="3.5" fill="#fff"/><circle cx="184" cy="0" r="3.5" fill="#fff"/><circle cx="196" cy="-6" r="3.5" fill="#fff"/></g>')
E['sweat'] = (eyes(dict(look=(5, -1), ry=18, iris=6), dict(look=(5, -1), ry=18, iris=6)) + brow((12, 24), (26, 22), (44, 14)) + brow((116, 14), (134, 22), (148, 24))
              + NOSE + '<rect x="58" y="80" width="44" height="17" rx="7" fill="#e86a8a" stroke="#17120f" stroke-width="3"/>' + teeth_row(61, 99, 82, 6, 6) + teeth_row(61, 99, 89, 6, 6)
              + '<path d="M58 88.5 H102" stroke="#17120f" stroke-width="1.8"/>' + CHIN
              + drops([(150, -6, 1.2), (168, 18, 1), (6, -2, 1.1), (-10, 30, .9)])
              + '<g class="heat"><path d="M30 -30 q5 -6 0 -12 q-5 -6 0 -12 M80 -40 q5 -6 0 -12 q-5 -6 0 -12 M130 -30 q5 -6 0 -12 q-5 -6 0 -12" fill="none" stroke="#ff9a6b" stroke-width="2.6" stroke-linecap="round"/></g>'
              + '<g transform="translate(118 8)"><g class="a1"><use href="#gvTowel"/>' + glove('gvPalm', 'translate(34 6) rotate(-90)', 'a0', None, 'translate(118 8) translate(34 6) rotate(-90)') + '</g></g>')
E['scuba'] = (eyes(dict(look=(0, 0)), dict(look=(0, 0)))
              + '<g class="p3"><path d="M100 86 H150 V-20 Q150 -30 160 -30" fill="none" stroke="#17120f" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>'
              + '<path d="M100 86 H150 V-20 Q150 -30 160 -30" fill="none" stroke="#ff8a3d" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
              + '<path d="M150 50 V36 M150 10 V-4" stroke="#fff" stroke-width="7" opacity=".9"/></g>'
              + '<ellipse cx="94" cy="86" rx="12" ry="8" fill="#ff8a3d" stroke="#17120f" stroke-width="2.5"/><path d="M86 86 H102 M88 82 V90 M94 81 V91 M100 82 V90" stroke="#c4561b" stroke-width="1.6"/>'
              + '<path d="M70 92 Q78 96 84 92" fill="none" stroke="#17120f" stroke-width="3" stroke-linecap="round"/>' + blush(False) + BUBBLES
              + '<g class="duo">' + glove('gvPalm', 'translate(108 118) rotate(18) scale(.95)') + glove('gvPalm', 'translate(52 118) scale(-1 1) rotate(18) scale(.95)', 'a2') + '</g>')

GROUND = '<ellipse class="eground" cx="80" cy="166" rx="92" ry="8" fill="rgba(0,0,0,.35)"/>'
LAYER = '<g class="emo"><g class="eshade">' + SHADE + '</g>' + ''.join(f'<g class="x x-{k}">{v}</g>' for k, v in E.items()) + '</g>'
LAYERS = E

def shoes(xs):
    out = []
    for x in xs:
        c = x + 8
        out.append(f'<g class="shoe"><path d="M{c-12} 162 Q{c-13} 150 {c-4} 149 L{c+5} 149 Q{c+15} 151 {c+16} 162 Z" fill="#fff" stroke="#8f88a3" stroke-width="2.4" stroke-linejoin="round"/>'
                   f'<path d="M{c+6} 150 Q{c+14} 152 {c+15} 160 L{c+8} 160 Q{c+8} 154 {c+6} 150Z" fill="#e6e1ee"/>'
                   f'<path d="M{c-8} 158 Q{c+1} 152 {c+12} 158" fill="none" stroke="#ff8a3d" stroke-width="2.6" stroke-linecap="round"/>'
                   f'<path d="M{c-4} 151 l3 3 M{c} 150 l3 3 M{c+4} 150 l3 3" stroke="#8f88a3" stroke-width="1.5" stroke-linecap="round"/>'
                   f'<rect x="{c-14}" y="160" width="31" height="5" rx="2.5" fill="#ff8a3d" stroke="#17120f" stroke-width="1.6"/></g>')
    return ''.join(out)

def css(R, armo='color-mix(in srgb, var(--body) 62%, #000)', armi='var(--body)', lidf='color-mix(in srgb, var(--body) 88%, #000)'):
    show = ',\n'.join(f'{R}[data-act=emote-{k}] .x-{k}' for k in E)
    return (f'''{R} .emo, {R} .emo > g, {R} .eground {{ display: none; }}
{R}[data-act^=emote] .emo, {R}[data-act^=emote] .eshade, {R}[data-act^=emote] .eground {{ display: block; }}
{show} {{ display: block; }}
{R}[data-act^=emote] .hand, {R}[data-act^=emote] .sg, {R}[data-act^=emote] .eyes {{ display: none; }}
{R}[data-act^=emote]:not([data-act=emote-scuba]) .gg {{ display: none; }}
{R}[data-act=emote-scuba] #shades, {R}[data-act=emote-scuba] .acc, {R}[data-act=emote-scuba] .gg {{ display: block; }}
{R} .emo .a1, {R} .emo .a2, {R} .emo .duo {{ transform-box: view-box; transform-origin: 0 0; }}
{R} .emo .armo, {R} .emo .armi, {R} .emo .armh {{ fill: none; stroke-linecap: round; stroke-linejoin: round; }}
{R} .emo .armo {{ stroke: ARMO; }} {R} .emo .armi {{ stroke: ARMI; }} {R} .emo .armh {{ stroke: #fff; stroke-opacity: .22; }}
{R} .emo .lidf {{ fill: LIDF; }}
{R} .shoe {{ display: none; }}
{R}[data-act^=emote] .shoe {{ display: block; }}
{R} .emo .fxb {{ animation: eBlink .5s ease-in-out infinite alternate; }}
@keyframes eBlink {{ from {{ opacity: .25; }} to {{ opacity: 1; }} }}

/* nuh-uh: finger wagging by the face, swaying */
{R}[data-act=emote-nope] .x-nope .a1 {{ animation: eWag .22s ease-in-out infinite alternate; }}
{R}[data-act=emote-nope] .rig {{ animation: eSway .8s ease-in-out infinite alternate; }}
@keyframes eWag {{ from {{ rotate: -22deg; }} to {{ rotate: 22deg; }} }}
@keyframes eSway {{ from {{ translate: -9px 0; rotate: -3deg; }} to {{ translate: 9px 0; rotate: 3deg; }} }}
/* you! */
{R}[data-act=emote-point] .x-point .a1 {{ animation: eJab .45s ease-in-out infinite alternate; }}
@keyframes eJab {{ from {{ translate: 0 0; }} to {{ translate: 0 -12px; }} }}
/* finger guns */
{R}[data-act=emote-guns] .x-guns .a1, {R}[data-act=emote-guns] .x-guns .a2 {{ animation: eRecoil .6s ease-out infinite; }}
{R}[data-act=emote-guns] .x-guns .a2 {{ animation-delay: .3s; }}
@keyframes eRecoil {{ 0%, 60%, 100% {{ rotate: 0deg; }} 15% {{ rotate: -24deg; }} }}
/* dab */
{R}[data-act=emote-dab] .rig {{ animation: eDab 1.2s cubic-bezier(.2,1.6,.4,1) infinite; }}
{R}[data-act=emote-dab] .la {{ rotate: 8deg; }}
@keyframes eDab {{ 0% {{ rotate: 0deg; translate: 0 0; }} 25%, 85% {{ rotate: -11deg; translate: -6px 2px; }} 100% {{ rotate: 0deg; translate: 0 0; }} }}
/* shrug */
{R}[data-act=emote-shrug] .body {{ animation: eShrug 1.3s ease-in-out infinite; }}
@keyframes eShrug {{ 0%, 100% {{ translate: 0 0; }} 30%, 60% {{ translate: 0 -9px; }} }}
/* vibe */
{R}[data-act=emote-vibe] .rig {{ animation: eVibe .45s ease-in-out infinite alternate; }}
{R}[data-act=emote-vibe] .x-vibe .a1, {R}[data-act=emote-vibe] .x-vibe .a2 {{ animation: ePump .45s ease-in-out infinite alternate; }}
{R}[data-act=emote-vibe] .x-vibe .a2 {{ animation-delay: .22s; }}
{R}[data-act=emote-vibe] .notes {{ animation: eRise 1.6s ease-out infinite; }}
@keyframes eVibe {{ from {{ rotate: -7deg; translate: -4px 0; }} to {{ rotate: 7deg; translate: 4px 0; }} }}
@keyframes ePump {{ from {{ translate: 0 0; }} to {{ translate: 0 -10px; }} }}
@keyframes eRise {{ from {{ translate: 0 10px; opacity: 0; }} 30% {{ opacity: 1; }} to {{ translate: 0 -14px; opacity: 0; }} }}
/* facepalm */
{R}[data-act=emote-facepalm] .body {{ animation: none; }}
{R}[data-act=emote-facepalm] .rig {{ animation: eSlump 1.4s ease-out forwards; }}
{R}[data-act=emote-facepalm] .puff {{ animation: eRise 1.8s ease-out infinite; }}
@keyframes eSlump {{ to {{ translate: 0 6px; rotate: -4deg; }} }}
/* shh */
{R}[data-act=emote-shh] .rig {{ animation: lean 1.4s infinite alternate ease-in-out; }}
{R}[data-act=emote-shh] .x-shh .a1 {{ animation: eHush 1.2s ease-in-out infinite alternate; }}
@keyframes eHush {{ from {{ rotate: -3deg; }} to {{ rotate: 3deg; }} }}
/* scheming */
{R}[data-act=emote-scheme] .rig {{ animation: lean 1.6s infinite alternate ease-in-out; }}
{R}[data-act=emote-scheme] .x-scheme .a1 {{ animation: eRub .25s ease-in-out infinite alternate; }}
@keyframes eRub {{ from {{ rotate: -6deg; translate: 0 0; }} to {{ rotate: 6deg; translate: 0 -3px; }} }}
/* perfection */
{R}[data-act=emote-perfect] .x-perfect .a1 {{ animation: eOk .5s ease-in-out infinite alternate; }}
@keyframes eOk {{ from {{ rotate: -6deg; }} to {{ rotate: 6deg; }} }}
/* pat pat */
{R}[data-act=emote-pat] .rig {{ rotate: -3deg; }}
{R}[data-act=emote-pat] .x-pat .a1 {{ animation: ePat .3s ease-in-out infinite alternate; }}
@keyframes ePat {{ from {{ translate: 6px 0; }} to {{ translate: -8px 0; }} }}
/* side-eye */
{R}[data-act=emote-sideeye] .x-sideeye .pup {{ animation: eSide 3s ease-in-out forwards; }}
{R}[data-act=emote-sideeye] .body {{ animation: none; }}
{R}[data-act=emote-sideeye] .rig {{ rotate: 2deg; }}
{R}[data-act=emote-sideeye] .dots circle {{ animation: eBlink .6s ease-in-out infinite alternate; }}
{R}[data-act=emote-sideeye] .dots circle:nth-child(2) {{ animation-delay: .2s; }}
{R}[data-act=emote-sideeye] .dots circle:nth-child(3) {{ animation-delay: .4s; }}
@keyframes eSide {{ 0%, 15% {{ translate: 0 0; }} 35%, 100% {{ translate: 7px 0; }} }}
/* sweating */
{R}[data-act=emote-sweat] .x-sweat .a1 {{ animation: eWipe .5s ease-in-out infinite alternate; }}
{R}[data-act=emote-sweat] .drops > g {{ animation: eDrip 1.1s ease-in infinite; }}
{R}[data-act=emote-sweat] .drops > g:nth-child(2) {{ animation-delay: .35s; }}
{R}[data-act=emote-sweat] .drops > g:nth-child(3) {{ animation-delay: .7s; }}
{R}[data-act=emote-sweat] .drops > g:nth-child(4) {{ animation-delay: .5s; }}
{R}[data-act=emote-sweat] .heat {{ animation: eRise 1.2s ease-out infinite; }}
@keyframes eWipe {{ from {{ translate: -26px 0; }} to {{ translate: 10px 0; }} }}
@keyframes eDrip {{ from {{ translate: 0 0; opacity: 1; }} to {{ translate: 0 26px; opacity: 0; }} }}
/* scuba dance */
{R}[data-act=emote-scuba] .rig {{ animation: eScuba .9s ease-in-out infinite; }}
{R}[data-act=emote-scuba] .body {{ animation: eBounce .45s ease-in-out infinite; }}
{R}[data-act=emote-scuba] .x-scuba .duo {{ animation: eSwim .9s ease-in-out infinite; }}
{R}[data-act=emote-scuba] .la {{ animation: eKickA .9s ease-in-out infinite; }}
{R}[data-act=emote-scuba] .lb {{ animation: eKickB .9s ease-in-out infinite; }}
{R}[data-act=emote-scuba] .bubbles {{ animation: eRise 1.4s ease-out infinite; }}
{R}[data-act=emote-scuba] .leg {{ transform-box: fill-box; transform-origin: 50% 0; }}
@keyframes eScuba {{ 0%, 100% {{ translate: -6px 0; rotate: -4deg; }} 50% {{ translate: 6px 0; rotate: 4deg; }} }}
@keyframes eBounce {{ 0%, 100% {{ translate: 0 0; }} 50% {{ translate: 0 -8px; }} }}
@keyframes eSwim {{ 0%, 100% {{ translate: -20px 0; rotate: -6deg; }} 50% {{ translate: 20px 4px; rotate: 6deg; }} }}
@keyframes eKickA {{ 0%, 100% {{ translate: 0 0; rotate: 0deg; }} 25% {{ translate: 0 -14px; rotate: 14deg; }} 50% {{ translate: 0 0; rotate: 0deg; }} }}
@keyframes eKickB {{ 0%, 50%, 100% {{ translate: 0 0; rotate: 0deg; }} 75% {{ translate: 0 -14px; rotate: -14deg; }} }}
''').replace('ARMO', armo).replace('ARMI', armi).replace('LIDF', lidf)

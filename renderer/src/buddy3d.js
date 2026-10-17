// 3D look for the buddy: a soft-voxel version of the same character, animated procedurally.
// Bundled to renderer/buddy3d.bundle.js (npm run build:3d) so the app needs no module loader at runtime.
// Contract: window.__buddy3d = { ok, update({ act, eyes, item, dir, color, color2 }) }
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { EMOTE_FACE, EMOTE_THEME } from './emoteface.js';

const host = document.getElementById('mascot');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'low-power' });
} catch (e) {
  window.__buddy3d = { ok: false, error: String(e && e.message || e) };
}

if (renderer) {
  const W = host.clientWidth || 160, H = host.clientHeight || 150;
  renderer.setPixelRatio(Math.min((window.devicePixelRatio || 1) * (window.__zoom3d || 1), 4)); // __zoom3d: promo videos scale the stage up
  renderer.setSize(W, H);
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.domElement.id = 'buddy3d';
  renderer.domElement.style.display = ''; // three sets display:block inline, which would beat the CSS that hides it for other looks
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, W / H, 0.1, 50);
  camera.position.set(0, 1.05, 5.1);
  camera.lookAt(0, 0.5, 0);

  scene.add(new THREE.HemisphereLight(0xfff4ea, 0x3a2a22, 1.7));
  const key = new THREE.DirectionalLight(0xffffff, 2.1); key.position.set(3, 5, 4); scene.add(key);
  const rim = new THREE.DirectionalLight(0xffd2b8, 0.9); rim.position.set(-3, 2.5, -3.5); scene.add(rim);

  // ---------- materials ----------
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xd97757, roughness: 0.5, metalness: 0.02, emissive: 0xd97757, emissiveIntensity: 0.12 });
  const handMat = new THREE.MeshStandardMaterial({ color: 0xd97757, roughness: 0.5, metalness: 0.02, emissive: 0xd97757, emissiveIntensity: 0.12 });
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x17120f, roughness: 0.35 });
  const shineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x2a2523, roughness: 0.6 });
  const paperMat = new THREE.MeshStandardMaterial({ color: 0xf4eee8, roughness: 0.8 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x9fd4ff, roughness: 0.1, metalness: 0.2, transparent: true, opacity: 0.55 });
  const box = (w, h, d, mat, r = 0.06) => new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, Math.min(r, w / 2, h / 2, d / 2)), mat);

  // 2D artwork coordinates (x 0..160 left->right, y 0..114 top->down) to 3D on the front face
  const D = 0.8; // body depth
  const S = 0.01;
  const P = (x, y) => [(x - 80) * S, (114 - y) * S];

  // ---------- rig ----------
  const root = new THREE.Group(); scene.add(root);      // walking yaw / hop
  const body = new THREE.Group(); root.add(body);       // bob / tilt / squash
  const torso = box(1.6, 1.14, D, bodyMat, 0.09); torso.position.set(0, 0.57, 0); body.add(torso);

  const mkLimb = (w, h, d, mat, px, py, pz, pivotTop = true) => {
    const pivot = new THREE.Group(); pivot.position.set(px, py, pz);
    const m = box(w, h, d, mat, 0.05); m.position.y = pivotTop ? -h / 2 : h / 2; pivot.add(m);
    return pivot;
  };
  // hands hang from the shoulder line so they can swing and raise
  const handL = mkLimb(0.2, 0.38, 0.42, handMat, -0.9, 0.76, 0); body.add(handL);
  const handR = mkLimb(0.2, 0.38, 0.42, handMat, 0.9, 0.76, 0); body.add(handR);
  const legMat = bodyMat.clone();
  const legs = [-0.72, -0.36, 0.35, 0.72].map((x, i) => { const l = mkLimb(0.17, 0.46, 0.3, legMat, x, 0.02, 0); l.userData.phase = i % 2; root.add(l); return l; });

  // ---------- eyes (one group per expression) ----------
  const face = new THREE.Group(); face.position.z = D / 2 + 0.012; body.add(face);
  const seg = (g, x1, y1, x2, y2, t = 6) => {
    const [a, b] = P(x1, y1), [c, d] = P(x2, y2);
    const len = Math.hypot(c - a, d - b) + t * S;
    const m = box(len, t * S, 0.04, eyeMat, 0.015);
    m.position.set((a + c) / 2, (b + d) / 2, 0); m.rotation.z = Math.atan2(d - b, c - a); g.add(m);
  };
  const eyes = {};
  const mkEyes = (name, build) => { const g = new THREE.Group(); build(g); g.visible = false; face.add(g); eyes[name] = g; return g; };
  const pupil = (g, cx, cy, w, h, shine = true) => {
    const [x, y] = P(cx, cy);
    const e = new THREE.Group(); e.position.set(x, y, 0);
    const m = box(w * S, h * S, 0.05, eyeMat, Math.min(w, h) * S * 0.45); e.add(m);
    if (shine) { const s = new THREE.Mesh(new THREE.SphereGeometry(w * S * 0.22, 12, 12), shineMat); s.position.set(w * S * 0.2, h * S * 0.22, 0.03); e.add(s); }
    g.add(e); return e;
  };
  const openEyes = [];
  mkEyes('open', (g) => { openEyes.push(pupil(g, 29, 50, 16, 28), pupil(g, 131, 50, 16, 28)); });
  const wideEyes = [];
  mkEyes('wide', (g) => { wideEyes.push(pupil(g, 29, 48, 20, 36), pupil(g, 131, 48, 20, 36)); });
  mkEyes('squint', (g) => { seg(g, 17, 37, 41, 51); seg(g, 41, 51, 17, 65); seg(g, 143, 37, 119, 51); seg(g, 119, 51, 143, 65); });
  mkEyes('happy', (g) => { seg(g, 17, 62, 29, 42); seg(g, 29, 42, 41, 62); seg(g, 119, 62, 131, 42); seg(g, 131, 42, 143, 62); });
  mkEyes('sleep', (g) => { seg(g, 17, 54, 41, 54); seg(g, 119, 54, 143, 54); });

  // ---------- props ----------
  const keyboard = box(1.1, 0.07, 0.34, darkMat, 0.03); keyboard.position.set(0, 0.12, D / 2 + 0.32); root.add(keyboard);
  const book = new THREE.Group();
  const pageL = box(0.42, 0.56, 0.04, paperMat, 0.02); pageL.position.set(-0.2, 0, 0); pageL.rotation.y = 0.28; book.add(pageL);
  const pageR = box(0.42, 0.56, 0.04, paperMat, 0.02); pageR.position.set(0.2, 0, 0); pageR.rotation.y = -0.28; book.add(pageR);
  const spine = box(0.06, 0.58, 0.08, darkMat, 0.02); book.add(spine);
  book.position.set(0, 1.62, 0.35); root.add(book);
  const lens = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.035, 10, 28), darkMat); lens.add(ring);
  const glass = new THREE.Mesh(new THREE.CircleGeometry(0.16, 24), glassMat); lens.add(glass);
  const handle = box(0.06, 0.3, 0.06, darkMat, 0.02); handle.position.set(0.14, -0.27, 0); handle.rotation.z = 0.5; lens.add(handle);
  lens.position.set(0.3, -0.42, 0.25); handR.add(lens);

  // ---------- accessories ----------
  const lensMat = new THREE.MeshStandardMaterial({ color: 0x0c0c0c, roughness: 0.15, metalness: 0.3 });
  const tintMat = new THREE.MeshStandardMaterial({ color: 0x9fd4ff, roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.4 });
  const strapMat = new THREE.MeshStandardMaterial({ color: 0x3a3633, roughness: 0.7 });
  const mugMat = new THREE.MeshStandardMaterial({ color: 0xf4eee8, roughness: 0.4 });
  const coffeeMat = new THREE.MeshStandardMaterial({ color: 0x5a3422, roughness: 0.5 });
  const sun = new THREE.Group(); sun.visible = false; face.add(sun);
  for (const x of [29, 131]) { const [px, py] = P(x, 50); const l = box(0.44, 0.3, 0.07, lensMat, 0.1); l.position.set(px, py, 0.03); sun.add(l); }
  { const b = box(0.62, 0.07, 0.07, lensMat, 0.03); b.position.set(0, P(80, 42)[1], 0.03); sun.add(b); }
  const gog = new THREE.Group(); gog.visible = false; face.add(gog);
  for (const x of [29, 131]) {
    const [px, py] = P(x, 50);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.045, 10, 24), strapMat); rim.position.set(px, py, 0.05); gog.add(rim);
    const gl = new THREE.Mesh(new THREE.CircleGeometry(0.2, 24), tintMat); gl.position.set(px, py, 0.06); gog.add(gl);
  }
  { const band = box(1.66, 0.1, D + 0.06, strapMat, 0.03); band.position.set(0, P(80, 50)[1], -D / 2); gog.add(band); } // wraps around the whole head
  const mug = new THREE.Group(); mug.visible = false;
  { const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.2, 18), mugMat); cup.position.y = 0; mug.add(cup);
    const top = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.02, 18), coffeeMat); top.position.y = 0.095; mug.add(top);
    const han = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.018, 8, 14), mugMat); han.position.set(0.12, 0, 0); mug.add(han);
    mug.position.set(0.1, -0.34, 0.26); handR.add(mug); }

  // ---------- hero costumes (original look-alikes): colours, cape and props ----------
  const COST = {
    spider: { body: 0xc1272d, legs: 0x1d3f9e, hands: 0xc1272d, cape: null },
    thor: { body: 0x4a566e, legs: 0x3b4256, hands: 0x8d96a3, cape: 0xb3202a },
    captain: { body: 0x234aa8, legs: 0x234aa8, hands: 0xc1272d, cape: null },
    iron: { body: 0xb3202a, legs: 0xb3202a, hands: 0xe0b030, cape: null },
    strange: { body: 0x2c4f9e, legs: 0x243f80, hands: 0xe8c9a0, cape: 0xb3202a },
    superman: { body: 0x1f5fd6, legs: 0x1f5fd6, hands: 0x1f5fd6, cape: 0xc1272d },
    batman: { body: 0x2a2d34, legs: 0x20232a, hands: 0x20232a, cape: 0x15171c },
  };
  const capeMat = new THREE.MeshStandardMaterial({ color: 0xc1272d, roughness: 0.8, side: THREE.DoubleSide });
  const cape = box(1.7, 1.25, 0.05, capeMat, 0.02); cape.position.set(0, 0.5, -D / 2 - 0.04); cape.visible = false; body.add(cape);
  const hammer = new THREE.Group(); hammer.visible = false;
  { const hh = box(0.07, 0.5, 0.07, new THREE.MeshStandardMaterial({ color: 0x7a4a1c }), 0.02); hh.position.y = -0.1; hammer.add(hh);
    const hd = box(0.4, 0.2, 0.2, new THREE.MeshStandardMaterial({ color: 0x8d96a3, metalness: 0.6, roughness: 0.3 }), 0.03); hd.position.y = 0.2; hammer.add(hd);
    hammer.position.set(0.1, -0.3, 0.2); handR.add(hammer); }
  const shield = new THREE.Group(); shield.visible = false;
  { for (const [rad, colr, z] of [[0.36, 0xc1272d, 0], [0.28, 0xffffff, 0.012], [0.2, 0xc1272d, 0.024], [0.12, 0x234aa8, 0.036]]) { const d = new THREE.Mesh(new THREE.CylinderGeometry(rad, rad, 0.03, 28), new THREE.MeshStandardMaterial({ color: colr, roughness: 0.4, metalness: 0.2 })); d.rotation.x = Math.PI / 2; d.position.z = z; shield.add(d); }
    shield.position.set(-0.12, -0.34, 0.26); handL.add(shield); }
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xffb347 });
  const ringL = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.025, 8, 28), ringMat), ringR = ringL.clone();
  ringL.visible = ringR.visible = false; ringL.position.set(-0.1, -0.4, 0.2); ringR.position.set(0.1, -0.4, 0.2); handL.add(ringL); handR.add(ringR);
  const webMat = new THREE.MeshBasicMaterial({ color: 0xf4f4f4 });
  const web = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.4, 6), webMat); web.visible = false; web.position.set(0, 1.5, 0); root.add(web);
  const earMat = new THREE.MeshStandardMaterial({ color: 0x20232a });
  const ears = new THREE.Group(); ears.visible = false;
  for (const x of [-0.5, 0.5]) { const e = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.3, 4), earMat); e.position.set(x, 1.28, 0); ears.add(e); }
  body.add(ears);
  const mask = new THREE.Group(); mask.visible = false; face.add(mask);
  for (const x of [29, 131]) { const [px, py] = P(x, 50); const l = box(0.4, 0.2, 0.05, new THREE.MeshBasicMaterial({ color: 0xffffff }), 0.05); l.position.set(px, py, 0.05); l.rotation.z = (x < 80 ? -1 : 1) * 0.22; mask.add(l); }

  // ---------- emotes (🎭 tray): the flat look's detailed face as a decal, plus white gloves, sneakers and props ----------
  // The decal covers the artwork box x -40..200, y -60..124 so the sparks, notes and drops around the body show too.
  const DX0 = -40, DY0 = -60, DW = 240, DH = 184, DPX = 4;
  const decalMat = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false });
  const decal = new THREE.Mesh(new THREE.PlaneGeometry(DW * S, DH * S), decalMat);
  { const [x, y] = P(DX0 + DW / 2, DY0 + DH / 2); decal.position.set(x, y, 0.002); }
  decal.visible = false; face.add(decal);
  const decals = new Map(); // emote id + lid colour -> texture
  // th: the hero costume's EMOTE_THEME entry (lens = mask lenses without iris; face = eyes/brows/mouth moved onto the face)
  const paintFace = (ops, lid, th) => {
    const cv = document.createElement('canvas'); cv.width = DW * DPX; cv.height = DH * DPX;
    const c = cv.getContext('2d');
    const lens = th && th.lens, fc = th && th.face;
    for (const o of ops) {
      if (lens && o.c === 'pup') continue;
      const m = o.m || [1, 0, 0, 1, 0, 0];
      c.setTransform(DPX, 0, 0, DPX, -DX0 * DPX, -DY0 * DPX);
      if (fc && o.sd === 'L') c.translate(fc, 4); else if (fc && o.sd === 'R') c.translate(-fc, 4);
      else if (fc && o.sd === 'M') { c.translate(80, 49); c.scale(0.75, 0.75); c.translate(-80, -63); }
      c.transform(...m);
      const p = new Path2D();
      if (o.k === 'p') p.addPath(new Path2D(o.d));
      else if (o.k === 'e') p.ellipse(o.g[0], o.g[1], o.g[2], o.g[3], 0, 0, Math.PI * 2);
      else p.roundRect(o.g[0], o.g[1], o.g[2], o.g[3], o.g[4]);
      c.globalAlpha = o.o == null ? 1 : o.o;
      const ew = lens && o.c === 'ew';
      if (o.f) { c.fillStyle = ew ? lens[0] : o.f === 'LIDF' ? lid : o.f; c.fill(p); }
      if (o.s) { c.strokeStyle = ew ? lens[1] : o.s; c.lineWidth = ew ? lens[2] : o.w; c.lineCap = o.lc || 'butt'; c.lineJoin = o.lj || 'miter'; c.setLineDash(o.da || []); c.stroke(p); }
    }
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
    return tex;
  };
  const lidCol = new THREE.Color();
  const showDecal = (id) => {
    const ops = EMOTE_FACE[id];
    if (!ops) { decal.visible = false; return; }
    const th = EMOTE_THEME[st.costume];
    lidCol.copy(bodyMat.color).multiplyScalar(0.88);
    const lid = (th && th.lid) || '#' + lidCol.getHexString(THREE.SRGBColorSpace), key = id + lid + st.costume;
    if (!decals.has(key)) { if (decals.size >= 6) { for (const t of decals.values()) t.dispose(); decals.clear(); } decals.set(key, paintFace(ops, lid, th)); }
    if (decalMat.map !== decals.get(key)) { decalMat.map = decals.get(key); decalMat.needsUpdate = true; }
    decal.visible = true;
  };

  const gloveMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.55, emissive: 0xffffff, emissiveIntensity: 0.08 });
  const gloveShade = new THREE.MeshStandardMaterial({ color: 0xd9d3e6, roughness: 0.6 });
  // One glove per shape, hung below the hand block (local -y points down the arm, +z out of the body front).
  // side: +1 right hand, -1 left; the thumb sits toward local +x*side, which is "up" when the arm points outward.
  const mkGlove = (kind, side) => {
    const g = new THREE.Group(); g.visible = false;
    const cuff = box(0.27, 0.08, 0.46, gloveMat, 0.035); cuff.position.y = -0.36; g.add(cuff);
    const band = box(0.28, 0.02, 0.47, gloveShade, 0.01); band.position.y = -0.345; g.add(band);
    const palm = box(0.28, 0.24, 0.32, gloveMat, 0.1); palm.position.y = -0.52; g.add(palm);
    const fing = (x, y, z, h, rz = 0, rx = 0, w = 0.075) => { const f = box(w, h, w, gloveMat, w / 2); f.geometry.translate(0, -h / 2, 0); f.position.set(x, y, z); f.rotation.set(rx, 0, rz); g.add(f); return f; };
    if (kind === 'index' || kind === 'gun') {
      fing(0.03 * side, -0.62, 0.06, 0.24);
      if (kind === 'gun') fing(0.13 * side, -0.48, 0.04, 0.16, side * 2.4); // thumb cocked up
      else fing(0.13 * side, -0.5, 0.08, 0.1, side * 0.6);
    } else if (kind === 'palm') {
      [-0.1, -0.035, 0.035, 0.1].forEach((x, i) => fing(x * side, -0.62, 0, [0.15, 0.19, 0.18, 0.13][i], side * x * 0.9, 0, 0.065));
      fing(0.15 * side, -0.48, 0.03, 0.13, side * 1.1, 0, 0.07);
    } else if (kind === 'ok') {
      [0.0, 0.07, 0.13].forEach((x, i) => fing(x * side, -0.62, 0, [0.17, 0.16, 0.12][i], side * x, 0, 0.065));
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.065, 0.032, 8, 18), gloveMat); ring.position.set(-0.1 * side, -0.68, 0.06); ring.rotation.y = 0.4; g.add(ring);
    } else if (kind === 'pinch') {
      for (const [x, rz] of [[-0.06, 0.25], [0, 0], [0.06, -0.25]]) fing(x * side, -0.6, 0.02, 0.17, rz * side, 0, 0.07);
      fing(0.13 * side, -0.52, 0.06, 0.14, side * 0.5, 0.3, 0.07);
    } else { // fist
      const knuck = box(0.26, 0.08, 0.26, gloveMat, 0.04); knuck.position.set(0, -0.66, 0.02); g.add(knuck);
    }
    return g;
  };
  const GLOVES = ['index', 'gun', 'palm', 'ok', 'pinch', 'fist'];
  const glovesR = {}, glovesL = {};
  for (const kd of GLOVES) { handR.add(glovesR[kd] = mkGlove(kd, 1)); handL.add(glovesL[kd] = mkGlove(kd, -1)); }
  // which glove each emote wears on the right / left hand (the 3D poses pick their own hands)
  const EMO_GLOVE = {
    nope: ['index', 'fist'], point: ['index', 'fist'], guns: ['gun', 'gun'], dab: ['palm', 'palm'], shrug: ['palm', 'palm'], vibe: ['palm', 'palm'],
    facepalm: ['palm', 'fist'], shh: ['index', 'fist'], scheme: ['pinch', 'pinch'], perfect: ['ok', 'fist'], pat: ['palm', 'fist'],
    sideeye: ['fist', 'fist'], sweat: ['palm', 'fist'], scuba: ['palm', 'palm'],
  };
  const shoeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 });
  const soleMat = new THREE.MeshStandardMaterial({ color: 0xff8a3d, roughness: 0.6 });
  const shoeShade = new THREE.MeshStandardMaterial({ color: 0xd9d3e6, roughness: 0.6 }), laceMat = soleMat.clone();
  const PLAIN = { gv: '#ffffff', gs: '#d9d3e6', su: '#ffffff', ss: '#d9d3e6', sl: '#ff8a3d', so: '#ff8a3d' }; // no costume
  const shoes = legs.map((l) => {
    const s = new THREE.Group(); s.visible = false;
    const up = box(0.23, 0.13, 0.38, shoeMat, 0.05); up.position.set(0, -0.43, 0.05); s.add(up);
    const toe = box(0.22, 0.08, 0.12, shoeShade, 0.035); toe.position.set(0, -0.44, 0.22); s.add(toe);
    const lace = box(0.16, 0.025, 0.04, laceMat, 0.01); lace.position.set(0, -0.36, 0.12); lace.rotation.x = -0.4; s.add(lace);
    const sole = box(0.25, 0.04, 0.42, soleMat, 0.015); sole.position.set(0, -0.5, 0.05); s.add(sole);
    l.add(s); return s;
  });
  const phones = new THREE.Group(); phones.visible = false; body.add(phones);
  { const pm = new THREE.MeshStandardMaterial({ color: 0x2b2733, roughness: 0.5 }), cm = new THREE.MeshStandardMaterial({ color: 0xff5d8f, roughness: 0.45 });
    const arc = new THREE.Mesh(new THREE.TorusGeometry(0.88, 0.045, 8, 32, Math.PI), pm); arc.position.y = 0.62; arc.scale.y = 0.72; phones.add(arc);
    for (const sx of [-1, 1]) { const cup = box(0.14, 0.36, 0.36, cm, 0.06); cup.position.set(sx * 0.86, 0.6, 0); phones.add(cup); const pad = box(0.04, 0.26, 0.26, pm, 0.02); pad.position.set(sx * 0.94, 0.6, 0); phones.add(pad); } }
  const crown = new THREE.Group(); crown.visible = false; crown.position.set(0, 1.2, 0); body.add(crown);
  { const gm = new THREE.MeshStandardMaterial({ color: 0xffcc33, roughness: 0.3, metalness: 0.55, emissive: 0x6a4a00, emissiveIntensity: 0.3 });
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.27, 0.12, 24, 1, true), gm); ring.material.side = THREE.DoubleSide; crown.add(ring);
    for (let i = 0; i < 5; i++) { const an = i / 5 * Math.PI * 2, sp = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.16, 4), gm); sp.position.set(Math.sin(an) * 0.28, 0.13, Math.cos(an) * 0.28); crown.add(sp); }
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.045), new THREE.MeshStandardMaterial({ color: 0xff4d6d, roughness: 0.2, metalness: 0.2 })); gem.position.set(0, 0, 0.29); crown.add(gem); }
  const snorkel = new THREE.Group(); snorkel.visible = false; body.add(snorkel);
  { const sm = new THREE.MeshStandardMaterial({ color: 0xff8a3d, roughness: 0.45 }), wm = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
    const z = D / 2 + 0.06, [mx, my] = P(94, 86);
    const hor = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.88 - mx, 10), sm); hor.rotation.z = Math.PI / 2; hor.position.set((mx + 0.88) / 2, my, z); snorkel.add(hor);
    const ver = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 1.15, 10), sm); ver.position.set(0.88, my + 0.575, z); snorkel.add(ver);
    for (const y of [0.55, 0.85]) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.048, 0.08, 10), wm); b.position.set(0.88, y, z); snorkel.add(b); }
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.045, 0.1, 10), sm); cap.position.set(0.88, my + 1.17, z); snorkel.add(cap); }
  const towel = new THREE.Group(); towel.visible = false; towel.position.set(0, -0.6, 0.24); towel.rotation.x = 1.5; handR.add(towel); // stands up while the hand is raised
  { const tm = new THREE.MeshStandardMaterial({ color: 0xf3efe6, roughness: 0.9, side: THREE.DoubleSide }), bm = new THREE.MeshStandardMaterial({ color: 0x7cc8ff, roughness: 0.9 });
    const cl = box(0.5, 0.36, 0.04, tm, 0.02); cl.rotation.z = 0.25; towel.add(cl);
    for (const y of [-0.06, 0.07]) { const st2 = box(0.5, 0.035, 0.045, bm, 0.01); st2.position.y = y; cl.add(st2); } }
  const showEmote = (id) => {
    const on = !!id, gl = EMO_GLOVE[id] || [];
    const th = EMOTE_THEME[st.costume] || PLAIN; // gloves and shoes in the hero costume's colours
    gloveMat.color.set(th.gv); gloveMat.emissive.set(th.gv); gloveShade.color.set(th.gs);
    shoeMat.color.set(th.su); shoeShade.color.set(th.ss); laceMat.color.set(th.sl); soleMat.color.set(th.so);
    if (on) showDecal(id); else decal.visible = false;
    for (const kd of GLOVES) { glovesR[kd].visible = on && gl[0] === kd; glovesL[kd].visible = on && gl[1] === kd; }
    for (const s of shoes) s.visible = on;
    phones.visible = id === 'vibe'; crown.visible = id === 'pat'; snorkel.visible = id === 'scuba'; towel.visible = id === 'sweat';
  };

  // keyframe helper: p in 0..1, frames [[p, v], ...] (linear)
  const kf = (p, fr) => { if (p <= fr[0][0]) return fr[0][1]; for (let i = 1; i < fr.length; i++) if (p <= fr[i][0]) { const [a, va] = fr[i - 1], [b, vb] = fr[i]; return va + (vb - va) * ((p - a) / (b - a || 1)); } return fr[fr.length - 1][1]; };
  // world-space effects for the new stunts
  const portalGrp = [0, 1].map((k) => { const g = new THREE.Group(); const ring = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.045, 10, 36), new THREE.MeshBasicMaterial({ color: 0xffa63a })); const inner = new THREE.Mesh(new THREE.CircleGeometry(0.46, 32), new THREE.MeshBasicMaterial({ color: 0x2a1450, transparent: true, opacity: 0.9 })); g.add(inner, ring); g.position.set(k ? 0.85 : -0.85, 0.5, 0.2); g.scale.setScalar(0.01); g.visible = false; scene.add(g); return g; });
  const strikeBolt = box(0.07, 2.4, 0.05, new THREE.MeshBasicMaterial({ color: 0xfff9b8 }), 0.02); strikeBolt.position.set(0, 1.2, 0.3); strikeBolt.visible = false; scene.add(strikeBolt);
  const flashLight = new THREE.PointLight(0xcfe6ff, 0, 6); flashLight.position.set(0, 1.2, 2); scene.add(flashLight);
  const gold = new THREE.MeshStandardMaterial({ color: 0xe0b030, roughness: 0.35, metalness: 0.5 });
  const armor = new THREE.Group(); armor.visible = false; root.add(armor);
  const boots = [-0.72, -0.36, 0.35, 0.72].map((x) => { const b = box(0.21, 0.2, 0.34, gold, 0.04); b.position.set(x, -0.3, 0); armor.add(b); return b; });
  const facePlate = box(1.35, 0.62, 0.06, gold, 0.1); facePlate.position.set(0, 0.74, D / 2 + 0.05); armor.add(facePlate);
  const reactor = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.03, 8, 20), new THREE.MeshBasicMaterial({ color: 0x7ee8ff })); reactor.position.set(0, 0.28, D / 2 + 0.06); armor.add(reactor);
  const jets = [-0.72, 0.72].map((x) => { const j = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.5, 10), new THREE.MeshBasicMaterial({ color: 0x7ee8ff })); j.rotation.x = Math.PI; j.position.set(x, -0.75, 0); j.visible = false; root.add(j); return j; });
  const wcol = new THREE.Vector3();

  // costume art decal: the same SVG art as the flat look, baked into a texture on the torso's front face
  const costDecal = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.14), new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false })); costDecal.position.set(0, 0.57, D / 2 + 0.004); costDecal.visible = false; body.add(costDecal);
  let decalFor = '';
  const costTex = { plain: null, emote: null }; // emote: without the costume's own eyes and smile (class cf), the emote brings its own
  function buildDecal(name) {
    decalFor = name;
    const art = window.COSTUME_ART && window.COSTUME_ART[name];
    if (!art) { costDecal.visible = false; return; }
    for (const kind of ['plain', 'emote']) {
      const hide = kind === 'emote' ? '<style>.cf{display:none}</style>' : '';
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 114" width="640" height="456">${hide}<defs>${window.COSTUME_DEFS}</defs><g clip-path="url(#bodyClip)">${art.under}${art.over}</g></svg>`;
      const img = new Image();
      img.onload = () => {
        if (decalFor !== name) return;
        const cv = document.createElement('canvas'); cv.width = 640; cv.height = 456; cv.getContext('2d').drawImage(img, 0, 0, 640, 456);
        const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
        if (costTex[kind]) costTex[kind].dispose();
        costTex[kind] = tex; costDecal.material.map = null; costDecal.visible = true; dirty = true; settle = 12; // frame() picks the texture
      };
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    }
  }

  // canoe for the aura-farming pose (Pacu Jalur boat)
  const canoe = new THREE.Group(); canoe.visible = false; canoe.scale.set(0.7, 0.85, 0.85); canoe.position.y = 0.12; root.add(canoe);
  { const hullMat = new THREE.MeshStandardMaterial({ color: 0x6b3f2a, roughness: 0.7 });
    const trimMat = new THREE.MeshStandardMaterial({ color: 0xc0392b, roughness: 0.6 });
    const hull = box(3.0, 0.2, 0.78, hullMat, 0.09); hull.position.set(0, -0.58, 0); canoe.add(hull);
    const trim = box(3.02, 0.05, 0.8, trimMat, 0.02); trim.position.set(0, -0.47, 0); canoe.add(trim);
    for (const sx of [-1, 1]) { const tip = box(0.42, 0.16, 0.5, hullMat, 0.06); tip.position.set(sx * 1.6, -0.5, 0); tip.rotation.z = sx * 0.35; canoe.add(tip); } }

  // ---------- state ----------
  const st = { costume: 'none', act: 'idle', eyes: 'sleep', dir: 1, item: '', shades: 'none', coffee: false, think: 'scratch' };
  const itemEl = document.createElement('div'); itemEl.id = 'item3d'; host.appendChild(itemEl);
  const col = new THREE.Color(), col2 = new THREE.Color(), handBase = new THREE.Color();
  const handHi = () => handMat.color.copy(st.costume !== 'none' ? handBase : col2);

  const ease = (cur, target, k) => cur + (target - cur) * k;
  const clock = () => (window.__vnow ? window.__vnow() : performance.now()); // promo recorder supplies virtual time
  let yaw = 0, last = 0, t0 = clock(), shownEmote = '';

  // A timer, not requestAnimationFrame: rAF keeps the compositor redrawing the transparent window at 60 Hz
  // even on frames we skip. 8 fps when calm, 30 fps when moving.
  // Asleep: hold still and draw nothing until something changes (software WebGL is not free).
  let dirty = true, settle = 0;
  function frame() {
    const asleep = st.act === 'idle';
    setTimeout(frame, asleep ? 250 : st.act === 'sit' ? 125 : 66); // 15 fps moving: smooth enough for chunky voxels, half the CPU of 30
    if (document.hidden) return;
    if (asleep && !dirty && settle <= 0) return;
    if (asleep) settle--; else settle = 12; // let poses ease into the sleeping position before freezing
    dirty = false;
    const now = clock();
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    const t = (now - t0) / 1000;
    const k = 1 - Math.pow(0.001, dt); // frame-rate independent smoothing
    const a = st.act;

    // defaults every frame, then each act overrides
    let targetYaw = Math.sin(t * 0.6) * 0.32; // slow turntable sway shows off the depth
    let by = Math.sin(t * Math.PI * 2 / 2.6) * 0.015, roll = 0, pitch = 0, sx = 1, sy = 1, hop = 0;
    let lPX = -0.9, lPY = 0.76, rPX = 0.9, rPY = 0.76, lRotX = 0, lRotZ = 0, rRotX = 0, rRotZ = 0, lPosZ = 0, rPosZ = 0, legSwing = 0, legLift = 0, legScale = 1;
    let rx = 0, showWeb = false, showRings = false, showCanoe = false, showKb = false, showBook = false, showLens = false, eyeX = 0, eyeY = 0;
    handMat.color.copy(st.costume !== 'none' ? handBase : col);

    switch (a) {
      case 'walk': case 'run': {
        const sp = a === 'run' ? 14 : 8;
        targetYaw = st.dir * (a === 'run' ? 1.05 : 0.85);
        by = Math.abs(Math.sin(t * sp)) * (a === 'run' ? 0.09 : 0.05);
        legSwing = Math.sin(t * sp) * (a === 'run' ? 0.7 : 0.45);
        lRotX = Math.sin(t * sp) * 0.6; rRotX = -Math.sin(t * sp) * 0.6;
        roll = st.dir * -0.04; pitch = a === 'run' ? 0.12 : 0.04;
        if (a === 'run') { lRotZ = -2.5; rRotZ = 2.5; }
        break;
      }
      case 'type':
        targetYaw = Math.sin(t * 0.8) * 0.08; pitch = 0.08;
        lRotX = -1.0 + Math.sin(t * 28) * 0.12; rRotX = -1.0 + Math.sin(t * 28 + 1.6) * 0.12;
        lRotZ = 0.35; rRotZ = -0.35; lPosZ = rPosZ = 0.15; showKb = true;
        handHi(); legLift = Math.abs(Math.sin(t * 12)) * 0.02; eyeY = -0.04;
        break;
      case 'read':
        targetYaw = Math.sin(t * 0.5) * 0.1; pitch = -0.08;
        lRotZ = -2.3; rRotZ = 2.3; lRotX = -0.3; rRotX = -0.3; showBook = true;
        eyeX = Math.sin(t * 2.6) * 0.05; eyeY = 0.04;
        break;
      case 'search':
        targetYaw = Math.sin(t * 1.4) * 0.6;
        rRotZ = 2.0 + Math.sin(t * 6) * 0.25; rRotX = -0.6; showLens = true;
        eyeX = Math.sin(t * 3) * 0.06;
        break;
      case 'think':
        targetYaw = -0.25; eyeY = 0.06; eyeX = -0.03; roll = Math.sin(t * 0.8) * 0.04;
        if (st.think === 'chin') { rPX = 0.3; rPY = 0.5; rPosZ = 0.5; rRotX = -1.25 + Math.sin(t * 5) * 0.08; rRotZ = -0.1; lPX = 0.05; lPY = 0.3; lPosZ = 0.5; lRotX = -1.5; lRotZ = 0; handHi(); }
        else { rRotZ = 2.7; rRotX = -0.4 + Math.sin(t * 9) * 0.1; }
        break;
      case 'wait': {
        targetYaw = 0; const ph = (t % 1.8) / 1.8;
        hop = ph < 0.35 ? Math.sin(ph / 0.35 * Math.PI) * 0.22 : 0;
        sy = ph < 0.08 ? 0.92 : ph > 0.33 && ph < 0.42 ? 0.94 : 1; sx = 2 - sy;
        rRotZ = 2.6 + Math.sin(t * 11) * 0.35; roll = Math.sin(t * 3.5) * 0.08;
        break;
      }
      case 'look':
        targetYaw = Math.sin(t * 1.2) * 0.9; rRotZ = 2.2; rRotX = -0.9; eyeX = Math.sin(t * 1.2) * 0.05;
        break;
      case 'sit':
        legScale = 0.32; by = -0.3 + Math.sin(t * 1.5) * 0.01; targetYaw = Math.sin(t * 0.4) * 0.25; lRotZ = -0.3; rRotZ = 0.3;
        break;
      case 'hero': {
        const c = st.costume;
        targetYaw = Math.sin(t * 0.6) * 0.3; const w = t * 2;
        let rootVis = true;
        if (c === 'spider') {
          const p = (t % 9) / 9;
          rx = kf(p, [[0, -0.7], [0.14, -0.7], [0.28, -0.2], [0.4, 0.62], [0.44, 0.7], [0.52, 0.7], [0.72, -0.2], [0.84, -0.62], [0.88, -0.7], [1, -0.7]]);
          hop = kf(p, [[0, 0], [0.16, 0], [0.28, 0.5], [0.4, 0.1], [0.44, 0], [0.54, 0], [0.72, 0.5], [0.84, 0.1], [0.88, 0], [1, 0]]);
          roll = kf(p, [[0, 0], [0.16, 0.2], [0.28, -0.7], [0.4, -0.25], [0.44, 0], [0.54, -0.2], [0.72, 0.7], [0.84, 0.25], [0.88, 0], [1, 0]]);
          rRotZ = 2.9; rRotX = -0.2; lRotZ = -0.5;
          const going = p > 0.16 && p < 0.46, back = p > 0.54 && p < 0.9;
          showWeb = going || back;
          if (showWeb) { const ax = going ? 1.15 : -1.15, ay = 1.9; const hx = rx + (going ? 0.85 : 0.85) * Math.cos(roll), hy = hop + 0.9; wcol.set(ax - hx, ay - hy, 0); const len = wcol.length(); web.position.set((ax + hx) / 2, (ay + hy) / 2, 0.3); web.rotation.z = Math.atan2(wcol.y, wcol.x) - Math.PI / 2; web.scale.set(1, len / 1.4, 1); }
        } else if (c === 'thor') {
          const p = (t % 7) / 7;
          rootVis = p > 0.14 && p < 0.86;
          const pop = kf(p, [[0.14, 1.3], [0.19, 1], [0.82, 1.05], [0.86, 0.9]]); root.scale.setScalar(pop);
          strikeBolt.visible = (p > 0.13 && p < 0.17) || (p > 0.83 && p < 0.86);
          flashLight.intensity = kf(p, [[0, 0], [0.13, 0], [0.14, 14], [0.18, 0], [0.83, 0], [0.84, 10], [0.88, 0], [1, 0]]);
          rRotZ = 2.9 + Math.sin(t * 5) * 0.08; rRotX = -0.3;
        } else if (c === 'strange') {
          const p = (t % 8) / 8;
          const sA = kf(p, [[0, 0.01], [0.12, 1], [0.38, 1], [0.46, 0.01], [1, 0.01]]), sB = kf(p, [[0, 0.01], [0.4, 0.01], [0.54, 1], [0.8, 1], [0.9, 0.01], [1, 0.01]]);
          portalGrp[0].visible = sA > 0.02; portalGrp[0].scale.setScalar(sA * 0.8); portalGrp[1].visible = sB > 0.02; portalGrp[1].scale.setScalar(sB * 0.8);
          portalGrp[0].rotation.z = t * 1.5; portalGrp[1].rotation.z = -t * 1.5;
          rx = kf(p, [[0, 0], [0.12, 0], [0.34, -0.78], [0.35, 0.78], [0.58, 0.78], [0.78, 0]]);
          const sc = kf(p, [[0, 1], [0.12, 1], [0.34, 0.1], [0.35, 0.1], [0.58, 0.2], [0.78, 1]]); root.scale.setScalar(sc);
          lRotZ = -1.2; rRotZ = 1.2; showRings = p < 0.2 || (p > 0.78 && p < 0.92);
        } else if (c === 'iron') {
          const p = (t % 9) / 9;
          armor.visible = true;
          const show = (a, b2) => kf(p, [[0, 0], [a, 0], [b2, 1], [0.9, 1], [0.96, 0], [1, 0]]);
          boots.forEach((bt, i) => { const v = show(0.04 + i * 0.01, 0.12 + i * 0.01); bt.visible = v > 0.01; bt.position.y = -0.3 - (1 - v) * 0.9; });
          const fp = show(0.18, 0.25); facePlate.visible = fp > 0.01; facePlate.position.y = 0.74 + (1 - fp) * 1.2;
          const rc = show(0.26, 0.32); reactor.visible = rc > 0.01; reactor.scale.setScalar(Math.max(0.01, rc));
          const hv = show(0.08, 0.18); lPX = -0.9 - (1 - hv) * 1.2; rPX = 0.9 + (1 - hv) * 1.2;
          rx = kf(p, [[0, 0], [0.5, 0], [0.52, -0.5], [0.62, 0.9], [0.7, 0.95], [0.78, -0.5], [0.84, 0], [1, 0]]);
          hop = kf(p, [[0, 0], [0.38, 0], [0.46, 0.35], [0.62, 0.7], [0.7, 0.5], [0.78, 0.5], [0.84, 0.3], [0.88, 0], [1, 0]]);
          roll = kf(p, [[0, 0], [0.46, 0], [0.52, 1.0], [0.62, 1.3], [0.7, -1.2], [0.78, -1.2], [0.84, 0], [1, 0]]);
          rRotX = -1.4; rRotZ = 0.3; lRotZ = -0.4;
          jets.forEach((j) => { j.visible = p > 0.38 && p < 0.86; j.scale.y = 1 + Math.sin(t * 40) * 0.25; });
        } else if (c === 'superman') { hop = 0.3 + Math.sin(w) * 0.1; roll = -0.55; pitch = 0.15; rRotZ = 2.6; rRotX = -0.4; }
        else if (c === 'captain') { lRotZ = -0.6; lRotX = -1.0; lPosZ = 0.15; roll = Math.sin(w) * 0.03; }
        else if (c === 'batman') { roll = Math.sin(w * 0.7) * 0.05; rRotZ = 0; by = 0; }
        else { by = Math.sin(w) * 0.02; }
        root.visible = rootVis;
        break;
      }
      case 'farm': {
        // aura farming: calm sway, arms out and gliding, the boat-kid stance
        const w = t * 1.9;
        targetYaw = Math.sin(t * 0.55) * 0.35; roll = Math.sin(w * 0.5) * 0.07; by = Math.abs(Math.sin(w * 0.5)) * 0.03 - 0.02; showCanoe = true;
        rRotZ = 1.45 + Math.sin(w) * 0.28; rRotX = -0.2; lRotZ = -1.45 + Math.sin(w + Math.PI) * 0.28; lRotX = -0.2;
        handHi(); legSwing = 0;
        break;
      }
      // emotes (🎭 tray): the flat look's poses, as arm swings
      case 'emote-nope': // hand up by the face, wagging, swaying side to side
        rPX = 0.75; rPY = 1.2; rRotZ = 0.25 + Math.sin(t * 14) * 0.35; roll = Math.sin(t * 3.9) * 0.06; targetYaw = Math.sin(t * 3.9) * 0.3;
        break;
      case 'emote-point':
        rRotZ = 0.9; rRotX = -1.25 + Math.sin(t * 14) * 0.12; rPosZ = 0.2; targetYaw = -0.1;
        break;
      case 'emote-guns':
        rRotZ = 1.57; lRotZ = -1.57; rRotX = -0.5 - (t % 0.6 < 0.1 ? 0.4 : 0); lRotX = -0.5 - ((t + 0.3) % 0.6 < 0.1 ? 0.4 : 0);
        break;
      case 'emote-dab':
        rRotZ = 2.4; lRotZ = -0.6; lRotX = -1.3; lPosZ = 0.4; roll = -0.15; pitch = 0.12;
        break;
      case 'emote-shrug':
        rRotZ = 1.0; lRotZ = -1.0; hop = Math.max(0, Math.sin(t * 4.8)) * 0.05;
        break;
      case 'emote-vibe':
        roll = Math.sin(t * 7) * 0.12; targetYaw = Math.sin(t * 7) * 0.25; rRotZ = 2.6 + Math.sin(t * 7) * 0.3; lRotZ = -2.6 - Math.sin(t * 7 + 1.5) * 0.3;
        break;
      case 'emote-facepalm':
        rPX = 0.25; rPY = 0.75; rPosZ = 0.55; rRotX = -1.4; pitch = 0.15; by = -0.04;
        break;
      case 'emote-shh':
        rPX = 0.1; rPY = 0.45; rPosZ = 0.55; rRotX = -1.5; targetYaw = 0.1; roll = Math.sin(t * 2) * 0.03;
        break;
      case 'emote-scheme':
        rPX = 0.2; rPY = 0.4; rPosZ = 0.5; lPX = -0.2; lPY = 0.4; lPosZ = 0.5; rRotX = -1.4 + Math.sin(t * 22) * 0.12; lRotX = -1.4 + Math.sin(t * 22 + 1.6) * 0.12; pitch = 0.1;
        break;
      case 'emote-perfect':
        rPX = 0.7; rPY = 1.0; rRotZ = 0.6 + Math.sin(t * 12) * 0.1; rRotX = -0.4;
        break;
      case 'emote-pat':
        rPX = 0.8; rPY = 0.82; rRotZ = -2.7 + Math.abs(Math.sin(t * 10)) * 0.12; rRotX = -0.15; roll = -0.05; targetYaw = -0.3;
        break;
      case 'emote-sideeye':
        targetYaw = 0.45; eyeX = 0.06; by = 0;
        break;
      case 'emote-sweat':
        rPX = 0.3 + Math.sin(t * 12) * 0.25; rPY = 1.05; rPosZ = 0.45; rRotX = -1.5; eyeY = 0.03;
        break;
      case 'emote-scuba': {
        const w = t * 7;
        roll = Math.sin(w) * 0.12; targetYaw = Math.sin(w) * 0.4; hop = Math.abs(Math.sin(w)) * 0.08;
        rRotZ = 1.3 + Math.sin(w) * 1.3; lRotZ = -1.3 + Math.sin(w) * 1.3; legSwing = Math.sin(w * 2) * 0.4;
        break;
      }
      default: // idle / asleep: still, slightly turned so the depth reads
        by = -0.01; targetYaw = 0.22; pitch = 0.05;
    }

    if (!(st.act === 'hero' && ['spider', 'thor', 'strange', 'iron'].includes(st.costume))) {
      root.visible = true; root.scale.setScalar(1); armor.visible = false; portalGrp.forEach((g) => { g.visible = false; }); strikeBolt.visible = false; flashLight.intensity = 0; jets.forEach((j) => { j.visible = false; });
    }
    root.position.x = rx;
    yaw = ease(yaw, targetYaw, k * 0.9);
    root.rotation.y = yaw;
    root.position.y = hop;
    body.position.y = by; body.rotation.z = ease(body.rotation.z, roll, k); body.rotation.x = ease(body.rotation.x, pitch, k);
    body.scale.set(ease(body.scale.x, sx, k), ease(body.scale.y, sy, k), 1);
    handL.position.x = ease(handL.position.x, lPX, k); handL.position.y = ease(handL.position.y, lPY, k); handR.position.x = ease(handR.position.x, rPX, k); handR.position.y = ease(handR.position.y, rPY, k);
    handL.rotation.x = ease(handL.rotation.x, lRotX, k); handL.rotation.z = ease(handL.rotation.z, lRotZ, k); handL.position.z = ease(handL.position.z, lPosZ, k);
    handR.rotation.x = ease(handR.rotation.x, rRotX, k); handR.rotation.z = ease(handR.rotation.z, rRotZ, k); handR.position.z = ease(handR.position.z, rPosZ, k);
    for (const l of legs) {
      l.rotation.x = (l.userData.phase ? 1 : -1) * legSwing;
      l.position.y = 0.02 + (l.userData.phase ? legLift : 0);
      l.scale.y = ease(l.scale.y, legScale, k);
    }
    const cs = COST[st.costume];
    cape.visible = !!(cs && cs.cape); ears.visible = st.costume === 'batman'; mask.visible = false;
    const emoting = a.startsWith('emote-'); // emotes bring their own gloves, so the hand props step aside
    hammer.visible = st.costume === 'thor' && !emoting; shield.visible = st.costume === 'captain' && !emoting;
    web.visible = showWeb; ringL.visible = ringR.visible = showRings;
    if (showRings) { ringL.rotation.z = t * 2; ringR.rotation.z = -t * 2; }
    if (cs && cs.cape) cape.rotation.x = 0.12 + Math.sin(t * (st.costume === 'superman' ? 9 : 2.5)) * 0.1;
    canoe.visible = showCanoe; canoe.rotation.z = showCanoe ? Math.sin(t * 1.9 * 0.5) * 0.03 : 0;
    keyboard.visible = showKb; book.visible = showBook; lens.visible = showLens;
    sun.visible = st.shades === 'sunglasses' && a !== 'emote-scuba'; gog.visible = st.shades === 'goggles' || a === 'emote-scuba';
    const free = ['idle', 'sit', 'look', 'walk'].includes(a);
    mug.visible = st.coffee && free;
    if (mug.visible && a !== 'walk') { const ph = (t % 7) / 7; if (ph > 0.58 && ph < 0.82) { const k2 = Math.sin((ph - 0.58) / 0.24 * Math.PI); handR.rotation.z = 1.1 * k2; handR.rotation.x = -1.3 * k2; } }
    book.position.y = 1.62 + Math.sin(t * 2) * 0.03;

    // eyes: expression + blink + gaze (an emote's decal brings its own eyes)
    const emo = a.startsWith('emote-') ? a.slice(6) : '';
    if (emo !== shownEmote) { shownEmote = emo; showEmote(emo); }
    if (emo) sun.visible = false;
    const ct = (emo && costTex.emote) || costTex.plain;
    if (costDecal.visible && ct && costDecal.material.map !== ct) { costDecal.material.map = ct; costDecal.material.needsUpdate = true; }
    for (const [n, g] of Object.entries(eyes)) g.visible = !emo && n === st.eyes && st.shades !== 'sunglasses' && !['spider', 'iron', 'batman'].includes(st.costume);
    const blink = (t % 3.4) > 3.25 ? 0.1 : 1;
    for (const e of openEyes.concat(wideEyes)) e.scale.y = blink;
    face.position.x = ease(face.position.x, eyeX, k); face.position.y = ease(face.position.y, eyeY, k);

    renderer.render(scene, camera);
  }
  frame();

  window.__buddy3d = {
    ok: true,
    update(o) {
      dirty = true; settle = 12;
      if (o.act) st.act = o.act;
      if (o.eyes && eyes[o.eyes]) st.eyes = o.eyes;
      if (o.dir) st.dir = o.dir > 0 ? 1 : -1;
      if (o.color || 'costume' in o) shownEmote = null; // repaint the emote decal's lids in the new body colour
      if (o.color) { col.set(o.color); if (st.costume === 'none') { bodyMat.color.copy(col); bodyMat.emissive.copy(col); handMat.emissive.copy(col); legMat.color.copy(col); legMat.emissive.copy(col); } }
      if (o.color2) col2.set(o.color2);
      if ('costume' in o) {
        st.costume = o.costume;
        if (o.costume === 'none') { costDecal.visible = false; decalFor = ''; } else if (decalFor !== o.costume) buildDecal(o.costume);
        const cs = COST[o.costume];
        if (cs) { bodyMat.color.setHex(cs.body); bodyMat.emissive.setHex(cs.body); handBase.setHex(cs.hands); handMat.emissive.setHex(cs.hands); legMat.color.setHex(cs.legs); legMat.emissive.setHex(cs.legs); if (cs.cape) capeMat.color.setHex(cs.cape); }
        else { bodyMat.color.copy(col); bodyMat.emissive.copy(col); handMat.emissive.copy(col); legMat.color.copy(col); legMat.emissive.copy(col); }
      }
      if ('shades' in o) st.shades = o.shades;
      if ('coffee' in o) st.coffee = o.coffee;
      if (o.think) st.think = o.think;
      const it = ['type', 'read', 'search', 'walk'].includes(st.act) ? '' : (o.item || ''); // real 3D props replace the emoji
      if (it !== st.item) { st.item = it; itemEl.textContent = it; }
    },
    resize() { dirty = true; const w = host.clientWidth, h = host.clientHeight; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); },
  };
}

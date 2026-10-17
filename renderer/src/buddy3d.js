// 3D look for the buddy: a soft-voxel version of the same character, animated procedurally.
// Bundled to renderer/buddy3d.bundle.js (npm run build:3d) so the app needs no module loader at runtime.
// Contract: window.__buddy3d = { ok, update({ act, eyes, item, dir, color, color2 }) }
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

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
  let yaw = 0, last = 0, t0 = clock();

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
    let showWeb = false, showRings = false, showCanoe = false, showKb = false, showBook = false, showLens = false, eyeX = 0, eyeY = 0;
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
        if (c === 'spider') { roll = Math.sin(w * 0.8) * 0.35; rRotZ = 2.9; rRotX = -0.2; by = Math.sin(w * 0.8) * 0.04; showWeb = true; }
        else if (c === 'thor') { rRotZ = 2.9 + Math.sin(t * 5) * 0.08; rRotX = -0.3; by = Math.abs(Math.sin(t * 4)) * 0.02; }
        else if (c === 'captain') { lRotZ = -0.6; lRotX = -1.0; lPosZ = 0.15; roll = Math.sin(w) * 0.03; }
        else if (c === 'iron') { hop = 0.2 + Math.sin(w) * 0.06; rRotX = -1.5; rRotZ = 0.3; lRotZ = -0.4; legSwing = 0; }
        else if (c === 'strange') { lRotZ = -1.2; rRotZ = 1.2; by = Math.sin(w) * 0.02; showRings = true; }
        else if (c === 'superman') { hop = 0.3 + Math.sin(w) * 0.1; roll = -0.55; pitch = 0.15; rRotZ = 2.6; rRotX = -0.4; }
        else if (c === 'batman') { roll = Math.sin(w * 0.7) * 0.05; rRotZ = 0; by = 0; }
        else { by = Math.sin(w) * 0.02; }
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
      default: // idle / asleep: still, slightly turned so the depth reads
        by = -0.01; targetYaw = 0.22; pitch = 0.05;
    }

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
    cape.visible = !!(cs && cs.cape); ears.visible = st.costume === 'batman'; mask.visible = ['spider', 'batman'].includes(st.costume);
    hammer.visible = st.costume === 'thor'; shield.visible = st.costume === 'captain';
    web.visible = showWeb; ringL.visible = ringR.visible = showRings;
    if (showRings) { ringL.rotation.z = t * 2; ringR.rotation.z = -t * 2; }
    if (cs && cs.cape) cape.rotation.x = 0.12 + Math.sin(t * (st.costume === 'superman' ? 9 : 2.5)) * 0.1;
    canoe.visible = showCanoe; canoe.rotation.z = showCanoe ? Math.sin(t * 1.9 * 0.5) * 0.03 : 0;
    keyboard.visible = showKb; book.visible = showBook; lens.visible = showLens;
    sun.visible = st.shades === 'sunglasses'; gog.visible = st.shades === 'goggles';
    const free = ['idle', 'sit', 'look', 'walk'].includes(a);
    mug.visible = st.coffee && free;
    if (mug.visible && a !== 'walk') { const ph = (t % 7) / 7; if (ph > 0.58 && ph < 0.82) { const k2 = Math.sin((ph - 0.58) / 0.24 * Math.PI); handR.rotation.z = 1.1 * k2; handR.rotation.x = -1.3 * k2; } }
    book.position.y = 1.62 + Math.sin(t * 2) * 0.03;

    // eyes: expression + blink + gaze
    for (const [n, g] of Object.entries(eyes)) g.visible = n === st.eyes && st.shades !== 'sunglasses';
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
      if (o.color) { col.set(o.color); if (st.costume === 'none') { bodyMat.color.copy(col); bodyMat.emissive.copy(col); handMat.emissive.copy(col); legMat.color.copy(col); legMat.emissive.copy(col); } }
      if (o.color2) col2.set(o.color2);
      if ('costume' in o) {
        st.costume = o.costume;
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

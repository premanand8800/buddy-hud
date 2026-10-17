// Heroes scene (?heroes): pure black background, only the costume changes. Loaded only for recording.
document.body.classList.add('heroes');
const fitZoom = () => { document.documentElement.style.zoom = String(innerWidth / 1080); };
fitZoom(); addEventListener('resize', fitZoom);
window.__speed = 3.4; window.__off = 0; window.__heroSpeed = (sp, off) => { window.__speed = sp || 3.4; window.__off = off || 0; }; // stunt cycles are 7-9s; play them faster so each hero fits ~2s
(() => { // virtual clock, same contract as promo.js
  let vt = 0; const base = Date.now(); const timers = []; const starts = new WeakMap();
  Date.now = () => base + vt;
  window.setTimeout = (fn, ms = 0) => { timers.push({ t: vt + ms, fn }); };
  window.__tick = (t) => {
    vt = t;
    for (let i = 0; i < timers.length;) { if (timers[i].t <= vt) { const [x] = timers.splice(i, 1); try { x.fn(); } catch {} } else i++; }
    for (const a of document.getAnimations()) {
      if (!starts.has(a)) { starts.set(a, vt); a.pause(); }
      a.currentTime = Math.max(0, vt - starts.get(a)) * window.__speed + window.__off * 1000;
    }
    return true;
  };
})();
const css = document.createElement('style');
css.textContent = `
body.heroes { padding: 0; width: 100vw; height: 100vh; overflow: hidden; background: #000 !important; }
body.heroes #stage { display: none; }
body.heroes #mascot { position: fixed !important; left: 50% !important; top: 470px !important; margin: 0 0 0 -450px !important; width: 900px !important; height: 840px !important; cursor: default; }
body.heroes #mascot .shadow { display: none; }
body.heroes #clawd { overflow: visible; }
`;
document.head.appendChild(css);
document.body.appendChild(document.getElementById('mascot'));

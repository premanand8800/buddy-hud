// Hero costume art: one source of truth for the flat looks (SVG overlays) and 3D (the same art becomes a texture on the front face).
// Coordinates are body space: x 0..160, y 0..114 (head and torso are one block, so the top half reads as the mask/helmet).
// Original look-alike costumes with neutral names; no official logos.
(() => {
  const S = '#0d0d0d';                                         // outline ink
  const OUT = `stroke="${S}" stroke-opacity=".55" stroke-width="2.4" stroke-linejoin="round"`;
  const pt = (cx, cy, a, r) => [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  const f = (n) => n.toFixed(1);
  const star = (cx, cy, R, r, n = 5) => Array.from({ length: n * 2 }, (_, i) => { const a = -Math.PI / 2 + (i * Math.PI) / n; const q = pt(cx, cy, a, i % 2 ? r : R); return f(q[0]) + ',' + f(q[1]); }).join(' ');
  // spider web: rays from a hub, scalloped rings between them
  const web = (cx, cy, rays, radii) => {
    let d = '';
    const ang = Array.from({ length: rays }, (_, i) => (i * 2 * Math.PI) / rays + 0.2);
    ang.forEach((a) => { const p = pt(cx, cy, a, 260); d += `M${cx} ${cy}L${f(p[0])} ${f(p[1])}`; });
    radii.forEach((r) => ang.forEach((a, i) => { const b = ang[(i + 1) % rays] + (i === rays - 1 ? Math.PI * 2 : 0); const p1 = pt(cx, cy, a, r), p2 = pt(cx, cy, b, r), c = pt(cx, cy, (a + b) / 2, r * 0.8); d += `M${f(p1[0])} ${f(p1[1])}Q${f(c[0])} ${f(c[1])} ${f(p2[0])} ${f(p2[1])}`; }));
    return d;
  };
  const shade = '<rect width="160" height="114" fill="url(#g-shade)"/>';
  const rim = `<path d="M3 3 H157" stroke="#fff" stroke-opacity=".28" stroke-width="2.2" stroke-linecap="round"/><path d="M3 3 V111" stroke="#fff" stroke-opacity=".16" stroke-width="2.2" stroke-linecap="round"/>`;
  const frame = `<rect x="1.2" y="1.2" width="157.6" height="111.6" rx="2" fill="none" ${OUT}/>`;
  const boots = (c, c2) => [0, 36, 107, 144].map((x) => `<g class="cb"><rect x="${x - 1}" y="138" width="18" height="20" rx="3" fill="${c}" ${OUT}/><rect x="${x - 1}" y="138" width="18" height="5" fill="${c2}" ${OUT}/></g>`).join('');
  const faceSkin = (tone = '#f0c89a') => `<g><rect x="30" y="20" width="100" height="58" rx="22" fill="${tone}" ${OUT}/><path d="M30 44 Q80 14 130 44" fill="none" stroke="#fff" stroke-opacity=".2" stroke-width="3"/><rect x="30" y="20" width="100" height="58" rx="22" fill="url(#g-shade)"/></g>`;
  const smile = '<path class="cf" d="M64 66 Q80 74 96 66" fill="none" stroke="#7a3a2a" stroke-width="3" stroke-linecap="round"/>';

  const ART = {};

  // ---------------------------------------------------------------- Web Slinger
  ART.spider = {
    colors: { body: '#c1272d', legs: '#1d3f9e', hands: '#c1272d', cape: null },
    under: '',
    over: `<g class="c-spider">
      <path d="M0 62 C12 64 20 74 22 114 H0Z" fill="#1d3f9e"/><path d="M160 62 C148 64 140 74 138 114 H160Z" fill="#1d3f9e"/>
      <path d="M0 98 Q80 84 160 98 V114 H0Z" fill="#1d3f9e"/>${shade}
      <path d="${web(80, 24, 12, [18, 40, 66, 98])}" fill="none" stroke="${S}" stroke-opacity=".62" stroke-width="1.7" clip-path="url(#bodyClip)"/>
      <path class="cf" d="M8 54 Q20 20 58 36 Q56 70 8 54Z" fill="#fff" stroke="${S}" stroke-width="4.5" stroke-linejoin="round"/><path class="cf" d="M152 54 Q140 20 102 36 Q104 70 152 54Z" fill="#fff" stroke="${S}" stroke-width="4.5" stroke-linejoin="round"/>
      <path class="cf" d="M16 46 Q26 32 44 38" fill="none" stroke="#bcd4ff" stroke-width="3" stroke-linecap="round" opacity=".8"/><path class="cf" d="M144 46 Q134 32 116 38" fill="none" stroke="#bcd4ff" stroke-width="3" stroke-linecap="round" opacity=".8"/>
      <g fill="${S}" stroke="${S}" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="80" cy="92" rx="5.5" ry="9"/><circle cx="80" cy="80" r="3.6"/>
        <path d="M76 86 L60 78 L54 66 M76 92 L56 92 L48 102 M76 97 L60 106 L58 114 M77 100 L68 114 M84 86 L100 78 L106 66 M84 92 L104 92 L112 102 M84 97 L100 106 L102 114 M83 100 L92 114" fill="none" stroke-width="3"/></g>
      ${rim}${frame}${boots('#c1272d', '#8f1d22')}</g>`,
  };

  // ---------------------------------------------------------------- Thunder God
  ART.thor = {
    colors: { body: '#3b465d', legs: '#2b3446', hands: '#9aa4b2', cape: '#b3202a' },
    under: `<g class="c-thor-u"><path d="M-2 14 C-8 40 -2 70 6 94 L26 94 L28 20Z" fill="#f2d680" ${OUT}/><path d="M162 14 C168 40 162 70 154 94 L134 94 L132 20Z" fill="#f2d680" ${OUT}/>
      <path d="M2 24 C0 46 6 70 12 90 M12 22 C10 46 14 66 18 86" fill="none" stroke="#d6b254" stroke-width="2"/><path d="M158 24 C160 46 154 70 148 90 M148 22 C150 46 146 66 142 86" fill="none" stroke="#d6b254" stroke-width="2"/>
      ${faceSkin('#f0c89a')}</g>`,
    over: `<g class="c-thor">${shade}
      <g fill="#7a8696" opacity=".55">${Array.from({ length: 6 }, (_, r) => Array.from({ length: 13 }, (_, c) => `<circle cx="${14 + c * 11 + (r % 2) * 5}" cy="${84 + r * 5}" r="1.5"/>`).join('')).join('')}</g>
      <path d="M8 22 Q80 -10 152 22 L152 8 Q80 -22 8 8Z" fill="#cfd6e0" ${OUT}/><path d="M12 14 Q80 -10 148 14" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="2.5"/>
      <path d="M-2 18 L-36 -2 L-30 6 L-40 12 L-32 18 L-40 26 L-26 28 L-4 34Z" fill="#e8edf3" ${OUT}/><path d="M162 18 L196 -2 L190 6 L200 12 L192 18 L200 26 L186 28 L164 34Z" fill="#e8edf3" ${OUT}/>
      ${smile}
      <path d="M52 70 Q80 90 108 70 L108 80 Q80 94 52 80Z" fill="#f2d680" ${OUT}/>
      ${[[46, 88], [80, 88], [114, 88], [62, 102], [98, 102]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="8" fill="#d6dde6" ${OUT}/><circle cx="${x}" cy="${y}" r="4.5" fill="none" stroke="#7a8696" stroke-width="1.5"/><circle cx="${x - 2}" cy="${y - 2}" r="1.8" fill="#fff" opacity=".8"/>`).join('')}
      <rect x="0" y="104" width="160" height="10" fill="#4a2f1b" ${OUT}/><rect x="68" y="102" width="24" height="14" rx="2" fill="#e0b84a" ${OUT}/>
      <circle cx="10" cy="24" r="6" fill="#e0b84a" ${OUT}/><circle cx="150" cy="24" r="6" fill="#e0b84a" ${OUT}/>
      ${rim}${frame}${boots('#3b2a1e', '#e0b84a')}</g>`,
  };

  // ---------------------------------------------------------------- Star Shield
  ART.captain = {
    colors: { body: '#234aa8', legs: '#1b3a86', hands: '#c1272d', cape: null },
    under: `<g class="c-cap-u"><rect x="26" y="26" width="108" height="50" rx="20" fill="#f0c89a" ${OUT}/><rect x="26" y="26" width="108" height="50" rx="20" fill="url(#g-shade)"/></g>`,
    over: `<g class="c-captain">${shade}
      <path d="M0 0 H160 V34 Q80 14 0 34Z" fill="#1c3a8c" ${OUT}/><path d="M0 34 Q8 54 26 62 L26 26Z M160 34 Q152 54 134 62 L134 26Z" fill="#1c3a8c"/>
      <path d="M4 22 L-14 10 L-6 22 L-18 26 L-2 32Z" fill="#fff" ${OUT}/><path d="M156 22 L174 10 L166 22 L178 26 L162 32Z" fill="#fff" ${OUT}/>
      <polygon points="${star(80, 12, 8, 3.2)}" fill="#fff" ${OUT}/>
      <rect x="26" y="26" width="108" height="50" rx="20" fill="none" stroke="#fff" stroke-width="3"/>
      <path class="cf" d="M62 66 Q80 74 98 66" fill="none" stroke="#7a3a2a" stroke-width="3" stroke-linecap="round"/>
      <polygon points="${star(80, 90, 22, 9)}" fill="#fff" ${OUT}/><polygon points="${star(80, 90, 22, 9)}" fill="url(#g-shade)"/>
      <rect x="0" y="96" width="160" height="6" fill="#c1272d"/><rect x="0" y="102" width="160" height="5" fill="#fff"/><rect x="0" y="107" width="160" height="7" fill="#c1272d"/>
      <rect x="0" y="92" width="160" height="5" fill="#5b3a1c" ${OUT}/>
      ${rim}${frame}${boots('#c1272d', '#fff')}</g>`,
  };

  // ---------------------------------------------------------------- Iron Armor
  ART.iron = {
    colors: { body: '#b3202a', legs: '#a11c26', hands: '#e0b030', cape: null },
    under: '',
    over: `<g class="c-iron">${shade}
      <path class="plate" d="M26 12 H134 L144 52 L120 80 L80 88 L40 80 L16 52Z" fill="url(#g-gold)" ${OUT}/>
      <path d="M30 18 H130 M80 18 V84 M44 74 Q80 84 116 74" fill="none" stroke="#8a6a10" stroke-opacity=".55" stroke-width="2"/>
      <path class="slit cf" d="M30 44 L66 38 L66 50 L34 54Z" fill="#fff" stroke="#bfe6ff" stroke-width="2"/><path class="slit cf" d="M130 44 L94 38 L94 50 L126 54Z" fill="#fff" stroke="#bfe6ff" stroke-width="2"/>
      <path class="cf" d="M68 58 L80 66 L92 58" fill="none" stroke="#8a6a10" stroke-width="2.5"/>
      <g class="arcg"><circle cx="80" cy="102" r="12" fill="#10222c" ${OUT}/><circle cx="80" cy="102" r="9" fill="none" stroke="#bff4ff" stroke-width="2.4"/><path d="M80 94 L87 106 L73 106Z" fill="#7ee8ff"/></g>
      <path class="goldb" d="M0 0 H160 V8 L142 14 L18 14 L0 8Z" fill="url(#g-gold)" ${OUT}/>
      <path d="M0 88 H160 M0 96 H160" stroke="#e0b030" stroke-opacity=".7" stroke-width="3"/>
      <path d="M-4 4 L26 -6 L34 20 L-4 24Z M164 4 L134 -6 L126 20 L164 24Z" fill="url(#g-gold)" ${OUT}/>
      ${rim}${frame}${boots('#e0b030', '#b3202a')}</g>`,
  };

  // ---------------------------------------------------------------- Mystic Sorcerer
  ART.strange = {
    colors: { body: '#2b4a94', legs: '#22397a', hands: '#e8c9a0', cape: '#b3202a' },
    under: `<g class="c-str-u"><rect x="28" y="22" width="104" height="56" rx="22" fill="#e9c8a0" ${OUT}/><rect x="28" y="22" width="104" height="56" rx="22" fill="url(#g-shade)"/>
      <path d="M26 24 Q80 -4 134 24 L134 14 Q80 -16 26 14Z" fill="#15151a" ${OUT}/><path d="M24 20 L32 20 L32 42 L22 38Z M136 20 L128 20 L128 42 L138 38Z" fill="#c9ced6" ${OUT}/></g>`,
    over: `<g class="c-strange">${shade}
      <path d="M72 70 Q80 82 88 70 L84 78 Q80 82 76 78Z" fill="#15151a"/>
      <path class="cf" d="M62 66 Q80 74 98 66" fill="none" stroke="#7a3a2a" stroke-width="3" stroke-linecap="round"/>
      <path d="M-18 -24 Q-30 20 10 46 L34 18 Q6 -2 -2 -24Z" fill="#b3202a" ${OUT}/><path d="M178 -24 Q190 20 150 46 L126 18 Q154 -2 162 -24Z" fill="#b3202a" ${OUT}/>
      <path d="M-14 -20 Q-24 16 10 40 M174 -20 Q184 16 150 40" fill="none" stroke="#e0b84a" stroke-width="3"/>
      <path d="M0 96 H160 V108 H0Z" fill="#6e4a1e" ${OUT}/><rect x="70" y="94" width="20" height="16" rx="2" fill="#e0b84a" ${OUT}/>
      <path d="M12 60 L148 104 M148 60 L12 104" stroke="#6e4a1e" stroke-width="5" opacity=".7"/>
      <g><circle cx="80" cy="82" r="15" fill="#e0b84a" ${OUT}/><circle cx="80" cy="82" r="10" fill="#2e8f46" stroke="#0f4a22" stroke-width="2"/><path d="M68 82 Q80 72 92 82 Q80 92 68 82Z" fill="#0c2b10"/><circle cx="80" cy="82" r="3.4" fill="#a8ffb4"/></g>
      ${rim}${frame}${boots('#5a3b1c', '#e0b84a')}</g>`,
  };

  // ---------------------------------------------------------------- Sky Guardian
  ART.superman = {
    colors: { body: '#1f5fd6', legs: '#1f5fd6', hands: '#1f5fd6', cape: '#c1272d' },
    under: `<g class="c-sup-u"><rect x="30" y="22" width="100" height="56" rx="22" fill="#f1cba2" ${OUT}/><rect x="30" y="22" width="100" height="56" rx="22" fill="url(#g-shade)"/></g>`,
    over: `<g class="c-superman">${shade}
      <path d="M26 24 Q80 -6 134 24 L134 12 Q80 -18 26 12Z" fill="#16161c" ${OUT}/><path d="M70 14 Q86 -6 100 10 Q86 4 80 20Z" fill="#16161c" ${OUT}/>
      <path class="cf" d="M62 66 Q80 74 98 66" fill="none" stroke="#7a3a2a" stroke-width="3" stroke-linecap="round"/>
      <path d="M80 78 L106 86 L100 108 L80 116 L60 108 L54 86Z" fill="#c1272d" stroke="#f1c40f" stroke-width="3.5" stroke-linejoin="round"/><path d="M70 90 Q80 82 90 90 Q80 100 70 98 Q82 96 90 106" fill="none" stroke="#f1c40f" stroke-width="4" stroke-linecap="round"/>
      <rect x="0" y="98" width="160" height="16" fill="#c1272d" ${OUT}/><rect x="0" y="95" width="160" height="5" fill="#f1c40f" ${OUT}/>
      ${rim}${frame}${boots('#c1272d', '#c1272d')}</g>`,
  };

  // ---------------------------------------------------------------- Night Vigilante
  ART.batman = {
    colors: { body: '#4a5163', legs: '#343a49', hands: '#343a49', cape: '#15171c' },
    under: `<g class="c-bat-u"><path d="M34 52 H126 Q126 86 80 90 Q34 86 34 52Z" fill="#e6c19a" ${OUT}/><path d="M34 52 H126 Q126 86 80 90 Q34 86 34 52Z" fill="url(#g-shade)"/></g>`,
    over: `<g class="c-batman">${shade}
      <path d="M0 0 H160 V58 Q150 42 126 46 Q112 26 80 30 Q48 26 34 46 Q10 42 0 58Z" fill="#3a4152" ${OUT}/>
      <path d="M12 8 L10 -34 L44 4Z" fill="#3a4152" ${OUT}/><path d="M148 8 L150 -34 L116 4Z" fill="#3a4152" ${OUT}/>
      <path class="cf" d="M12 60 L62 38 L58 62Z" fill="#fff" ${OUT}/><path class="cf" d="M148 60 L98 38 L102 62Z" fill="#fff" ${OUT}/>
      <path class="cf" d="M62 74 Q80 80 98 74" fill="none" stroke="#7a3a2a" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="80" cy="98" rx="26" ry="13" fill="#f1c40f" ${OUT}/><path d="M60 98 Q68 88 80 94 Q92 88 100 98 Q92 96 88 106 L80 100 L72 106 Q68 96 60 98Z" fill="#101010"/>
      <rect x="0" y="104" width="160" height="10" fill="#d9a915" ${OUT}/>${[14, 40, 112, 138].map((x) => `<rect x="${x}" y="102" width="12" height="12" rx="2" fill="#b78d10" ${OUT}/>`).join('')}
      ${rim}${frame}${boots('#3a4152', '#3a4152')}</g>`,
  };

  const DEFS = `<linearGradient id="g-shade" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".26"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".34"/></linearGradient>
    <linearGradient id="g-gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe27a"/><stop offset=".5" stop-color="#e0b030"/><stop offset="1" stop-color="#9a7312"/></linearGradient>
    <clipPath id="bodyClip"><rect width="160" height="114"/></clipPath>`;
  window.COSTUME_DEFS = DEFS;
  window.COSTUME_ART = ART;
  // apply a costume to the flat look (called by app.js); 3D reads window.COSTUME_ART directly
  window.applyCostumeArt = (name) => {
    const u = document.getElementById('cosUnder'), o = document.getElementById('cos'), d = document.getElementById('costumeDefs');
    if (d && !d.innerHTML) d.innerHTML = DEFS;
    const a = ART[name];
    u.innerHTML = a ? a.under : ''; o.innerHTML = a ? a.over : '';
  };
})();

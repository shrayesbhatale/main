// Renders LinkedIn post images (1080x1350) from specs in specs.js using Playwright + Chromium.
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs');
const path = require('path');
const specs = require('./specs.js');

const DIR = __dirname;
const OUT = process.argv[2] || path.join(DIR, 'out');
const ONLY = process.argv[3] ? process.argv[3].split(',') : null;
fs.mkdirSync(OUT, { recursive: true });

const C = {
  bg: '#141413', ink: '#F5F3EE', ink2: '#C4C1B8', muted: '#8E8C84', rule: '#302F2B',
  panel: '#1D1D1B', accent: '#3987e5', warn: '#d95926', neutral: '#5E5D58',
};
const W = 904; // content width (1080 - 2*88)

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const col = k => C[k] || k || C.neutral;

// ---------- components ----------
function stats(items) {
  return `<div class="stats">${items.map(s => `
    <div class="stat">
      <div class="stat-v" style="color:${s.c ? col(s.c) : C.ink};font-size:${s.size || 112}px">${esc(s.v)}</div>
      <div class="stat-l">${esc(s.l)}</div>
    </div>`).join('')}</div>`;
}

// vertical bars; supports negatives; rounded 4px data-end anchored to baseline
function barsV({ bars, min = 0, max, h = 520, labelSize = 26, valueSize = 52 }) {
  const n = bars.length, gap = 64, bw = Math.min(200, (W - gap * (n - 1)) / n);
  const total = bw * n + gap * (n - 1), x0 = (W - total) / 2;
  const top = 80, bottom = min < 0 ? valueSize + 60 + 2 * labelSize + 30 : 90, ph = h - top - bottom;
  const y = v => top + (max - v) / (max - min) * ph;
  const zero = y(0);
  let svg = `<svg width="${W}" height="${h}" viewBox="0 0 ${W} ${h}">`;
  bars.forEach((b, i) => {
    const x = x0 + i * (bw + gap), yv = y(b.v), r = 4;
    const color = col(b.c);
    if (b.v >= 0) {
      const hh = Math.max(zero - yv, 2);
      svg += `<path d="M${x},${zero} V${zero - hh + r} Q${x},${zero - hh} ${x + r},${zero - hh} H${x + bw - r} Q${x + bw},${zero - hh} ${x + bw},${zero - hh + r} V${zero} Z" fill="${color}"/>`;
      svg += `<text x="${x + bw / 2}" y="${zero - hh - 22}" class="bv" text-anchor="middle" font-size="${valueSize}">${esc(b.d)}</text>`;
    } else {
      const hh = yv - zero;
      svg += `<path d="M${x},${zero} V${zero + hh - r} Q${x},${zero + hh} ${x + r},${zero + hh} H${x + bw - r} Q${x + bw},${zero + hh} ${x + bw},${zero + hh - r} V${zero} Z" fill="${color}"/>`;
      svg += `<text x="${x + bw / 2}" y="${zero + hh + valueSize + 10}" class="bv" text-anchor="middle" font-size="${valueSize}">${esc(b.d)}</text>`;
    }
    const ly = min < 0 ? y(min) + valueSize + 60 : zero + 44;
    (Array.isArray(b.l) ? b.l : [b.l]).forEach((line, j) =>
      svg += `<text x="${x + bw / 2}" y="${ly + j * (labelSize + 6)}" class="bl" text-anchor="middle" font-size="${labelSize}">${esc(line)}</text>`);
  });
  svg += `<line x1="0" x2="${W}" y1="${zero}" y2="${zero}" stroke="${C.muted}" stroke-width="2"/></svg>`;
  return svg;
}

// horizontal bars
function barsH({ bars, max, rowH = 132, labelW = 0 }) {
  const h = bars.length * rowH;
  const bx = 0, bwMax = W - 190;
  let svg = `<svg width="${W}" height="${h}" viewBox="0 0 ${W} ${h}">`;
  bars.forEach((b, i) => {
    const yy = i * rowH;
    svg += `<text x="0" y="${yy + 30}" class="bl" text-anchor="start" font-size="26">${esc(b.l)}</text>`;
    const bw = Math.max(b.v / max * bwMax, 6), by = yy + 48, bh = 52, r = 4;
    svg += `<path d="M${bx},${by} H${bx + bw - r} Q${bx + bw},${by} ${bx + bw},${by + r} V${by + bh - r} Q${bx + bw},${by + bh} ${bx + bw - r},${by + bh} H${bx} Z" fill="${col(b.c)}"/>`;
    svg += `<text x="${bx + bw + 20}" y="${by + 40}" class="bv" text-anchor="start" font-size="44">${esc(b.d)}</text>`;
  });
  return svg + `<line x1="0" x2="0" y1="36" y2="${h - 20}" stroke="${C.muted}" stroke-width="2"/></svg>`;
}

function quote({ q, who, where, size = 68 }) {
  return `<div class="quote"><div class="qmark">“</div><div class="qtext" style="font-size:${size}px">${esc(q)}</div>
    <div class="qwho">${esc(who)}</div><div class="qwhere">${esc(where)}</div></div>`;
}

function list({ items, numbered = false, size = 34, cols = 1 }) {
  return `<div class="list" style="columns:${cols};font-size:${size}px">${items.map((t, i) => `
    <div class="li"><span class="lnum">${numbered ? String(i + 1).padStart(2, '0') : '•'}</span><span>${esc(t)}</span></div>`).join('')}</div>`;
}

function panels(ps, { dir = 'row' } = {}) {
  return `<div class="panels" style="flex-direction:${dir}">${ps.map(p => `
    <div class="panel" style="border-top:4px solid ${col(p.c || 'rule')}">
      ${p.k ? `<div class="pk">${esc(p.k)}</div>` : ''}
      ${p.v ? `<div class="pv" style="color:${p.vc ? col(p.vc) : C.ink};font-size:${p.vs || 64}px">${esc(p.v)}</div>` : ''}
      ${p.t ? `<div class="pt" style="font-size:${p.ts || 30}px">${esc(p.t)}</div>` : ''}
      ${p.html || ''}
      ${p.s ? `<div class="ps">${esc(p.s)}</div>` : ''}
    </div>`).join('')}</div>`;
}

const page = (s) => `<!doctype html><html><head><meta charset="utf-8"><style>
${fs.readFileSync(path.join(DIR, 'fonts/local.css'), 'utf8').replace(/url\('fonts\//g, `url('file://${DIR}/fonts/`)}
*{box-sizing:border-box;margin:0;padding:0}
body{width:1080px;height:1350px;background:${C.bg};color:${C.ink};font-family:Inter,'DejaVu Sans',sans-serif;
  padding:84px 88px 64px;display:flex;flex-direction:column;-webkit-font-smoothing:antialiased}
.kicker{font-weight:600;font-size:22px;letter-spacing:.16em;text-transform:uppercase;color:${C.accent};margin-bottom:28px}
h1{font-family:'Instrument Serif',serif;font-weight:400;font-size:${s.hs || 80}px;line-height:1.04;letter-spacing:-.01em;color:${C.ink};margin-bottom:${s.sub ? 18 : 44}px}
.sub{font-size:28px;line-height:1.35;color:${C.ink2};margin-bottom:40px;max-width:880px}
.main{flex:1;display:flex;flex-direction:column;justify-content:${s.align || 'center'}}
.note{font-size:26px;line-height:1.4;color:${C.ink2};margin-top:28px}
.foot{border-top:2px solid ${C.rule};padding-top:22px;display:flex;justify-content:space-between;align-items:flex-end;gap:40px}
.src{font-size:19px;line-height:1.4;color:${C.muted};max-width:700px}
.brand{font-size:20px;font-weight:600;color:${C.ink2};white-space:nowrap;letter-spacing:.02em}
.stats{display:flex;flex-direction:column;gap:44px}
.stat-v{font-variant-numeric:tabular-nums;font-weight:700;line-height:1;letter-spacing:-.03em}
.stat-l{font-size:30px;line-height:1.35;color:${C.ink2};margin-top:12px;max-width:860px}
svg text{font-family:Inter,'DejaVu Sans',sans-serif}
.bv{fill:${C.ink};font-weight:700;font-variant-numeric:tabular-nums}
.bl{fill:${C.ink2};font-weight:500}
.quote{display:flex;flex-direction:column}
.qmark{font-family:'Instrument Serif',serif;font-size:220px;line-height:.7;color:${C.accent};height:110px}
.qtext{font-family:'Instrument Serif',serif;line-height:1.12;color:${C.ink};margin:10px 0 44px}
.qwho{font-size:30px;font-weight:600}
.qwhere{font-size:26px;color:${C.ink2};margin-top:6px}
.list{column-gap:48px}
.li{display:flex;gap:22px;line-height:1.3;padding:18px 0;border-bottom:1px solid ${C.rule};break-inside:avoid}
.lnum{color:${C.accent};font-weight:600;min-width:44px}
.panels{display:flex;gap:28px}
.panel{flex:1;background:${C.panel};border-radius:6px;padding:34px 32px;display:flex;flex-direction:column;gap:14px}
.pk{font-size:20px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:${C.ink2}}
.pv{font-weight:700;line-height:1.02;letter-spacing:-.02em}
.pt{line-height:1.35;color:${C.ink}}
.ps{font-size:21px;line-height:1.4;color:${C.muted};margin-top:auto;padding-top:10px}
.serif{font-family:'Instrument Serif',serif}
</style></head><body>
${s.kicker ? `<div class="kicker">${esc(s.kicker)}</div>` : ''}
${s.h ? `<h1>${esc(s.h)}</h1>` : ''}
${s.sub ? `<div class="sub">${esc(s.sub)}</div>` : ''}
<div class="main">${s.body}${s.note ? `<div class="note">${esc(s.note)}</div>` : ''}</div>
<div class="foot"><div class="src">${esc(s.src || '')}</div><div class="brand">Shrayes Bhatale</div></div>
</body></html>`;

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' }).catch(() => chromium.launch());
  const ctx = await browser.newContext({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  const all = specs({ stats, barsV, barsH, quote, list, panels, C, W, esc });
  for (const [id, s] of Object.entries(all)) {
    if (ONLY && !ONLY.includes(id)) continue;
    const html = page(s);
    const f = path.join(DIR, 'tmp.html');
    fs.writeFileSync(f, html);
    await p.goto('file://' + f);
    await p.evaluate(() => document.fonts.ready);
    const over = await p.evaluate(() => document.body.scrollHeight > 1350 || document.body.scrollWidth > 1080);
    await p.screenshot({ path: path.join(OUT, `${id}.png`), clip: { x: 0, y: 0, width: 1080, height: 1350 } });
    console.log(id, s.file || '', over ? 'OVERFLOW' : 'ok');
  }
  await browser.close();
})();

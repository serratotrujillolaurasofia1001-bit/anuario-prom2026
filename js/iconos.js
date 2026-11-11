/* ===== ESTRELLAS, ICONOS Y ESCUDO (no hace falta editar) ===== */
const $ = (s, r = document) => r.querySelector(s);
const esc = t => String(t == null ? '' : t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* estrella reutilizable (usa los símbolos definidos en index.html) */
const st = (color, cls = '', style = '', id = 'st') =>
  `<svg class="${cls}" style="color:${color};${style}"><use href="#${id}"/></svg>`;
const stGold = (cls = '', style = '') => st('', cls, style, 'stg');

function rng(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296 } }

/* estrellitas quietas y discretas esparcidas por la página */
function sprinkle(seed, count, cols){
  const r = rng(seed * 977 + 13);
  cols = cols || ['var(--oro)', 'var(--oro-c)', 'var(--verde-m)'];
  let h = '';
  for(let i = 0; i < count; i++){
    const s = 5 + r() * 8;
    h += st(cols[Math.floor(r() * cols.length)], 's', `left:${(r()*94+1).toFixed(1)}%;top:${(r()*94+1).toFixed(1)}%;width:${s.toFixed(1)}px;height:${s.toFixed(1)}px`);
  }
  return h;
}

/* línea divisoria con estrellas */
const sdiv = (style = '') =>
  `<div class="sdiv" style="${style}"><i></i>${stGold('', 'width:10px;height:10px')}${stGold('', 'width:15px;height:15px')}${stGold('', 'width:10px;height:10px')}<i></i></div>`;

/* ===== símbolos SVG (se definen una sola vez) ===== */
(function(){
  let s = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>';
  s += '<symbol id="i-user" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 5-7 8-7s7 2 8 7"/></symbol>';
  s += '<symbol id="i-quote" viewBox="0 0 24 24" fill="currentColor"><path d="M4 18v-5c0-4 2-7 6-8l.8 1.6C8.9 7.3 8 8.8 8 10.5H11V18zM13 18v-5c0-4 2-7 6-8l.8 1.6C17.9 7.3 17 8.8 17 10.5H20V18z"/></symbol>';
  s += '<symbol id="i-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.2l7.1-.6z"/></symbol>';
  s += '<symbol id="i-target" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></symbol>';
  s += '<symbol id="i-leaf" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20c0-9 5-15 15-15 0 10-6 15-15 15zM5 20l8-8"/></symbol>';
  s += '<symbol id="i-pen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l1-5L16 4l4 4L9 19z"/></symbol>';
  s += '<symbol id="i-cam" viewBox="0 0 48 40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M4 12h10l3-6h14l3 6h10v24H4z"/><circle cx="24" cy="23" r="8"/></symbol>';
  /* esquina ornamental dorada */
  s += '<symbol id="corner" viewBox="0 0 60 60"><path d="M4 58V22Q4 4 22 4H58" fill="none" stroke="url(#gold)" stroke-width="2.2" stroke-linecap="round"/><path d="M11 58V30Q11 11 30 11H58" fill="none" stroke="url(#gold)" stroke-width=".9" stroke-linecap="round"/><use href="#stg" x="15" y="15" width="13" height="13"/></symbol>';
  document.body.insertAdjacentHTML('afterbegin', s + '</defs></svg>');
})();

const icon = id => `<svg><use href="#${id}"/></svg>`;

/* escudo de relleno si todavía no existe el archivo del logo */
window.fallbackLogo = function(cls){
  const d = document.createElement('div');
  d.className = cls + ' logo-fb';
  d.innerHTML = '<svg viewBox="0 0 64 76"><path d="M32 3 6 12v26c0 17 12 28 26 35 14-7 26-18 26-35V12z" fill="#587d68" stroke="#b8995a" stroke-width="3"/><path d="M32 22l4 9 10 1-7.5 6.5 2.5 10L32 43l-9 5.5 2.5-10L18 32l10-1z" fill="#e6d3a0"/></svg>';
  return d;
};
const logo = (cls = 'logo') => `<img class="${cls}" src="${esc(DATOS.logo)}" alt="Escudo" decoding="async" onerror="this.replaceWith(fallbackLogo('${cls}'))">`;
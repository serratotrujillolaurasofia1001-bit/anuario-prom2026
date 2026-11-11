/* ===== EL LIBRO: hojas, giro de páginas y navegación (no hace falta editar) ===== */
(function(){
  const N = HOJAS;
  const book = $('#book'), info = $('#info'), prev = $('#prev'), next = $('#next');
  const sel = $('#goto'), scaler = $('#scaler');
  let cur = 0, lock = false, auto = false, timer = null;

  /* hojas vacías: el contenido solo se dibuja en las cercanas (carga rápida) */
  const sheets = [], drawn = new Set();
  for(let i = 0; i < N; i++){
    const el = document.createElement('div');
    el.className = 'sheet' + ((i === 0 || i === N - 1) ? ' hard' : '');
    el.style.zIndex = N - i;
    const f = document.createElement('div'), b = document.createElement('div');
    f.className = 'face front'; b.className = 'face back';
    el.append(f, b); book.appendChild(el);
    sheets.push({ el, f, b });
  }

  /* reduce la letra si un texto no cabe en su recuadro */
  function fitText(root){
    root.querySelectorAll('.fit,.fitv').forEach(el => {
      el.style.fontSize = '';
      let s = parseFloat(getComputedStyle(el).fontSize);
      const over = () => el.classList.contains('fitv')
        ? el.scrollHeight > el.clientHeight + 1
        : el.scrollWidth > el.clientWidth + 1;
      while(over() && s > 9){ s -= .5; el.style.fontSize = s + 'px'; }
    });
  }

  function fill(i){
    if(drawn.has(i)) return;
    const s = sheets[i];
    s.f.innerHTML = renderPage(2 * i + 1);
    s.b.innerHTML = renderPage(2 * i + 2);
    fitText(s.f); fitText(s.b);
    drawn.add(i);
  }
  function clear(i){
    if(!drawn.has(i)) return;
    sheets[i].f.innerHTML = ''; sheets[i].b.innerHTML = '';
    drawn.delete(i);
  }
  function refresh(clean){
    for(let i = 0; i < N; i++){
      if(i >= cur - 2 && i <= cur + 2) fill(i);
      else if(clean) clear(i);
    }
  }
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(() => drawn.forEach(i => { fitText(sheets[i].f); fitText(sheets[i].b); }));

  /* ---------- giro ---------- */
  function go(d, force){
    if(!force && (lock || auto)) return;
    const t = cur + d;
    if(t < 0 || t > N) return;
    if(!force){ lock = true; setTimeout(() => lock = false, 520); }
    const i = d > 0 ? cur : t, s = sheets[i];
    clearTimeout(s.zt);
    s.el.style.zIndex = N + 2;
    if(d > 0){
      s.el.classList.add('flipped');
      s.zt = setTimeout(() => s.el.style.zIndex = i + 1, 580);
    }else{
      s.el.classList.remove('flipped');
      s.zt = setTimeout(() => s.el.style.zIndex = N - i, 580);
    }
    cur = t;
    refresh(!auto); shift(); label();
    if(!force) burst();
  }

  function shift(){
    book.style.transform = cur === 0 ? 'translateX(-200px)' : cur === N ? 'translateX(200px)' : 'translateX(0)';
  }
  function secOf(p){
    let r = SECCIONES[0];
    SECCIONES.forEach(s => { if(p >= s.p) r = s; });
    return r;
  }
  function label(){
    const l = 2 * cur, r = 2 * cur + 1;
    if(cur === 0) info.textContent = 'PORTADA';
    else if(cur === N) info.textContent = 'CONTRAPORTADA';
    else info.textContent = `PÁGS ${l}–${r} · ${secOf(r).t.toUpperCase()}`;
    sel.value = secOf(cur === N ? TOTAL : (cur === 0 ? 1 : r)).p;
    prev.disabled = cur === 0; next.disabled = cur === N;
  }

  /* ir a una página cualquiera pasando las hojas una tras otra */
  window.goPage = function(p){
    const t = p <= 1 ? 0 : Math.min(N, Math.floor(p / 2));
    if(t === cur || auto) return;
    auto = true; clearInterval(timer);
    timer = setInterval(() => {
      if(cur === t){
        clearInterval(timer);
        setTimeout(() => { auto = false; refresh(true); }, 1200);
        return;
      }
      go(t > cur ? 1 : -1, true);
    }, 170);
  };

  /* ---------- controles ---------- */
  SECCIONES.forEach(s => {
    const o = document.createElement('option');
    o.value = s.p; o.textContent = s.t;
    sel.appendChild(o);
  });
  sel.onchange = () => window.goPage(+sel.value);
  prev.onclick = () => go(-1);
  next.onclick = () => go(1);
  document.addEventListener('click', e => {
    const g = e.target.closest('[data-goto]');
    if(g){ window.goPage(+g.dataset.goto); return; }
    const ed = e.target.closest('.edge');
    if(ed) go(ed.classList.contains('l') ? -1 : 1);
  });
  document.addEventListener('keydown', e => {
    if(e.target === sel) return;
    if(e.key === 'ArrowRight' || e.key === 'PageDown') go(1);
    if(e.key === 'ArrowLeft'  || e.key === 'PageUp')   go(-1);
  });
  let tx = null;
  document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', e => {
    if(tx === null) return;
    const dx = e.changedTouches[0].clientX - tx;
    if(Math.abs(dx) > 70) go(dx < 0 ? 1 : -1);
    tx = null;
  });

  /* ---------- ajuste de tamaño ---------- */
  function fit(){
    const s = Math.min(innerWidth / 860, (innerHeight - 90) / 650);
    scaler.style.transform = `scale(${s})`;
  }
  addEventListener('resize', fit);

  /* ---------- cielo de estrellas y chispas al pasar página ---------- */
  (function(){
    const r = rng(2026); let h = '';
    for(let i = 0; i < 30; i++){
      const s = 5 + r() * 9;
      h += st(['#f3e6c0', '#d9c58d', '#ffffff'][i % 3], '', `left:${(r()*100).toFixed(1)}%;top:${(r()*100).toFixed(1)}%;width:${s.toFixed(1)}px;height:${s.toFixed(1)}px;animation-delay:${(r()*5).toFixed(1)}s`);
    }
    $('#sky').innerHTML = h;
  })();

  function spawn(x, y, n, spread){
    const layer = $('#fxlayer');
    for(let i = 0; i < n; i++){
      const d = document.createElement('div');
      d.className = 'fx';
      const s = 7 + Math.random() * 9;
      d.style.cssText = `left:${x}px;top:${y}px;width:${s}px;height:${s}px`;
      d.innerHTML = st(['#e6d3a0', '#f6ecd0', '#ffffff'][i % 3], '', 'width:100%;height:100%');
      layer.appendChild(d);
      const a = Math.random() * Math.PI * 2, dist = spread * (.4 + Math.random() * .8);
      d.animate([
        { transform: 'translate(0,0) scale(.3)', opacity: 1 },
        { transform: `translate(${Math.cos(a) * dist}px,${Math.sin(a) * dist}px) scale(1)`, opacity: 0 }
      ], { duration: 900 + Math.random() * 400, easing: 'ease-out' }).onfinish = () => d.remove();
    }
  }
  function burst(){ spawn(400, 300, 8, 220); }

  /* ---------- arranque ---------- */
  fit(); refresh(true); shift(); label();
  window.__anuarioListo = true;
})();
/* ===== CONTENIDO DE CADA PÁGINA (lee todo desde datos.js) ===== */
const D = DATOS;

/* cuántas páginas hay: 6 fijas + las de estudiantes (siempre par) */
const S0 = Math.max(D.estudiantes.length, D.paginasEstudiantes || 26);
const S  = S0 % 2 ? S0 + 1 : S0;
const TOTAL = S + 6;          // portada, índice, bienvenida, estudiantes, momentos, despedida, contraportada
const HOJAS = TOTAL / 2;
const PG = { est1: 4, estN: 3 + S, momentos: 4 + S, final: 5 + S, back: 6 + S };

const SECCIONES = [
  { t: 'Portada',                     p: 1 },
  { t: 'Índice',                      p: 2 },
  { t: 'Bienvenida',                  p: 3 },
  { t: 'Estudiantes',                 p: PG.est1, fin: PG.estN },
  { t: D.momentosTitulo || 'Momentos', p: PG.momentos },
  { t: 'Despedida y agradecimientos', p: PG.final },
  { t: 'Contraportada',               p: PG.back }
];

const paras = t => (Array.isArray(t) ? t : String(t || '').split('\n')).filter(x => x.trim()).map(x => `<p>${esc(x)}</p>`).join('');

/* ondas suaves de las esquinas */
const WV = '<path class="w1" d="M0 0H122Q56 40 0 90z"/><path class="w2" d="M0 0H98Q45 31 0 70z"/><path class="wg" d="M122 0Q56 40 0 90"/><path class="wa" d="M113 0Q52 37 0 83"/>';
const waves = () =>
  `<svg class="wv tl" viewBox="0 0 122 90">${WV}</svg><svg class="wv br" viewBox="0 0 122 90">${WV}</svg>`;
const CW = '<path class="w1" d="M0 0H170Q90 62 0 170z"/><path class="w2" d="M0 0H126Q66 46 0 122z"/><path class="wg" d="M170 0Q90 62 0 170"/><path class="wa" d="M158 0Q84 57 0 157"/>';
const coverWaves = () =>
  `<svg class="cvw tl" viewBox="0 0 170 170">${CW}</svg><svg class="cvw br" viewBox="0 0 170 170">${CW}</svg>`;
const cvDeco = () => `
  <div class="cv-frame"></div><div class="cv-frame2"></div>
  <svg class="cor c1"><use href="#corner"/></svg><svg class="cor c2"><use href="#corner"/></svg>
  <svg class="cor c3"><use href="#corner"/></svg><svg class="cor c4"><use href="#corner"/></svg>`;

const pn = p => `<div class="pn">${stGold('', 'width:7px;height:7px')} ${p} ${stGold('', 'width:7px;height:7px')}</div>`;

/* ---------- PORTADA ---------- */
function pCover(){
  return `<div class="cv">
    ${coverWaves()}${cvDeco()}
    ${sprinkle(77, 16, ['var(--oro-c)', '#fff6d8'])}
    <div class="cv-logo">${logo('logo')}</div>
    <div class="cv-school gold">INSTITUCIÓN EDUCATIVA ${esc(D.colegio.toUpperCase())}</div>
    <div class="cv-prom gold">${esc(D.promocion)}</div>
    ${sdiv('top:262px;left:70px;right:70px')}
    <div class="cv-t gold" style="top:290px">${esc(D.portada.linea1)}</div>
    <div class="cv-t gold" style="top:340px">${esc(D.portada.linea2)}</div>
    <div class="cv-ribbon"><span class="gold">${esc(D.curso)}</span></div>
    <div class="cv-stars">${stGold('', 'width:12px;height:12px')}${stGold('', 'width:20px;height:20px')}${stGold('', 'width:30px;height:30px')}${stGold('', 'width:20px;height:20px')}${stGold('', 'width:12px;height:12px')}</div>
    <div class="edge full r"></div>
  </div>`;
}

/* ---------- ÍNDICE ---------- */
function pIndice(){
  const items = SECCIONES.filter(s => s.p >= 3).map(s =>
    `<li data-goto="${s.p}">${st('var(--oro)', 'bul')}<span>${esc(s.t)}</span><i></i><b>${s.fin ? s.p + '–' + s.fin : s.p}</b></li>`).join('');
  return `<div class="pg">
    ${waves()}${sprinkle(2, 10)}
    <div class="wlogo">${logo('logo')}</div>
    <h2 class="big">Índice</h2>
    <div class="sub">${esc(D.curso)} · ${esc(D.promocion.toUpperCase())}</div>
    ${sdiv('top:228px;left:120px;right:120px')}
    <ul class="idx">${items}</ul>
    <p class="hint">Toca una sección para ir directo a ella</p>
    ${pn(2)}
    <div class="edge l"></div>
  </div>`;
}

/* ---------- BIENVENIDA ---------- */
function pBienvenida(){
  return `<div class="pg">
    ${waves()}${sprinkle(3, 12)}
    <div class="wlogo">${logo('logo')}</div>
    <h2 class="big">${esc(D.bienvenida.titulo)}</h2>
    <div class="sub">${esc(D.generacion.toUpperCase())}</div>
    <div class="card"><h3>${esc(D.bienvenida.subtitulo)}</h3>${paras(D.bienvenida.mensaje)}</div>
    ${sdiv('top:528px;left:120px;right:120px')}
    ${pn(3)}
    <div class="edge r"></div>
  </div>`;
}

/* ---------- ESTUDIANTES (misma plantilla en todas) ---------- */
function pEstudiante(n, p){
  const e = D.estudiantes[n - 1] || {};
  const foto  = e.foto  !== undefined ? e.foto  : `img/fotos/foto-${n}.jpg`;
  const firma = e.firma !== undefined ? e.firma : `img/firmas/firma-${n}.png`;
  const asp = [0, 1, 2, 3, 4].map(i =>
    `<div><span>${i + 1}.</span><div class="ln fit">${esc((e.aspiraciones || [])[i])}</div></div>`).join('');
  const side = p % 2 === 0 ? 'l' : 'r';
  return `<div class="pg">
    ${waves()}${sprinkle(p, 9)}
    ${logo('logo')}
    <div class="school"><small>INSTITUCIÓN EDUCATIVA</small><b>${esc(D.colegio)}</b><i></i></div>
    <div class="title"><span class="t1">Anuario</span><span class="t2">ESCOLAR</span><span class="t3">${esc(D.generacion)}</span></div>
    ${st('var(--oro)', 's2', 'left:10px;top:114px;width:12px;height:12px')}
    ${st('var(--oro)', 's2', 'left:208px;top:176px;width:14px;height:14px')}

    <div class="photo">
      <div class="pframe"><div class="pinner">
        <div class="ph"><div class="phi">${icon('i-cam')}<span>TU FOTO<br>AQUÍ</span></div>${foto ? `<img class="pimg" src="${esc(foto)}" alt="" decoding="async" onerror="this.remove()">` : ''}</div>
      </div>
      ${stGold('pc a')}${stGold('pc b')}${stGold('pc c')}${stGold('pc d')}
      <div class="pbadge">★ ${esc(D.generacion.toUpperCase())} ★</div></div>
    </div>

    <div class="box" style="left:16px;top:208px;width:214px;height:44px"><div class="lab"><span class="ic">${icon('i-user')}</span>Nombres completos</div>
      <div class="nm fit">${esc(e.nombre)}</div></div>

    <div class="box" style="left:16px;top:274px;width:182px;height:56px"><div class="lab"><span class="ic">${icon('i-quote')}</span>Frase favorita</div>
      <div class="tx fitv">${esc(e.frase)}</div></div>

    <div class="box" style="left:206px;top:274px;width:178px;height:56px"><div class="lab"><span class="ic">${icon('i-star')}</span>Recuerdo favorito</div>
      <div class="tx fitv">${esc(e.recuerdo)}</div></div>

    <div class="box" style="left:16px;top:352px;width:368px;height:100px"><div class="lab"><span class="ic">${icon('i-target')}</span>Lista de aspiraciones</div>
      <div class="asp">${asp}</div></div>

    <div class="box" style="left:16px;top:468px;width:368px;height:52px"><div class="lab"><span class="ic">${icon('i-leaf')}</span>Agradecimientos</div>
      <div class="tx fitv" style="--lh:15px;font-size:14.5px">${esc(e.agradecimientos)}</div></div>

    <div class="sigpill"><span class="ic">${icon('i-pen')}</span>Firma digital</div>
    <div class="firma${firma ? '' : ' vacio'}">${firma ? `<img src="${esc(firma)}" alt="" decoding="async" onerror="this.parentNode.classList.add('vacio');this.remove()">` : ''}<span>Firma</span></div>

    <div class="quote">Los grandes sueños también empiezan en el colegio</div>
    ${pn(p)}
    <div class="edge ${side}"></div>
  </div>`;
}

/* ---------- MOMENTOS ---------- */
function pMomentos(p){
  const m = D.momentos || [];
  let cells = '';
  for(let i = 0; i < 6; i++){
    const it = m[i] || {};
    cells += `<div class="mini"><div class="ph"><div class="phi">${icon('i-cam')}<span>FOTO</span></div>${it.foto ? `<img class="pimg" src="${esc(it.foto)}" alt="" decoding="async" onerror="this.remove()">` : ''}</div><div class="cap fit">${esc(it.texto)}</div>${stGold('pc a', 'width:14px;height:14px')}</div>`;
  }
  return `<div class="pg">
    ${waves()}${sprinkle(30, 10)}
    <h2 class="big" style="top:34px;font-size:40px">${esc(D.momentosTitulo || 'Momentos')}</h2>
    ${sdiv('top:88px;left:110px;right:110px')}
    <div class="mgrid">${cells}</div>
    ${pn(p)}
    <div class="edge l"></div>
  </div>`;
}

/* ---------- ÚLTIMA PÁGINA: frase + agradecimientos ---------- */
function pFinal(p){
  const d = D.despedida;
  const lis = (d.agradecimientos || []).map(x => `<li>${esc(x)}</li>`).join('');
  return `<div class="pg">
    ${waves()}${sprinkle(31, 12)}
    <div class="fp">
      <h2 class="fp-t">${esc(d.titulo)}</h2>
      <div class="fp-q">${paras(d.frase)}<b>${esc(d.fraseFinal)}</b></div>
      <div class="fp-c"><h3>${esc(d.agradecimientosTitulo)}</h3><ul>${lis}</ul></div>
      <div class="fp-s">${esc(D.curso)} · ${esc(D.promocion.toUpperCase())}</div>
    </div>
    ${pn(p)}
    <div class="edge r"></div>
  </div>`;
}

/* ---------- CONTRAPORTADA ---------- */
function pBack(){
  const c = D.contraportada;
  return `<div class="cv">
    ${coverWaves()}${cvDeco()}
    ${sprinkle(99, 16, ['var(--oro-c)', '#fff6d8'])}
    <svg class="const" viewBox="0 0 300 110">
      <polyline points="14,84 62,46 112,66 164,22 214,56 262,26 288,72" fill="none" stroke="url(#gold)" stroke-width="1.2" stroke-dasharray="3 5" opacity=".8"/>
      <use href="#stg" x="6" y="76" width="16" height="16"/><use href="#stg" x="52" y="36" width="20" height="20"/>
      <use href="#stg" x="104" y="58" width="16" height="16"/><use href="#stg" x="152" y="10" width="24" height="24"/>
      <use href="#stg" x="206" y="48" width="16" height="16"/><use href="#stg" x="252" y="16" width="20" height="20"/>
      <use href="#stg" x="280" y="64" width="16" height="16"/>
    </svg>
    <div class="bk-t"><span class="gold">${esc(c.titulo[0])}</span><br><span class="gold">${esc(c.titulo[1] || '')}</span></div>
    ${sdiv('top:258px;left:70px;right:70px')}
    <div class="bk-logo">${logo('logo')}</div>
    <div class="bk-s gold">INSTITUCIÓN EDUCATIVA<br>${esc(D.colegio.toUpperCase())}</div>
    <div class="cv-ribbon sm" style="top:464px"><span class="gold">${esc(D.curso)} · ${esc(D.promocion.toUpperCase())}</span></div>
    <div class="bk-f">${esc(c.pie)}</div>
    <div class="edge full l"></div>
  </div>`;
}

/* ---------- número de página -> contenido ---------- */
function renderPage(p){
  if(p === 1) return pCover();
  if(p === 2) return pIndice();
  if(p === 3) return pBienvenida();
  if(p <= PG.estN) return pEstudiante(p - 3, p);
  if(p === PG.momentos) return pMomentos(p);
  if(p === PG.final) return pFinal(p);
  return pBack();
}
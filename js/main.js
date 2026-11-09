// ===== Datos =====
const EMAIL = 'kely.romero@unl.edu.ec';

const PROJECTS = [
  {
    id: 'majo',
    cat: 'web',
    stack: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'WhatsApp Cloud API', 'Resend', 'Vercel'],
    repo: 'https://github.com/Kely944/campozoe',
    es: {
      title: 'Pendientes Majo',
      badge: 'en producción',
      short: 'PWA de recordatorios por WhatsApp, pedidos, cobros y reportes para un negocio real en Loja.',
      problem: 'El negocio perdía plazos de ofertas, pedidos a proveedores, cuotas de préstamos y cobros porque todo se llevaba de memoria.',
      features: [
        'Avisos por WhatsApp que se repiten hasta que alguien marca la tarea como hecha; si sigue pendiente, avisa al respaldo.',
        'Siete módulos: recordatorios, Corporación Favorita, pagos y préstamos, pedidos, cuentas por cobrar, producción y reportes.',
        'Seguridad con Row Level Security: los montos solo los ve la administradora.',
        'Horario silencioso de 21:00 a 07:00 (hora de Ecuador) e importación de reportes .xlsx/.csv del facturador.',
        'Pruebas automáticas de la lógica de recordatorios y manual de uso para el equipo.'
      ]
    },
    en: {
      title: 'Pendientes Majo',
      badge: 'in production',
      short: 'PWA with WhatsApp reminders, orders, collections and reports for a real business in Loja.',
      problem: 'The business kept missing deadlines for offers, supplier orders, loan payments and collections because everything was tracked from memory.',
      features: [
        'WhatsApp alerts that repeat until someone marks the task done; if it is still pending, the backup person is notified.',
        'Seven modules: reminders, Corporación Favorita, payments and loans, orders, accounts receivable, production and reports.',
        'Row Level Security: only the administrator can see amounts.',
        'Quiet hours from 21:00 to 07:00 (Ecuador time) and .xlsx/.csv report import from the invoicing system.',
        'Automated tests for the reminder logic and a user manual for the team.'
      ]
    }
  },
  {
    id: 'cafe',
    cat: 'datos',
    stack: ['Python', 'Machine learning', 'Polynomial regression', 'InfoStat', 'R'],
    chart: true,
    es: {
      title: 'Rendimiento y calidad de café',
      badge: 'tesis',
      short: 'Modelos de regresión y machine learning con datos de 11 fincas de Loja.',
      problem: 'Los productores de café de Loja no tenían una forma de estimar rendimiento ni calidad de taza a partir de las condiciones de su finca.',
      features: [
        'Levantamiento de datos y colecta de muestras de café y suelo en fincas de productores.',
        'Análisis de laboratorio: pH, acidez titulable, sólidos solubles y peso de 100 granos.',
        'Modelos de regresión lineal, polinomial múltiple y machine learning, con análisis exploratorio, matrices de correlación y residuos parciales.',
        'Resultado: fertilización, densidad de siembra y altitud pesan más en el rendimiento; el pH del fruto y la conductividad eléctrica del suelo, en la calidad de taza.'
      ]
    },
    en: {
      title: 'Coffee yield and cup quality',
      badge: 'thesis',
      short: 'Regression and machine learning models with data from 11 farms in Loja.',
      problem: 'Coffee producers in Loja had no way to estimate yield or cup quality from the conditions of their farm.',
      features: [
        'Field data and coffee/soil sample collection on producers\' farms.',
        'Lab analysis: pH, titratable acidity, soluble solids and 100-bean weight.',
        'Linear, multiple polynomial and machine learning regression models, with exploratory analysis, correlation matrices and partial residuals.',
        'Result: fertilization, planting density and altitude weigh most on yield; fruit pH and soil electrical conductivity on cup quality.'
      ]
    }
  },
  {
    id: 'tetris',
    cat: 'juegos',
    stack: ['JavaScript', 'HTML5 Canvas', 'CSS'],
    repo: 'https://github.com/Kely944/claude-tetris',
    play: true,
    es: {
      title: 'Tetris',
      badge: 'jugable',
      short: 'Motor de juego con Canvas, JavaScript puro y cero dependencias.',
      problem: 'Proyecto de práctica para dominar el bucle de juego, colisiones y renderizado sin frameworks.',
      features: [
        'Rotación de piezas, detección de colisiones y limpieza de líneas.',
        'Puntaje, niveles y vista de la siguiente pieza.',
        'Renderizado en HTML5 Canvas sin librerías ni proceso de build.'
      ]
    },
    en: {
      title: 'Tetris',
      badge: 'playable',
      short: 'Game engine with Canvas, plain JavaScript and zero dependencies.',
      problem: 'Practice project to master the game loop, collisions and rendering without frameworks.',
      features: [
        'Piece rotation, collision detection and line clearing.',
        'Score, levels and next-piece preview.',
        'HTML5 Canvas rendering with no libraries and no build step.'
      ]
    }
  }
];

// Correlación de Pearson con el rendimiento (qq/ha) y con el puntaje de taza. n = 11 fincas.
// Fuente: dataset.xlsx de la tesis.
const THESIS = [
  { es: 'Fertilización', en: 'Fertilization', yield: 0.693, cup: 0.398 },
  { es: 'Materia orgánica', en: 'Organic matter', yield: 0.596, cup: 0.150 },
  { es: 'Potasio (K)', en: 'Potassium (K)', yield: -0.434, cup: -0.105 },
  { es: 'Superficie sembrada', en: 'Planted area', yield: -0.365, cup: 0.109 },
  { es: 'Conductividad eléctrica del suelo', en: 'Soil electrical conductivity', yield: -0.353, cup: 0.279 },
  { es: 'Riego', en: 'Irrigation', yield: -0.336, cup: 0.067 },
  { es: 'Sistema agroforestal', en: 'Agroforestry system', yield: 0.298, cup: 0.145 },
  { es: 'Peso de 100 granos', en: '100-bean weight', yield: 0.267, cup: 0.195 },
  { es: 'Fósforo (P)', en: 'Phosphorus (P)', yield: -0.247, cup: -0.138 },
  { es: 'pH del fruto', en: 'Fruit pH', yield: 0.210, cup: 0.498 },
  { es: 'Densidad de siembra', en: 'Planting density', yield: -0.194, cup: -0.595 },
  { es: 'Grados Brix', en: '°Brix', yield: 0.165, cup: 0.434 },
  { es: 'pH del suelo', en: 'Soil pH', yield: 0.140, cup: 0.568 },
  { es: 'Edad de la plantación', en: 'Plantation age', yield: -0.090, cup: 0.275 },
  { es: 'Nitrógeno (N)', en: 'Nitrogen (N)', yield: 0.053, cup: 0.260 },
  { es: 'Altitud', en: 'Altitude', yield: -0.029, cup: 0.013 },
  { es: 'Acidez titulable', en: 'Titratable acidity', yield: -0.008, cup: 0.102 }
];
const TOP_N = 8;

// ===== Utilidades =====
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const root = document.documentElement;
const store = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
};

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove('show'), 2400);
}

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast(`${ui().copied}: ${text}`);
  } catch {
    window.location.href = `mailto:${text}`;
  }
}

// ===== Idioma =====
let lang = 'es';
const ui = () => UI[lang];
const ORIGINAL = new Map();
$$('[data-i18n]').forEach((el) => ORIGINAL.set(el, el.innerHTML));
$$('[data-i18n-ph]').forEach((el) => ORIGINAL.set(el, el.placeholder));
const langBtn = $('#langToggle');

function setLang(l) {
  lang = l;
  root.lang = l;
  $$('[data-i18n]').forEach((el) => {
    el.innerHTML = l === 'es' ? ORIGINAL.get(el) : (I18N_EN[el.dataset.i18n] ?? ORIGINAL.get(el));
  });
  $$('[data-i18n-ph]').forEach((el) => {
    el.placeholder = l === 'es' ? ORIGINAL.get(el) : (I18N_EN[el.dataset.i18nPh] ?? ORIGINAL.get(el));
  });
  langBtn.textContent = ui().langBtn;
  langBtn.setAttribute('aria-label', ui().langLabel);
  $('#modalClose').setAttribute('aria-label', ui().close);
  document.title = l === 'es' ? 'Kely Romero · Desarrolladora y Analista de datos' : 'Kely Romero · Developer & Data Analyst';
  updateThemeLabel();
  renderProjects();
  renderChart();
  store.set('lang', l);
}
langBtn.addEventListener('click', () => setLang(lang === 'es' ? 'en' : 'es'));

// ===== Tema (claro por defecto) =====
const themeBtn = $('#themeToggle');
function updateThemeLabel() {
  themeBtn.setAttribute('aria-label', root.dataset.theme === 'dark' ? ui().themeToLight : ui().themeToDark);
}
function setTheme(t) {
  root.dataset.theme = t;
  updateThemeLabel();
  store.set('theme', t);
}
// Cambio animado: un círculo se expande desde el origen (View Transitions API).
function toggleTheme(origin = themeBtn) {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  if (!document.startViewTransition || reduceMotion) { setTheme(next); return; }
  const r = origin.getBoundingClientRect();
  const x = r.left + r.width / 2;
  const y = r.top + r.height / 2;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  themeBtn.classList.add('spin');
  root.classList.add('vt');
  const t = document.startViewTransition(() => setTheme(next));
  t.ready.then(() => {
    root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 650, easing: 'cubic-bezier(.65,0,.35,1)', pseudoElement: '::view-transition-new(root)' }
    );
  });
  t.finished.finally(() => { themeBtn.classList.remove('spin'); root.classList.remove('vt'); });
}
themeBtn.addEventListener('click', () => toggleTheme());

// ===== Nav: menú móvil, sombra, progreso, sección activa =====
const menuBtn = $('#menuBtn');
const links = $('#links');
menuBtn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
$$('a', links).forEach((a) => a.addEventListener('click', () => {
  links.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

const nav = $('#nav');
const progress = $('#progress');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  progress.style.width = `${(h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100}%`;
  nav.classList.toggle('scrolled', h.scrollTop > 8);
}, { passive: true });

const navLinks = $$('#links a');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach((s) => sectionObserver.observe(s));

// ===== Texto escrito (hero) =====
function startTyper() {
  const el = $('#typed');
  if (reduceMotion) { el.textContent = ui().roles[0]; return; }
  let r = 0, i = 0, del = false;
  (function tick() {
    const roles = ui().roles;
    const word = roles[r % roles.length];
    i = Math.min(i + (del ? -1 : 1), word.length);
    el.textContent = word.slice(0, i);
    let wait = del ? 28 : 55;
    if (!del && i === word.length) { del = true; wait = 1800; }
    else if (del && i <= 0) { del = false; i = 0; r = (r + 1) % roles.length; wait = 300; }
    setTimeout(tick, wait);
  })();
}

// ===== Aparición al hacer scroll + contadores =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    const counter = e.target.querySelector('[data-count]');
    if (counter) countUp(counter);
    if (e.target.id === 'chart') growBars();
    revealObserver.unobserve(e.target);
  });
}, { threshold: 0.15 });
$$('.reveal').forEach((el) => revealObserver.observe(el));

function countUp(el) {
  const target = +el.dataset.count;
  if (reduceMotion) { el.textContent = target; return; }
  const start = performance.now();
  const dur = 1200;
  (function frame(now) {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(frame);
  })(start);
}

// ===== Proyectos: render, filtros, modal =====
const projectsEl = $('#projects');
let currentFilter = 'all';

function renderProjects() {
  projectsEl.innerHTML = PROJECTS.map((p, i) => {
    const t = p[lang];
    return `
    <button class="project card in" data-cat="${p.cat}" data-id="${p.id}">
      <span class="n mono">${String(i + 1).padStart(2, '0')}</span>
      <div>
        <h3>${esc(t.title)}${t.badge ? `<span class="badge mono">${esc(t.badge)}</span>` : ''}</h3>
        <p>${esc(t.short)}</p>
      </div>
      <span class="t mono">${p.stack.slice(0, 3).map(esc).join(' · ')}</span>
    </button>`;
  }).join('');
  $$('.project', projectsEl).forEach((el) => el.addEventListener('click', () => openProject(el.dataset.id)));
  applyFilter();
}

function applyFilter() {
  $$('.project').forEach((p) => p.classList.toggle('hide', currentFilter !== 'all' && p.dataset.cat !== currentFilter));
}

$$('#proyectos .chip').forEach((chip) => chip.addEventListener('click', () => {
  $$('#proyectos .chip').forEach((c) => { c.classList.remove('active'); c.setAttribute('aria-selected', 'false'); });
  chip.classList.add('active');
  chip.setAttribute('aria-selected', 'true');
  currentFilter = chip.dataset.filter;
  applyFilter();
}));

const modal = $('#modal');
const modalContent = $('#modalContent');

function openProject(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;
  const t = p[lang];
  modal.classList.remove('wide');
  modalContent.innerHTML = `
    <span class="prompt mono">$ cat ${lang === 'es' ? 'proyectos' : 'projects'}/${p.id}.md</span>
    <h3>${esc(t.title)}</h3>
    <p class="m-sub">${esc(t.short)}</p>
    <div class="tags">${p.stack.map((s) => `<span>${esc(s)}</span>`).join('')}</div>
    <h4>${ui().problem}</h4><p class="muted">${esc(t.problem)}</p>
    <h4>${ui().built}</h4><ul>${t.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
    <div class="btns mono">
      ${p.play ? `<button class="btn primary" data-play>${ui().play}</button>` : ''}
      ${p.chart ? `<a class="btn primary" href="#datos" data-close>${lang === 'es' ? 'ver_gráfico ↓' : 'view_chart ↓'}</a>` : ''}
      ${p.repo ? `<a class="btn ${p.play || p.chart ? 'ghost' : 'primary'}" href="${p.repo}" target="_blank" rel="noopener">${ui().viewCode}</a>` : ''}
      <a class="btn ghost" href="#contacto" data-close>${ui().ask}</a>
    </div>`;
  $$('[data-close]', modal).forEach((a) => a.addEventListener('click', () => modal.close()));
  const play = $('[data-play]', modal);
  if (play) play.addEventListener('click', openTetris);
  if (!modal.open) modal.showModal();
}

function openTetris() {
  modal.classList.add('wide');
  modalContent.innerHTML = `
    <span class="prompt mono">$ ./tetris</span>
    <p class="m-sub mono small">${ui().tetrisHelp}</p>
    <iframe class="game" src="tetris/index.html" title="Tetris"></iframe>`;
  const frame = $('iframe', modalContent);
  frame.addEventListener('load', () => frame.contentWindow.focus());
  if (!modal.open) modal.showModal();
}

$('#modalClose').addEventListener('click', () => modal.close());
modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
modal.addEventListener('close', () => { modalContent.innerHTML = ''; });

// ===== Gráfico de la tesis =====
let chartTarget = 'yield';
let chartShown = false;
const barsEl = $('#bars');
const tableEl = $('#chartTable');
const tip = $('#tooltip');
const chartEl = $('#chart');

function renderChart() {
  const rows = [...THESIS].sort((a, b) => Math.abs(b[chartTarget]) - Math.abs(a[chartTarget]));
  $('#chartTitle').textContent = ui().chartTitle[chartTarget];
  $$('.ticks span', chartEl).forEach((el, i) => { el.textContent = i === 2 ? '0' : fmt([-1, -0.5, 0, 0.5, 1][i], lang).replace(/([,.])00$/, '').replace(/([,.]\d)0$/, '$1'); });

  barsEl.innerHTML = rows.slice(0, TOP_N).map((v) => {
    const r = v[chartTarget];
    const s = ui().strength(r);
    return `
    <div class="bar-row" role="listitem" tabindex="0" data-r="${r}" data-name="${esc(v[lang])}"
         aria-label="${esc(v[lang])}: r = ${fmt(r, lang)}, ${s}">
      <span class="bar-label">${esc(v[lang])}</span>
      <div class="track"><i class="bar-fill ${r >= 0 ? 'pos' : 'neg'}" style="--w:${Math.abs(r) * 50}%"></i></div>
      <span class="bar-val mono">${fmt(r, lang)}</span>
    </div>`;
  }).join('');
  if (chartShown) requestAnimationFrame(() => barsEl.classList.add('grown'));

  tableEl.innerHTML = `
    <thead><tr>${ui().tableHead.map((h) => `<th>${h}</th>`).join('')}</tr></thead>
    <tbody>${rows.map((v) => `<tr><td>${esc(v[lang])}</td><td>${fmt(v[chartTarget], lang)}</td><td>${ui().strength(v[chartTarget])}</td></tr>`).join('')}</tbody>`;
  $('#chartTableBtn').textContent = ui().tableBtn[tableEl.hidden ? 0 : 1];

  $$('.bar-row[data-r]', barsEl).forEach((row) => {
    const show = (x, y) => {
      const r = +row.dataset.r;
      tip.innerHTML = ui().tipLine(esc(row.dataset.name), r, ui().strength(r));
      tip.hidden = false;
      const c = chartEl.getBoundingClientRect();
      const left = Math.min(Math.max(x - c.left + 14, 8), c.width - tip.offsetWidth - 8);
      tip.style.left = `${left}px`;
      tip.style.top = `${y - c.top + 14}px`;
    };
    row.addEventListener('mousemove', (e) => show(e.clientX, e.clientY));
    row.addEventListener('focus', () => { const b = row.getBoundingClientRect(); show(b.left + b.width / 2, b.top + b.height / 2); });
    row.addEventListener('mouseleave', () => { tip.hidden = true; });
    row.addEventListener('blur', () => { tip.hidden = true; });
  });
}

function growBars() {
  chartShown = true;
  barsEl.classList.add('grown');
}

$$('#chart .chip').forEach((chip) => chip.addEventListener('click', () => {
  $$('#chart .chip').forEach((c) => { c.classList.remove('active'); c.setAttribute('aria-selected', 'false'); });
  chip.classList.add('active');
  chip.setAttribute('aria-selected', 'true');
  chartTarget = chip.dataset.target;
  barsEl.classList.remove('grown');
  tip.hidden = true;
  renderChart();
}));

$('#chartTableBtn').addEventListener('click', (e) => {
  const showTable = tableEl.hidden;
  tableEl.hidden = !showTable;
  barsEl.hidden = showTable;
  $('.axis', chartEl).hidden = showTable;
  $('.legend', chartEl).hidden = showTable;
  e.currentTarget.setAttribute('aria-pressed', showTable);
  e.currentTarget.textContent = ui().tableBtn[showTable ? 1 : 0];
});

// ===== Copiar email =====
$$('[data-copy]').forEach((b) => b.addEventListener('click', () => copy(b.dataset.copy)));

// ===== Efectos (easter eggs) =====
const CONFETTI_COLORS = ['#4d7c0f', '#a3e635', '#2a78d6', '#eda100', '#e87ba4', '#e34948'];
function confetti() {
  if (reduceMotion) return;
  const box = $('#confetti');
  for (let i = 0; i < 90; i++) {
    const s = document.createElement('i');
    s.style.left = `${Math.random() * 100}vw`;
    s.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    s.style.animationDuration = `${1.8 + Math.random() * 1.6}s`;
    s.style.animationDelay = `${Math.random() * 0.4}s`;
    s.style.setProperty('--x', `${(Math.random() - 0.5) * 200}px`);
    s.style.setProperty('--rot', `${Math.random() * 720}deg`);
    box.appendChild(s);
  }
  setTimeout(() => { box.innerHTML = ''; }, 4000);
}

function matrixRain() {
  const cv = $('#matrix');
  if (reduceMotion) return;
  const box = $('#console');
  cv.width = box.clientWidth;
  cv.height = box.clientHeight;
  const ctx = cv.getContext('2d');
  const size = 14;
  const cols = Math.floor(cv.width / size);
  const drops = Array.from({ length: cols }, () => Math.random() * -40);
  const chars = Array.from('カキクケコ01ABCDEF☕🌱');
  const color = getComputedStyle(root).getPropertyValue('--acc').trim();
  const bg = getComputedStyle(root).getPropertyValue('--panel').trim();
  cv.classList.add('on');
  const end = performance.now() + 4000;
  (function frame(now) {
    ctx.globalAlpha = 0.18;
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.globalAlpha = 1;
    ctx.fillStyle = color;
    ctx.font = `${size}px "JetBrains Mono", monospace`;
    drops.forEach((y, i) => {
      ctx.fillText(chars[(Math.random() * chars.length) | 0], i * size, y * size);
      drops[i] = y * size > cv.height && Math.random() > 0.95 ? 0 : y + 1;
    });
    if (now < end) requestAnimationFrame(frame);
    else { cv.classList.remove('on'); setTimeout(() => ctx.clearRect(0, 0, cv.width, cv.height), 400); }
  })(performance.now());
}

function growPlant() {
  const stages = [
    '\n\n\n\n   ___\n  |___|',
    '\n\n\n    .\n   _|_\n  |___|',
    '\n\n    \\/\n    |\n   _|_\n  |___|',
    '\n   \\🌿/\n  \\ | /\n    |\n   _|_\n  |___|',
    '   🍒🌿🍒\n  \\ \\|/ /\n   \\ | /\n     |\n    _|_\n   |___|'
  ];
  const div = print('');
  stages.forEach((s, i) => setTimeout(() => {
    div.innerHTML = `<b>${esc(s)}</b>${i === stages.length - 1 ? `\n${lang === 'es' ? 'De la semilla a la cosecha, como un buen proyecto.' : 'From seed to harvest, like a good project.'}` : ''}`;
    out.scrollTop = out.scrollHeight;
  }, reduceMotion ? 0 : i * 450));
}

// Código Konami en cualquier parte de la página
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let kIndex = 0;
document.addEventListener('keydown', (e) => {
  kIndex = e.key === KONAMI[kIndex] ? kIndex + 1 : (e.key === KONAMI[0] ? 1 : 0);
  if (kIndex === KONAMI.length) {
    kIndex = 0;
    confetti();
    toast(lang === 'es' ? '🎮 ¡Código Konami! Ya ganaste: una entrevista conmigo.' : '🎮 Konami code! You win: an interview with me.');
  }
});

// ===== Terminal interactiva =====
const out = $('#consoleOut');
const input = $('#consoleIn');
const history = [];
let hIndex = 0;
const T = (es, en) => (lang === 'es' ? es : en);

const COMMANDS = {
  help: () => T(`Comandos disponibles:
  <b>sobre</b>       quién soy
  <b>skills</b>      tecnologías que uso
  <b>proyectos</b>   lista de proyectos (prueba: <b>ver majo</b>)
  <b>experiencia</b> trayectoria
  <b>contratar</b>   por qué contratarme
  <b>contacto</b>    cómo escribirme
  <b>cv</b>          descargar CV
  <b>tema</b>        cambiar claro / oscuro
  <b>idioma</b>      cambiar a inglés
  <b>clear</b>       limpiar pantalla
Hay más comandos escondidos. Escribe <b>pista</b> si te rindes.`,
  `Available commands:
  <b>about</b>       who I am
  <b>skills</b>      technologies I use
  <b>projects</b>    project list (try: <b>open majo</b>)
  <b>experience</b>  background
  <b>hire</b>        why hire me
  <b>contact</b>     how to reach me
  <b>cv</b>          download CV
  <b>theme</b>       toggle light / dark
  <b>lang</b>        switch to Spanish
  <b>clear</b>       clear screen
There are hidden commands. Type <b>hint</b> if you give up.`),
  sobre: () => T('Kely Romero · Loja, Ecuador.\nIngeniera agrónoma y desarrolladora. Construyo apps web full-stack\ny modelos de datos. Español nativo, inglés B1.',
    'Kely Romero · Loja, Ecuador.\nAgronomist and developer. I build full-stack web apps\nand data models. Native Spanish, English B1.'),
  skills: () => T(`<b>frontend</b>  Next.js, React, TypeScript, JavaScript, HTML/CSS
<b>backend</b>   Supabase, PostgreSQL, RLS, APIs REST
<b>datos</b>     Python, R, InfoStat, regresión, machine learning
<b>tools</b>     Git, GitHub, Vercel, Claude Code`,
  `<b>frontend</b>  Next.js, React, TypeScript, JavaScript, HTML/CSS
<b>backend</b>   Supabase, PostgreSQL, RLS, REST APIs
<b>data</b>      Python, R, InfoStat, regression, machine learning
<b>tools</b>     Git, GitHub, Vercel, Claude Code`),
  proyectos: () => PROJECTS.map((p, i) => `<b>${String(i + 1).padStart(2, '0')}</b> ${esc(p[lang].title)} (${T('ver', 'open')} ${p.id})`).join('\n'),
  experiencia: () => T(`<b>2026</b>        Ingeniera Agrónoma · UNL
<b>2024-2026</b>   Tesis: ML para rendimiento de café
<b>2024</b>        Prácticas · APEOSAE (360 h)
<b>2022</b>        Asistente de investigación · UNL`,
  `<b>2026</b>        B.Sc. Agronomic Engineering · UNL
<b>2024-2026</b>   Thesis: ML for coffee yield
<b>2024</b>        Internship · APEOSAE (360 h)
<b>2022</b>        Research assistant · UNL`),
  contratar: () => T(`Tres razones:
 <b>1.</b> Ya llevé una app a producción para un negocio real.
 <b>2.</b> Sé trabajar con datos: limpieza, modelos y conclusiones honestas.
 <b>3.</b> Aprendo rápido y entiendo al usuario antes de programar.
Escribe <b>contacto</b> para hablar.`,
  `Three reasons:
 <b>1.</b> I already shipped an app to production for a real business.
 <b>2.</b> I know data: cleaning, modeling and honest conclusions.
 <b>3.</b> I learn fast and understand the user before coding.
Type <b>contact</b> to talk.`),
  contacto: () => `email     <a href="mailto:${EMAIL}">${EMAIL}</a>
linkedin  <a href="https://www.linkedin.com/in/kely-tamara-romero" target="_blank" rel="noopener">kely-tamara-romero</a>
github    <a href="https://github.com/Kely944" target="_blank" rel="noopener">Kely944</a>`,
  cv: () => {
    const a = document.createElement('a');
    a.href = lang === 'es' ? 'assets/CV_Kely_Romero.pdf' : 'assets/CV_Kely_Romero_English.pdf';
    a.download = '';
    a.click();
    return T('Descargando CV...', 'Downloading CV...');
  },
  tema: () => { toggleTheme(input); return T('Cambiando tema...', 'Switching theme...'); },
  idioma: () => { setLang(lang === 'es' ? 'en' : 'es'); return T('Idioma: español', 'Language: English'); },
  clear: () => { out.innerHTML = ''; return null; },
  whoami: () => COMMANDS.sobre(),

  // --- Secretos ---
  pista: () => T('Prueba: <b>cafe</b>, <b>tetris</b>, <b>matrix</b>, <b>planta</b>, <b>sudo contratar</b>… y en cualquier parte de la página: ↑ ↑ ↓ ↓ ← → ← → B A',
    'Try: <b>coffee</b>, <b>tetris</b>, <b>matrix</b>, <b>plant</b>, <b>sudo hire</b>… and anywhere on the page: ↑ ↑ ↓ ↓ ← → ← → B A'),
  cafe: () => `<b>      ( (
       ) )
    ........
    |      |]
    \\      /
     \`----'</b>
${T('Café de Loja, puntaje medio de taza en mi tesis: <b>82,7</b> (especialidad desde 80).\nDato: la densidad de siembra fue la variable más ligada a la calidad (r = −0,59).',
    'Coffee from Loja, average cup score in my thesis: <b>82.7</b> (specialty starts at 80).\nFun fact: planting density was the variable most tied to quality (r = −0.59).')}`,
  tetris: () => { openTetris(); return T('Cargando Tetris... ▶', 'Loading Tetris... ▶'); },
  matrix: () => { matrixRain(); return T('Despierta, Kely...', 'Wake up, Kely...'); },
  planta: () => { growPlant(); return null; },
  sudo: (arg) => {
    if (['contratar', 'hire'].includes(arg)) {
      confetti();
      return T('🎉 Permiso concedido. Escríbeme: <b>contacto</b>', '🎉 Permission granted. Reach me: <b>contact</b>');
    }
    return T('Permiso denegado. Prueba <b>sudo contratar</b> 😉', 'Permission denied. Try <b>sudo hire</b> 😉');
  },
  hola: () => T('¡Hola! 👋 Gracias por pasar. Escribe <b>help</b> para ver qué puedo hacer.', 'Hi! 👋 Thanks for stopping by. Type <b>help</b> to see what I can do.')
};
// Alias en inglés
Object.assign(COMMANDS, {
  about: COMMANDS.sobre, projects: COMMANDS.proyectos, experience: COMMANDS.experiencia,
  hire: COMMANDS.contratar, contact: COMMANDS.contacto, theme: COMMANDS.tema, lang: COMMANDS.idioma,
  ls: COMMANDS.help, hint: COMMANDS.pista, coffee: COMMANDS.cafe, plant: COMMANDS.planta, hello: COMMANDS.hola, hi: COMMANDS.hola
});

function print(html, cls = 'out') {
  const div = document.createElement('div');
  div.className = cls;
  div.innerHTML = html;
  out.appendChild(div);
  out.scrollTop = out.scrollHeight;
  return div;
}

function run(raw) {
  const line = raw.trim();
  if (!line) return;
  print(esc(line), 'cmd');
  history.push(line);
  hIndex = history.length;
  const [cmd, arg] = line.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(/\s+/);
  if (cmd === 'ver' || cmd === 'open') {
    const p = PROJECTS.find((x) => x.id === arg);
    if (p) { print(ui().opening(esc(p[lang].title))); openProject(p.id); }
    else print(ui().projNotFound(PROJECTS.map((x) => x.id).join(', ')), 'out err');
    return;
  }
  const fn = COMMANDS[cmd];
  if (!fn) { print(ui().notFound(esc(cmd)), 'out err'); return; }
  const res = fn(arg);
  if (res) print(res);
}

$('#consoleForm').addEventListener('submit', (e) => {
  e.preventDefault();
  run(input.value);
  input.value = '';
});
input.addEventListener('keydown', (e) => {
  e.stopPropagation(); // no dispara el código Konami mientras se escribe
  if (e.key === 'ArrowUp' && hIndex > 0) { input.value = history[--hIndex]; e.preventDefault(); }
  if (e.key === 'ArrowDown') { hIndex = Math.min(hIndex + 1, history.length); input.value = history[hIndex] || ''; e.preventDefault(); }
  if (e.key === 'Tab') {
    e.preventDefault();
    const match = Object.keys(COMMANDS).find((c) => c.startsWith(input.value.toLowerCase()));
    if (match) input.value = match;
  }
});
$('#console').addEventListener('click', (e) => { if (e.target.tagName !== 'A') input.focus({ preventScroll: true }); });
$$('#quick button').forEach((b) => b.addEventListener('click', () => run(b.dataset.cmd)));

// ===== Formulario de contacto (mailto) =====
$('#contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const d = new FormData(e.target);
  const subject = ui().mailSubject(d.get('motivo'), d.get('nombre'), d.get('empresa'));
  const body = `${d.get('mensaje')}\n\n${d.get('nombre')}${d.get('empresa') ? `\n${d.get('empresa')}` : ''}`;
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  toast(ui().openingMail);
});

// ===== Inicio =====
$('#year').textContent = new Date().getFullYear();
const urlLang = new URLSearchParams(location.search).get('lang');
const savedLang = ['es', 'en'].includes(urlLang) ? urlLang : store.get('lang');
const initialLang = savedLang || ((navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en');
setLang(initialLang);
setTheme(root.dataset.theme || 'light');
startTyper();
print(ui().welcome);

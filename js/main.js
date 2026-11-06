// ===== Datos =====
const EMAIL = 'kely.romero@unl.edu.ec';

const PROJECTS = [
  {
    id: 'majo',
    cat: 'web',
    title: 'Pendientes Majo',
    badge: 'en producción',
    short: 'PWA de recordatorios por WhatsApp, pedidos, cobros y reportes para un negocio real en Loja.',
    stack: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'WhatsApp Cloud API', 'Resend', 'Vercel'],
    problem: 'El negocio perdía plazos de ofertas, pedidos a proveedores, cuotas de préstamos y cobros porque todo se llevaba de memoria.',
    features: [
      'Avisos por WhatsApp que se repiten hasta que alguien marca la tarea como hecha; si sigue pendiente, avisa al respaldo.',
      'Siete módulos: recordatorios, Corporación Favorita, pagos y préstamos, pedidos, cuentas por cobrar, producción y reportes.',
      'Seguridad con Row Level Security: los montos solo los ve la administradora.',
      'Horario silencioso de 21:00 a 07:00 (hora de Ecuador) e importación de reportes .xlsx/.csv del facturador.',
      'Pruebas automáticas de la lógica de recordatorios y manual de uso para el equipo.'
    ],
    repo: 'https://github.com/Kely944/campozoe'
  },
  {
    id: 'cafe',
    cat: 'datos',
    title: 'Rendimiento y calidad de café',
    badge: 'tesis',
    short: 'Modelos de regresión y machine learning con datos de fincas de Loja.',
    stack: ['Python', 'Machine learning', 'Regresión polinomial', 'InfoStat', 'R'],
    problem: 'Los productores de café de Loja no tenían una forma de estimar rendimiento ni calidad de taza a partir de las condiciones de su finca.',
    features: [
      'Levantamiento de datos y colecta de muestras de café y suelo en fincas de productores.',
      'Análisis de laboratorio: pH, acidez titulable, sólidos solubles y peso de 100 granos.',
      'Modelos de regresión lineal, polinomial múltiple y machine learning, con análisis exploratorio, matrices de correlación y residuos parciales.',
      'Resultado: fertilización, densidad de siembra y altitud pesan más en el rendimiento; el pH del fruto y la conductividad eléctrica del suelo, en la calidad de taza.'
    ]
  },
  {
    id: 'tetris',
    cat: 'juegos',
    title: 'Tetris',
    badge: '',
    short: 'Motor de juego con Canvas, JavaScript puro y cero dependencias.',
    stack: ['JavaScript', 'HTML5 Canvas', 'CSS'],
    problem: 'Proyecto de práctica para dominar el bucle de juego, colisiones y renderizado sin frameworks.',
    features: [
      'Rotación de piezas, detección de colisiones y limpieza de líneas.',
      'Renderizado en HTML5 Canvas sin librerías ni proceso de build.',
      'Se abre directo en el navegador.'
    ],
    repo: 'https://github.com/Kely944/claude-tetris'
  }
];

const ROLES = [
  'desarrollo apps web con Next.js y Supabase',
  'entreno modelos de machine learning en Python',
  'convierto datos de campo en decisiones',
  'busco mi próximo equipo'
];

// ===== Utilidades =====
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove('show'), 2200);
}

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast(`Copiado: ${text}`);
  } catch {
    window.location.href = `mailto:${text}`;
  }
}

// ===== Tema (claro por defecto) =====
const root = document.documentElement;
const themeBtn = $('#themeToggle');
function setTheme(t) {
  root.dataset.theme = t;
  themeBtn.setAttribute('aria-label', t === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
  try { localStorage.setItem('theme', t); } catch {}
}
// Cambio animado: un círculo se expande desde el botón (View Transitions API).
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
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 650, easing: 'cubic-bezier(.65,0,.35,1)', pseudoElement: '::view-transition-new(root)' }
    );
  });
  t.finished.finally(() => { themeBtn.classList.remove('spin'); root.classList.remove('vt'); });
}
themeBtn.addEventListener('click', () => toggleTheme());
setTheme(root.dataset.theme || 'light');

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
(function typer() {
  const el = $('#typed');
  if (reduceMotion) { el.textContent = ROLES[0]; return; }
  let r = 0, i = 0, del = false;
  (function tick() {
    const word = ROLES[r];
    i += del ? -1 : 1;
    el.textContent = word.slice(0, i);
    let wait = del ? 28 : 55;
    if (!del && i === word.length) { del = true; wait = 1800; }
    else if (del && i === 0) { del = false; r = (r + 1) % ROLES.length; wait = 300; }
    setTimeout(tick, wait);
  })();
})();

// ===== Aparición al hacer scroll + contadores =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    const counter = e.target.querySelector('[data-count]');
    if (counter) countUp(counter);
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
projectsEl.innerHTML = PROJECTS.map((p, i) => `
  <button class="project card reveal" data-cat="${p.cat}" data-id="${p.id}">
    <span class="n mono">${String(i + 1).padStart(2, '0')}</span>
    <div>
      <h3>${esc(p.title)}${p.badge ? `<span class="badge mono">${esc(p.badge)}</span>` : ''}</h3>
      <p>${esc(p.short)}</p>
    </div>
    <span class="t mono">${p.stack.slice(0, 3).map(esc).join(' · ')}</span>
  </button>`).join('');
$$('.project', projectsEl).forEach((el) => {
  revealObserver.observe(el);
  el.addEventListener('click', () => openProject(el.dataset.id));
});

$$('.filters .chip').forEach((chip) => chip.addEventListener('click', () => {
  $$('.filters .chip').forEach((c) => { c.classList.remove('active'); c.setAttribute('aria-selected', 'false'); });
  chip.classList.add('active');
  chip.setAttribute('aria-selected', 'true');
  const f = chip.dataset.filter;
  $$('.project').forEach((p) => p.classList.toggle('hide', f !== 'all' && p.dataset.cat !== f));
}));

const modal = $('#modal');
function openProject(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;
  $('#modalContent').innerHTML = `
    <span class="prompt mono">$ cat proyectos/${p.id}.md</span>
    <h3>${esc(p.title)}</h3>
    <p class="m-sub">${esc(p.short)}</p>
    <div class="tags">${p.stack.map((s) => `<span>${esc(s)}</span>`).join('')}</div>
    <h4>// problema</h4><p class="muted">${esc(p.problem)}</p>
    <h4>// lo_que_construí</h4><ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
    <div class="btns mono">
      ${p.repo ? `<a class="btn primary" href="${p.repo}" target="_blank" rel="noopener">ver_código ↗</a>` : ''}
      <a class="btn ghost" href="#contacto" data-close>preguntarme_sobre_esto</a>
    </div>`;
  $$('[data-close]', modal).forEach((a) => a.addEventListener('click', () => modal.close()));
  modal.showModal();
}
$('#modalClose').addEventListener('click', () => modal.close());
modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });

// ===== Copiar email =====
$$('[data-copy]').forEach((b) => b.addEventListener('click', () => copy(b.dataset.copy)));

// ===== Terminal interactiva =====
const out = $('#consoleOut');
const input = $('#consoleIn');
const history = [];
let hIndex = 0;

const COMMANDS = {
  help: () => `Comandos disponibles:
  <b>sobre</b>       quién soy
  <b>skills</b>      tecnologías que uso
  <b>proyectos</b>   lista de proyectos (prueba: <b>ver majo</b>)
  <b>experiencia</b> trayectoria
  <b>contratar</b>   por qué contratarme
  <b>contacto</b>    cómo escribirme
  <b>cv</b>          descargar CV
  <b>tema</b>        cambiar claro / oscuro
  <b>clear</b>       limpiar pantalla`,
  sobre: () => 'Kely Romero · Loja, Ecuador.\nIngeniera agrónoma y desarrolladora. Construyo apps web full-stack\ny modelos de datos. Español nativo, inglés B1.',
  skills: () => `<b>frontend</b>  Next.js, React, TypeScript, JavaScript, HTML/CSS
<b>backend</b>   Supabase, PostgreSQL, RLS, APIs REST
<b>datos</b>     Python, R, InfoStat, regresión, machine learning
<b>tools</b>     Git, GitHub, Vercel, Claude Code`,
  proyectos: () => PROJECTS.map((p, i) => `<b>${String(i + 1).padStart(2, '0')}</b> ${esc(p.title)} (ver ${p.id})`).join('\n'),
  experiencia: () => `<b>2026</b>        Ingeniera Agrónoma · UNL
<b>2024-2026</b>   Tesis: ML para rendimiento de café
<b>2024</b>        Prácticas · APEOSAE (360 h)
<b>2022</b>        Asistente de investigación · UNL`,
  contratar: () => `Tres razones:
 <b>1.</b> Ya llevé una app a producción para un negocio real.
 <b>2.</b> Sé trabajar con datos: limpieza, modelos y conclusiones honestas.
 <b>3.</b> Aprendo rápido y entiendo al usuario antes de programar.
Escribe <b>contacto</b> para hablar.`,
  contacto: () => `email     <a href="mailto:${EMAIL}">${EMAIL}</a>
linkedin  <a href="https://www.linkedin.com/in/kely-tamara-romero" target="_blank" rel="noopener">kely-tamara-romero</a>
github    <a href="https://github.com/Kely944" target="_blank" rel="noopener">Kely944</a>`,
  cv: () => { const a = document.createElement('a'); a.href = 'assets/CV_Kely_Romero.pdf'; a.download = ''; a.click(); return 'Descargando CV_Kely_Romero.pdf...'; },
  tema: () => { toggleTheme(input); return `Tema: ${root.dataset.theme === 'dark' ? 'oscuro' : 'claro'}`; },
  clear: () => { out.innerHTML = ''; return null; },
  sudo: () => 'Permiso denegado. Pero puedes contratarme 😉',
  whoami: () => COMMANDS.sobre()
};
COMMANDS.about = COMMANDS.sobre;
COMMANDS.contact = COMMANDS.contacto;
COMMANDS.projects = COMMANDS.proyectos;
COMMANDS.hire = COMMANDS.contratar;
COMMANDS.ls = COMMANDS.help;

function print(html, cls = 'out') {
  const div = document.createElement('div');
  div.className = cls;
  div.innerHTML = html;
  out.appendChild(div);
  out.scrollTop = out.scrollHeight;
}

function run(raw) {
  const line = raw.trim();
  if (!line) return;
  print(esc(line), 'cmd');
  history.push(line);
  hIndex = history.length;
  const [cmd, arg] = line.toLowerCase().split(/\s+/);
  if (cmd === 'ver' || cmd === 'open') {
    const p = PROJECTS.find((x) => x.id === arg);
    if (p) { print(`Abriendo ${esc(p.title)}...`); openProject(p.id); }
    else print(`Proyecto no encontrado. Opciones: ${PROJECTS.map((x) => x.id).join(', ')}`, 'out err');
    return;
  }
  const fn = COMMANDS[cmd];
  if (!fn) { print(`Comando no encontrado: ${esc(cmd)}. Escribe <b>help</b>.`, 'out err'); return; }
  const res = fn();
  if (res) print(res);
}

$('#consoleForm').addEventListener('submit', (e) => {
  e.preventDefault();
  run(input.value);
  input.value = '';
});
input.addEventListener('keydown', (e) => {
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
print('Bienvenida/o a mi portafolio. Escribe <b>help</b> para empezar.');

// ===== Formulario de contacto (mailto) =====
$('#contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const d = new FormData(e.target);
  const subject = `${d.get('motivo')} · ${d.get('nombre')}${d.get('empresa') ? ` (${d.get('empresa')})` : ''}`;
  const body = `${d.get('mensaje')}\n\n${d.get('nombre')}${d.get('empresa') ? `\n${d.get('empresa')}` : ''}`;
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  toast('Abriendo tu correo...');
});

$('#year').textContent = new Date().getFullYear();

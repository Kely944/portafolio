// Traducciones. El español vive en el HTML (se captura al cargar);
// aquí solo está el inglés de cada clave data-i18n, más los textos que genera JS.

const I18N_EN = {
  'nav.about': './about',
  'nav.projects': './projects',
  'nav.data': './data',
  'nav.exp': './experience',
  'nav.contact': './contact',

  'hero.title': 'Kely Romero.<br>Developer <span class="acc">&amp; data</span>.',
  'hero.lead': 'I build full-stack web apps and machine learning models. I come from agricultural research: I know how to turn field data into decisions and real problems into software that works.',
  'hero.cta': 'view_projects()',
  'hero.copy': 'copy_email',
  'hero.json': '<b>"location"</b>:  "Loja, Ecuador",\n<b>"status"</b>:    <span class="ok">"available"</span>,\n<b>"remote"</b>:    true,\n<b>"languages"</b>: ["es native", "en B1"]',

  'tldr.head': 'recruiter_mode: 30-second summary',
  'tldr.k1': 'Looking for',
  'tldr.v1': 'Junior web developer · Data analyst',
  'tldr.k2': 'Strong in',
  'tldr.v2': 'Next.js, TypeScript, Supabase, Python, statistics',
  'tldr.k3': 'Edge',
  'tldr.v3': 'Agri domain knowledge + research rigor with real data',
  'tldr.k4': 'Availability',
  'tldr.v4': 'Immediate · remote or Loja',

  'stats.1': 'published projects',
  'stats.2': 'modules in a production app',
  'stats.3': 'data research projects',
  'stats.4': 'hours of English (B1)',

  'about.h': '// about_me',
  'about.big': 'I am an agronomist and a developer. My path is not the typical one, and that is my advantage.',
  'about.p1': 'For my thesis at Universidad Nacional de Loja I collected data on coffee farms, analyzed samples in the lab and built regression and machine learning models in Python to estimate yield and cup quality. That is where I found what I enjoy most: turning data into tools.',
  'about.p2': 'Today I build complete web applications: from the database and security to the interface and notifications. My first production app is used every day by a real business in Loja.',
  'about.v1t': 'Real problems first',
  'about.v1': 'I talk to the people who use the tool before writing code.',
  'about.v2t': 'Rigorous with data',
  'about.v2': 'Exploratory analysis, model validation and honest conclusions.',
  'about.v3t': 'Fast learner',
  'about.v3': 'I went from the lab to full-stack with Next.js and Supabase.',

  'proj.h': '// projects',
  'proj.all': 'all',
  'proj.data': 'data',
  'proj.games': 'games',
  'proj.hint': 'Click a project to see details →',

  'data.h': '// data_from_my_thesis',
  'data.title': 'What makes coffee yield more and taste better?',
  'data.lead': 'Real data I collected on 11 farms in Loja province: crop management, lab analysis of fruit and soil, and cupping. Switch tabs and hover over the bars.',
  'data.t1': 'farms sampled',
  'data.t2': 'variables analyzed',
  'data.t3': 'qq/ha average yield',
  'data.t4': 'average cup score',
  'data.tab1': 'yield (qq/ha)',
  'data.tab2': 'cup quality',
  'data.table': 'view_table',
  'data.pos': 'positive relationship',
  'data.neg': 'negative relationship',
  'data.note': 'Pearson correlation (r), n = 11 farms. This is exploratory: with few farms, values below |0.6| are trends, not proof. The final model was a polynomial regression that also captured non-linear effects of planting density and altitude.',

  'exp.h': '// experience_and_education',
  'exp.1t': 'B.Sc. Agronomic Engineering',
  'exp.1s': 'Universidad Nacional de Loja · Faculty of Agriculture and Renewable Natural Resources',
  'exp.2t': 'Author · Research thesis',
  'exp.2s': 'Universidad Nacional de Loja · Statistical models to estimate coffee yield and cup quality',
  'exp.2l': '<li>Linear, multiple polynomial and machine learning regression models in Python and InfoStat.</li><li>Data and coffee/soil sample collection on producers\' farms.</li><li>Identified fertilization, planting density and altitude as key yield variables.</li>',
  'exp.3d': 'Mar – Apr 2024',
  'exp.3t': 'Pre-professional internship · APEOSAE',
  'exp.3s': 'Federation of organic exporters · Nangaritza, Zamora Chinchipe',
  'exp.3l': 'Nursery, grafting and post-harvest of organic coffee and cocoa. 360 h completed.',
  'exp.4t': 'Research assistant',
  'exp.4s': 'Universidad Nacional de Loja · Native cherimoya characterization project',
  'exp.4l': 'Lab analysis, processing and analysis of project data.',

  'stack.data': 'data',
  'stack.datatags': '<span>Python</span><span>R</span><span>InfoStat</span><span>Excel</span><span>Multiple regression</span><span>Machine learning</span>',
  'stack.tools': 'tools',

  'certs.h': '// certifications_and_awards',
  'certs.1t': 'Claude Code: complete guide for software developers',
  'certs.1s': 'Certificate of completion',
  'certs.2t': 'Descriptive and inferential statistics',
  'certs.3t': 'Academic Excellence Award',
  'certs.4t': 'Scientific poster presenter',
  'certs.4s': '3rd Agronomy Research Conference',

  'term.h': '// ask_me_anything',
  'term.lead': 'A real terminal. Type <code class="mono">help</code> or tap a command. There are secret commands 👀',

  'contact.h': 'Shall we build something together?',
  'contact.lead': 'Open to junior web development, data analysis and agritech roles.',
  'contact.copy': 'copy',
  'contact.open': 'open ↗',
  'contact.open2': 'open ↗',

  'form.name': 'Name',
  'form.nameph': 'Your name',
  'form.company': 'Company',
  'form.companyph': 'Optional',
  'form.reason': 'Reason',
  'form.o1': 'Job offer',
  'form.o2': 'Interview',
  'form.o3': 'Freelance project',
  'form.o4': 'Other',
  'form.msg': 'Message',
  'form.msgph': 'Tell me about the role or project',
  'form.send': 'send_message()',
  'form.note': 'Your email client will open with the message ready.',

  'footer.top': 'back_to_top ↑'
};

// Textos generados por JavaScript, en ambos idiomas.
const UI = {
  es: {
    roles: [
      'desarrollo apps web con Next.js y Supabase',
      'entreno modelos de machine learning en Python',
      'convierto datos de campo en decisiones',
      'busco mi próximo equipo'
    ],
    copied: 'Copiado',
    openingMail: 'Abriendo tu correo...',
    themeToDark: 'Cambiar a modo oscuro',
    themeToLight: 'Cambiar a modo claro',
    langBtn: 'EN',
    langLabel: 'Switch to English',
    close: 'Cerrar',
    problem: '// problema',
    built: '// lo_que_construí',
    viewCode: 'ver_código ↗',
    play: 'jugar_ahora ▶',
    ask: 'preguntarme_sobre_esto',
    tetrisHelp: 'Flechas: mover y rotar · Espacio: caída · P: pausa. Haz clic en el tablero si no responde.',
    chartTitle: { yield: 'Correlación de cada variable con el rendimiento (qq/ha)', cup: 'Correlación de cada variable con el puntaje de taza (catación)' },
    strength: (r) => (Math.abs(r) >= 0.6 ? 'fuerte' : Math.abs(r) >= 0.4 ? 'moderada' : 'débil'),
    tipLine: (v, r, s) => `${v}<br>r = ${fmt(r, 'es')} · ${s}`,
    tableHead: ['Variable', 'r', 'Fuerza'],
    tableBtn: ['ver_tabla', 'ver_gráfico'],
    mailSubject: (m, n, c) => `${m} · ${n}${c ? ` (${c})` : ''}`,
    welcome: 'Bienvenida/o a mi portafolio. Escribe <b>help</b> para empezar.',
    notFound: (c) => `Comando no encontrado: ${c}. Escribe <b>help</b>.`,
    projNotFound: (ids) => `Proyecto no encontrado. Opciones: ${ids}`,
    opening: (t) => `Abriendo ${t}...`
  },
  en: {
    roles: [
      'I build web apps with Next.js and Supabase',
      'I train machine learning models in Python',
      'I turn field data into decisions',
      'I am looking for my next team'
    ],
    copied: 'Copied',
    openingMail: 'Opening your email...',
    themeToDark: 'Switch to dark mode',
    themeToLight: 'Switch to light mode',
    langBtn: 'ES',
    langLabel: 'Cambiar a español',
    close: 'Close',
    problem: '// problem',
    built: '// what_i_built',
    viewCode: 'view_code ↗',
    play: 'play_now ▶',
    ask: 'ask_me_about_it',
    tetrisHelp: 'Arrows: move and rotate · Space: hard drop · P: pause. Click the board if it does not respond.',
    chartTitle: { yield: 'Correlation of each variable with yield (qq/ha)', cup: 'Correlation of each variable with cup score (cupping)' },
    strength: (r) => (Math.abs(r) >= 0.6 ? 'strong' : Math.abs(r) >= 0.4 ? 'moderate' : 'weak'),
    tipLine: (v, r, s) => `${v}<br>r = ${fmt(r, 'en')} · ${s}`,
    tableHead: ['Variable', 'r', 'Strength'],
    tableBtn: ['view_table', 'view_chart'],
    mailSubject: (m, n, c) => `${m} · ${n}${c ? ` (${c})` : ''}`,
    welcome: 'Welcome to my portfolio. Type <b>help</b> to start.',
    notFound: (c) => `Command not found: ${c}. Type <b>help</b>.`,
    projNotFound: (ids) => `Project not found. Options: ${ids}`,
    opening: (t) => `Opening ${t}...`
  }
};

function fmt(n, lang) {
  const s = (n > 0 ? '+' : n < 0 ? '−' : '') + Math.abs(n).toFixed(2);
  return lang === 'es' ? s.replace('.', ',') : s;
}

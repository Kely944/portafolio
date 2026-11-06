# portafolio

Portafolio personal de **Kely Romero**, desarrolladora web y analista de datos (Loja, Ecuador).

Sitio estático en HTML, CSS y JavaScript, sin dependencias ni proceso de build.

## Funciones

- Español e inglés con botón ES/EN. Enlace directo en inglés: `?lang=en`.
- Modo claro por defecto, con botón para cambiar a oscuro (animación circular; la preferencia se guarda).
- Gráfico interactivo con datos reales de la tesis (correlaciones con rendimiento y calidad de taza), con tooltip y vista de tabla.
- Resumen rápido para reclutadores, contadores animados y aparición de secciones al hacer scroll.
- Proyectos con filtros por categoría y ventana de detalle.
- Terminal interactiva: escribe `help` para ver los comandos. Tiene comandos secretos (`pista` los revela) y el Tetris jugable.
- Formulario de contacto (abre el cliente de correo), botón para copiar el email y descarga del CV en español e inglés.
- Diseño adaptable a móvil y respeto de `prefers-reduced-motion`.

## Estructura

```
index.html        página principal
css/styles.css    estilos y temas claro/oscuro
js/main.js        datos de proyectos y tesis, terminal e interacciones
js/i18n.js        textos en inglés
tetris/           juego Tetris (copiado de Kely944/claude-tetris)
assets/           foto y CV en PDF
```

## Ver en local

Abre `index.html` en el navegador.

## Publicar con GitHub Pages

En el repositorio: **Settings > Pages > Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`.
El sitio queda en `https://kely944.github.io/portafolio/`.

## Editar contenido

- Proyectos: arreglo `PROJECTS` en `js/main.js`.
- Comandos de la terminal: objeto `COMMANDS` en `js/main.js`.
- Textos de secciones: `index.html` (español) y `js/i18n.js` (inglés, misma clave `data-i18n`).
- Datos del gráfico: arreglo `THESIS` en `js/main.js`.

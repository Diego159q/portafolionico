# ARQUITECTURA FRONTEND — "Techno-Zen" Portfolio de Kenji Sato

Proyecto de origen: **Modern Japanese Design System** (Stitch, `projects/12221940429951400780`).

Documento de arquitectura del frontend derivado del análisis completo del design system
"Techno-Zen" y de las pantallas reales generadas (HTML/CSS + Tailwind config exportado).

---

## 1. Resumen ejecutivo

Portafolio premium de un diseñador/arquitecto de experiencia (`KENJI SATO`). Es una
**Aplicación de una Página (SPA conceptual) compuesta por secciones de una sola columna**
con navegación fija y transiciones de scroll. El concepto visual **"Techno-Zen"** fusiona el
minimalismo japonés (*Ma* / el vacío como elemento estructural) con una estética tecnológica
de alta precisión.

Stack de referencia encontrado en el HTML: **HTML5 + Tailwind CSS + JavaScript vanilla**.
Los tokens se inyectan vía `tailwind.config.theme.extend`. Se recomienda migrar a un build
real (Vite + Tailwind compilado) para producción.

---

## 2. Pantallas disponibles (7 pantallas + 2 assets)

| # | Pantalla | Tipo | Contenido principal |
|---|----------|------|---------------------|
| 1 | **Hero Section – Portfolio Premium** | Desktop | Nombre gigante, rol, CTAs, retrato B/N |
| 2 | **Portafolio – Galería Premium** | Desktop | Título "SELECTED WORKS", filtros (Champs), grid asimétrico de proyectos |
| 3 | **Servicios – Portfolio Premium** | Desktop | Header de sección + bento grid 8/4 |
| 4 | **Servicios – Animado** | Desktop | Variación del grid con estados hover |
| 5 | **Case Study – Detalle de Proyecto** | Desktop | Hero de proyecto, meta-aside, editorial, proceso, métricas, galería full-bleed |
| 6 | **Sobre mí – Estilo Editorial Japonés** | Desktop | Editorial sobre el perfil |
| 7 | **Contacto – Minimalismo** | Desktop | Formulario, canales directos, mapa Tokyo |
| — | Assets de imagen | — | Retrato y estudio interior (sin HTML) |

**Dispositivo objetivo:** Desktop (2560×2048). Respuesta móvil prevista vía Tailwind (12→4 columnas).

---

## 3. Estructura de cada sección (arquitectura de página)

Estructura común invariante a todas las pantallas:

```
[ Scroll Progress — barra Cyber Crimson fija 1px superior (JS) ]
[NavBar fija ]  -> Brand | WORK ARCHIVE STUDIO PROCESS | CONTACT
[<main>]       -> pt-[80/120/160px] (según pantalla)
   [section x N, gap de 160px entre ellas]
[footer]       -> marca + redes + copyright
```

### 3.1 Hero
```
main.h-screen.flex.md:flex-row
├─ left (w-1/2)  : decorador línea estructural 1px + label-mono + display-lg nombre + quote + CTAs
└─ right (w-1/2) : img retrato (grayscale, mix-blend-luminosity) + gradiente + acento 2px crimson
```

### 3.2 Galería / Portafolio
```
section.header (Título display-lg "SELECTED WORKS" + filtros Chips)
section.grid.md:grid-cols-12 (margen entre proyectos 160px / ma-space)
  article.md:col-span-8 (grande) / article.md:col-span-4.md:mt-32 (pequeño, offset)
  Cada card: imagen hover zoom + etiqueta label + título + desc + botón "VIEW PROJECT"
```

### 3.3 Servicios (bento asimétrico)
```
header: título display + col-start-8 bloque intro
div.grid.md:grid-cols-12.gap-gutter
  card md:col-span-8  (icono 40px + chip nº + title headline-sm)
  card md:col-span-4  (icono 32px + chip nº + title quote)
  ... alternando 8/4
botón centrado "Initiate Project"
```

### 3.4 Case Study (detalle)
```
header hero (título + datos cliente)
section img full-bleed (90vh) + overlay
section 12-col: aside meta (3 cols, borders 1px slate) + article editorial (7 cols, blockquote)
section PROCESS grid 3x3 (aspect-square, badges "FIG. N")
section video placeholder (aspect-video + play cut-out)
section Impact metrics (4 bloques border-l, display-lg-mobile)
section full-bleed gallery (2x 80vh)
section NEXT PROJECT nav full-width hover
```

### 3.5 Contacto
```
section título "INITIATE CONTACT."
section 12-col; form (8 cols) + direct links (3 cols, border-l)
section mapa Tokyo (614px, grayscale, marker crimson animate-pulse)
```

---

## 4. Componentes reutilizables

| Componente | Token / Clase base | Estado |
|-----------|--------------------|--------|
| **TopNav** | `fixed top-0 z-50 py-4 px-margin-desktop` | Brand headline-sm, links label-mono hover crimson, CTA CONTACT |
| **Scroll progress** | `.scroll-progress` (1px, crimson, JS width %) | — |
| **Botón primario** | `.btn-primary` | hover invierte a crimson |
| **Botón secundario (outline)** | `.cyber-crimson-hover` / `cyber-border` | borde 1px; hover inset 1px o glow crimson |
| **Botón "slide-in"** | `.clip-path-reveal` (fill interno) | hover: layer crimson animado |
| **Card** (borde 1px, `bg-surface-container-low`) | `.cyber-glow` | hover: icon escala 1.1 + color crimson |
| **Chip/etiqueta** | `border border-outline-variant` label-mono, sin relleno | — |
| **Chip filtro** | igual chips + `cyber-border` | hover crimson / activo borde crimson |
| **Badge de figura** | `bg-sumi-black px-2 py-1 border-slate-gray label-mono` | FIG. N |
| **Lista** | ítems separados `border-b border-outline-variant` | hover: border + indicador |
| **Input/Textarea** | `border-0 border-b focus:border-on-tertiary-container` label label-mono | focus: borde inferior crimson |
| **Bloque cita** | `border-l-2 border-cyber-crimson pl-6 py-2` | — |
| **Iconografía** | `material-symbols-outlined`, weight 300–400, stroke geométrico | — |

---

## 5. Design System completo ("Techno-Zen")

**Filosofía:** *Ma* (vacío estructural) + alta precisión tecnológica. Personalidad exclusiva,
intelectual, moderna. Extremo contraste de escala tipográfica, rejilla rigurosa y acentos
Cyber Crimson "como un láser" sobre el fondo Sumi.

**Elevación (rechaza sombras):** profundidad estructural vía capas tonales:
1. **Sumi Layer** (base `#0A0A0A`) — canvas.
2. **Slate Layer** (container `#1A1A1A`) — agrupación.
3. **Glass accent** — relleno blanco 10% + backdrop-blur 20px.
4. **Outer glow** — borde interno 1px, o glow exterior 2px crimson (active/focus).

**Formas:** geométrico y afilado. Esquinas **0px** (redondeo solo en tipografía/imágenes 3D).
Dividers/bordes **1px**: Slate Gray para estructura, Washi White al 20% para líneas decorativas.

---

## 6. Colores

Paleta dominante **monocromática oscura** con acento secundario.

### 6.1 Colores de marca (semánticos personalizados exportados)
| Token | Hex | Uso |
|-------|-----|-----|
| `sumi-black` | `#0A0A0A` | fondo base / lienzo |
| `washi-white` | `#F5F5F5` (tinta `#e5e2e1` por contraste) | tinta primaria (texto) |
| `cyber-crimson` | `#FF003C` (Token `#f20038`) | acentos, interacciones, indicadores |
| `slate-gray` | `#1A1A1A` | capas/containers, bordas estructurales |

### 6.2 Paleta Material (primarios exportados vía `theme.extend.colors`)
Ver valores exactos en el config exportado; los críticos para la implementación:

| Token | Hex | Role |
|-------|-----|------|
| `background` | `#131313` | Fondo canvas |
| `surface` | `#131313` | Superficie base |
| `surface-container-lowest` | `#0e0e0e` | Footer / fondo |
| `surface-container-low` | `#1c1b1b` | Cards / containers |
| `surface-container-high` | `#2a2a2a` | Cards galería |
| `on-background` / `on-surface` | `#e5e2e1` | Tinta principal |
| `on-surface-variant` | `#c4c7c7` | Tinta secundaria/meta |
| `on-tertiary-container` | `#f20038` | **Cyber Crimson** (definitivo en hover) |
| `primary` | `#c9c6c5` | Marca/footer |
| `outline` | `#8e9192` | Bordas suaves |
| `outline-variant` | `#444748` | Bordas estructurales |

---

## 7. Tipografías

| Token | Font | Peso | Tamaño | Interlineado | Letter-spacing |
|-------|------|------|--------|-------------|----------------|
| `display-lg` | Plus Jakarta Sans | 800 | 120px | 110px | -0.04em |
| `display-lg-mobile` | Plus Jakarta Sans | 800 | 48px | 52px | -0.02em |
| `headline-xl` | Plus Jakarta Sans | 700 | 72px | 80px | -0.02em |
| `headline-sm` | Plus Jakarta Sans | 600 | 32px | 40px | -0.01em |
| `quote-text` | Plus Jakarta Sans | 300 | 24px | 36px | — |
| `body-md` | Geist | 400 | 16px | 24px | +0.02em |
| `label-mono` | Geist (mono) | 500 | 12px | 16px | +0.1em (UPPERCASE) |

Reglas: títulos **tight tracking** + pesos altos (impacto neo-grotesk). Body **Geist** ligero
con espaciado generoso (ritmo mecánico). Labels siempre **UPPERCASE** con letter-spacing.

Carga: Google Fonts (`Plus Jakarta Sans wght 300;600;700;800` y `Geist 400;500;700`).

---

## 8. Escalas de tamaño

- **Tipo:** aguda (ver sección 7), de 12px (label) a 120px (display).
- **Breaks (responsive):** `md:` = Tailwind 768px.
  - Título: `text-display-lg-mobile md:text-display-lg`.
  - Nav: `hidden md:flex` para links/CTA (móvil: botón hamburguesa `md:hidden`).

---

## 9. Espaciados (tailwind `theme.spacing`)

- `unit` = **8px** → base obligatoria múltiplo de 8.
- `gutter` = 24px (espacio entre columnas del grid).
- `margin-desktop` = 80px (márgenes laterales desktop).
- `margin-mobile` = 24px (márgenes móvil).
- `section-gap` = 160px (vacío vertical macro entre secciones — el "Ma").
- Ritmo horizontal: `p-margin-mobile md:p-8` (32px), tarjetas grandes `md:p-[64px]`.

---

## 10. Grid / Layout

- **Desktop:** 12-columnas fluidas `grid-cols-12` + `gap-gutter (24px)`.
- **Móvil:** 4-columnas `grid-cols-4`.
- **Asimetría estructural:** bloques offset por 1–2 columnas: `col-start-5`, `col-start-8`,
  `col-start-10`, `md:mt-32` para tarjetas desplazadas (estética de planos arquitectónicos).
- Alternancia de spans: 8+4, 4+4+4, etc. (bento).

---

## 11. Bordes

- Radio de esquina: **0px** (DEFAULT/lg/xl/full = 0).
- Grosor estándar: **1px** (`border border-outline-variant`, `border-slate-gray`).
- Type funcional:
  - Estructural/container: Slate Gray `#1A1A1A` / `#444748`.
  - Deco (grid/divider): Washi White al 20%.
  - Activo/focus/hover: Cyber Crimson `#f20038` (borde inferior en inputs, inset/glow en botones).
- Input: `border-0 border-b` → `focus:border-on-tertiary-container`.

---

## 12. Sombras / Elevación

El sistema **rechaza perc uno convencional en favor de profundidad estructural y capas tonales**:

1. **Sumi** base `#0A0A0A`.
2. **Slate** container `#1A1A1A`.
3. **Glass** — `bg-white/5` (10%) + `backdrop-blur-[2px]…20px`.
4. **Glows/Outer**: `inset 0 0 0 1px crimson` y `box-shadow: 0 0 8px 1px #f20038 inset, 0 0 4px #f20038`.
5. **Overlay de imagen**: `bg-on-tertiary-container/10 mix-blend-overlay` (hover de tarjetas).
6. Ejemplo concreto: botón hover con `box-shadow: inset 0 0 0 1px `on-tertiary-container``.

---

## 13. Animaciones y transiciones

### Por scroll (JS vanilla)
```js
window.addEventListener('scroll', () => {
  const top = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById('scrollIndicator').style.width = (top / height) * 100 + '%';
});
```
- **Fix** file: barra de progreso crimson (1–2px).

### Transiciones (Tailwind `transition-*`)
| Efecto | Clase / técnica | Duración |
|--------|------------------|---------|
| Hover texto → crimson | `transition-colors duration-300` | 300ms |
| Inversión botón primario | `.btn-primary` (bg→/text→/border→crimson) | 300ms all |
| Botón slide-in / relleno | `.clip-path-reveal` a `inset(0 0 0 0)` | clip-path 0.5s ease-out |
| Imagen zoom | `group-hover:scale-105` transform | 700ms |
| Grayscale → color | `grayscale group-hover:grayscale-0` | 300–500ms |
| Service icon scale | `.service-icon:hover scale(1.1)` | 300ms |
| Card glow | `.cyber-glow:hover` (inset+outer glow crimson) | — |
| Hover overlay card | `bg-white/5 opacity-0 → 100` + blur | 500ms |
| Arrow flex gap | `hover:gap-2 group-hover:translate-x-2` | 300ms |
| Marker mapa | `animate-pulse` | Tailwind pulse 2s |
| Next project | `hover:bg-slate-gray` + `tracking 0.2em` | 500ms / 300ms |

### Tonality / estados
CÃºчёme: color hover garantiza consistencia con `transition-colors`. La mayoría dura
200–500ms vía utilidades Tailwind (`transition-colors`, `transition-all`, `transition-opacity`).

---

## 14. Animaciones/transiciones sign (resumen)

- Al usar **JavaScript** import: barras de progreso de scroll.
- Hover siempre con transición; **nunca** saltos bruscos.
- El principio *Ma* exige transiciones suaves y layout estático; no movimientos aberrantes.

---

## 15. Comportamiento responsive (resumen)

| Breakpoint | Grid | Márgenes | Título display | Nav |
|---|---|---|---|---|
| **Móvil (<768px)** | 4 cols | 24px | 48px | hamburguesa `md:hidden`, ocultar links |
| **Desktop (≥768px)** | 12 cols | 80px | 120px | barra completa |

- Todo layout utiliza prefijo `md:`; wrappers `flex flex-col md:flex-row`.
- Tarjetas pasan de `col-span-4/8` a apiladas (col-full) en móvil.
- Rejunta visual de profundidad: overlay glass en desktop, gancho en móvil.

---

## 16. Insight de implementación (checklist)

1. Mover Tailwind CDN → **compilación (Vite/PostCSS)** para producción.
2. Soportar tokens en `theme.extend.colors/fontSize/fontFamily/spacing/borderRadius` según sección 6-10.
3. Implementar **machetes de scroll** por JS/Svelte/animation libreria.
4. Respetar esquinas **0px** y usa `border-bottom` para inputs.
5. Usar siempre múltiplos de **8px**.
6. Accent **Cyber Crimson** solo en crítico.
7. Mantener gap entre secciones `160px`.
8. Usar `Material Symbols` (weight 0, wght 300-400) para iconos.

---

## 17. Decisiones técnicas propuestas (pendiente de consenso)

> Esto será dedicado cuando el usuario especifique el stack (React/Vue/Svelte, CSS modules/stitches
> prop revolución, etc.). El documento actual describe **la arquitectura de diseño visual** tal y
> como se extrae de las pantallas, listo para traducir a cualquier framework.

- **Asset de diseño:** `Techno-Zen` (asset `assets/2d0f83ae...`) con `colorVariant: FIDELITY`,
  `spacingScale: 2`.
- **AES/SPA:** single-page típico portfolio (sm/hero/galeria/servicios/sobre/contacto).
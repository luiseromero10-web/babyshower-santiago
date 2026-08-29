# 🩵 Santiago · Dirección de arte **Toile de Jouy Azul**
### Especificación de implementación — para ejecutar con Claude Sonnet

> **Prototipo de referencia visual:** `public/preview.html` (HTML único, sin dependencias).
> Levantarlo con `node preview-server.js` → http://localhost:4321
> **Este archivo es la fuente de verdad del diseño.** El prototipo es el "comp" aprobado; la tarea de
> Sonnet es portarlo a los componentes React existentes sin perder ni un detalle visual.

---

## 1 · Por qué cambia la dirección

El diseño anterior mezclaba **verde selva + dorado + JPG de stock en acuarela**. La foto de referencia
del montaje real es otra cosa completamente: **Toile de Jouy en azul porcelana** — blanco y crema,
línea azul grabada, globos azul polvo, arcos, moños de cinta. Sin verde. Sin dorado.

**Reglas duras de la nueva dirección:**

| ❌ Eliminar | ✅ Reemplazar por |
|---|---|
| Verde esmeralda / salvia (`#065F46`, `#10B981`) | Azul toile (`#3A6BA5`, `#2C5282`) |
| Oro / ámbar (`#D97706`, `#F59E0B`, `#FDE68A`) | Nada, o rafia `#D6C1A0` en dosis mínima |
| Azul noche dominante (`#0F172A`) | Porcelana clara `#FBFCFE` como fondo dominante |
| JPGs de acuarela (`safari-baby-animals.jpg`, etc.) | **SVG vectorial toile** (ver §4) |
| Glassmorphism / neón / `drop-shadow` de brillo | Filete hairline azul + sombra suave y baja |
| Playfair Display · Montserrat · Great Vibes | Cormorant Garamond · Jost · Pinyon Script |

Las tres imágenes de `public/images/` quedan **sin uso**. No borrarlas todavía; primero verificar que
ningún componente las referencia.

---

## 2 · Tokens

### 2.1 Color — reemplazar el bloque `colors.jungle` de `tailwind.config.ts`

```ts
colors: {
  toile: {
    porcelain:  "#FBFCFE",  // fondo dominante
    porcelain2: "#F1F6FB",
    porcelain3: "#E4EDF6",
    mist:       "#DCE9F5",
    powder:     "#BDD4E7",  // globos, filetes
    powderDeep: "#A2C0DC",
    sky:        "#6F9AC6",  // texto secundario, kickers
    ink:        "#3A6BA5",  // línea del grabado
    inkDeep:    "#2C5282",  // botones, números
    navy:       "#1B3A5C",  // titulares
    navySoft:   "#33557A",  // párrafos
    raffia:     "#D6C1A0",  // ÚNICO acento cálido; usar casi nunca
  },
}
```

Hairlines: `rgba(58,107,165,.22)` (normal) y `rgba(44,82,130,.42)` (fuerte).
Sombras: `0 30px 70px -34px rgba(27,58,92,.42)` y `0 50px 110px -46px rgba(27,58,92,.55)`.

### 2.2 Tipografía — `src/app/layout.tsx`

```ts
import { Cormorant_Garamond, Jost, Pinyon_Script } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets:['latin'], weight:['300','400','500','600'],
  style:['normal','italic'], variable:'--font-display', display:'swap' });
const jost      = Jost({ subsets:['latin'], weight:['300','400','500'],
  variable:'--font-ui', display:'swap' });
const pinyon    = Pinyon_Script({ subsets:['latin'], weight:'400',
  variable:'--font-script', display:'swap' });
```

Quitar Playfair, Jakarta y Great Vibes. En `tailwind.config.ts`:

```ts
fontFamily: {
  display: ["var(--font-display)", "Georgia", "serif"],
  script:  ["var(--font-script)", "cursive"],
  sans:    ["var(--font-ui)", "Helvetica Neue", "sans-serif"],
}
```

**Reglas tipográficas del sistema** (respetarlas es el 60 % del resultado):

| Rol | Familia | Tamaño | Tracking | Notas |
|---|---|---|---|---|
| Nombre del bebé | display 300 | `clamp(46px,13vw,92px)` | `.055em` | añadir `padding-left:.055em` para compensar el tracking |
| Titulares de sección | display 300 | `clamp(30px,6.6vw,46px)` | `.04em` | |
| Caligrafía (parents, "en honor a") | script 400 | `clamp(30px,7.6vw,46px)` | — | |
| Kicker / label | ui 400 | 8.5–9.5px | `.30–.42em` | UPPERCASE + `padding-left` igual al tracking |
| Botón | ui 400 | 10.5–11px | `.32em` | UPPERCASE |
| Párrafo | ui 300 | 12–12.5px | `.05em` | `line-height:1.75` |
| Dato (dd) | display 400 | 16px | `.02em` | |

Todo texto en mayúsculas con tracking necesita `padding-left` del mismo valor: si no, queda
descentrado por el espacio final que el tracking añade tras la última letra.

### 2.3 Easings y formas

```css
--ease-drape: cubic-bezier(.76,0,.24,1);  /* cortinas: arranque decidido, frenada larga */
--ease-soft:  cubic-bezier(.22,1,.36,1);  /* todo lo demás */
```

**El arco es el motivo estructural.** Toda superficie contenedora lleva top arqueado:

```css
.arch-card  { border-radius: 50% 50% 22px 22px / 34% 34% 22px 22px; }  /* tarjeta grande */
.arch-tile  { border-radius: 50% 50%  7px  7px / 30% 30%  7px  7px; }  /* countdown */
.arch-panel { border-radius: 50% 50%  9px  9px / 24% 24%  9px  9px; }  /* tarjetas detalle */
```

⚠️ Usar **porcentajes**, no px. Con `200px 200px / 62px …` en una ficha de 190 px de ancho el
navegador reescala los radios y sale un trapecio, no un arco.

---

## 3 · Estructura de archivos a tocar

```
src/
├── app/
│   ├── globals.css              ← reescribir: tokens, keyframes, filigrana toile
│   ├── layout.tsx               ← fuentes nuevas
│   └── page.tsx                 ← orden de secciones (sin cambios de fondo)
├── components/
│   ├── toile/
│   │   ├── ToileDefs.tsx        ← NUEVO · <defs> global: patrón + símbolos
│   │   ├── ToileArt.tsx         ← NUEVO · <Giraffe/> <Leopard/> <Monstera/> <Palm/> <Fern/> <Moon/> <Bow/>
│   │   └── BalloonGarland.tsx   ← NUEVO · guirnalda generada
│   ├── JungleCurtainOpener.tsx  ← reescribir por completo (§5)
│   ├── ParallaxHero.tsx         ← reescribir por completo (§6)
│   ├── CountdownTimer.tsx       ← re-estilar (fichas arco)
│   ├── EventDetails.tsx         ← re-estilar (tarjetas arco + iconos SVG toile)
│   ├── LocationCard.tsx         ← re-estilar (misma tarjeta arco)
│   ├── RsvpSection.tsx          ← re-estilar (inputs hairline, botón inkDeep)
│   └── WatercolorIllustrations.tsx ← BORRAR (lo sustituye toile/)
└── ...
```

`ToileDefs` se monta **una sola vez** en `layout.tsx`, dentro de un
`<svg width="0" height="0" aria-hidden className="absolute">`. Los demás componentes solo usan
`<use href="#s-giraffe" />`. Copiar los `<defs>` tal cual desde `public/preview.html`.

---

## 4 · Biblioteca de arte SVG

Todo el arte está en `public/preview.html`, dentro del `<svg>` de definiciones. Portar literalmente:

| id | Qué es | viewBox |
|---|---|---|
| `#toile` | patrón de florecillas y ramitas — **relleno de los animales** | 44×44 |
| `#toileSoft` | misma idea, más claro — relleno del follaje | 44×44 |
| `#s-giraffe` | cabeza y cuello de jirafa (recorte tipo cartón) | 170×400 |
| `#s-leopard` | leopardito sentado de frente | 230×260 |
| `#s-monstera` | costilla de Adán, de lóbulos | 210×250 |
| `#s-palm` | fronda de palma | 120×300 |
| `#s-fern` | helecho fino | 90×260 |
| `#s-moon` | luna creciente con nube | 200×220 |
| `#s-bow` | moño de cinta azul | 200×120 |
| `#ic-cal` `#ic-pin` `#ic-gift` | iconos de tarjetas | 60×60 |

**El truco que hace que esto se lea como la foto:** los animales van con
`fill="url(#toile)"` + `stroke="#2F5F94"`. Es decir, la silueta rellena con el estampado toile,
igual que los recortes de cartón del montaje real. No usar relleno plano.

### Reemplazo de `lucide-react`
Los iconos de Lucide (trazo redondeado moderno) rompen el registro del grabado. Sustituir por los
símbolos `#ic-*`. Si hace falta algún icono más, dibujarlo con `stroke="#3A6BA5"`,
`stroke-width="1.8"`, `stroke-linecap="round"` y un detalle relleno en `#DCE9F5`.

---

## 5 · `JungleCurtainOpener.tsx` — La Puerta

Capas, de atrás hacia adelante:

| z | Elemento | Descripción |
|---|---|---|
| 0 | `.leaf.l` / `.leaf.r` | dos paneles blancos acanalados, 50.6 % cada uno, filo de tinta al centro |
| 4 | `.gate-arch` | arco azul polvo con aro interior acanalado (el prop de la foto) |
| 6 | `.garland` | guirnalda de globos, dos racimos dejando el centro libre |
| 8 | jirafa (izq.) · leopardo (der.) | recortes toile apoyados en el borde inferior |
| 9 | follaje inferior | palma + monstera + helecho, espejados a cada lado |
| 12 | `.gate-core` | placa festoneada con moño + botón + hint |

⚠️ El moño se dibuja en `y=-30`, es decir **fuera del viewBox** de la placa. Un `<svg>` raíz recorta
su contenido por defecto: sin `style="overflow:visible"` en ese SVG, los lazos aparecen cortados en
seco por arriba. No arreglarlo agrandando el viewBox — eso desplaza el centro óptico del texto.

Acanalado del panel:
```css
repeating-linear-gradient(90deg,#FFFFFF 0 18px,#F4F8FC 18px 20px,#FFFFFF 20px 21px)
```

**Coreografía de apertura** (al hacer clic, todo simultáneo):

| Elemento | Transformación | Duración | Easing |
|---|---|---|---|
| `.leaf.l` / `.leaf.r` | `translateX(∓101%)` | 1.5 s | `--ease-drape` |
| `.gate-arch` | `scale(1.5)` + `opacity:0` | 1.4 s | `--ease-soft` |
| `.garland` | `translateY(-130%)` + fade | 1.5 s | `--ease-soft` |
| jirafa / leopardo | `translateX(∓150%)` + fade `.5 s` de retraso | 1.5 s | `--ease-drape` |
| follaje a / b | `translateX(∓125%)` + fade `.5 s` de retraso | 1.5 s | `--ease-drape` |
| `.gate-core` | `scale(1.09)` + `opacity:0` | 0.5 s | `--ease-soft` |
| `#gate` | `visibility:hidden` con `transition-delay:1.9s` | — | — |

A los **480 ms** dispara el confeti de porcelana: tonos
`#FFFFFF #DCE9F5 #BDD4E7 #A2C0DC #6F9AC6 #D6C1A0`, ~110 partículas rectangulares de 4–11 px.
Con `canvas-confetti` ya instalado, pasar esos `colors` y `scalar:0.9`. **Nada de dorado.**

Mantener el `sessionStorage('invitation_opened')` que ya existe: si vuelve, entra directo.

### Guirnalda de globos — `BalloonGarland.tsx`

Dos curvas cuadráticas de Bézier, 40 globos cada una, con RNG **sembrado** (no `Math.random`) para
que el SSR y el cliente coincidan y no haya *hydration mismatch*:

```ts
let seed = 7;
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
```

Curvas (viewBox `0 0 1200 400`, `preserveAspectRatio="xMidYMin slice"`):
`{x0:-70,y0:300, x1:120,y1:20, x2:445,y2:160}` y su espejo `{1270,300 → 1080,20 → 755,160}`.
Jitter ±48 px en ambos ejes. Radio 17–53.

Cada globo necesita **tres cosas** o no se lee como globo:
1. `fill` con un `<radialGradient>` (`cx 34% cy 28% r 78%`: blanco → tono → tono −16).
2. Elipse de brillo arriba a la izquierda, `opacity .85`, rotada −32°.
3. Triangulito de nudo abajo, en el tono −24.

Tonos ponderados hacia el pastel — blanco ×3, `#F6FAFD`, `#EAF2F9`, `#DCE9F5` ×2, `#CBDEEE`,
`#B7D0E6`, `#A6C4DE`, `#93B8D8`. Uno de cada diez, "cristal": relleno `rgba(255,255,255,.28)` y
borde `rgba(143,180,214,.85)`.

> **Trampa que ya costó una iteración:** en SVG, un `transform` de CSS **pisa** el atributo
> `transform` del mismo nodo. Si el `<g>` de posición lleva también la animación de flotación, todos
> los globos colapsan al origen. Estructura correcta: `<g transform="translate(x,y)">` exterior
> (posición, atributo) → `<g style="animation:bob …">` interior (movimiento, CSS).

En móvil (`max-width:640px`) achicar la guirnalda: `width:205vw; height:30vh; top:-3vh`.

---

## 6 · `ParallaxHero.tsx` — La Invitación

Tarjeta en arco, centrada, `width:min(560px,92vw)`, `.arch-card` + borde hairline + filete interior
a 9 px + filigrana toile al 6 %. Entra con `opacity 0 → 1` y `translateY(26px) scale(.96) → none`,
1.25 s `--ease-soft`, **delay 0.55 s** (para que el ojo alcance a ver abrirse la cortina).

Orden interno:

1. **Badge** — `— LA DULCE ESPERA —`, con dos reglas de 26 px a los lados.
2. **Script** — "Baby Shower en honor a".
3. **Nombre** — `Santiago`.
4. **Regla ornamental** — dos degradados hacia el centro + florecilla toile de 15 px.
5. **Escena** — banda con palma · jirafa · leopardo · monstera · helecho sobre una línea de suelo.
   `viewBox="0 0 460 168"`, altura `clamp(96px,23vw,140px)`.
   ⚠️ El viewBox y la caja deben tener **la misma relación de aspecto** (≈2.75:1). Si no coinciden,
   `preserveAspectRatio` por defecto ("meet") encoge el dibujo y deja aire muerto a los lados.
6. **Padres** — `Angie ♥ Luis`, corazón en `--powderDeep` al 66 % del tamaño.
7. **Blurb** — 2–3 líneas, `max-width:33ch`.
8. **Datastrip** — grid 2×1 (1 columna en móvil) con `gap:1px` sobre fondo hairline: así las líneas
   divisorias son el propio fondo asomando. `CUÁNDO` / `DÓNDE`.
9. **CTA** — "Confirmar asistencia", relleno `linear-gradient(180deg,#3A6BA5,#2C5282)`.

Fuera de la tarjeta: **cue de scroll** (línea de 38 px que se estira, `opacity` a los 1.5 s).

### Selva de fondo (`.jungle`)

Tres profundidades sobre `#invite`, `position:absolute; inset:0; overflow:hidden`:

| Capa | Opacidad | Contenido |
|---|---|---|
| `.j-far` | `.20` | monstera + palma arriba a los lados |
| `.j-mid` | `.42` | luna arriba a la derecha; racimos abajo a ambos lados |
| `.j-near` | `.72` | reservada para primer plano si hace falta |

Balanceo: `@keyframes frond { rotate ±1.6deg }`, 8 s, `transform-origin:50% 100%`, con
`animation-delay` negativo distinto por elemento (−1 s … −8 s) para que nunca vayan en sincronía.

Nueve helechos pequeños cayendo (`.drift`), 17–33 s, `opacity .5`, deriva de 90 px en X y 280° de giro.

**Framer Motion:** el balanceo, la deriva y la filigrana son CSS puro — no meterlos en Motion. Reservar
`framer-motion` para la cortina y para los `whileInView` de las secciones inferiores.

---

## 7 · Secciones inferiores

- **Countdown** — 4 fichas `.arch-tile` blancas, número en display 300 `clamp(30px,7vw,48px)` color
  `--inkDeep`, label 8 px tracking `.28em`. Grid 4 columnas; 2 en móvil.
- **EventDetails** — **3** tarjetas `.arch-panel` (Fecha y hora · El lugar · Regalos), icono toile de
  46 px, `h3` display 400 20 px,
  párrafo 12 px. Hover: `translateY(-6px)` y sombra a `--shadow-lift`.
- **LocationCard** — misma tarjeta; el mapa embebido dentro de un contenedor con
  `border-radius:14px` y `filter:saturate(.55) hue-rotate(-8deg)` para que no cante el verde de
  Google Maps contra la paleta.
- **RsvpSection** — inputs `background:#fff`, `border:1px solid var(--hair)`, radio 3 px,
  `font-family:ui`, `letter-spacing:.05em`. Foco: borde `--ink` + `box-shadow:0 0 0 3px rgba(189,212,231,.5)`.
  Al confirmar, mismo confeti de porcelana.
- **Cierre** — florecilla toile de 58 px, frase en display *italic* 300, firma en script.
- **Quickbar móvil** — píldora flotante `rgba(255,255,255,.86)` + `backdrop-filter:blur(14px)`,
  hairline, ítem activo relleno `--inkDeep`. `body{padding-bottom:76px}` en móvil.

---

## 8 · Responsive

El objetivo declarado en el brief es que **la tarjeta completa quepa sin scroll en un teléfono**,
con el CTA visible. Verificado en el prototipo a 375×812. Dos cortes por **altura**, no por ancho:

```css
@media (max-height:820px){ /* comprime paddings, nombre, escena, datastrip, CTA */ }
@media (max-height:700px){ .blurb{display:none} .scroll-cue{display:none} }
```

Probar siempre en 375×812 (iPhone estándar) **y** 375×667 (iPhone SE).

---

## 9 · Accesibilidad y rendimiento

- `@media (prefers-reduced-motion:reduce)` → `animation-duration:.001ms; transition-duration:.18s`.
  Ya está en el prototipo; conservarlo.
- Todo SVG decorativo con `aria-hidden="true"`.
- El botón de apertura es un `<button>` real y recibe foco al montar.
- Contraste: el texto de párrafo va en `--navySoft` (`#33557A`) sobre blanco → 7.4:1. **No aclararlo.**
  `--sky` (`#6F9AC6`) solo para labels de 8–9 px en mayúsculas, nunca para texto corrido.
- Las tres imágenes JPG (≈ 1 MB) desaparecen; todo el arte pasa a SVG inline. Ganancia neta grande
  en LCP. Ya no hace falta `next/image` en el hero ni en la cortina.

---

## 10 · Orden de trabajo sugerido

1. `layout.tsx` + `tailwind.config.ts` + `globals.css` → tokens y fuentes.
2. `components/toile/ToileDefs.tsx` y `ToileArt.tsx` → portar los `<defs>` del prototipo.
3. `BalloonGarland.tsx` (ojo con el RNG sembrado y el anidamiento de `<g>`).
4. `JungleCurtainOpener.tsx`.
5. `ParallaxHero.tsx`.
6. Countdown → EventDetails → LocationCard → RsvpSection.
7. Borrar `WatercolorIllustrations.tsx` y las referencias a los JPG.
8. Revisar `/admin` — que herede la tipografía nueva sin romperse.

**Criterio de aceptación:** poner el prototipo y la app lado a lado a 375×812. La puerta, la apertura
y la tarjeta deben ser indistinguibles.

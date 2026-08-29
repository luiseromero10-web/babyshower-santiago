# 🌿 Baby Shower de Santiago • Documentación Integral del Proyecto

> **Documento de Contexto y Arquitectura** para iteración y refinamiento de diseño UI/UX (Listo para compartir con **Claude Opus** o cualquier asistente de diseño/desarrollo).

---

## 📌 1. Información General y Datos del Evento

* **Bebé en honor:** Santiago 👑
* **Padres:** Angie & Luis ❤️
* **Fecha y Hora:** Sábado, 26 de Septiembre de 2026 • 3:00 PM (Hora Colombia).
* **Lugar:** Salón Social 2, Conjunto Navarra (Carrera 8 # 170-52, Bogotá, Colombia).
* **Temática y Dirección de Arte:** 
  * **Selva / Jungla Sofisticada en Acuarela Realista:** Estilo editorial de cuento de lujo (no caricaturas planas), con ilustraciones realistas de animales safari bebés (elefantito, jirafita, leoncito) entre hojas tropicales (costilla de adán, eucalipto, palmas) y destellos dorados.
  * **Paleta de Colores Principal:**
    * **Azul Noche / Midnight Navy:** `#0F172A` / `#0A192F` (Elegancia y contraste)
    * **Azul Zafiro / Royal Blue:** `#1E40AF` / `#2563EB` (Detalles y títulos principales)
    * **Azul Cielo / Pastel:** `#E0F2FE` / `#BAE6FD` (Fondos suaves y esferas)
    * **Verde Esmeralda / Salvia:** `#065F46` / `#10B981` (Follaje botánico y naturaleza)
    * **Oro Metálico / Destellos:** `#D97706` / `#F59E0B` / `#FDE68A` (Sellos, botones brillantes y acentos)
    * **Blanco Perla / Crema:** `#FFFFFF` / `#F8FAFC` (Superficies de tarjetas y legibilidad)
* **Políticas Especiales:**
  * **Sin Código de Vestimenta:** Libre y cómodo para los invitados.
  * **Sin Lluvia de Sobres obligatoria / Regalos Libres:** Cada invitado tiene total libertad para llevar el detalle que desee con amor.

---

## 🛠️ 2. Stack Tecnológico y Repositorio

* **Framework:** Next.js 14 (App Router, React 18, TypeScript).
* **Estilos y Maquetación:** Tailwind CSS + animaciones personalizadas en CSS (`@keyframes`).
* **Animaciones e Interactividad:** 
  * `framer-motion` (Parallax scroll, transiciones de cortina, flotación suave).
  * `canvas-confetti` (Explosión de partículas doradas y azules al interactuar).
  * `lucide-react` (Iconografía moderna y consistente).
* **Base de Datos & Backend:** Supabase (PostgreSQL con RLS, RPCs, búsqueda predictiva de invitados por grupo familiar y confirmación en tiempo real).
* **Formularios & Validación:** `react-hook-form` + `zod`.
* **Versionamiento & Control:** 
  * **GitHub Repo:** `https://github.com/luiseromero10-web/babyshower-santiago`
  * Despliegue optimizado para Vercel / Edge Network.

---

## 🏛️ 3. Estructura de la Aplicación y Componentes Desarrollados

```text
├── public/
│   └── images/
│       ├── safari-baby-animals.jpg    # Acuarela realista de alta resolución (Elefante, Jirafa, León)
│       ├── jungle-foliage-frame.jpg   # Marco botánico superior de selva en acuarela
│       └── golden-jungle-seal.jpg     # Sello de cera 3D dorado grabado con la "S" de Santiago
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   └── page.tsx               # Panel administrativo de métricas, búsqueda y exportación CSV
│   │   ├── globals.css                # Configuración de fuentes, keyframes y patrones de fondo
│   │   ├── layout.tsx                 # Metadatos SEO, OpenGraph y configuración tipográfica
│   │   └── page.tsx                   # Página principal de la invitación (Mobile & Desktop)
│   ├── components/
│   │   ├── JungleCurtainOpener.tsx    # "Selva que se abre" con sello dorado y confeti
│   │   ├── ParallaxHero.tsx           # Hero Section con acuarela realista, nombres y scroll suave
│   │   ├── CountdownTimer.tsx         # Contador regresivo en tiempo real al 26 de septiembre 2026
│   │   ├── EventDetails.tsx           # 4 tarjetas informativas (Fecha, Lugar, Regalos, Sorpresas)
│   │   ├── LocationCard.tsx           # Mapa interactivo + Waze + Google Maps + Sincronización Calendar
│   │   ├── RsvpSection.tsx            # Búsqueda predictiva de invitados, número de pases y confirmación
│   │   └── WatercolorIllustrations.tsx# Componentes vectoriales complementarios
│   └── lib/
│       └── supabase.ts                # Cliente y tipos tipados de Supabase
```

---

## 🎨 4. Detalle de Experiencia de Usuario (Flujo de la Invitación)

### 1. Puerta de Entrada ("Selva que se Abre") • `JungleCurtainOpener.tsx`
* **Concepto:** Cuando el invitado abre el link en su celular o computador, ve una puerta de selva botánica en azul noche y esmeralda con el sello de cera dorado 3D y el botón interactivo **`Abrir Invitación ✧`**.
* **Efecto:** Al tocarlo, se dispara una lluvia de partículas doradas y las dos hojas de la selva se abren suavemente hacia los lados con Framer Motion, revelando la tarjeta principal.

### 2. Portada Principal (Hero) • `ParallaxHero.tsx`
* **Encabezado:** Badge brillante con destellos `"¡La dulce espera de un príncipe!"` y caligrafía `"Baby Shower en honor a"`.
* **Nombre:** **`Santiago`** en tipografía Serif mayúscula con degradado azul real en relieve.
* **Arte Central:** Ilustración en acuarela realista de alta definición que muestra al elefantito, la jirafita y el leoncito entre hojas tropicales.
* **Padres:** **`Angie ♥ Luis`** en caligrafía cobriza destacada (`text-4xl / text-5xl`) con corazón animado.
* **Cápsula de Datos:** Fecha y salón social en formato compacto.
* **Llamados a la Acción:** Botón directo `"Confirmar Asistencia"` y botón centrado `"Desliza para ver los detalles ↓"`.

### 3. Contador Regresivo • `CountdownTimer.tsx`
* 4 cajas con efecto cristal (Glassmorphism) que calculan en tiempo real los días, horas, minutos y segundos restantes para el evento.

### 4. Detalles del Evento • `EventDetails.tsx`
* **Fecha y Hora:** Sáb, 26 de Septiembre 2026 • 3:00 PM.
* **Ubicación:** Salón Social 2, Conjunto Navarra (Carrera 8 # 170-52, Bogotá). Parqueadero disponible.
* **Regalos y Detalles:** Elección libre y abierta con cariño.
* **Celebración:** Tarde de juegos, dinámicas y fotos.

### 5. Ubicación y Calendario • `LocationCard.tsx`
* Mapa integrado con la dirección exacta en Bogotá.
* Botones directos con enlace profundo a **Google Maps** y **Waze**.
* Botón para **agregar el evento al calendario** (Google Calendar y descarga de archivo `.ics` para Apple/Outlook).

### 6. Sistema de Confirmación RSVP Inteligente • `RsvpSection.tsx`
* Buscador predictivo que autocompleta el nombre del invitado desde la base de datos de Supabase.
* Reconoce grupos familiares y número máximo de cupos asignados.
* Selector de acompañantes confirmados y campo para restricciones alimentarias o notas especiales.
* Feedback inmediato con confeti y mensaje de confirmación guardado en base de datos.

### 7. Barra Inferior Fija para Móviles (Mobile Quick Bar)
* Barra flotante fija en la parte inferior de la pantalla del celular con accesos rápidos: **Detalles | Mapa | Confirmar**.

### 8. Panel de Control Administrativo • `/admin`
* Visualización en tiempo real de invitados confirmados, cupos totales, porcentaje de asistencia y restricciones dietarias.
* Filtros de búsqueda rápida y botón para **exportar la lista a CSV/Excel**.

---

## 🎯 5. Objetivos y Áreas de Mejora para Claude Opus

Si Claude Opus va a iterar o elevar aún más el diseño, aquí están los puntos sugeridos de exploración:

1. **Micro-interacciones y Pulido Visual:**
   * Agregar efectos sutiles de hojas cayendo / luciérnagas flotantes interactivas que respondan al movimiento o al scroll.
   * Refinar transiciones de texto con tipografías complementarias o efectos de brillo metálico en los bordes dorados.
2. **Nuevas Secciones Opcionales:**
   * **Libro de Mensajes / Deseos para Santiago:** Una sección interactiva donde los invitados puedan escribir una dedicatoria o bendición para el bebé que se guarde en Supabase y los papás puedan leerla en tiempo real.
   * **Dinámica / Quiniela de Nacimiento (Baby Prediction Game):** Juego interactivo donde los invitados voten por el día exacto de nacimiento, peso estimado, o a quién se parecerá más.
   * **Álbum de Fotos en Vivo:** Espacio para que los invitados suban fotos durante el evento a un bucket de Supabase Storage.
3. **Optimización Responsive Adicional:**
   * Ajustar la altura visual en pantallas pequeñas (e.g. iPhone SE) para garantizar que los botones siempre queden en el primer tercio visible.

---

## 🚀 6. Comandos de Ejecución y Pruebas

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar en modo producción
npm run start
```

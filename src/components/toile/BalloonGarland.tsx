/**
 * Guirnalda de globos generada sobre dos curvas de Bézier.
 *
 * El RNG está sembrado (no Math.random): es una función pura del seed, así
 * que produce exactamente el mismo árbol de nodos en el servidor y en el
 * cliente — sin eso, React lanzaría un hydration mismatch.
 *
 * Cada globo lleva tres capas (gradiente radial + brillo + nudo) o se lee
 * como un círculo plano, no como un globo.
 */

// Ponderado hacia los pasteles: mucho blanco y azul polvo, pocos medios.
const TONES = [
  '#FFFFFF', '#FFFFFF', '#FFFFFF', '#F6FAFD', '#EAF2F9', '#DCE9F5', '#DCE9F5',
  '#CBDEEE', '#B7D0E6', '#A6C4DE', '#93B8D8',
];

function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16);
  const c = [n >> 16, (n >> 8) & 255, n & 255].map((v) => Math.max(0, Math.min(255, v + amt)));
  return '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('');
}

function makeRng(seed: number) {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

interface Arc {
  x0: number; y0: number;
  x1: number; y1: number;
  x2: number; y2: number;
  n: number;
}

const ARCS: Arc[] = [
  { x0: -70, y0: 300, x1: 120, y1: 20, x2: 445, y2: 160, n: 40 },
  { x0: 1270, y0: 300, x1: 1080, y1: 20, x2: 755, y2: 160, n: 40 },
];

interface Balloon {
  key: string;
  x: number;
  y: number;
  r: number;
  toneIndex: number;
  glass: boolean;
  duration: number;
  delay: number;
}

function buildBalloons(): Balloon[] {
  const rnd = makeRng(7);
  const balloons: Balloon[] = [];
  ARCS.forEach((a, ai) => {
    for (let i = 0; i < a.n; i++) {
      const t = i / (a.n - 1);
      const mt = 1 - t;
      const bx = mt * mt * a.x0 + 2 * mt * t * a.x1 + t * t * a.x2;
      const by = mt * mt * a.y0 + 2 * mt * t * a.y1 + t * t * a.y2;
      const jx = (rnd() - 0.5) * 96;
      const jy = (rnd() - 0.5) * 96;
      const r = 17 + rnd() * 36;
      const toneIndex = Math.floor(rnd() * TONES.length);
      const glass = rnd() > 0.9;
      const duration = 5 + rnd() * 4;
      const delay = rnd() * 6;
      balloons.push({ key: `${ai}-${i}`, x: bx + jx, y: by + jy, r, toneIndex, glass, duration, delay });
    }
  });
  return balloons;
}

const BALLOONS = buildBalloons();

export function BalloonGarland({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`garland ${className}`}
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
    >
      <defs>
        {TONES.map((t, i) => (
          <radialGradient key={i} id={`bg${i}`} cx="34%" cy="28%" r="78%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="42%" stopColor={t} />
            <stop offset="100%" stopColor={shade(t, -16)} />
          </radialGradient>
        ))}
      </defs>
      <g>
        {BALLOONS.map((b) => (
          <g key={b.key} transform={`translate(${b.x},${b.y})`}>
            <g
              style={{
                animation: `bob ${b.duration.toFixed(2)}s ease-in-out infinite`,
                animationDelay: `-${b.delay.toFixed(2)}s`,
                transformOrigin: 'center',
              }}
            >
              <circle
                r={b.r.toFixed(1)}
                fill={b.glass ? 'rgba(255,255,255,.28)' : `url(#bg${b.toneIndex})`}
                stroke={b.glass ? 'rgba(143,180,214,.85)' : 'rgba(108,150,192,.34)'}
                strokeWidth={b.glass ? 1.8 : 1.1}
              />
              <ellipse
                cx={(-b.r * 0.32).toFixed(1)}
                cy={(-b.r * 0.4).toFixed(1)}
                rx={(b.r * 0.26).toFixed(1)}
                ry={(b.r * 0.15).toFixed(1)}
                fill="#fff"
                opacity=".85"
                transform={`rotate(-32 ${(-b.r * 0.32).toFixed(1)} ${(-b.r * 0.4).toFixed(1)})`}
              />
              <path
                d={`M-3.4 ${(b.r - 1).toFixed(1)} L3.4 ${(b.r - 1).toFixed(1)} L0 ${(b.r + 5).toFixed(1)} Z`}
                fill={b.glass ? 'rgba(168,198,224,.6)' : shade(TONES[b.toneIndex], -24)}
                opacity=".9"
              />
            </g>
          </g>
        ))}
      </g>
    </svg>
  );
}

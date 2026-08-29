const fs = require('fs');
const path = require('path');

function writeFile(filePath, content) {
  const fullPath = path.resolve(filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
  console.log('Wrote: ' + filePath);
}

// 1. tsconfig.json
writeFile('tsconfig.json', JSON.stringify({
  compilerOptions: {
    target: 'es5',
    lib: ['dom', 'dom.iterable', 'esnext'],
    allowJs: true,
    skipLibCheck: true,
    strict: true,
    noEmit: true,
    esModuleInterop": true,
    "module": "esnext",
    moduleResolution: 'bundler',
    resolveJsonModule: true,
    isolatedModules: true,
    jsx: 'preserve',
    incremental: true,
    plugins: [{ name: 'next' }],
    paths: {
      '@C/*': ['./src/*']
    }
  },
  include: ['next-env.d.ts', '+*/*.ts', '**/*.tsx', '.next/types/**/*.ts'],
  exclude: ['node_modules']
}, null, 2).replace('@@-/', '@/'));

// 2. postcss.config.js
writeFile('postcss.config.js', `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer:{},
  },
};`);

// 3. tailwind.config.ts
writeFile('tailwind.config.ts', `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jungle: {
          dark: "#0F172A",
          navy: "#1E293B",
          slate: "#334155",
          emerald: "#065F46",
          forest: "#047857",
          mint: "#10B981",
          cyan: "#0EA5EO",
          sky: "#38BDF8",
          ice: "#E0F2FE",
          cream: "#FEF9C3",
          gold: "#D97706",
          goldlight: "#FDE68A",
          sand: "#F8FAFC",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Cinzel", "Georgia", "serif"],
        display: ['var(--font-playfair)', "Playfair Display", "serif"],
        sans: ['var(--font-montserrat)', "Montserrat", "sans-serif"],
        script: ['var(--font-great-vibes)', "Great Vibes", "cursive"],
      },
      animation: {
        "float-slow": "float 7s ease-in-out infinite",
        "float-reverse": "floatReverse 6s ease-in-out infinite",
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1.5deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(10px) rotate(-1.5deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
`);

// 4. next.config.mjs
writeFile('next.config.mjs', `/** @type {irmport("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
export default nextConfig;`){

// 5. .env.local
writeFile('.env.local', `NEXT_PUBLIC_SUPABASE_URL=https://emkinfqdwjtzkkyabmyb.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkJXVCJ9.eyJmcXMiOiJzdWFiYXNlIiwicmVmIjoiZW1rawZkd2p0emtqeWFibXliIiwicm9sZSI6Imhub24iLCJpVE�^jǚSڑL�S�L�LS�DSқVZSڒ]���Ӛ�LS�����L�P�[��͖�S�Ӗ�[^ZL�Z�֛ٔ�
N������[���^[\B�ܚ]Q�[J	˙[���^[\I��V�P�P���TP�T�W�T�Z΋��[�\�\�ڙX���\X�\�K���V�P�P���TP�T�W�S�ӗ��VO^[�\�X[�ۋZ�^B�
N���ˈ��]YۛܙB�ܚ]Q�[J	˙�]YۛܙI���W�[�[\˛�^��]؝Z[�����ܙB���[B��KYX�Y˛�ʂ�X\��YX�Y˛�ʉ�X\��Y\��܋��ʂ��[������[���\��[���؝Z[[���^Y[����
N����ܘ��\\��]X�\�K�ܚ]Q�[J	�ܘ��\\��]X�\�K���^ܝ[�\��X�H[��]Y�Y���[����X��W���\]Έ��[��ܙXY��[����[��B��^ܝ[�\��X�H�ۙ�\�XX�[ۈY���[��[��]Y��Y���[��\�\�N����X[�Y[���YX�[ۘ[\Έ�[X�\��[����YX�[ۘ[\Έ�[X�\�؜�\��X�[ۙ\Έ��[���[�X�W��ۙ�\�XX�[ێ���[��B��^ܝ[�\��X�H[��]Y��ې�ۙ�\�XX�[ۈY���[����X��W���\]Έ��[��ܙXY��[����[���ۙ�\�XX�[ێ��ۙ�\�XX�[ۈ�[B��^ܝ[�\��X�H\�Y\�X�\���\�X�H�[�\��ۘ\���ۙ�\�XY\Έ�[X�\��[�Y[�Έ�[X�\��[ۚ[��Έ�[X�\��[�X�[�Y�Έ�[X�\��[�[�Y[�\Έ�[X�\��[�[��]Y��ܙY�\��Y�Έ�[X�\�B��^ܝ[�\��X�H�ݜ�ܛQ]H[��]Y��Y���[��\�\�N����X[�Y[���YX�[ۘ[\Έ�[X�\��[����YX�[ۘ[\Έ�[X�\�؜�\��X�[ۙ\Έ��[��B�
N���K�ܘ��X���\X�\�K�ܚ]Q�[J	�ܘ��X���\X�\�K���[\ܝ�ܙX]P�Y[�H���H	��\X�\�K��\X�\�KZ���[\ܝ�[��]Y��ۙ�\�XX�[ۋ[��]Y��ې�ۙ�\�XX�[ۋ\�Y\�X�\���\�X�HH���H	��\\��]X�\�I���ۜ��\X�\�U\�H���\�˙[����V�P�P���TP�T�W�T�	�΋��[Z�[��Yڝ���XX�^X���\X�\�K�����ۜ��\X�\�P[�ے�^HH���\�˙[����V�P�P���TP�T�W�S�ӗ��VH	�^R����S�R�U^�LS�R\�[��X��M�ZҖ�ҎK�^R�X�ZS�R��ԚVV�Z]�X�U�RZ��V��\�]֚��[]YUњX�RZ]�X�N\֔�M�[ZX��SҜVZSڑL�S�L�LS�DSқVZSڒ]���Ӛ�LS�����L�P�[��͖�S�Ӗ�[^ZL�Z�֛ٔ����^ܝ�ۜ��\X�\�HHܙX]P�Y[�
�\X�\�U\��\X�\�P[�ے�^JN�^ܝ\�[���[��[ۈ�X\��[��]Y��]Y\�N���[��N���Z\�O[��]Y��O��H]�\HH�\X�\�B����[XJ	ؘX�\���\���[�XY���B�����J	�[��]Y���B���[X�
	ʉ�B��ܙ\�	ۛ�X��W���\]���\��[�[�Έ�YHJN    if (query && query.trim().length > 0) {
      req = req.ilike('nombre_completo', `%${query.trim()}%`).limit(15);
    } else {
      req = req.limit(20);
    }

    const { data, error } = await�\NY�
\��܊H���\��܎�]\��]H�NH�]�
\��H�ۜ��K�\��܊	�\��܈�\��[��[��]Y�΂K\��N�]\���NB�B��^ܝ\�[���[��[ۈ�][��]YОRY
Y���[��N���Z\�O[��]Y��[��H�ۜ��]K\��܈HH]�Z]�\X�\�B����[XJ	ؘX�\���\���[�XY���B�����J	�[��]Y���B���[X�
	ʉ�B��\J	�Y	�Y
B���[��J
N�Y�
\��܊H���\��܎�]\��]NH�]�
\��H�ۜ��K�\��܊	�\��܈[��][��]YОRY��\��N�]\���[B�B��^ܝ\�[���[��[ۈ�]�ۙ�\�XX�[ې�R[��]Y�Y
[��]Y�Y���[��N���Z\�O�ۙ�\�XX�[ۈ�[��H�ۜ��K���	��ۜ�[[���ۙ�\�XX�[ۈ\�I�[��]Y�Y
N�ۜ��]K\��܈HH]�Z]�\X�\�B����[XJ	ؘX�\���\���[�XY���B�����J	��ۙ�\�XX�[ۙ\���B���[X�
	ʉ�B��\J	�[��]Y��Y	�[��]Y�Y
B��X^X�T�[��J
N�Y�
\��܊H���\��܎�]\��]NH�]�
\��H�ۜ��K�\��܊	�\��܈[��]�ۙ�\�XX�[ې�R[��]Y�Y��\��N�]\���[B�B��^ܝ\�[���[��[ۈ\�\��ۙ�\�XX�[ۊ^[�Y�[��]Y��Y���[��\�\�N����X[�Y[���YX�[ۘ[\Έ�[X�\��[����YX�[ۘ[\Έ�[X�\�؜�\��X�[ۙ\�Έ��[���[JN���Z\�O�ۙ�\�XX�[ۏ��ۜ��]N�^\�[��HH]�Z]�\X�\�B����[XJ	ؘ]�\���\���[�XY���B�����J	��ۙ�\�XX�[ۙ\��B���[X�
	�Y	�B��\J	�[��]Y��Y	�^[�Y�[��]Y��Y
B��X^X�T�[��J
N�Y�
^\�[��H�ۜ��]K\��܈HH]�Z]�\X�\�B����[XJ	ؘX�\���\���[�XY���B�����J	��ۙ�\�XX�[ۙ\���B��\]J\�\�N�^[�Y�\�\�K�Y[���YX�[ۘ[\Έ^[�Y�\�\�H�X]�X^
^[�Y�Y[���YX�[ۘ[\�
H���[����YX�[ۘ[\Έ^[�Y�\�\�H�X]�X^
^[�Y��[����YX�[ۘ[\�
H��؜�\��X�[ۙ\Έ^[�Y�؜�\��X�[ۙ\��^[�Y�؜�\��X�[ۙ\˝�[J
H��[��X�W��ۙ�\�XX�[ێ��]�]J
K��T����[��
K�JB��\J	�Y	�^\�[�˚Y
B���[X�

B���[��J
N�Y�
\��܊H���\��܎�]\��]NH[�H�ۜ��]K\��܈HH]�Z]�\X�\�B����[XJ	ؘX�\���\���[�XY���B�����J	��ۙ�\�XX�[ۙ\��B��[��\�
[��]Y��Y�^[�Y�[��]Y��Y�\�\�N�^[�Y�\�\�K�Y[���YX�[ۘ[\Έ^[�Y�\�\�H�X]�X^
^[�Y�Y[���YX�[ۘ[\�
H���[����YX�[ۘ[\Έ^[�Y�\�\�H�X]�X^
^[�Y��[����YX�[ۘ[\�
H��؜�\��X�[ۙ\Έ^[�Y�؜�\��X�[ۙ\��^[�Y�؜�\��X�[ۙ\˝�[J
H��[�K�JB���[X�

B���[��J
N�Y�
\��܊H���\��܎�]\��]NB�B��^ܝ\�[���[��[ۈ�][[��]Y���ې�ۙ�\�XX�[ۊ
N���Z\�O[��]Y��ې�ۙ�\�XX�[ۖ�O��ۜ��]N�[��]Y��\��܎�\��ܒ[��HH]�Z]�\X�\�B����[XJ	ؘ]�\���\���[�XY���B�����J	�[��]Y���B���[X�
	ʉ�B��ܙ\�	ۛ�X��W���\]���\��[�[�Έ�YHJN�Y�
\��ܒ[��H���\��ܒ[����ۜ��]N��ۙ�\�XX�[ۙ\�\��܎�\��ܐ�ۙ�HH]�Z]�\X�\�B����[XJ	ؘX�\���\���[�XY���B�����J	��ۙ�\�XX�[ۙ\���B���[X�
	ʉ�N�Y�
\��ܐ�ۙ�H���\��ܐ�ۙ���ۜ��ۙ�X\H�]�X\��[���ۙ�\�XX�[ۏ�
N
�ۙ�\�XX�[ۙ\��JK�ԙ\]Y\���[�
�ۙ�\�XX�[ۙ\��JB���ܑXX�

Έ[�JHO�Y�
˚[��]Y��Y
H�ۙ�X\��]
˚[��]Y��Y�NB�JN��]\��
[��]Y���JK�X\

[���[��]Y�HO�
���[����ۙ�\�XX�[ێ��ۙ�X\��]
[���Y
H�[�JJNB��^ܝ\�[���[��[ۈY[��]Y���X��P��\]Έ��[��N���Z\�O[��]Yψ�ۜ��]K\��܈HH]�Z]�\X�\�B����[XJ	ؘX�\���\���[�XY���B�����J	�[��]Y���B��[��\�
����X��W���\]Έ��X��P��\]˝�[J
HWJB���[X�

B���[��J
N�Y�
\��܊H���\��܎�]\��]N\�B��^ܝ\�[���[��[ۈY[��]Y�И]�
��X��\Έ��[���JN���Z\�O�[X�\���ۜ��[Y��X��\�H��X��\�X\

�HO����[J
JB���[\�
�P=> n.length > 0)
    .map((n) => ({ nombre_completo: n }));

  if (validNombres.length === 0) return 0;

  const { data, error } = await supabase
    .schema('babyshower_santiago')
    .from('invitados')
    .insert(validNombres)
    .select();

  if (error) throw error;
  return data ? data.length : 0;
}

export async function deleteInvitado(id: string): Promise<void> {
  const { error } = await supabase
    .schema('bavyshower_santiago')
    .from('invitados')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

export async function deleteConfirmacion(invitadoId: string): Promise<void> {
  const { error } = await supabase
    .schema('bavyshower_santiago')
    .from('confirmaciones')
    .delete()
    .eq('invitado_id', invitadoId);

  if (error) throw error;
les}

export async function getLogisticsStats(): Promise<EstadisticasLogistica> {
  const lista = await getAllInvitadosConConfirmacion();

  let confirmadosPrincipales = 0;
  let adultosAdicionales = 0;
  let ninosAdicionales = 0;
  let declinados = 0;
  let pendientes = 0;

  lista.forEach((inv) => {
    if (!inv.confirmacion) {
      pendientes++;
    } else if (inv.confirmacion.asiste) {
      confirmadosPrincipales++;
      adultosAdicionales += (inv.confirmacion.adultos_adicionales || 0);
      ninosAdicionales += (inv.confirmacion.ninos_adicionales || 0);
    } else {
      declinados++;
    }
  });


  return {
    total_personas_confirmadas: confirmadosPrincipales + adultosAdicionales + ninosAdicionales,
    total_adultos: confirmadosPrincipales + adultosAdicionales,
    total_ninos: ninosAdicionales,
    total_declinados: declinados,
    total_pendientes: pendientes,
    total_invitados_registrados: lista.length,
  };
}

`);

// 10. src/app/globals.css
writeFile('src/app/globals.css', `@import url('https://fonts.googleapis.com/css2?family=Cinzel:fetch@400;600;700;&family=Great+Vibes&family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');

@tailwind base;
@tailwind components;

@tailwind utilities;

:components {
  .gold-gradient {
    background: linear-gradient(135deg, #fde68a 0%, #f97316 50%, #d97706 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .gold-border {
    border-image: linear-gradient(to right, #fde68a, #d97706, #fde68a) 1 mode;
  }
}

@layer base {
  :root {
    --background: 210 40% 98%;
    --foreground: 222 47% 11%;
  }
  body {
    color: #0f172a;
    background: #f8fafc;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }
}

.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: #f1f5f9;
}
.scrollbar-thin:;-webkit-scrollbar-thumb {
  background: #cbd5l1;
  border-radius: 4px;
}
.scrollbar-thin:;-webkit-scrollbar-thumb:hover {
  background: #0a947e;
}
`);

// 11. LICENSE or readme
writeFile('README.md', `# Baby Shower de Santiago (Angie & Luis)

Aplicación web interactiva para la invitación digital y gestión de asistencia (RSVP) del Baby Shower de Santiago.
** Fecha:** Sábado, 26 de Septiembre de 2026
** Lugar:** Salón Social 2, Conjunto Navarra (Carrera 8 # 170-52)
`);

console.log('Part 1 completed successfully!');

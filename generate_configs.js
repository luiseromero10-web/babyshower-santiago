const fs = require('fs');
const path = require('path');

function writeFile(filePath, content) {
  const fullPath = path.resolve(filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Created: ' + filePath);
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
    esModuleInterop: true,
    module: 'esnext',
    moduleResolution: 'bundler',
    resolveJsonModule: true,
    isolatedModules: true,
    jsx: 'preserve',
    incremental: true,
    plugins: [{ name: 'next' }],
    paths: {
      '@/*': ['./src/*']
    }
  },
  include: ['next-env.d.ts', '**/*.ts', '**/*.tsx', '.next/types/**/*.ts'],
  exclude: ['node_modules']
}, null, 2));

// 2. postcss.config.js
writeFile('postcss.config.js', 'module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n};\n');

// 3. tailwind.config.ts
writeFile('tailwind.config.ts', import type { Config } from "tailwindcss";

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
          dark: "#0B132B",     // Azul Noche profundo
          navy: "#0F172A",     // Slate navy
          slate: "#1E293B",    // Slate azul
          emerald: "#064E3B",  // Verde selva profundo
          forest: "#065F46",   // Verde bosque acuarela
          mint: "#10B981",     // Verde menta sutil
          cyan: "#0EA5E9",     // Turquesa vibrante
          sky: "#38BDF8",      // Cielo
          ice: "#E0F2FE",      // Azul pastel / glaciar
          cream: "#FEF9C3",    // Crema elegante
          gold: "#D97706",     // Dorado cálido
          goldlight: "#FDE68A",// Dorado suave
          sand: "#F8FAFC",     // Blanco suave
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Cinzel", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        script: ["var(--font-great-vibes)", "Great Vibes", "cursive"],
      },
      animation: {
        "float-slow": "float 7s ease-in-out infinite",
        "float-reverse": "floatReverse 6s ease-in-out infinite",
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s infinite linear",
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
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        }
      },
    },
  },
  plugins: [],
};
export default config;
);

// 4. next.config.mjs
writeFile('next.config.mjs', /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
);

// 5. .env.local
writeFile('.env.local', NEXT_PUBLIC_SUPABASE_URL=https://emkinfqdwjtzkkyabmyb.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVta2luZnFkd2p0emtreWFibXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0ODY1NDAsImV4cCI6MjA5NzA2MjU0MH0.o8VZ3aCInk4h4g6XVXDENHxhwNZYmyi3ekWZlcfPXkc
);

// 6. .env.example
writeFile('.env.example', NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
);

// 7. .gitignore
writeFile('.gitignore', # dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
);

console.log('Configs ready');

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts1jsx,tsx,mdx}",
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
          cyan: "#0EA5E9",
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
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        script: ["var(--font-great-vibes)", "Great Vibes", "cursive"],
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

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        toile: {
          porcelain: "#FBFCFE",
          porcelain2: "#F1F6FB",
          porcelain3: "#E4EDF6",
          mist: "#DCE9F5",
          powder: "#BDD4E7",
          powderDeep: "#A2C0DC",
          sky: "#6F9AC6",
          ink: "#3A6BA5",
          inkDeep: "#2C5282",
          navy: "#1B3A5C",
          navySoft: "#33557A",
          raffia: "#D6C1A0",
          raffiaDeep: "#B79C74",
        },
      },
      fontFamily: {
        // "serif" kept as an alias for backward-compat (used by /admin).
        serif: ["var(--font-display)", "Georgia", "serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-ui)", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Ensures the Sun/Moon toggle works
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0B0D",
        lavender: "#E6E6FA",
        tactical: "#B39DDB",
        "bull-red": "#E02020", // Added for those tactical "Log Entry" accents
      },
    },
  },
  plugins: [],
};
export default config;
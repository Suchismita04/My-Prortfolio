import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        accent: "#4f46e5",
        "accent-light": "#e0e7ff",
      },
      keyframes: {
        typing: {
          "0%, 100%": { width: "0" },
          "50%, 80%": { width: "100%" },
        },
        blink: {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#4f46e5" },
        },
        morph: {
          "0%": { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
          "50%": { borderRadius: "50% 50% 30% 70% / 50% 60% 40% 50%" },
          "100%": { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
        },
      },
      animation: {
        typing: "typing 3.5s steps(30, end) infinite",
        blink: "blink 0.75s step-end infinite",
        morph: "morph 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

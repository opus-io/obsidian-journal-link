/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
      },
      colors: {
        void: "#05040F",
        space: "#0A0818",
        nebula: "#120D2E",
        cosmic: "#6B21E8",
        glow: "#9B59F5",
        stardust: "#C084FC",
        muted: "#A89BC2",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', '"EB Garamond"', "serif"],
        mono: ['"IBM Plex Mono"', '"Courier Prime"', "monospace"],
      },
      colors: {
        obsidian: "#0D0D0D",
        slate: "#2A2A2A",
        fracture: "#3E3C3A",
        ash: "#6B6860",
        bone: "#E8E3DC",
        violet: "#5B2D8E",
        violetlight: "#7A4A9A",
        gold: "#8C7B5E",
      },
      spacing: {
        18: "72px",
        22: "88px",
      },
    },
  },
  plugins: [],
};

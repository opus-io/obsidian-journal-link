/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        dark: "#1A1A1A",
        surface: "#252525",
        border: "#333333",
        soft: "#888888",
        pure: "#F5F5F5",
        violet: "#7C3AED",
        violets: "#8B5CF6",
        glow: "rgba(124, 58, 237, 0.15)",
        glows: "rgba(139, 92, 246, 0.25)",
      },
    },
  },
  plugins: [],
};

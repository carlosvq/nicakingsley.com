/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#0c0c0c",
        "background-secondary": "#191919",
        primary: "#4c00ff",
        secondary: "#4D14D4",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./posts/**/*.{qmd,md,R,Rmd,html,js,jsx,md,mdx,ts,tsx,astro}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ["class", ".darkmode"],
};

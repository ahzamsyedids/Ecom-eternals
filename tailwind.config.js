/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Syne"', 'sans-serif'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
      },
      colors: {
        primary: '#6C5CE7',
        dark: '#1a1a2e',
      }
    },
  },
  plugins: [],
}
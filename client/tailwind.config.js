/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray': '#F8F9FA',
      'grayDark': '#ECECEC',
      'white': '#FFFFFF',
      'black': '#000000',
      'primaryColor': '#FD7E14',
      'violet': '#7251b5'
    },
    backgroundImage: {
      'hero-pattern': "url('/src/assets/HeroBg.png')",
    },
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-grey': '#E0E2E4',
        'primary-blue': '#375673',
        'primary-green': '#377364'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tektur: ['Tektur', 'sans-serif'], // Add the font family
      },
    }
  },
  plugins: [],
}

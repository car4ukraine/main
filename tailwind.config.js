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
      dropShadow: {
        custom: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      width: {
        'slide': 'calc(100% / var(--slide-count))',
      },
      colors: {
        mainColor: '#3D4650'
      },
      backgroundImage: {
        'custom-bg': "url('assets/images/about/group.png')",
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}

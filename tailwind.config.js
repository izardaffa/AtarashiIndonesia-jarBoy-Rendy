/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './dist/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: '#ED1C24',
      },
    },
  },
  plugins: [],
}


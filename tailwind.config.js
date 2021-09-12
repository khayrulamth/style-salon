module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'c-main': '#6C63FF',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
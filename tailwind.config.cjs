/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{html,js}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#189992',
        secondary: '#60f1ac',
        accent: '#f66',
        white: '#efefef',
        black: '#020202',
        gray: '#72674c'
      },
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
        'secondary': ['Citrus Gothic', 'sans-serif']
      }
    }
  },
  plugins: []
};

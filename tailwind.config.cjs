/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{html,js}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        gray: {
          tt: '#72674c'
        },
        black: {
          tt: '#020202'
        },
        orange: {
          tt: '#ef9d00'
        }
      },
      fontFamily: {
        title: ['"Cooper Black"']
      }
    }
  },
  plugins: []
};

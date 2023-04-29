module.exports = {
  purge: ['./src/**/*.{html,js}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#026769',
        secondary: '#60eda8',
        accent: '#db0000',
        tertiary: '#fcc',
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
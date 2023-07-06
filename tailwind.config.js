export default {
  content: ['./src/**/*.{html,js}'],
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
      },
      animation: {
        fade: 'fadeOut 1s ease-in-out forwards',
        other: 'fadeIn 1.5s linear'
      },
      keyframes: () => ({
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      })
    }
  },
  plugins: []
};
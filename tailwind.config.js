module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'app-yellow': '#FBD116',
        'app-gray-bg': '#FFFFFF',
        'app-gray-item-bg': '#EFEFEF',
        'app-gray-item-text': '#ADADAD',
        'app-black': '#131313',
      },
      rotate:{
        '135': '135deg',
        '-135': '-135deg',
      },
      scale:{
        '85': '.85'
      },
      backgroundSize:{
        '50%': '50%',
      },
      maxWidth:{
        '1.8xl': '40rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

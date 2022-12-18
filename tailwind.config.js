/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.css',
    './src/**/*.html',
    './src/**/*.js',
    './public/**/*.html',
    './public/**/*.js'
  ],
  theme: {
    colors: {
      primary: '#0070f3',
      secondary: '#8a8a8a',
      white: '#FFFFFF',
      yellow: '#F8C630',
      success: '#28a745',
      danger: '#dc3545',
      warning: '#ffc107',
      background: '#18141B',
      menubg: '#101014',
      opa0: '#00000000',
    },
    dropShadow: {
      border: '0 0 3px #F8C630'
    },
    fontFamily: {
      special: [
        'Orbitron',
        'sans-serif',
      ],
      special2: [
        'Uncial Antiqua',
        'sans-serif',
      ],
      sans: [
        'Nunito',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Georgia',
        'Cambria',
      ],
    },
    extend: {
      backgroundImage: {
      },
      height: {
        '1/10': '8%'
      },
      width: {
        '9/10': '92%'
      }
    }
  },
  plugins: [],
}

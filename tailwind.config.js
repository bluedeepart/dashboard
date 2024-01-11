/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./**/*.html'],
  theme: {
    screens: {
      'sm': '540px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    colors: {
      primary: '#2c81ff',
      secondary: '#0a0c29',
      grey: '#6f767e',
      light: '#f5f8fa',
      white: '#fff',
    },
    fontFamily: {
      serif: 'Open Sans, sans-serif',
    },
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
        yellow: colors.yellow,
        orange: colors.orange,
        green: colors.green,
        red: colors.red,
        gray: colors.gray,
        neutral: colors.neutral
      },
    },
  },
  plugins: [],
}


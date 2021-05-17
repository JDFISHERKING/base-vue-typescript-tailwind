const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
    },
    // fontFamily: {
    //   sans: ['Inter', ...defaultTheme.fontFamily.sans],
    //   mono: [...defaultTheme.fontFamily.mono],
    // },
    screens: {
      xxs: '428px',
      xs: '576px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

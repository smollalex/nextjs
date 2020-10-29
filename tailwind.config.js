const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
      // padding: '2rem',
      default: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
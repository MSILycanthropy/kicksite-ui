module.exports = {
  content: [{ raw: '' }],
  darkMode: 'class',
  theme: {
    extend: {
      colors: require('../themes/colors')
    }
  },
  plugins: [
    require('tailwindcss/plugin')(({ addBase, addUtilities }) => {
      addUtilities(require('../../dist/utilities'))
      addBase(require('../../dist/base'))
    })
  ],
}

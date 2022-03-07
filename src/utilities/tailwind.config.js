module.exports = {
  content: [{ raw: '' }],
  theme: {
    extend: {
      colors: require('../themes/colors')
    }
  },
  plugins: [
    require('tailwindcss/plugin')(({ addBase }) => {
      addBase(require('../../dist/base'))
    })
  ],
}

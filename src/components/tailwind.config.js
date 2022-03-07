module.exports = require('../config').tailwindcss(({ addBase, addUtilities }) => {
  addUtilities(require('../../dist/utilities'))
  addBase(require('../../dist/base'))
})

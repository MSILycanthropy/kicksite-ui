const selectorParser = require('postcss-selector-parser')

module.exports = require('../config').tailwindcss(({ addVariant, addBase, addUtilities }) => {
  addUtilities(require('../../dist/utilities'))
  addBase(require('../../dist/base'))
  addVariant('hocus', ['&:hover', '&:focus-visible'])
  addVariant('disabled', ['&:disabled', '&.disabled'])
})

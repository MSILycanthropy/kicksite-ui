const selectorParser = require('postcss-selector-parser')

module.exports = require('../config').tailwindcss(({ addVariant, addBase, addUtilities, e, postcss, prefix }) => {
  addUtilities(require('../../dist/utilities'))
  addBase(require('../../dist/base'))
  // TODO: So I think we should switch back to the [data-theme] method of doing things
  // because the custom variants are WAY more powerful than I thought
  //
  addVariant('hocus', ['&:hover', '&:focus-visible'])
  addVariant('disabled', ['&:disabled', '&.disabled'])
})

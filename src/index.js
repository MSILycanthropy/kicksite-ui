const components = require('../dist/components')
const base = require('../dist/base')
const themes = require('./themes/themes')
const themeUtils = require('./themes/utils')
const colors = require('./themes/colors')
const fontFamily = require('./themes/fonts')

const main = ({ addBase, addComponents }) => {
  //
  // TODO: Need to talk with Joney about how we actually,
  // want to set the line heights for different font sizes
  // by default we want it to be like 1.5 to look good in most browsers
  // but we want to be able to override it for font sizes
  // https://tailwindcss.com/docs/font-size
  //
  themeUtils.addThemes(addBase, themes)

  addBase(base)
  addComponents(components)
}

module.exports = require('tailwindcss/plugin')(main, {
  darkMode: 'class',
  theme: {
    fontFamily,
    extend: { colors }
  }
})

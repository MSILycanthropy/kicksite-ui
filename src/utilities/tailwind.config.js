module.exports = require('../config').tailwindcss(({ addBase }) => {
  addBase(require('../../dist/base'))
})

const themeColors = require('./themes')

const darkColors = Object.entries(themeColors.dark).map(entry => {
  const key = entry[0]
  const value = entry[1]

  return {
    [`${key}-dark`]: value
  }
}).reduce((obj, acc) => ({ ...obj, ...acc}), {})

const defaultColors = Object.entries(themeColors.default).map(entry => {
  const key = entry[0]
  const value = entry[1]

  return {
    [key]: value
  }
}).reduce((obj, acc) => ({ ...obj, ...acc}), {})


module.exports = {
  ...darkColors,
  ...defaultColors,
  ...themeColors.shared,
}

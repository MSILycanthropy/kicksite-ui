const themes = require('./themes')

// Really dumb way to do this beacuse array comparison
// only returns true if the arrays are the same reference
if (Object.keys(themes.dark).join('') !== Object.keys(themes.default).join('')) {
  throw new Error('The dark and default themes must have the same colors')
}

const themeColors = Object.keys(themes.default).map(key => ({
  [key]: withOpacity(key)
})).reduce((obj, acc) => ({ ...obj, ...acc}), {})

module.exports = {
  ...themeColors,
  ...themes.shared
}

function withOpacity(variable) {
  return ({ opacity }) => {
    if (opacity === undefined) {
      return `rgb(var(--color-${variable}))`
    }

    return `rgba(var(--color-${variable}), ${opacity})`
  }
}

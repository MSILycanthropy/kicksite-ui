const Color = require('color')

module.exports = {
  darken: (color, amount) => {
    return Color(color).darken(amount).hex()
  },
  lighten: (color, amount) => {
    return Color(color).lighten(amount).hex()
  },
  alpha: (color, amount) => {
    return Color(color).alpha(amount).hex()
  }
}

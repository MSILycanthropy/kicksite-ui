function withOpacity(variable) {
  return ({ opacity }) => {
    if (opacity === undefined) {
      return `rgb(var(--color-${variable}))`
    }

    return `rgba(var(--color-${variable}), ${opacity})`
  }
}

//
// TODO: add the actual colors and also
//       add default colors, so the thought that I had for this
//       is that essentially the ones that don't change
//       (like primary, secondary, tertiary), just get set
//       in addThemes, in the root but don't get changed
//       by the theme? IDK if that would be confusing for
//       people who have to maintain that or not
//
module.exports = {
  primary: withOpacity('primary'),
  secondary: withOpacity('secondary'),
  tertiary: withOpacity('tertiary'),
  quaternary: withOpacity('quaternary'),
  content: withOpacity('content'),
  'kicksite-yellow': '#F2A900'
}

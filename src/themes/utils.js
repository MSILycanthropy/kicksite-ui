function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  if (!result) return

  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
}

module.exports = {
  addThemes: (addBase, themes) =>{
    // Add the default theme
    const defaultColors = themes['default']

    addBase({
      ':root': {
        '--color-primary': hexToRgb(defaultColors.primary),
        '--color-secondary': hexToRgb(defaultColors.secondary),
        '--color-tertiary': hexToRgb(defaultColors.tertiary),
        '--color-quaternary': hexToRgb(defaultColors.quaternary),
        '--color-content': hexToRgb(defaultColors.content)
      }
    })

    for (const [ name, colors ] of Object.entries(themes)) {
      addBase({
        [`body.${name}`]: {
          '--color-primary': hexToRgb(colors.primary),
          '--color-secondary': hexToRgb(colors.secondary),
          '--color-tertiary': hexToRgb(colors.tertiary),
          '--color-quaternary': hexToRgb(colors.quaternary),
          '--color-content': hexToRgb(colors.content)
        }
      })
    }
  }
}

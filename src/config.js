module.exports = {
  postcss: (config) => {
    return {
      plugins: {
        'tailwindcss/nesting': 'postcss-nested',
        tailwindcss: { config },
        'postcss-preset-env': { features: { 'nesting-rules': false } }
      }
    }
  },
  tailwindcss: (pluginFunction) => {
    return {
      content: [{ raw: '' }],
      darkMode: 'class',
      theme: {
        extend: {
          colors: require('./themes/colors')
        }
      },
      plugins: [
        require('tailwindcss/plugin')(pluginFunction)
      ],
    }
  }
}

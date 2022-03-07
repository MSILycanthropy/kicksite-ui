module.exports = {
  postcss: (config) => {
    return {
      parser: 'postcss-safe-parser',
      plugins: {
        'postcss-nested': {},
        'postcss-preset-env': { features: { 'nesting-rules': false } },
        'postcss-sorting': {},
        'postcss-mixins': {},
        'postcss-simple-vars': {},
        tailwindcss: { config },
        autoprefixer: {},
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

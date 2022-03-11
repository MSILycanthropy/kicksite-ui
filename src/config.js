module.exports = {
  postcss: (config) => {
    return {
      parser: 'postcss-safe-parser',
      plugins: {
        'postcss-nested': {},
        'postcss-sorting': {},
        'postcss-simple-vars': {
          variables: require('./themes/colors')
        },
        'postcss-functions': {
          functions: require('./helpers/colors')
        },
        tailwindcss: { config },
        'postcss-preset-env': { features: { 'nesting-rules': false } },
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

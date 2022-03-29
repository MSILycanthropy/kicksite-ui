module.exports = {
  postcss: (config) => {
    return {
      parser: 'postcss-safe-parser',
      plugins: {
        'tailwindcss/nesting': 'postcss-nested',
        'postcss-simple-vars': {
          variables: require('./themes/variables')
        },
        tailwindcss: { config },
        'postcss-functions': {
          functions: require('./helpers/colors')
        },
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

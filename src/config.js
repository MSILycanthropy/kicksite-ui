module.exports = (config) => {
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
}

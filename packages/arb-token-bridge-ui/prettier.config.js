module.exports = {
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  trailingComma: 'none',

  // Plugins
  plugins: [require('prettier-plugin-tailwindcss')],
  eslintIntegration: false, // Disables ESLint integration
  tslintIntegration: false // Disables TSLint integration
}

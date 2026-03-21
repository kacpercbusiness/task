import spaceBeforeFunctionParen from 'prettier-plugin-space-before-function-paren';

/** @type {import('prettier').Config} */
const config = {
  printWidth: 120,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: 'none',
  plugins: [spaceBeforeFunctionParen]
};

export default config;

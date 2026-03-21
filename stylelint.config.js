export default {
  ignoreFiles: [
    'dist/**/*',
    'build/**/*',
    'coverage/**/*',
    '.output/**/*',
    'out/**/*'
  ],

  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],

  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules'
  ],

  rules: {
    'color-hex-length': 'short',
    'number-leading-zero': 'always',
    'string-quotes': 'single',

    'max-nesting-depth': 3,
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-max-specificity': '0,3,0',

    'declaration-no-important': true,
    'declaration-block-no-duplicate-properties': true,

    'plugin/selector-bem-pattern': {
      componentName: '[a-z]+',
      componentSelectors: {
        initial: '^\\.{componentName}(?:__[a-z]+)?(?:--[a-z]+)?$'
      }
    },

    'order/properties-order': [
      [
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',

        'display',
        'flex',
        'flex-direction',
        'justify-content',
        'align-items',
        'gap',

        'width',
        'height',
        'max-width',
        'max-height',

        'margin',
        'padding',

        'font',
        'font-size',
        'font-weight',
        'line-height',
        'text-align',

        'color',
        'background',
        'border',
        'border-radius',

        'opacity',
        'transition',
        'transform'
      ],
      {
        unspecified: 'bottomAlphabetical'
      }
    ],

    // Support CSS Modules @value and other non-standard at-rules
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'value',          // CSS Modules token import
          'extend',         // SCSS
          'at-root',
          'include',
          'mixin',
          'if',
          'else',
          'for',
          'each',
          'function',
          'return'
        ]
      }
    ],

    // SCSS-specific rules
    'scss/at-rule-no-unknown': true
  }
};
export default {
  extends: [
    'stylelint-config-standard',
    '@stylistic/stylelint-config',
    'stylelint-config-recess-order',
  ],
  rules: {
    '@stylistic/no-empty-first-line': null,
    '@stylistic/no-eol-whitespace': null,
    '@stylistic/no-missing-end-of-source-newline': null,
    'declaration-property-value-no-unknown': [
      true, {
        ignoreProperties: {
          'appearance': ['base-select'],
          // eslint-disable-next-line perfectionist/sort-objects
          '/.+/': ['/anchor[^(]*\\(.+\\)/'],
        },
      },
    ],
    'no-descending-specificity': null,
    'selector-not-notation': 'simple',
  },
}

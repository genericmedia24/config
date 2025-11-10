import html from '@html-eslint/eslint-plugin'

export default {
  extends: [
    html.configs.recommended,
  ],
  files: [
    '**/*.html',
  ],
  language: 'html/html',
  rules: {
    'html/attrs-newline': [
      'error',
      {
        ifAttrsMoreThan: 4,
      },
    ],
    'html/indent': ['error', 2],
    'html/lowercase': ['error'],
    'html/no-extra-spacing-text': ['error'],
    'html/no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'html/sort-attrs': ['error'],
    'html/use-baseline': [
      'error',
      {
        available: 'newly',
      },
    ],
  },
}

import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import perfectionist from 'eslint-plugin-perfectionist'
import tslint from 'typescript-eslint'

export default {
  extends: [
    eslint.configs.all,
    tslint.configs.all,
    stylistic.configs.recommended,
    perfectionist.configs['recommended-alphabetical'],
  ],
  files: [
    '**/*.ts',
    '**/*.mjs',
    '*.mjs',
  ],
  languageOptions: {
    globals: {
      process: 'readonly',
    },
    parserOptions: {
      projectService: {
        allowDefaultProject: [
          '*/*.mjs',
          '*.mjs',
        ],
      },
    },
  },
  rules: {
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          ':': 'before',
          '?': 'before',
        },
      },
    ],
    '@stylistic/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: 'block-like',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'block-like',
      },
      {
        blankLine: 'always',
        next: '*',
        prev: ['const', 'expression', 'let'],
      },
      {
        blankLine: 'never',
        next: ['const', 'let'],
        prev: 'const',
      },
      {
        blankLine: 'never',
        next: ['const', 'let'],
        prev: 'let',
      },
      {
        blankLine: 'never',
        next: 'expression',
        prev: 'expression',
      },
      {
        blankLine: 'never',
        next: ['break', 'throw'],
        prev: ['const', 'expression', 'let'],
      },
      {
        blankLine: 'always',
        next: 'import',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'import',
      },
      {
        blankLine: 'never',
        next: 'import',
        prev: 'import',
      },
      {
        blankLine: 'always',
        next: ['multiline-const', 'multiline-expression', 'multiline-let'],
        prev: '*',
      },
      {
        blankLine: 'always',
        next: '*',
        prev: ['multiline-const', 'multiline-expression', 'multiline-let'],
      },
    ],
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
      },
    ],
    '@typescript-eslint/class-methods-use-this': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ],
    '@typescript-eslint/max-params': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-invalid-void-type': [
      'error',
      {
        allowAsThisParameter: true,
      },
    ],
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-unnecessary-type-parameters': 'off',
    '@typescript-eslint/no-unsafe-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        caughtErrors: 'none',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-readonly': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/unbound-method': [
      'error',
      {
        ignoreStatic: true,
      },
    ],
    'arrow-body-style': 'off',
    'capitalized-comments': 'off',
    'complexity': 'off',
    'func-style': ['error', 'declaration'],
    'id-length': 'off',
    'max-classes-per-file': 'off',
    'max-depth': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-statements': 'off',
    'new-cap': 'off',
    'no-nested-ternary': 'off',
    'no-ternary': 'off',
    'no-undefined': 'off',
    'no-void': 'off',
    'one-var': 'off',
    'perfectionist/sort-imports': [
      'error',
      {
        newlinesBetween: 'never',
      },
    ],
    'sort-imports': 'off',
    'sort-keys': 'off',
  },
}

import tslint from 'typescript-eslint'

export default {
  extends: [
    tslint.configs.disableTypeChecked,
  ],
  files: [
    '**/*.mjs',
    '*.mjs',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}

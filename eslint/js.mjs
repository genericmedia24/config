import tslint from 'typescript-eslint'

export default {
  files: [
    '**/*.mjs',
    '*.mjs',
  ],
  ...tslint.configs.disableTypeChecked,
}

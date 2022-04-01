// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('@robdvins/eslint-config-base')

module.exports = {
  extends: ['@robdvins/eslint-config-base', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  overrides: base.overrides,
  rules: {
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    // TS
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}

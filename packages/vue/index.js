module.exports = {
  extends: ['plugin:vue/vue3-recommended', '@robdvins/eslint-config-ts'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off'
      }
    }
  ],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/one-component-per-file': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ]
  }
}

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ['standard', 'plugin:import/recommended', 'plugin:jsonc/base', 'plugin:yml/standard'],
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'comma-dangle': ['error', 'never'],
        'quote-props': ['error', 'always'],
        quotes: ['error', 'double']
      }
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser'
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'description',
              'keywords',
              'private',
              'author',
              'contributors',
              'funding',
              'license',
              'main',
              'module',
              'types',
              'exports',
              'files',
              'bin',
              'repository',
              'bugs',
              'scripts',
              'husky',
              'lint-staged',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'devDependencies',
              'engines',
              'publishConfig'
            ]
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' }
          }
        ]
      }
    }
  ],
  rules: {
    // import
    'import/first': 'error',
    'import/no-absolute-path': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/order': 'error',

    // Common
    quotes: ['error', 'single'],
    'no-unused-vars': 'warn',
    'space-before-function-paren': ['error', 'never'],
    camelcase: 'off',
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never']
  }
}

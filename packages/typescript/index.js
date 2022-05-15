// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('@robdvins/eslint-config-base')

module.exports = {
  extends: ['@robdvins/eslint-config-base', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  overrides: [
    ...base.overrides,
    {
      files: ['tsconfig.json', 'tsconfig.*.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^compilerOptions$',
            order: [
              /* Projects */
              'incremental',
              'composite',
              'tsBuildInfoFile',
              'disableSourceOfProjectReferenceRedirect',
              'disableSolutionSearching',
              'disableReferencedProjectLoad',

              /* Language and Environment */
              'target',
              'lib',
              'jsx',
              'experimentalDecorators',
              'emitDecoratorMetadata',
              'jsxFactory',
              'jsxFragmentFactory',
              'jsxImportSource',
              'reactNamespace',
              'noLib',
              'useDefineForClassFields',

              /* Modules */
              'module',
              'rootDir',
              'moduleResolution',
              'baseUrl',
              'paths',
              'rootDirs',
              'typeRoots',
              'types',
              'allowUmdGlobalAccess',
              'resolveJsonModule',
              'noResolve',

              /* JavaScript Support */
              'allowJs',
              'checkJs',
              'maxNodeModuleJsDepth',

              /* Emit */
              'declaration',
              'declarationMap',
              'emitDeclarationOnly',
              'sourceMap',
              'outFile',
              'outDir',
              'removeComments',
              'noEmit',
              'importHelpers',
              'importsNotUsedAsValues',
              'downlevelIteration',
              'sourceRoot',
              'mapRoot',
              'inlineSourceMap',
              'inlineSources',
              'emitBOM',
              'newLine',
              'stripInternal',
              'noEmitHelpers',
              'noEmitOnError',
              'preserveConstEnums',
              'declarationDir',
              'preserveValueImports',

              /* Interop Constraints */
              'isolatedModules',
              'allowSyntheticDefaultImports',
              'esModuleInterop',
              'preserveSymlinks',
              'forceConsistentCasingInFileNames',
              'strict',
              'noImplicitAny',
              'strictNullChecks',
              'strictFunctionTypes',
              'strictBindCallApply',
              'strictPropertyInitialization',
              'noImplicitThis',
              'useUnknownInCatchVariables',
              'alwaysStrict',
              'noUnusedLocals',
              'noUnusedParameters',
              'exactOptionalPropertyTypes',
              'noImplicitReturns',
              'noFallthroughCasesInSwitch',
              'noUncheckedIndexedAccess',
              'noImplicitOverride',
              'noPropertyAccessFromIndexSignature',
              'allowUnusedLabels',
              'allowUnreachableCode',

              /* Completeness */
              'skipDefaultLibCheck',
              'skipLibCheck'
            ]
          }
        ]
      }
    }
  ],
  rules: {
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    // TS
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}

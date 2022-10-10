/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  plugins: ['import', 'eslint-plugin-import-helpers'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^~//', '/^@//'],
        alphabetize: { order: 'asc', ignoreCase: false },
      },
    ],
    'vue/multi-word-component-names': 'off',
    'no-undef': 'off',
    'vue/no-setup-props-destructure': 'off',
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
      },
    ],
    'vue/block-tag-newline': [
      'error',
      { singleline: 'always', multiline: 'always', maxEmptyLines: 1 },
    ],
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
      },
    ],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': [
      'error',
      'camelCase',
      {
        ignores: [],
      },
    ],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits'],
      },
    ],
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['ts', 'vue'],
        shouldMatchCase: true,
      },
    ],
    'vue/no-multiple-objects-in-class': ['error'],
    'vue/no-ref-object-destructure': ['error'],
    'vue/no-required-prop-with-default': ['error'],
    'vue/no-v-text': ['error'],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prefer-true-attribute-shorthand': ['error', 'always'],
    'vue/require-name-property': ['error'],
    'vue/v-for-delimiter-style': ['error', 'in'],
  },
}

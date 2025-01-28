const eslintConfig = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'explicit-module-boundary-types': 'off',
    'prettier/prettier': [1, { endOfLine: 'auto' }, { usePrettierrc: true }],
    'vue/multi-word-component-names': 'off',
  },
}

module.exports = eslintConfig

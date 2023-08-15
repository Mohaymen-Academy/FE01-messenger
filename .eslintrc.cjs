module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: './',
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'no-extra-semi': 'error',
    'no-shadow': 'off',
    'import/extensions': ['error', 'never'],
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: [],
      },
    ],
    'no-param-reassign': 'off',
    eqeqeq: 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
}

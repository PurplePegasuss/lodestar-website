module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['*.cjs', 'dist*/', 'build*/', 'release/', 'webpack/'],
  overrides: [
    {
      files: ['vite.*.ts'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
  plugins: ['react', '@typescript-eslint', 'react-refresh'],
  rules: {
    'no-spaced-func': 0,
    'no-confusing-arrow': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'object-curly-newline': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/destructuring-assignment': 0,
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/require-default-props': 0,
    'react/self-closing-comp': 1,
    'react-refresh/only-export-components': 1,
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: ['variable', 'function'],
        format: null,
        leadingUnderscore: 'allow',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-expressions': [2, { enforceForJSX: true }],
  },
};

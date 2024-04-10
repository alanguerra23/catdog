/**
 * @descrição do arquivo: Este é um arquivo de configuração do eslint para o projeto web com nextjs
 */
module.exports = {
  // Configuração de root
  root: true,
  // Ambiente de execução
  env: {
    browser: true,
    es2021: true,
  },
  // eslint parser para o projeto
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  // extends do eslint para o projeto
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  // Eslint ignora esses arquivos
  ignorePatterns: ['.eslintrc.cjs'],
  // plugins do eslint para o projeto
  plugins: ['@typescript-eslint', 'react'],
  // extensões de arquivos para o eslint
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
    }
  ],
  // Regras do eslint
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'ident': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
  },
  // Configurações extras do eslint
  settings: {
    react: {
      version: 'detect',
    },
  },
  // configurações globais do eslint
  globals: {
    React: 'writable',
    JSX: 'writable',
  },
};

const path = require('path');

module.exports = {
  extends: [
    'airbnb-base',
    'airbnb/rules/react',
  ],
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    jest: true,
  },
  globals: {
    document: true,
    window: true,
  },
  rules: {
    'linebreak-style': 0,
    'react/prop-types': 0,
    'no-confusing-arrow': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './config/**',
          '**/*.config.*',
          '**/*.spec.*',
          '**/*.test.*',
        ],
      },
    ],
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignorePattern: '^(.*)@typedef(.*)',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^TypesDefs(.*)',
      },
    ],
    'import-order-alphabetical': 0,
  },
  plugins: ['eslint-plugin-import-order-alphabetical'],
  settings: {
    node: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      alias: {
        map: [
          ['@components', path.resolve(__dirname, './src/components')],
          ['@redux', path.resolve(__dirname, './src/redux')],
          ['@pages', path.resolve(__dirname, './src/pages')],
          ['@hooks', path.resolve(__dirname, './src/hooks')],
          ['@helpers', path.resolve(__dirname, './src/helpers')],
          ['@services', path.resolve(__dirname, './src/services')],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};

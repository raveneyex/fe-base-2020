export default {
  'env': {
    'browser': true,
    'es2021': true,
    'jasmine': true
  },
  'globals': {
    module: tr
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'curly': ['error', 'all'],
    'max-len': ['error', { 'code': 120 }],
    'comma-dangle': ['error', 'never'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 'first']
  }
};

// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: ['airbnb-base', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
  },
  plugins: [
    'react',
  ],
  globals: {
    FB: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
};
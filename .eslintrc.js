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
    FB: false,
    pug: false,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  rules: {    
    'class-methods-use-this': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
};
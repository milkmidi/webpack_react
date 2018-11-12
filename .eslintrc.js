module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    FB: false,
    ga: false,
    pug: false,
    TweenMax: false,
    device: false,
  },
  plugins: [
    'import',
    'react',
    'flowtype',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  rules: {
    'import/no-unresolved': 0,
    'global-require': 0,
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-extraneous-dependencies': 'off',
    'import/extensions': ['off', 'never'],
    'no-param-reassign': ['error', {
      props: false,
    }],
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
  },
};

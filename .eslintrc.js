// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    "ecmaFeatures": {
      "jsx": true
    },
  },
  env: {
    browser: true,
  },
  extends: ['airbnb-base', "plugin:react/recommended"],
  plugins: [
    'react',
  ],
  globals: {
    /*"Vue": true,
    "$": true,
    'Vuex': true,
    'jQuery': true,
    'FB': true,*/
  },

  plugins: [
    'react',
  ],

  // eslint-plugin-import 會用 webpack 的 resolve modules 設定
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },

  // 自訂規則
  rules: {
    /*'import/extensions': ['error', 'always', {
      js: 'never',
    }],*/
    "import/no-extraneous-dependencies":"off",
  },
};
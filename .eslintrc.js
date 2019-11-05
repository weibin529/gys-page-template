module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['standard', 'plugin:vue/recommended'],
  plugins: ['vue'],
  globals: {
    Vue: false,
    Vuex: false,
    axios: false,
    Router: false,
    VueRouter:false,
    GYSPortal:false
  },
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'prefer-const': 2,
    'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }],
    'vue/max-attributes-per-line': 0,
    complexity: [1, 8],
    'max-len': [
      1,
      {
        code: 200,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
}

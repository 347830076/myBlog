module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard", "./eslint-defaults.js"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    // 禁止未使用过的变量，忽略函数参数中的 h，因为 h 在 render 函数参数中是 createElement 的别名
    // 参考：https://cn.vuejs.org/v2/guide/render-function.html#JSX
    "no-unused-vars": [1, { argsIgnorePattern: "^h$" }]
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
}

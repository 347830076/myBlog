// eslint-plugin-vue 规则官网 https://eslint.vuejs.org/rules/https://eslint.vuejs.org/rules/

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
    // 禁止出现未使用过的变量, argsIgnorePattern忽略 h
    'no-unused-vars': [1, { argsIgnorePattern: '^h$' }],
    // 警告注册模板中未使用的组件
    'vue/no-unused-components': 1,
    // 要求或禁止在标签的右括号前换行
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never', // 单行元素的配置。如果元素没有属性或最后一个属性与左括号在同一行，则它是一个单行元素, never 禁止在右括号前换行
        multiline: 'never', // 多行元素的配置。如果最后一个属性不在左括号的同一行上，则它是一个多行元素。never 禁止在右括号前换行
      }
    ],
    // 在标签的右括号前要求或不允许有空格
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never', // 开始标记的设置 "never" ... 不允许空格。
        endTag: 'never', // 结束标记的设置 "never" ... 不允许空格。
        selfClosingTag: 'always' // 自闭合标签的设置 always 需要一个或多个空格
      }
    ],
    // 强制自闭合标签（双标签没内容时，就会自动变成单标签自闭合）
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always', // "always" 需要在没有内容的元素上自动关闭
          normal: 'always',
          component: 'always' // Vue.js 自定义组件的样式
        },
        svg: 'always',
        math: 'always'
      }
    ],
    // 需要在多行元素的内容前后换行
    'vue/multiline-html-element-content-newline': 'error',
    // 强制每行的最大属性数, 超出自动换行
    'vue/max-attributes-per-line': [
      'error', {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: false // allowFirstLine  如果true，它允许与该标记名称在同一行的属性
        }
      }
    ],
    // 强制使用一致的缩进
    'vue/html-indent': [
      'error', 2, {
        attribute: 1, // 属性缩进的乘数
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false, // 在多行情况下，属性是否应与第一个属性垂直对齐的条件
        ignores: []
      }
    ],
    // 双花括号和内容之间需要有一个空格
    'vue/mustache-interpolation-spacing': 'error',
    // 不允许在属性中的等号周围有空格
    'vue/no-spaces-around-equal-signs-in-attribute': 2,
    // 禁止多个空格
    'vue/no-multi-spaces': 'error',
    // 禁止在计算属性中执行异步操作
    'vue/no-async-in-computed-properties': 2,
    // 禁止嵌套变量一样，同个作用域不能有两个一样的变量
    'vue/no-template-shadow': 2,
    // props 属性必须填类型
    'vue/require-prop-types': 2
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

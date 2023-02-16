// eslint-plugin-vue 规则官网 https://eslint.vuejs.org/rules/https://eslint.vuejs.org/rules/

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard', './eslint-defaults.js'],
  parserOptions: {
    parser: 'babel-eslint'
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
      2,
      {
        singleline: 'never', // 单行元素的配置。如果元素没有属性或最后一个属性与左括号在同一行，则它是一个单行元素, never 禁止在右括号前换行
        multiline: 'always', // 多行元素的配置。如果最后一个属性不在左括号的同一行上，则它是一个多行元素。never 禁止在右括号前换行
      }
    ],
    // 在标签的右括号前要求或不允许有空格
    'vue/html-closing-bracket-spacing': [
      2,
      {
        startTag: 'never', // 开始标记的设置 "never" ... 不允许空格。
        endTag: 'never', // 结束标记的设置 "never" ... 不允许空格。
        selfClosingTag: 'always' // 自闭合标签的设置 always 需要一个或多个空格
      }
    ],
    // 强制自闭合标签（双标签没内容时，就会自动变成单标签自闭合）
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'never', // HTML 原生空标签的样式
          normal: 'always', // HTML 原生除空标签外其他标签的样式
          component: 'always' // Vue.js 自定义组件的样式
        },
        svg: 'always',
        math: 'always'
      }
    ],
    // 需要在多行元素的内容前后换行
    'vue/multiline-html-element-content-newline': 2,
    // 强制每行的最大属性数, 超出自动换行
    'vue/max-attributes-per-line': [
      2, {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false // allowFirstLine  如果true，它允许与该标记名称在同一行的属性
        }
      }
    ],
    // 强制使用一致的缩进
    'vue/html-indent': [
      2, 2, {
        attribute: 1, // 属性的缩进倍数
        baseIndent: 1, // 顶级语句的缩进倍数
        closeBracket: 0, // 右括号缩进的倍数
        alignAttributesVertically: true, // 在多行情况下，属性是否应与第一个属性垂直对齐的条件
        ignores: []
      }
    ],
    // 双花括号和内容之间需要有一个空格
    'vue/mustache-interpolation-spacing': 2,
    // 不允许在属性中的等号周围有空格
    'vue/no-spaces-around-equal-signs-in-attribute': 2,
    // 禁止多个空格
    'vue/no-multi-spaces': 2,
    // 禁止在计算属性中执行异步操作
    'vue/no-async-in-computed-properties': 2,
    // 禁止嵌套变量一样，同个作用域不能有两个一样的变量
    'vue/no-template-shadow': 2,
    // props 属性必须填类型
    'vue/require-prop-types': 2,
    // 在模板中的自定义组件上强制设置 props 格式为小写加横线还是驼峰(always/never)
    'vue/attribute-hyphenation': [
      2, 'always', {
        ignore: []
      }
    ],
    // 定义组件名称（name 属性）格式为小写加横线还是大驼峰(kebab-case/PascalCase)
    'vue/component-definition-name-casing': [2, 'kebab-case'],
    // html 必须要有结束标签
    'vue/html-end-tags': 2,
    // 强制 HTML 属性的引号样式
    'vue/html-quotes': [
      2, 'double', {
        avoidEscape: true // 字符串包含必须转义的引号时允许使用单引号
      }
    ],
    // 定义组件时 prop 属性必须是驼峰格式
    'vue/prop-name-casing': [2, 'camelCase'],
    // v-bind 用缩写
    'vue/v-bind-style': 2,
    // v-on 用缩写
    'vue/v-on-style': 2,
    // 属性顺序
    'vue/attributes-order': 2,
    // 标签顺序
    'vue/component-tags-order': [
      2, {
        order: ['style', 'template', 'script']
      }
    ],
    // 禁用空 template
    'vue/no-lone-template': 2,
    // 禁止传多个参数给作用域插槽
    'vue/no-multiple-slot-args': 2,
    // 禁止使用 v-html
    'vue/no-v-html': 1,
    // 组件对象中属性的顺序
    'vue/order-in-components': 2,
    // 模板中禁止使用 this
    'vue/this-in-template': 2,
    // 块级标签开始和结尾处需要换行
    'vue/block-tag-newline': 2,
    // template 中的组件命名格式
    'vue/component-name-in-template-casing': [
      2, 'PascalCase', {
        registeredComponentsOnly: true,
        ignores: []
      }
    ],
    // emit 自定义事件的命名格式
    'vue/custom-event-name-casing': [
      2,
      'kebab-case',
      {
        ignores: []
      }
    ],
    // html 注释换行
    'vue/html-comment-content-newline': [
      2,
      {
        singleline: 'never',
        multiline: 'always',
      },
      {
        exceptions: []
      }
    ],
    // html 注释空格
    'vue/html-comment-content-spacing': [
      2,
      'always',
      {
        exceptions: []
      }
    ],
    // html 注释缩进
    'vue/html-comment-indent': [2, 2],
    // nextTick 风格
    'vue/next-tick-style': [2, 'promise'],
    // 当存在 target="_blank" 属性时，禁止不带 rel="noopener noreferrer" 的 a 标签
    'vue/no-template-target-blank': 2,
    // beforeRouteEnter 方法中禁用 this
    'vue/no-this-in-before-route-enter': 2,
    // 禁用 v-text
    'vue/no-v-text': 2,
    // template, script 和 style 标签之间换行
    'vue/padding-line-between-blocks': 2,
    // 要求组件要有 name 属性
    'vue/require-name-property': 2,

    // 以下为保持模板中表达式的空格一致
    // 中括号
    'vue/array-bracket-spacing': 2,
    // 箭头
    'vue/arrow-spacing': 2,
    // 大括号
    'vue/block-spacing': 2,
    // 逗号
    'vue/comma-spacing': 2,
    // 函数调用
    'vue/func-call-spacing': 2,
    // key: value
    'vue/key-spacing': 2,
    // 关键字
    'vue/keyword-spacing': 2,
    // 圆括号
    'vue/space-in-parens': 2,
    // 中缀操作符
    'vue/space-infix-ops': 2,
    // 一元操作符
    'vue/space-unary-ops': 2,
    // 模板字符串
    'vue/template-curly-spacing': 2,

    // 全等
    'vue/eqeqeq': 2
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}

# stylelint 升级到14+版本

安装所需依赖
```js
npm install --save-dev postcss postcss-scss postcss-html stylelint-config-standard-scss stylelint-config-standard-vue
```

更新 stylelint 和 stylelint-order：

```js
npm install --save-dev stylelint@latest stylelint-order@latest
```

完整的 stylelintrc.js：

```js
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss'
  ],
  plugins: ['stylelint-order'],
  rules: {
    // 颜色指定大写
    'color-hex-case': 'upper',
    // 禁止空块
    'block-no-empty': true,
    // 颜色6位长度
    'color-hex-length': 'long',
    // 兼容自定义标签名
    'selector-type-no-unknown': [
      true, {
        ignoreTypes: []
      }
    ],
    // 忽略伪类选择器 ::v-deep
    'selector-pseudo-element-no-unknown': [
      true, {
        ignorePseudoElements: ['v-deep']
      }
    ],
    // 禁止低优先级的选择器出现在高优先级的选择器之后。
    'no-descending-specificity': null,
    // 不验证@未知的名字，为了兼容scss的函数
    'at-rule-no-unknown': null,
    // 禁止空注释
    'comment-no-empty': true,
    // 禁止简写属性的冗余值
    'shorthand-property-no-redundant-values': true,
    // 禁止值的浏览器引擎前缀
    'value-no-vendor-prefix': true,
    // 禁止属性的浏览器引擎前缀
    'property-no-vendor-prefix': true,
    // 禁止小于 1 的小数有一个前导零
    'number-leading-zero': 'never',
    // 禁止空第一行
    'no-empty-first-line': true,
    // 属性的排序
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'font-weight',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition'
    ],
    // 以下规则为升级 stylelint 到 14 版本后添加
    // 允许选择器带浏览器前缀，如 -moz-
    'selector-no-vendor-prefix': null,
    // 类名命名规则
    'selector-class-pattern': null,
    // 禁用变量命名规则
    'scss/dollar-variable-pattern': null,
    // mixin 命名规则
    'scss/at-mixin-pattern': null,
    // 这个规则会提示将 map-get 改为 map.get，但是当前版本 scss 不支持，先禁用
    'scss/no-global-function-names': null,
    // 允许在 @extend 后面使用 .类名
    'scss/at-extend-no-missing-placeholder': null,
    // 允许 import scss 文件的时候带后缀名，方便点击跳转
    'scss/at-import-partial-extension': null,
  }
}
```

参考文章

[Migrating to 14.0.0](https://stylelint.io/migration-guide/to-14/)

[ota-meshi/stylelint-config-standard-vue](https://github.com/ota-meshi/stylelint-config-standard-vue#with-scss)
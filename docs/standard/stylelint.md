# stylelint 配置使用

### 安装 stylelint 和 Standard 规范

```
npm install --save-dev stylelint stylelint-config-standard 
```

### 然后再根目录创建 `.stylelintrc.json` 文件, 并写下以下内容

```
{
  "extends": "stylelint-config-standard"
}
```

### 在 `package.json` 文件的 `scripts` 加上命令, 规则检查自动修复css

```
"style": "stylelint 'src/**/*.(vue|scss|css)' --fix",
```

### vscode配置

1. 安裝 StyleLint

2. 在 `settings.json` 文件设置， win + , 快捷键可以快速打开

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  }
}
```
设置完之后，在vscode就可以有提示了，也保存自动修复了


## 自定义css属性顺序规则

除了使用设定默认的 `standard` 规则外，我们还可以在 `.stylelintrc.json` 内添加自己喜欢的规则

1. 先安装 `stylelint-order`

```
npm install stylelint-order --save-dev
```

2. 在 `.stylelintrc.json` 设置代码如下

```json
{
    "plugins": [
        "stylelint-order"
    ],
    "rules": {
        "order/properties-order": [
            "width",
            "height"
        ]
    }
}
```

先引入 `plugins` 插件， 在 ` order/properties-order ` 里面写css属性的先后顺序，

3. 完整的 `.stylelintrc.json` 如下

```json
{
    "extends": [
      "stylelint-config-standard"
    ],
    "plugins": [
      "stylelint-order"
    ],
    "rules": {
      "order/properties-order": [
        // 颜色指定大写
        "color-hex-case": "upper",
        // 颜色6位长度
        "color-hex-length": "long",
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index",
        "display",
        "justify-content",
        "align-items",
        "float",
        "clear",
        "overflow",
        "overflow-x",
        "overflow-y",
        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "border",
        "border-style",
        "border-width",
        "border-color",
        "border-top",
        "border-top-style",
        "border-top-width",
        "border-top-color",
        "border-right",
        "border-right-style",
        "border-right-width",
        "border-right-color",
        "border-bottom",
        "border-bottom-style",
        "border-bottom-width",
        "border-bottom-color",
        "border-left",
        "border-left-style",
        "border-left-width",
        "border-left-color",
        "border-radius",
        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height",
        "font-size",
        "font-family",
        "font-weight",
        "text-align",
        "text-justify",
        "text-indent",
        "text-overflow",
        "text-decoration",
        "white-space",
        "color",
        "background",
        "background-position",
        "background-repeat",
        "background-size",
        "background-color",
        "background-clip",
        "opacity",
        "filter",
        "list-style",
        "outline",
        "visibility",
        "box-shadow",
        "text-shadow",
        "resize",
        "transition"
      ]
    }
}
```


## 忽略stylelint对css的检验

1. 忽略整个文件，在首行加入 `/* stylelint-disable */`

```css
/* stylelint-disable */
html {}
```

2. 忽略多行

```css
/* stylelint-disable */
html {}
.div {
    color: red;
}
/* stylelint-enable */
```

2. 忽略一行， 在样式前加入 /* stylelint-disable-next-line */ 以忽略该行

```css
#id {
  /* stylelint-disable-next-line */
  color: pink !important;
}
```

3. 在 .stylelintrc.json 內设定需要忽略的文件

```sh
{
  ignoreFiles: ["dist/**/*", "src/assets/scss/abc.scss"]
}
```


[stylelint 官网](https://stylelint.io/)
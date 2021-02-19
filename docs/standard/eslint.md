# ESLint 规范

## 在原生 js 项目中使用

1. 通过命令 `npm install eslint --save-dev` 在项目中安装 ESLint，或通过命令 `npm install eslint -g` 在全局安装
2. 引入公司规范文件中的默认配置 <code-link href="/eslint/eslint-defaults.js">eslint-defaults.js</code-link>，并重命名为 `.eslintrc.js`
3. 整个项目代码自动修复格式化可使用命令 `npx eslint --fix`
4. `eslint --no-fix` 检查格式错误，不自动修复

## 在 Vue 项目中使用

### 新项目

1. 执行 `vue create myapp` 通过 vue-cli 创建一个新的项目
2. 选择 "Manually select features" 选项，手动选择需要的功能
3. 保证 "Linter / Formatter" 选项为选中状态
4. 进入 "Pick a linter / formatter config" 选择 linter 配置的步骤时，选择 "ESLint + Standard config"，下一步
5. 选择 "Lint on save"，回车
6. 项目创建后，引入公司规范文件中的默认配置 <code-link href="/eslint/eslint-defaults.js">eslint-defaults.js</code-link>，
并按照 <code-link href="/eslint/eslint-vue.js">eslint-vue.js</code-link> 这个文件的内容覆盖或修改 `.eslintrc.js`

### 现有项目

1. 如果有代码未提交，先执行 `git commit` 命令提交代码，因为在安装插件过程中现有代码会被插件修改
2. 首先通过 `vue add eslint` 命令安装 ESLint 插件，安装过程中会提示选择 ESLint 配置，选择 `Standard` 规范安装
3. 安装完成后，引入公司规范文件中的默认配置 <code-link href="/eslint/eslint-defaults.js">eslint-defaults.js</code-link>，
并按照 <code-link href="/eslint/eslint-vue.js">eslint-vue.js</code-link> 这个文件的内容覆盖或修改 `.eslintrc.js`

### 整个项目代码格式化

- 执行命令 `npx vue-cli-service lint` 即可

## 在 React 项目中使用

### 1. 安装eslint到项目

```bash
npm install eslint --save-dev
```

### 2. 在项目根目录创建ESlint配置文件.eslintrc.js， 也可以使用下面命令创建

```bash
eslint --init
```

以上选项一路回车即可，这些就是使用的eslint规则，后面可以自定义调整；

### 3. 安装 eslint-plugin-react 等相关依赖：

```bash
npm install babel-eslint eslint-plugin-react eslint-plugin-import  --save-dev
```

### 4. 完整的.eslintrc.js配置文件 参考示例：

```js
module.exports = {
    "env": {
        "es2021": true,
        "es6": true,
    },
    "parser": "babel-eslint",
    "extends": [
        "plugin:react/recommended",
        "./eslint-defaults.js",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    "overrides": [
        {
            "files": [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
                "**/*.test.js"
            ],
            "env": {
                "jest": true
            }
        }
    ]
};
```

### 5. 在package.json文件中增加如下脚本指令：

```json
{
  "scripts": {
    "lint": "eslint --ext .js --ext .jsx src"
  }
}
```

`--ext` 这个选项允许你指定 ESLint 在指定的目录下查找 JavaScript文件时要使用的文件扩展名。默认情况下，它使用 .js 作为唯一性文件扩展名。

## VSCode 配置

1. 安装 [ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. 按快捷键 `Win + Shift + p` 输入 setting，选择 `Preference: Open Settings(JSON)`，打开 JSON 格式的配置文件
3. 在末尾添加以下配置：

```json
{
    // ...
    "[vue]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[javascript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[typescript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "eslint.format.enable": true
}
```

配置含义：

- `eslint.format.enable`：使用 ESlint 作为所有由 ESlint 验证的文件的格式化工具
- `"editor.defaultFormatter": "dbaeumer.vscode-eslint"`：指定对应语言的默认格式化工具为我们装的 ESLint 插件
- `editor.codeActionsOnSave`：用于指定当保存代码时需要编辑器执行的动作，里面的值 `"source.fixAll": true` 表示为包括 ESLint 的所有插件启用自动修复，
也可以通过 `"source.fixAll.eslint": true` 只开启 ESLint 的自动修复
- `editor.formatOnSave`：保存文件时自动格式化，当启用了 `editor.codeActionsOnSave` 时建议关掉 `editor.formatOnSave`，如果同时打开会导致保存文件时格式化两次


### eslint 教程

- 安装eslint

```
npm install eslint --save-dev
```

- 添加eslint的配置文件.eslintrc.js

在项目根目录创建ESlint配置文件.eslintrc.js， 也可以使用下面命令创建

```bash
eslint --init
```

以上选项一路回车即可，这些就是使用的eslint规则，后面可以自定义调整；

- 有了eslint之后，我们就能通过它来检查指定的代码文件了。我们在npm scripts加入如下脚本

```
{
  ...
  "scripts": {
    ...
    "lint": "eslint --ext .js --ext .jsx src"
    ...
  }
  ...
}
```

在命令行中运行 npm run lint 即可， --ext 扩展名，

`eslint --ext .js --ext .jsx src` 这句命令的意思是，在src目录下，检查.js和.jsx文件的格式

- 一键自动格式化文件命令, --fix

```
eslint --ext .js --ext .jsx src --fix
```

- 只检查，不自动格式化文件命名
```
eslint --ext .js --ext .jsx src --no-fix
```

#### eslint添加全局变量

在.eslintrc.js文件下添加下面代码，表示eslint知道globals对象的属性它们是全局变量，就不会报错了

```
//全局变量
  "globals": {
    "__DEV__": true,
    "__WECHAT__": true,
    "__ALIPAY__": true,
    "App": true,
    "Page": true,
    "Component": true,
    "Behavior": true,
    "wx": true,
    "getApp": true,
    "getCurrentPages": true,
  },
```

#### .eslintignore文件 指定哪些文件或者文件夹不进行检查

```js
/build/
/config/
/dist/
/test/unit/coverage/
```

记得在你的项目根目录下添加.eslintignore文件哟

#### 忽略单行检查

`// eslint-disable-line`

```js
let a = 1
let b = {} // eslint-disable-line
let c = true
```

#### 忽略多行检查

`/* eslint-disable */ 和 /* eslint-enable */ 组合使用`

```js
/* eslint-disable */
let myCar = new Object()
myCar.make = 'Ford'
myCar.model = 'Mustang'
myCar.year = 1969
/* eslint-enable */
```

`/* eslint-disable */` 写在文件头部或写在需要忽略的代码上方

```js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
```

#### 忽略整个文件或者以下代码全部忽略



参考文章

[掘金 从0到1配置eslint (所有人一看就懂)](https://juejin.cn/post/6844903492545429512#heading-1)

[简书 ESLint 使用记录](https://www.jianshu.com/p/fd4bc462220b)






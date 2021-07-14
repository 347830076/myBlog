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


## eslint 编译时警告或错误的配置

**背景：** 相信大家在项目引入eslint的时候，都会遇到，当eslint报错时就会直接导致整个页面报错，不能运行

其实解决方法也不难，原理是：eslint使用了 `eslint-loader` 或者 `eslint-webpack-plugin`来检验我们的代码是否符合规范

细心的同学，去[eslint-loader](https://www.npmjs.com/package/eslint-loader) 或者 [eslint-webpack-plugin](https://www.npmjs.com/package/eslint-webpack-plugin)的npm官方看文档就会发现，他们会提供这个配置 `failOnError`

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/fail-on-error.png')" />

**这个配置默认是true，只要我们把它关闭（设置为false），那么就可以在eslint报错的时候也不会导致项目编译失败**

现在我们知道原理了，只需要改一个配置即可。下面我们来实战项目下怎么改
### vue项目中

在vue项目中，我们只需在 vue.config.js 文件中配置 `lintOnSave` 的值即可

- lintOnSave的值类型有: `boolean` | `warning` | `default` | `error`
- 默认值是`default`

默认值情况下，eslint 的警告会输出到命令行，不会导致编译失败，eslint 的错误，也会输出到命令行，而且会导致编译失败

设置为 `true` 或 `warning` 时，eslint-loader 会将 eslint 的错误输出为编译警告，且不会使得编译失败。

设置为 `error` 将会使得 eslint-loader 把 eslint 的警告也输出为编译错误，这意味着 eslint 的警告将会导致编译失败。

最终我们只需在 `vue.config.js` 文件，配置如下即可：

```js
module.exports = {
  // 生产环境下使用默认值，开发环境使用 ture 
  lintOnSave: process.env.NODE_ENV === 'production' ? 'default' : true,
}
```

参考文章：[vue.config.js文件的lintOnSave配置](https://cli.vuejs.org/zh/config/#lintonsave)

### react项目中

在我们使用`react-create-app`生成项目时，脚手架会帮我们自动配置好了webpack的配置，并且隐藏起来，我们在项目目录文件下看不到配置文件，

想要看到react项目的一些配置文件也很简单，使用下面命令即可

```js
npm run eject
```

这里推荐Create React App 中文网给大家看看，[Create React App 中文文档](https://www.html.cn/create-react-app/docs/available-scripts/)

使用 `npm run eject`后生成的配置文件，看到现在的react项目是使用`eslint-webpack-plugin`这个插件依赖包的

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/fail-on-error2.jpg')" />

如果你的项目是使用 `npm run eject` 暴露出配置文件了，那么你直接改`eslint-webpack-plugin`的配置即可

如下：

```js
    new ESLintPlugin({
        // Plugin options
        extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
        formatter: require.resolve('react-dev-utils/eslintFormatter'),
        eslintPath: require.resolve('eslint'),
        failOnError: false, // 重点这个配置
        context: paths.appSrc,
        cache: true,
        // ESLint class options
        cwd: paths.appPath,
        resolvePluginsRelativeTo: __dirname,
        baseConfig: {
          extends: [require.resolve('eslint-config-react-app/base')],
          rules: {
            ...(!hasJsxRuntime && {
              'react/react-in-jsx-scope': 'error',
            }),
          },
        },
      })
```

如果你不想用`npm run eject`暴露配置文件

这里使用 [customize-cra](https://www.npmjs.com/package/customize-cra)依赖包来修改react的相关配置

下面给大家放笔者实战项目的真实配置

```js
const CopyPlugin = require('copy-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const path = require('path')
const {
  override, // 生成覆写配置
  addWebpackAlias, // 添加路径别名
  adjustStyleLoaders, // 修改样式 loader
  overrideDevServer, // 配置开发环境跨域
  addWebpackPlugin, // 添加新插件
} = require('customize-cra') // 更容易地使用 config.overrides

const myPlugis = [
  new CopyPlugin({
    patterns: [
      {
        from: 'node_modules/pdfjs-dist/cmaps/',
        to: 'cmaps'
      }
    ]
  }),
]

// 自定义函数，修改 webpack 的配置，
const changeWebpackConfig = () => config => {
  // console.log(config)
  // process.exit() // 中断

  // 更改ESLintWebpackPlugin配置
  config.plugins.forEach(item => {
    if (item.constructor.name === 'ESLintWebpackPlugin') {
      // 如果有任何错误，将导致模块构建失败，禁用设置为false.
      item.options.failOnError = false
    }
  })

  // 修改 url loader，使其支持「require」语法，
  const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf // 获取 loader，oneOf 是优化，不需要每个文件把所有的 loader 都询问一遍，可以提高 loader 的执行效率
  loaders.forEach(loader => {
    // console.log(loaders) // 打印所有 loader
    if (loader.test && loader.test.toString().includes('.png$')) { // 寻找匹配 .png 的 loader：url-loader
      loader.options.esModule = false
    }
  })
  return config
}

const webpack = override(
  // 打包增加进度条提示
  addWebpackPlugin(new ProgressBarPlugin()),
  // 修改 url-loader
  changeWebpackConfig(),
  // 路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@img': path.resolve(__dirname, 'src/assets/imgs'),
    '@commom': path.resolve(__dirname, 'src/common/js'),
    '@component': path.resolve(__dirname, 'src/base-components')
  }),
  // 修改样式配置
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: [ // 设置全部 scss 变量
            './src/common/scss/var.scss',
            './src/common/scss/mixin.scss'
          ]
        }
      })
    }
  }),
  config => {
    config.plugins = [...config.plugins, ...myPlugis]
    return config
  }
)

module.exports = {
  webpack,
  eslint: {
    enable: false
  },
  // 代理
  devServer: overrideDevServer(config => {
    config.proxy = {
      // '/api': {
      //   target: 'http://xxx/',
      //   changeOrigin: true,
      //   secure: false
      // },
    }
    return config
  })
}

```

上面代码中修改`ESLintWebpackPlugin`配置注意是

```js
// 更改ESLintWebpackPlugin配置
  config.plugins.forEach(item => {
    if (item.constructor.name === 'ESLintWebpackPlugin') {
      // 如果有任何错误，将导致模块构建失败，禁用设置为false.
      item.options.failOnError = false
    }
  })
```
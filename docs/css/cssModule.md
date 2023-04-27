# css模块化实现教程

大家都知道，CSS的规则都是**全局的**，任何一个组件的样式规则，都对整个页面有效。

我们想要做<b>css Module(模块化)</b>呢，原理就是使用<b>一个唯一的class</b>的名字，不会与其他选择器重名即可。

这里我们主要使用 [css-loader](https://www.npmjs.com/package/css-loader) 结合 [webpack](https://webpack.docschina.org/guides/getting-started/) 来实现 css Module (其实就是 自动生成唯一的class类名)。

如果你对webpack还不了解呢，也没关系，那就先一步步跟着我敲代码，我将项目从零开始构建，和原生js的方式带大家实现。 如果你有webpack基础就更好理解了。

### 首先使用webpack构建我们的项目

1. 新建个项目名，如我新建个 `learn` 文件夹

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/css/learn.png')">

2. 使用 npm init -y 命令 生成下 package.json文件

```
npm init -y
```

## 创建该有的文件

3. 新建个 src 文件夹， src文件夹下面新建个 index.js、 style.css, index.html文件

目录如下：

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/css/directory.png')">

index.js 文件的代码如下：

```js
// index.js
import _ from 'lodash';
import style from './style.css';

 function component() {
   const element = document.createElement('div');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   style.hello.split(' ').forEach(item => element.classList.add(item))

   return element;
 }

 document.body.appendChild(component());
```
这里使用了lodash包，等下我们按照下

style.css 文件代码如下：

```css
.className{
    background-color: #ccc;
}
.hello {
    composes: className;
    color: red;
}
```

index.html 文件代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
    index
</body>
</html>
```

## 安装依赖包

这里我们需要安装 

- babel （解析es6代码为es6的）
- css-loader  style-loader （处理css的）
- html-webpack-plugin （处理html模板的）
- lodash （js一些常用函数包）
- webpack webpack-cli

所以我们一起安装

```
npm i -D babel css-loader  style-loader html-webpack-plugin lodash webpack webpack-cli
```

安装完之后

## 新建个webpack.config.js文件

```js
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: "css-loader",
              options: {
                modules: true, // 关键代码，使css模块化
                // modules: { 
                //   localIdentName: "[path][name]__[local]--[hash:base64:5]" // 这里配置是自己定义css模块化生成的类名
                // },
              },
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'cssModule',
      template: 'src/index.html',
      hash: true
    }),
  ],
};
```

一切文件都准备好了，来开始我们的命令，跑起来

在package.json文件添加个运行webpakc的命令

```js
// package.json
"scripts": {
    "build": "webpack"
  },
```

## 执行一波命令

```
npm run build
```

打包成功，文件如下：

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/css/directory2.png')">

**来，我们打开dist/index.html文件**

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/css/cssModule.png')">

**看到没，类名全部给你hash值，唯一类名，这样就达到了cssModule的效果了**

## 全局作用域

CSS Modules 允许使用`:global(.className)`的语法，声明一个全局规则。凡是这样声明的class，都不会被编译成哈希字符串。

style.css加入一个全局class。

```css
/* 新加的css */
:global(.g-title) {
    font-size: 20px;
    font-weight: bold;
}
.className{
    background-color: #ccc;
}
.hello {
    composes: className;
    color: red;
}
```

index.js使用普通的class的写法，就会引用全局class。

```js
import _ from 'lodash';
import style from './style.css';

 function component() {
   const element = document.createElement('div');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   style.hello.split(' ').forEach(item => element.classList.add(item))

   element.classList.add('g-title') // 新加的js

   return element;
 }

 document.body.appendChild(component());
```

再编译打包下 

```
npm run build
```

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/css/cssModule2.png')">


这里解释下 `style.css` 文件出现的 `composes: className;`,  意思是 继承了 `className`这个类的样式意思，和sass语法的mixin效果一样，只是这个`composes`是cssModule插件识别的


完工!!!  以上是小弟的一些小研究， 各位大佬有什么建议，欢迎留言交流

参考文章： [阮一峰 CSS Modules 用法教程](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)

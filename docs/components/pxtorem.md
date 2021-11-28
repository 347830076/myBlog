# 移动端和PC端自适应

## 需求

- 移动端自适应
- pc端自适应（在一定屏幕范围内）

## 实现原理

使用amfe-flexible 和 postcss-px2rem依赖包，编译项目后自动把px转换成rem， 会根据屏幕大小来动态改变html的font-size值

想了解rem实现自适应的原理，大家可以自行谷歌，这里就不讲原理了

不懂原理的同学们也没关系，下面跟着操作就可以实现。

## 实现教程

### 第一步，安装组件依赖

```sh
npm install amfe-flexible -S
npm install postcss-px2rem -S
```

### 第二步，引入lib-flexible.js

下面是以vue项目作为例子

在入口文件main.js中引入 

```js
import "amfe-flexible/index.js";
```

### 第三步，在目录 public/index.html文件加入下面一行代码

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
```

### 第四步，配置postcss-px2rem

#### 如果是vue-cli3构建的项目，那么在根目录找到vue.config.js文件，（没有找到的话，就新建一个）

配置内容如下

```js
css: {
    loaderOptions: {
        css: {},
        postcss: {
          plugins: [
              require("postcss-px2rem")({
              remUnit: 75
              })
          ]
       }
    }
}
```

上面一段代码放到 module.exports = {}，的大括号里面


完整代码如下：
```js
module.exports = {
    // 基本路径
    publicPath: './',
    css: {
        loaderOptions: {
          css: {},
          postcss: {
        plugins: [
          require("postcss-px2rem")({
            remUnit: 75
          })
        ]
      }
        }
    },
    // 代理
    devServer: {
        port: 8080,
        // host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, // 配置自动启动浏览器
        disableHostCheck: true,
        "proxy": {
        "/*": {
            "target": "http://xxx",
            "changeOrigin": true
        }
        }
    },
}
```

上面的 `remUnit: 75`, 这里的设置75， 就是设计图是750px， 如果你的设计图是 640px, 那么你改成64即可，如果你的设计图是1920px，那么你改成192即可

#### 如果你的项目是 vue-cli2 构建的

安装依赖 `postcss-pxtorem`

```
npm i -D postcss-pxtorem
```

找到根目录下.postcssrc.js文件，在里面添加以下代码：

```js
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*', '!border*']
    }
  }
}
```

propList 表示匹配的属性 *(表示匹配所有属性) 可以在里面用 !border* 表示不配备边框，这样不会把边框1px变成1rem

##### 在css中不想px转rem可以这样, 在样式后面写/*no*/注释即可

```css
.nav {
  width: 400px;
  height: 300px;
  background: red;
  border: 1px solid black; /*no*/
}
```

以上配置完后，打开你们的项目编译后的页面，打开调试页面改变宽度就看到了，html的font-size值实时发生改变，和你写的css px值，都自动转成rem了

### 第五步，pc端做自适应解决方案

以上的是全自适应，如果你想控制自适应的范围，比如说，你做pc项目， 想在1300px - 1800px之间做自适应，小于1300px就设置个固定的html font-size值， 大于1800px就设置个固定的html font-size值

这样就可以使得pc项目布局的页面，不至于一直缩小自适应，也不至于一直放大

关键原理是通过媒体查询来控制，代码如下, 在你公共样式（或者全局样式）文件写上

```css
/* 屏幕大于1800px的时候写死html的font-size值为200px */
@media screen and (min-width: 1800px) {
    html {
        font-size: 200px !important;
        /*no*/
    }
}
/* 屏幕小于1300px的时候写死html的font-size值为130px */
@media screen and (max-width: 1300px) {
    html {
        font-size: 130px !important;
        /*no*/
    }
}
```

以上只是一个例子， 移动端你就可以不用设置了，  pc端，你想在什么范围，根据你的项目页面调就好了

### vite 打包的项目配置

新建个 `postcss.config.js` 文件， 下如下代码


安装依赖 `postcss-pxtorem`

```
npm i -D postcss-pxtorem
```

```js
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 192,
      propList: ['*', '!border*']
    }
  }
}
```

根目录创建 `.browserslistrc` 文件

```js
last 2 versions
> 1%
iOS 7
last 3 iOS versions
```

<b class="red">记得先写前面三步!!!</b>

### 踩坑以及解决

当你使用webpack打包的时候，如果你在样式里写了 `/*no*/`, 就是不想px转换成rem的时候， 例如上面说过的代码

```css
/* 屏幕大于1800px的时候写死html的font-size值为200px */
@media screen and (min-width: 1800px) {
    html {
        font-size: 200px !important;
        /*no*/
    }
}
```
这个px不转rem是依赖注释的，可是生产环境打包的时候就会把注释去掉，这样导致你写了 `/*no*/`不转这条css属性，也没效果，打包删除了注释，它就会自动帮你转了。

##### 解决方法一. 可以把样式写到index.html文件的style标签中

这样打包不会删除index.html的css注释，如果你的webpack也把index.html的注释给删除了，那么你可以通过webpack把index.html不删除注释， 这个自行谷歌搜索很多不打包压缩index.html文件，我项目不会删除index.html的注释
##### 解决方法二. 通过配置sass-loader，使得打包时不删除所有的css注释

参考文章： [webpack 中 postcss-px2rem 生产环境中注释失效](https://github.com/neilgao000/blog/issues/15)


参考文章

[前端中使用amfe-flexible和postcss-pxtorem](https://www.jianshu.com/p/f4093192e8d8)

[vite中配置postcss与postcss-plugin-px2rem](https://juejin.cn/post/6901943749916491783)
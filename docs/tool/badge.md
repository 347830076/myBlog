# 项目上使用微标

## 关于徽标

徽标图片分左右两部分，左边是标题，右边是内容，就像是键值对。

徽标官网是 [https://shields.io/](https://shields.io/)

图标规范

<img class="zoom-custom-imgs" src="https://champyin.com/images/badge-rule.png" style="width: 40%">

## 如何添加动态徽标

下面介绍的是`markdown`的写法

### 徽标图标格式

```
![](https://img.shields.io/badge/{徽标标题}-{徽标内容}-{徽标颜色}.svg)
```

### 带链接的徽标

```
[![](https://img.shields.io/badge/{徽标标题}-{徽标内容}-{徽标颜色}.svg)]({linkUrl})
```

**变量说明**

- 徽标标题：徽标左边的文字
- 徽标内容：徽标右边的文字
- 徽标颜色：徽标右边的背景颜色，可以是颜色的16进制值，也可以是颜色英文。支持的颜色英文如下:

![](https://img.shields.io/badge/-brightgreen-brightgreen)
![](https://img.shields.io/badge/-green-green)
![](https://img.shields.io/badge/-yellowgreen-yellowgreen)
![](https://img.shields.io/badge/-yellow-yellow)
![](https://img.shields.io/badge/-orange-orange)
![](https://img.shields.io/badge/-red-red)
![](https://img.shields.io/badge/-blue-blue)
![](https://img.shields.io/badge/-lightgrey-lightgrey)
![](https://img.shields.io/badge/-success-success)
![](https://img.shields.io/badge/-important-important)
![](https://img.shields.io/badge/-critical-critical)
![](https://img.shields.io/badge/-informational-informational)
![](https://img.shields.io/badge/-inactive-inactive)
![](https://img.shields.io/badge/-blueviolet-blueviolet)
![](https://img.shields.io/badge/-ff69b4-ff69b4)
![](https://img.shields.io/badge/-9cf-9cf)

**举个栗子**

例如下面这个是我的博客的徽标：

<style>
    img{
        vertical-align: middle;
    }
</style>

```
[![](https://img.shields.io/badge/blog-阿离王-blue.svg)](https://github.com/347830076/)
```

[![](https://img.shields.io/badge/blog-阿离王-blue.svg)](https://github.com/347830076/)

点击该徽标会打开对应的url地址，即直接跳到我的博客。

## 进阶用法

除了上面所说的3个参数，[shields.io/](https://shields.io/) 还提供了一些 `query string` 来控制徽标样式。使用方式跟浏览器 `URL 的 query string` 一致：徽标图标地址?{参数名}={参数值}，多个参数用 & 连接：

```
https://img.shields.io/badge/{徽标标题}-{徽标内容}-{徽标颜色}.svg?{参数名1}={参数值1}&{参数名2}={参数值2}
```

常用的 query string 参数有：

- `style`：控制徽标主题样式，style的值可以是： plastic | flat | flat-square | social 。
- `label`：用来强制覆盖原有徽标的标题文字。
- `colorA`：控制左半部分背景颜色，只能用16进制颜色值作为参数，不能使用颜色英文。
- `colorB`：控制右半部分背景颜色。


#### 以style参数为例

plastic 立体效果：![](https://img.shields.io/badge/blog-阿离王-orange.svg?style=plastic)

```
![](https://img.shields.io/badge/blog-阿离王-orange.svg?style=plastic)
```

flat 扁平化效果，也是默认效果：![](https://img.shields.io/badge/blog-阿离王-success.svg?style=flat)

```
![](https://img.shields.io/badge/blog-阿离王-success.svg?style=flat)
```

flat-square 扁平 + 去圆角效果：![](https://img.shields.io/badge/blog-阿离王-blue.svg?style=flat-square)

```
![](https://img.shields.io/badge/blog-阿离王-blue.svg?style=flat-square)
```

social 社交样式效果：![](https://img.shields.io/badge/blog-阿离王-blue.svg?style=social)

```
![](https://img.shields.io/badge/blog-阿离王-blue.svg?style=social)
```

还有很多参数，用法类似。更多信息可以到 [https://shields.io/](https://shields.io/)查阅。

[转载出处: https://champyin.com/2019/10/05/github%E9%A1%B9%E7%9B%AE%E5%BE%BD%E6%A0%87/](https://champyin.com/2019/10/05/github%E9%A1%B9%E7%9B%AE%E5%BE%BD%E6%A0%87/)



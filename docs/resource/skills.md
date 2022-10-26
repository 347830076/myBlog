# 一些实用操作技巧

## js强制清除缓存刷新页面

`Location.reload()` 方法用来刷新当前页面。该方法只有一个参数，当值为 true 时，将强制浏览器从服务器加载页面资源，当值为 false 或者未传参时，浏览器则可能从缓存中读取页面。[MDN 官网](https://developer.mozilla.org/zh-CN/docs/Web/API/Location/reload)

## mac 修改hosts文件

```js
sudo vi /etc/hosts 
```

## 安装node-sass 报错

安装node-sass组件时，注意node的版本，node-sass很依赖node的版本 [node-sass npm](https://www.npmjs.com/package/node-sass)

| NodeJS	Supported |	node-sass version | Node Module|
|  ----  | ----  | ----  |
|Node 16|	6.0+|	93|
|Node 15|	5.0+|	88|
|Node 14|	4.14+|	83|
|Node 13|	4.13+, <5.0|	79|
|Node 12|	4.12+|	72
|Node 11|	4.10+, <5.0|	67|
|Node 10|	4.9+, <6.0|	64|
|Node 8|	4.5.3+, <5.0|	57|
|Node <8|	<5.0|	<57|

## 发布npm包

参考文章 [一分钟教你发布npm包](https://segmentfault.com/a/1190000023075167)

## html2canvas生成图片时文字整体下移

- 字体问题

参考文章 [使用html2canvas开发遇到的字体偏移问题](https://www.cnblogs.com/caofeng11/p/13691270.html)

## Nginx配置密码访问-访问网页需输入用户名密码

参考文章 [Nginx配置密码访问-访问网页需输入用户名密码](https://segmentfault.com/a/1190000023086569)

## 谷歌浏览器控制台打印dom元素详细信息

在`console.log()`时在获取到的`dom元素`外面套个`[]`,控制台在打印数组内的对象是会显示数组内对象的详细信息;

```js
console.log(document.querySelector(".node1"));

console.log([document.querySelector(".node1")]);
```

当然也可以直接使用 `console.dir(dom)`, 不过`console.log()`的好处是，可以添加点击打印的dom跳转到对应的element元素，还可以同时打印多个参数，`console.log('打印dom =>', [dom])`

## GitHub无法访问、443 Operation timed out的解决办法

[GitHub无法访问、443 Operation timed out的解决办法](https://juejin.cn/post/6844904193170341896)

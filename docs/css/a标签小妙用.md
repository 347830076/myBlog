---
sidebarDepth: 2
---

# a标签小妙用

大家都知道`a标签`是超链接跳转，发邮箱，打电话，也可以做锚点，页面跳转

## 超链接跳转

target的属性：
- `_self` 默认，当前页面加载
- `_blank` 新窗口打开
- `_parent` 父窗口打开，如果没有parent框架或者浏览上下文，此选项的行为方式与 _self 相同。
- `_top`: IHTML4中：加载的响应成完整的，原来的窗口，取消所有其它frame。 HTML5中：加载响应进入顶层浏览上下文（即，浏览上下文，它是当前的一个的祖先，并且没有parent）。如果没有parent框架或者浏览上下文，此选项的行为方式相同_self

```html
<a href="http://www.baidu.com">百度一下</a>
<a href="http://www.baidu.com" target="_blank">百度一下</a>
```

不想跳转页面的话，可以使用 `href="javascript:void(0)"`

```html
<a href="javascript:void(0)">不跳转</a>
```

## 发邮箱

```html
<a href="mailto:m.bluth@example.com">Email</a>
```

就是点击`Email`会弹出系统的发邮件窗口

## 打电话

```html
<a href="tel:12345678901">12345678901</a>
```

在移动端点击`12345678901`，可以拨打电话

## 锚点的使用

### 页内跳转

a标签的href属性的值设置为 # 和 需要跳转到其他标签的id的这， `#id`

```html
<h1 id="h1">热爱前端</h1>
<div>很多行内容</div>
        .
        .
        .
<h2 id="h2">热爱分享</h2>
        .
        .
        .
<div>很多行内容</div>
<a href="#h1">跳转到热爱前端</a>
<a href="#h2">跳转到热爱分享</a>
```

<iframe height="400" style="width: 100%;" scrolling="no" title="" src="https://codepen.io/347830076/embed/KKmLorr?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/347830076/pen/KKmLorr">
  </a> by cylyiou (<a href="https://codepen.io/347830076">@347830076</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 返回顶部

这里还有个小技巧，就是href的值设置为`#`，就可以回到顶部

```html
<a href="#">返回顶部</a>
```

**不过这里需要注意下： 如果页面不是首页（根目录），是子路由的话，使用`href="#"`，会跳转到首页的**

### 优化返回顶部滚动

这里使用 `scroll-behavior: smooth;` 这个css样式的话, 会平稳的滚动

[scroll-behavior MDN教程详解](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-behavior)

```html
<style>
    html{
        scroll-behavior: smooth;
    }
</style>
<a href="#">平稳返回顶部</a>
```

<iframe height="400" style="width: 100%;" scrolling="no" title="" src="https://codepen.io/347830076/embed/QWvRmoZ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/347830076/pen/QWvRmoZ">
  </a> by cylyiou (<a href="https://codepen.io/347830076">@347830076</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## `download`属性下载文件

`download`的值是下载保存的文件名

```html
<a href="./img/lufei.png" download="lufei.png">点击下载</a>
```

### 使用`download`属性将 `<canvas> `保存为 PNG 格式

```js
var link = document.createElement('a');
link.innerHTML = 'download image';

link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    link.download = "mypainting.png";
}, false);

document.body.appendChild(link);
```

可以看看这个例子 [https://jsfiddle.net/codepo8/V6ufG/2/](https://jsfiddle.net/codepo8/V6ufG/2/)
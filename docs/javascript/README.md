# js各种开发技巧

## 原生js监听页面当前可见不可见

```js
document.addEventListener('visibilitychange', function () {
  // 用户离开了当前页面
  if (document.visibilityState === 'hidden') {
    document.title = '页面不可见';
  }

  // 用户打开或回到页面
  if (document.visibilityState === 'visible') {
    document.title = '页面可见';
  }
});
```

参考文章： [Page Visibility API 教程](http://www.ruanyifeng.com/blog/2018/10/page_visibility_api.html)
# Vue项目中出现Loading chunk {n} failed问题的解决方法

当在渲染一个路由的过程中，需要尝试解析一个异步组件时发生错误。 完全符合我们场景，所以在onError方法中我们实现如下代码：

```js
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
});
```

当捕获到Loading chunk {n} failed的错误时我们重新渲染目标页面，这种实现明显更简单和友好。

转摘文章：[Vue项目中出现Loading chunk {n} failed问题的解决方法](https://segmentfault.com/a/1190000016382323)
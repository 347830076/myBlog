# react 实战技巧经验

[Create React App 中文文档](https://www.html.cn/create-react-app/)


## js 浏览器回退事件 如何在react使用

1. 监听浏览器回退事件

这个事件仅限于监听浏览器回退事件做一些业务逻辑处理，并不能阻止浏览器回退

```jsx
useEffect(() => {
    // 监听浏览器回退事件
    window.onpopstate = function (e: PopStateEvent) {
        // 业务逻辑
    };
    return () => {
        // 回退事件只用于当前组件，则需要在组件销毁时把回退事件销毁
        window.onpopstate = null;
    };
}, []);
```

2. 阻止浏览器回退

```jsx

const back = () => {
    window.history.pushState(null, '', document.URL);
}

useEffect(() => {
    // 这一步也是需要的
    window.history.pushState(null, '', document.URL);
    // 监听浏览器回退事件
    window.addEventListener('popstate', back, false)
    return () => {
      // 回退事件只用于当前组件，则需要在组件销毁时把回退事件销毁
       window.removeEventListener('popstate', back, false)
    };
}, []);
```
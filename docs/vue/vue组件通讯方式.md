
## 父组件监听子组件加载完成事件

有些时候需要在父组件`mounted`的时候获取子组件的`dom`，但是这个时候是不一定获取得到的，因为子组件不一定能够加载完成。

### 解决方法

1. （不推荐❌）父组件使用定时器 setInterval，里面不断判断是否获取到子组件dom，获取到则清除定时器。

2. 子组件`mounted`的时候，抛出自定义事件，父组件监听该事件，然后再获取子组件。

```js
// parent.vue
<child @has-mounted="getDom" />

// child.vue
mounted() {
    this.$emit('has-mounted');
}
```

3. （推荐✔）父组件引用子组件时，使用 @hook:mounted="getDom" 父组件监听getDom事件即可。

```js
// 子组件
<child @hook:mounted="getDom" />

// 父组件
methods:{
    getDom() {
       // 获取子元素等操作
    }
}
```

当然，这里不仅仅可以监听`mounted`，其他子组件的生命周期事件，比如：`created`，`updated`等都可以使用，是不是超级方便！
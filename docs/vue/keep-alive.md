# keepActive 缓存路由

## 第一步
在路由的配置项mate对象里配置keepActive属性为true

## 第二步
在路由出口处用keep-alive组件包裹需要缓存的组件 具体如下：

```js
<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
```
# 第三步
keep-alive生命周期钩子函数：`activated`、`deactivated`

- 使用`<keep-alive>`的路由会将页面数据保留在内存中，

- 如果要在每次进入页面的时候获取最新的数据，需要在`activated`阶段获取数据，承担原来`created`钩子中获取数据的任务。


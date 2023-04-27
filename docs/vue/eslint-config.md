# eslint 编译时警告或错误配置

### vue项目中

在vue项目中，我们只需在 vue.config.js 文件中配置 `lintOnSave` 的值即可

- lintOnSave的值类型有: `boolean` | `warning` | `default` | `error`
- 默认值是`default`

默认值情况下，eslint 的警告会输出到命令行，不会导致编译失败，eslint 的错误，也会输出到命令行，而且会导致编译失败

设置为 `true` 或 `warning` 时，eslint-loader 会将 eslint 的错误输出为编译警告，且不会使得编译失败。

设置为 `error` 将会使得 eslint-loader 把 eslint 的警告也输出为编译错误，这意味着 eslint 的警告将会导致编译失败。

最终我们只需在 `vue.config.js` 文件，配置如下即可：

```js
module.exports = {
  // 生产环境下使用默认值，开发环境使用 ture 
  lintOnSave: process.env.NODE_ENV === 'production' ? 'default' : true,
}
```

参考文章：[vue.config.js文件的lintOnSave配置](https://cli.vuejs.org/zh/config/#lintonsave)
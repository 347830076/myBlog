# 实战经验

## antd 

### Antd中Select组件中的defaultValue问题

想要动态设置 defaultValue 的值，需要设置一个key

```tsx
<Select
    placeholder="请选择学历"
    allowClear
    defaultValue={educationLevelDefaultValue}
    key={educationLevelDefaultValue}
    >
    {
        educationLevelOptions.map(item => {
            return <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
        })
    }
</Select>
```

# process.env环境变量配置方式


环境变量允许您在本地开发、测试、用户验收测试 (UAT)、生产和作为项目工作流程一部分的任何其他环境之间切换。

使用 [env-cmd](https://www.npmjs.com/package/env-cmd)包来配置process.env环境很方便

下面有详细的文章教程了，可以看看

值得注意的是，使用vue项目的时候 `VUE_APP` 是统一前缀，后面可以任取)

例如在.env.dev文件代码如下：

```js
NODE_ENV = 'development'
VUE_APP_TITLE = 'development'/*请求接口地址*/
VUE_APP_INTERFACE_URL="https://xxx"/*首页地址*/
VUE_APP_URL="http://xxx"/*proxy代理地址*/
VUE_APP_PROXYURL='http://xxx'
```
同理，react项目的时候，`REACT_APP` 是统一前缀，后面可以任取

参考文章

[process.env环境变量配置方式（配置环境变量区分开发环境和生产环境）](https://blog.csdn.net/duansamve/article/details/122645027)

[如何通过 env-cmd 使用环境文件](https://www.gingerdoc.com/tutorials/nodejs-take-command-with-env-cmdhttps://www.gingerdoc.com/tutorials/nodejs-take-command-with-env-cmd)

[使用env-cmd代替cross-env设置环境变量](https://www.cnblogs.com/mengff/p/12049070.html)
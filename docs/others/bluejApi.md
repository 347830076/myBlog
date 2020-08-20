# 蓝景购物平台接口说明

# 接口地址
```js
http://api.wanggege.cn/api/
```

# 接口文档地址
```js
http://apidoc.wanggege.cn/
```

# 接口地址使用说明

<!-- <b>1. 先配置电脑的系统文件  hosts文件，添加一行</b>
```js
127.0.0.1   websit.wanggege.cn
```

window电脑的同学 找到的hosts文件路径是 <b>C:\Windows\System32\drivers\etc</b>

mac 苹果电脑的同学 可以使用终端修改hosts文件
```sh
sudo vi /etc/hosts
```
输入本机密码后，打开hosts文件，键盘输入 i （插入），修改hosts文件后，按 esc 键退出,再按shift+：键，再输入w和q，回车保存退出

不保存退出，则按q，回车退出

如果还是找不到 hosts文件，或者修改麻烦的， 可以直接下载 <a href="https://oldj.net/blog/2011/10/20/switchhosts">SwitchHosts!</a> 发布一个快捷切换hosts的小工具 -->

1. vue 项目的vue.config.js文件的devServer修改下代理源 "target": "http://api.wanggege.cn/api/",
```js
devServer: {
    port: 8080,
    // host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    disableHostCheck: true,
    "proxy": {
      "/*": {
        "target": "http://api.wanggege.cn/api/",
        "changeOrigin":true
      }
    }
  },
```

axios 默认的基础地址设置
```js
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/' : 'http://api.wanggege.cn/api/';
```

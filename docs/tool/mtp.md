# mtp.js压缩图片的使用方法

mtp.js压缩是基于[tinypng](https://tinypng.com/)进行压缩的，

1. 添加文件
 - 直接下载<code-link href="/js/mtp.js">mtp.js</code-link> 文件放到项目的根目录
 - 在src目录下添加 `tinypngMd5Record.json`和 `tinypngReport.json`文件

2. 打开mtp文件，在顶部设置压缩路径，和你的key
3. 在[https://tinypng.com/developers](https://tinypng.com/developers)去生成你的key，替换即可，
4. 打开https://tinypng.com/developers后网站上看到 `Get your API key` 的按钮，去输入用户名，邮箱注册就可以获取了
5. key使用额度有限（500张），如发现不能压缩，再去申请一个新的key替换即可
6. 在package.json文件添加命令

```sh
 "scripts": {
    "compress": "node ./mtp.js"
  },
```

在终端执行命令

```sh
npm run compress
```

大功告成，是不是挺简单的。
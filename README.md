### 安装依赖
```
npm install
```

### 开发运行
```
npm run dev
```

### 生产环境
```
npm run build
```

### 打包发布到服务器
```
npm run deploy
```

### 压缩项目的图片
```
npm run compress
```

### mtp.js压缩图片的使用方法

mtp.js压缩是基于[tinypng](https://tinypng.com/)进行压缩的，

- 1.直接复制mtp.js文件放到项目的根目录即可 <code-link href="./mtp.js">mtp.js</code-link>
- 2.打开mtp文件，在顶部设置压缩路径，和你的key
- 3.在[https://tinypng.com/developers](https://tinypng.com/developers)去生成你的key，替换即可，
- 4.打开https://tinypng.com/developers后网站上看到 `Get your API key` 的按钮，去输入用户名，邮箱注册就可以获取了
- 4.key使用额度有限（500张），如发现不能压缩，再去申请一个新的key替换即可

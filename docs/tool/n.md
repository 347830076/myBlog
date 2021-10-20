# n管理node版本

n 比较简单易用 n，全局安装之后输入命令就可以无缝切换了。

- 安装

```
npm install -g n
```

- 利用 n 下载所需node

```
n 版本号   
```

- 下载最新版本
```
 n latest
```

- 删除某个版本

```
n rm 10.4.4 
```

- 切换版本

```
$ n

  6.9.4
ο 7.4.0
  4.4.4
```

- 以指定的版本来执行脚本

```
n use 7.4.0 index.js
```

参考文章 
[利用n管理node版本,轻松切换node](https://www.jianshu.com/p/c641dcc47b48)
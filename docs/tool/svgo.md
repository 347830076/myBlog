# svgo 压缩

### 前言

- 开发中，有时设计师给的svg图片太大了，我们想压缩怎么压缩呢，去网上找[在线压缩](https://www.zhangxinxu.com/sp/svgo/)，一个一个压缩也是可以。
- 但是，这样效率太低了，我们要提高工作效率，要想，如何快速一行命令压缩整个项目的`svg`呢？

### 实现原理

#### 1. 安装依赖

```
npm i -D svgo svgo-config
```

安装完后，我们先来简单了解下svgo的压缩命令

```
# 压缩当前目录下的指定 svg 文件
svgo test.svg 

# 压缩当前目录下的多个指定 svg 文件
svgo test.svg other.svg third.svg 

# 压缩当前目录下的所有 svg 文件
svgo *.svg 

# 压缩某个文件夹下的所有 svg 文件，并指定新的存放位置
svgo -f ../path/to/input/folder -o ../path/to/output/folder 

# 压缩 data URI base64 字符，并指定生成文件
svgo -s 'data:image/svg+xml;base64,...' -o test.min.svg 
```


#### 2. 在`package.json`文件添加 下面命令


```
"svgo": "svgo -f ./svg --config node_modules/svgo-config/config.json"
```

`./svg`呢，是你保存svg图片的文件夹，如果你的项目保持svg图片路径不一样，修改这个路径即可

**疑惑：** 这里我没有想到怎么把不同文件夹下面的svg 统一 压缩， 路径使用 **/*.svg 也不行，会报错。 有兴趣的大佬，可以研究研究如何把不同文件夹下面的svg 统一压缩，成功了感谢留言分享下。

#### 3. 最后执行命令

```
npm run svgo
```

在控制台就可以看到压缩成功了

```
Processing directory './svg':


process.svg:
Done in 16 ms!
0.422 KiB - 0% = 0.422 KiB

flow.svg:
Done in 289 ms!
84.13 KiB - 0% = 84.13 KiB
```

是不是很简单的。酷 😎

参考文章：
[SVG精简压缩工具svgo简介和初体验](https://www.zhangxinxu.com/wordpress/2016/02/svg-compress-tool-svgo-experience/)
[SVG 图片批量压缩](https://urz.one/cn/2020-06-12/svg-compressor/)
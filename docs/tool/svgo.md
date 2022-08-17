# svgo 压缩

### 前言

- 现在很多项目中，很多都使用了svg。
- 开发中，有时设计师给的svg文件太大了，我们想压缩怎么压缩呢，去网上找[在线svg压缩](https://www.zhangxinxu.com/sp/svgo/)，一个一个压缩也是可以。
- 但是，这样效率太低了，我们要提高工作效率，要想，如何快速一行命令压缩整个项目的`svg图片`呢？

### 实现过程

#### 1. 安装依赖

```
npm i -D svgo svgo-config
```

安装完后，我们先来简单了解下svgo的压缩命令

```sh
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

## nodejs使用svgo压缩

```sh
"svgo": "svgo -f ./svg --config node_modules/svgo-config/config.json"
```
上面我们使用终端 cli命令，不是抛出一个问题吗，怎么样能递归遍历压缩整个项目中的svg项目呢，既然他 cli不提供这样功能，那么我们就自己写node脚本，来递归遍历找到svg文件，再通过node 调用svgo的压缩

下面来看实现过程

### 1.我们可以在根目录新建一个文件 svgo.js

svgo.js的完整代码如下：

```js
// svgo.js
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const { optimize } = require('svgo')
const fs = require('fs')
const path = require('path')
const filepath = path.resolve('./src/assets/imgs') // 放svg文件的路径

fileDisplay(filepath)

function fileDisplay(filePath) {
  // 根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, (err, files) => {
    if (err) {
      throw err
    }
    // 遍历读取到的文件列表
    files.forEach(filename => {
      // 获取当前文件的绝对路径
      const fileDir = path.join(filePath, filename)
      // 根据文件路径获取文件信息，返回一个fs.Stats对象
      fs.stat(fileDir, (error, stats) => {
        if (error) {
          throw error
        }

        const isFile = stats.isFile() // 是文件
        const isDir = stats.isDirectory() // 是文件夹

        if (isFile) { // 是文件
          // 读取文件内容
          if (fileDir.includes('.svg')) { // 是svg文件
            console.log(fileDir)
            fs.readFile(fileDir, 'utf8', (err2, data) => {
              if (err2) {
                throw err2
              }
              // console.log(data)
              const result = optimize(data)
              // 写入原文件
              // eslint-disable-next-line max-nested-callbacks
              fs.writeFile(fileDir, result.data, err3 => {
                if (err3) {
                  throw err3
                }
              })
            })
          }
        } else if (isDir) {
          fileDisplay(fileDir) // 递归，如果是文件夹，就继续遍历该文件夹下面的文件
        }
      })
    })
  })
}
```

### 2.在package.json文件添加命令

```
 "scripts": {
    "svgo": "node ./svgo.js"
  },
```

### 3.执行命令

```sh
npm run svgo
```

在控制台就可以看到压缩成功了

是不是也很简单的。酷 😎！

### 小技巧

如果你怕有时添加了新的svg图片，而忘记了执行命令压缩，不用怕，那也有办法。

就在每次编译项目的时候，都执行一下压缩svg就可以了。怎么做呢，看下面，也是更改`package.json`文件

```sh
 "scripts": {
    "dev": "npm run svgo && vue-cli-service serve",
    "svgo": "node ./svgo.js"
  }
```

参考文章：

[SVG精简压缩工具svgo简介和初体验](https://www.zhangxinxu.com/wordpress/2016/02/svg-compress-tool-svgo-experience/)

[SVG 图片批量压缩](https://urz.one/cn/2020-06-12/svg-compressor/)

[svgo优化文件夹中的svg（node.js读写文件）](https://juejin.cn/post/6844903765208743950)
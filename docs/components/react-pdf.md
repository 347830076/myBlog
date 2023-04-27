# react-pdf 预览PDF文件

[npm react-pdf 官网](https://www.npmjs.com/package/react-pdf)

文档上面介绍的例子是：

```js
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file="somefile.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}
```

## 开发中遇到小坑

### 坑1：按照上面的代码，还是不能预览

**解决方案**

```js
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
```

加上 ·pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js` 这个代码就可以了

### 坑2：中文文字不能显示

**解决方案**

```js
<Document
    file={list[currentIndex]}
    onLoadSuccess={onDocumentLoadSuccess}
    options={{
        cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
        cMapPacked: true,
    }}
    >
    <Page pageNumber={1} />
</Document>
```

在 `Document` 配置 `cMapUrl`, `cMapPacked`

## 坑3：谷歌浏览器是没问题的，在360浏览器，或者safari浏览器访问的话，就会出现跨域的情况

**解决方案**

### 把网络地址文件本地化

细心的同学应该可以看到，上面的两个配置，都是cdn网址，才会导致跨域，所以我们只需要文件本地化，就不存在跨域的情况了， 根据官网文档，可以到了下面配置

```js
import { Document, Page, pdfjs } from 'react-pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.js'

<Document
    file={list[currentIndex]}
    onLoadSuccess={onDocumentLoadSuccess}
    options={{
        // cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
        // cMapPacked: true,
        cMapUrl: 'cmaps/',
        cMapPacked: true,
    }}
    >
    <Page pageNumber={1} />
</Document>
```

```js
// webpackp配置 
const CopyPlugin = require('copy-webpack-plugin')


const myPlugis = [
  new CopyPlugin({
    patterns: [
      {
        from: 'node_modules/pdfjs-dist/cmaps/',
        to: 'cmaps'
      }
    ]
  })
]

module.exports = {
  config => {
    config.plugins = [...config.plugins, ...myPlugis]
    return config
  }
}

```

这里我们需要通过webpack， 安装 `copy-webpack-plugin`插件

```js
npm i copy-webpack-plugin -D
```

然后把 `copy-webpack-plugin` 插件追加到plugins对象中




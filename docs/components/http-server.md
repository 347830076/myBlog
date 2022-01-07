# 开启本地服务器

## 方式一 http-server

使用[http-server](https://www.npmjs.com/package/http-server)可以开启本地服务器

全局安装 `http-server`

```js
npm i http-server -g
```

在需要开启服务的目录下，运行 `http-server` 即可

```js
http-server -o
```

不想安装的话，也可以使用npx来运行

```js
npx http-server -o
```

## 方式二 serve


使用[serve](https://www.npmjs.com/package/serve)可以开启本地服务器


全局安装 `serve`

```js
npm i serve -g
```


在需要开启服务的目录下，运行 `serve` 即可

```js
serve
```

不想安装的话，也可以使用npx来运行

```js
npx serve
```
 # nrm 管理npm源

- `nrm (npm registry manager )`是npm的镜像源管理工具，有时候国外资源太慢或访问不了，使用这个就可以快速地在 `npm` 源间切换 

## 全局安装
```js
npm install -g nrm
```

## 查看是否安装成功

```
nrm --version
```
## 查看可选的源
```
nrm ls
```

结果如下：

```
npm ---------- https://registry.npmjs.org/
yarn --------- https://registry.yarnpkg.com/
tencent ------ https://mirrors.cloud.tencent.com/npm/
cnpm --------- https://r.cnpmjs.org/
taobao ------- https://registry.npmmirror.com/
npmMirror ---- https://skimdb.npmjs.com/registry/
```
## 切换使用源

```
nrm use taobao
```

## 添加使用源

`nrm add [registry] [url]`

其中，registry为源名，url为源地址。 比如：添加一个公司私有的npm源，源地址为：http://192.168.22.11:8888/repository/npm-public/，源名为cpm（随意取）。

```
nrm add cpm http://192.168.22.11:8888/repository/npm-public/
```

## 查看源的主页

```
nrm home taobao
```
## 删除使用源。

```
nrm del [registry]
```
<p>nrm del [registry] --- 删除使用源。</p>

## 测试使用源速度。

```
nrm test [registry]
```

## 不使用nrm来切换源

如果不是nrm也能切换源， npm 自己也可以切换源，只不过比较麻烦。

## 查看npm源地址

```
npm config list
```

```
npm config get registry
```

## npm 修改registry源地址

```
npm set registry https://registry.npm.taobao.org/
```

## 安装包使用特定源

- 全部使用特定源安装：`npm install --registry=https://registry.npm.taobao.org`
- 安装一个包使用特定源：`npm i logo --registry=https://registry.npm.taobao.org`

参考文章： [npm源管理器nrm使用教程](https://segmentfault.com/a/1190000017419993)

<Vssue :options="{ locale: 'zh' }"  />
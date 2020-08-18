 # nrm 安装使用教程

<p>1.nrm (npm registry manager )是npm的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换 </p>
<p>2.安装nrm 在命令行执行命令，npm install -g nrm，全局安装nrm。 </p>

```js
npm install -g nrm
```

<p>3.使用 执行命令nrm ls查看可选的源。</p>

```
nrm ls
```

<p>查看npm源地址，在终端输入以下命令 npm config list</p>
<p>修改registry地址很简单，在终端输入</p>
npm 修改源的写法
<p>npm set registry https://registry.npm.taobao.org/</p>


<p>nrm use taobao --- 切换使用源</p>

```
nrm use taobao
```

<p>nrm current --- 查看当前的使用源。</p>

```
nrm current
```

<p>nrm add [registry] [url] --- 添加使用源。</p>
<p>
    其中，registry为源名，url为源地址。 比如：添加一个公司私有的npm源，源地址为：http://192.168.22.11:8888/repository/npm-public/，源名为cpm（随意取）。
</p>
<p>nrm add cpm http://192.168.22.11:8888/repository/npm-public/</p>
<p>nrm del [registry] --- 删除使用源。</p>
<p>nrm test [registry] --- 测试使用源速度。</p>

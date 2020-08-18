# nvm 安装教程

<h1>一、nvm 说明</h1>

nvm是node版本管理工具

为了解决node各种版本存在不兼容现象

nvm是让你在同一台机器上安装和切换不同版本的node的工具

<h1>二、下载 nvm</h1>

<b>nvm-noinstall.zip</b>： 绿色免安装版本，使用前需配置

<b>nvm-setup.zip</b>：下载之后安装，不需要配置，直接就可以用。

<b>Source code(zip)</b>：zip压缩的源码

<b>Sourc code(tar.gz)</b>：tar.gz的源码，一般用于*nix系统


<b>window 电脑</b> 使用 nvm-setup.zip =>> 解压文件安装， 一直按next 下一步就好了。

<a href="https://github.com/coreybutler/nvm-windows/releases" target="_brank">https://github.com/coreybutler/nvm-windows/releases</a>

<img src="/assets/img/nvm.jpg" />


mac 苹果电脑下载， 打开终端，执行下面代码
```js
cd ~
```
在选择执行下面其中一行代码即可

```js
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

```js
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

<p>此时nvm就被安装在了/.nvm下啦</p>
<p>命令：</p>
<p>nvm install v10.4.0：安装指定版本号的node</p>
<p>nvm use v10.3.0：切换node的版本，这个是全局的</p>
<p>nvm current：当前node版本</p>
<p>nvm ls：列出所有已经安装的node版本</p>

<Vssue />





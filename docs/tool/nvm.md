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

<img :src="$withBase('/assets/img/nvm.jpg')" alt="foo">


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

## macOS 安装 nvm 踩坑小记

### 卸载 node 相关模块

如果你已经全局安装了 node，最好先将此删除，避免以后出现不必要的冲突。

```sh
# 查看已经安装在全局的模块
npm ls -g --depth=0
# 删除全局 node_modules 目录
sudo rm -rf /usr/local/lib/node_modules
# 删除 node
sudo rm /usr/local/bin/node 
# 删除全局 node 模块注册的软链
cd /usr/local/bin && ls -l | grep "../lib/node_modules/" | awk '{print $9}'| xargs rm
```

### 安装 nvm

在下载 nvm 之前先检查当前用户的 home 目录下是否存在 .bash_profile 文件，没有的话要先创建。

创建完毕之后是不用对文件进行任何写入操作的，因为后面下载 nvm 的时候，它会自动找到我们新建的这个文件并写入相应内容。

我看到网上很多教程都要求主动往 .bash_profile 文件写入内容，其实并不需要。

```sh
# 1.创建 .bash_profile 文件
touch ～/.bash_profile
# 2.运行下载/更新脚本
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

### <a href="https://github.com/nvm-sh/nvm/blob/master/README.md" target="_blank">查看最新nvm版本</a>

### nvm: command not found

### 解决方案一

很不幸，我跟着网上的 n 篇教程，下载完毕之后试过大家给出的 n 种方法，包括什么重启终端、在 nvm 文件夹里也复制一份 .bash_profile 文件、手动修改配置文件啥啥啥的，结果还是提示 nvm: command not found。

后来我发现每次执行 source ~/.bash_profile 之后会生效（我之前新建的配置文件），但是只生效一次。

后来总算找到解决方法，大致是因为我的系统是最新更新的 macOS Catalina 系统，默认的 shell 是 zsh，所以找不到配置文件啥的。

解决方法如下：

```sh
# 1.新建一个 .zshrc 文件（如果没有的话）
touch ~/.zshrc
# 2.在 ~/.zshrc文件最后，增加一行 
source ~/.bash_profile
```

### 解决方法二
由于没有.bash_profile这一文件，将.bashrc中关于node的配置copy到.zshrc里边。

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
copy上面代码到~.zshrc下就可以啦。

```sh
vim ~/.zshrc
```

重新打开终端, 运行

```sh
nvm version
```



<Vssue :options="{ locale: 'zh' }"  />





# 如何生成SSH key

SSH key提供了一种与GitHub通信的方式，通过这种方式，能够在不输入密码的情况下，将GitHub作为自己的remote端服务器，进行版本控制

# 步骤
*检查SSH keys是否存在
*生成新的ssh key
*将ssh key添加到GitHub中

# 1. 检查SSH keys是否存在
输入下面的命令，如果有文件id_rsa.pub 或 id_dsa.pub，则直接进入步骤3将SSH key添加到GitHub中，否则进入第二步生成SSH key

```js
ls -al ~/.ssh
```

# 2. 生成新的ssh key

第一步：生成public/private rsa key pair

在命令行中输入ssh-keygen -t rsa -C "your_email@example.com"

your_email@example.com 是你github的账号

默认会在相应路径下生成id_rsa和id_rsa.pub两个文件，如下面代码所示

```js
ssh-keygen -t rsa -C "your_email@example.com"
```

第二步：输入passphrase（本步骤可以跳过） 直接回车

如果你设置passphrase后，进行版本控制时，每次与GitHub通信都会要求输入passphrase，以避免某些“失误”

# 3. 将ssh key拷贝到粘贴板

不同的操作系统，均有一些命令，直接将SSH key从文件拷贝到粘贴板中，如下：

mac  执行下面命令回车
```
pbcopy < ~/.ssh/id_rsa.pub
```

windows 执行下面命令回车
```
clip < ~/.ssh/id_rsa.pub
```

linux 执行下面命令回车
```
sudo apt-get install xclip
```
```
xclip -sel clip < ~/.ssh/id_rsa.pub
```

# 4. 将ssh key添加到GitHub中

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/github1.jpg')">

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/github2.jpg')">

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/github3.jpg')">

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/github4.jpg')">
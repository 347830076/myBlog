# docker使用

参考教程 [菜鸟 docker教程](https://www.runoob.com/docker/docker-tutorial.html)

## 安装

### MacOS Docker 安装

[docker 官网下载](https://docs.docker.com/desktop/mac/install/)

点击 `Mac with intel chip ` 按钮下载

如同 macOS 其它软件一样，安装也非常简单，双击下载的 .dmg 文件，然后将鲸鱼图标拖拽到 Application 文件夹即可。

从应用中找到 Docker 图标并点击运行。可能会询问 macOS 的登陆密码，输入即可。

启动终端后，通过命令可以检查安装后的 Docker 版本。

```sh
docker --version
```

### MacOS Docker 镜像加速

我们mac安装 docker 新版 2.2的时候，和菜鸟教程的版本不一样了。

[MAC版 的最新Docker 2.2版本配置国内代理的解决办法](https://zhuanlan.zhihu.com/p/109485448)

Preferences（就是设置图标） -> Docker Engine

在输入框中加上

```js
"registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn", // 中国某高等大学的
    "https://hub-mirror.c.163.com" // 网易的
]
```

点击按钮 `Apply & Restart` 重启即可

在终端输入

```
docker info
```

能看到

    Registry Mirrors:
    https://docker.mirrors.ustc.edu.cn/
    https://hub-mirror.c.163.com/

就是成功了

### CentOs Docker 安装

使用官方安装脚本自动安装

```
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

启动 Docker。

```
sudo systemctl start docker
```

### CentOS7 镜像加速

对于使用 systemd 的系统，请在 /etc/docker/daemon.json 中写入如下内容（如果文件不存在请新建该文件）：

```
{"registry-mirrors":["https://reg-mirror.qiniu.com/"]}
```

之后重新启动服务：

```
sudo systemctl daemon-reload
sudo systemctl restart docker
```

`docker info` 命令查看，结果内容中看到以下内容，说明配置成功。

```
Registry Mirrors:
    https://reg-mirror.qiniu.com
```

## docker 常用命令

- `docker --version`      查看版本
- `docker info`           查看配置信息
- `docker pull [镜像地址]` 下载镜像到本地
- `docker images`         查看本地已安装的镜像
    - REPOSITORY：表示镜像的仓库源
    - TAG：       镜像的标签
    - IMAGE ID：  镜像ID
    - CREATED：   镜像创建时间
    - SIZE：      镜像大小
- `docker rmi 镜像ID`  删除镜像
- `docker ps`     查看每个容器的运行信息
    - CONTAINER ID: 容器 ID。
        - IMAGE:    使用的镜像。
        - COMMAND:  启动容器时运行的命令。
        - CREATED:  容器的创建时间。
        - STATUS:   容器状态，状态有7种：
            - created      （已创建）
            - restarting   （重启中）
            - running 或 Up（运行中）
            - removing     （迁移中）
            - paused       （暂停）
            - exited       （停止）
            - dead         （死亡）
            - PORTS: 容器的端口信息和使用的连接类型（tcp\udp）。
            - NAMES: 自动分配的容器名称。
- `docker ps -a`      查看每个容器（包括已经暂停的）的运行信息
- `docker stop [CONTAINER ID]` 停止指定的容器
- `docker start [CONTAINER ID]` 启动指定的容器
- `docker restart <容器 ID>`     重启指定的容器
- `docker rm -f [CONTAINER ID]` 删除指定的容器
- `docker container prune`      删除掉所有处于终止状态的容器
- `docker exec -it [容器 id] /bin/bash` 进入容器( 要启动状态才能进入 )
- `docker logs [CONTAINER ID]`  查看容器内的标准输出
- `docker export [CONTAINER ID] > node.tar`  导出容器
#### 批量操作

- `docker ps -aq`                  列出所有的容器 ID
- `docker stop $(docker ps -aq)`   停止所有的容器
- `docker rm $(docker ps -aq)`     删除所有的容器
- `docker rmi $(docker images -q)` 删除所有的镜像
- `docker image prune --force --all`或者`docker image prune -f -a`  删除所有不使用的镜像
- `docker container prune -f`      删除所有停止的容器
- `docker logout localhost:8080`   退出登录
- `docker login --username=xxx --password=xxx registry.cn-shenzhen.aliyuncs.com` 登录

## docker 容器的使用

### 1. 先获取镜像

### 2. 启动容器

以下命令使用 node 镜像启动一个容器，参数为以命令行模式进入该容器：

```
docker run -it --name node-test node /bin/bash
```

参数说明：

- -i: 交互式操作。
- -t: 终端。
- node: node 镜像。
- name: 自定义容器名称
- /bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。

要退出终端，直接输入 `exit`

### 启动已停止运行的容器

查看所有的容器命令如下：

```
docker ps -a
```

使用 `docker start` 启动一个已停止的容器：

```
docker start b750bbbcfd88 
```

### 后台运行容器

在大部分的场景下，我们希望 docker 的服务是在后台运行的，我们可以过 `-d` 指定容器的运行模式。

```
docker run -itd --name node-test node

```

注：加了 `-d `参数默认不会进入容器，想要进入容器需要使用指令 `docker exec`（下面会介绍到）。

### 进入容器

```
docker exec -it [容器 id] /bin/bash
```

### 导出容器

如果要导出本地某个容器，可以使用 docker export 命令。

```
docker export [容器 id] > node.tar
```

这样将导出容器快照到本地文件。


### 导入容器





## Docker 安装 CentOS

1、查看可用的 CentOS 版本

访问 CentOS 镜像库地址：[https://hub.docker.com/_/centos?tab=tags&page=1](https://hub.docker.com/_/centos?tab=tags&page=1)。

2、拉取指定版本的 CentOS 镜像，这里我们安装指定版本为例(centos7):

```
docker pull centos:centos7
```

3、查看本地镜像

使用以下命令来查看是否已安装了 centos7：

```
docker images
```

4、运行容器

```
docker run -itd --name centos-test centos:centos7
```

5、 查看容器的运行信息

```
docker ps
```

5、并且可以通过 exec 命令进入 CentOS 容器。(相当于进入 centOS 系统，想退出系统可以使用 exit)

```
docker exec -it centos-test /bin/bash
```

## Docker 安装 Nginx

1、查看可用的 Nginx 版本

访问 Nginx 镜像库地址： [https://hub.docker.com/_/nginx?tab=tags](https://hub.docker.com/_/nginx?tab=tags)。

2、取最新版的 Nginx 镜像

```
docker pull nginx:latest
```

3、查看本地镜像

使用以下命令来查看是否已安装了 nginx：

```
docker images
```

4、运行容器

安装完成后，我们可以使用以下命令来运行 nginx 容器：

```
docker run --name nginx-test -p 8080:80 -d nginx
```

参数说明：

- --name nginx-test：容器名称。
- -p 8080:80： 端口进行映射，将本地 8080 端口映射到容器内部的 80 端口。
- -d nginx： 设置容器在在后台一直运行。

5、最后我们可以通过浏览器可以直接访问 8080 端口的 nginx 服务：

```
localhost:8080
```

## Docker 安装 Node.js

1、查看可用的 Node 版本

访问 Node 镜像库地址： [https://hub.docker.com/_/node?tab=tags](https://hub.docker.com/_/node?tab=tags)

2、取最新版的 node 镜像

```
docker pull node:latest
```

3、查看本地镜像

```
docker images
```

4、运行容器

安装完成后，我们可以使用以下命令来运行 node 容器

参数说明：

--name node-test：容器名称。

```
docker run -itd --name node-test node
```

5、最后进入查看容器运行的 node 版本:

```
docker exec -it node-test /bin/bash

node -v
```

## Dockerfile

Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。

- `FROM：`定制的镜像都是基于 FROM 的镜像，这里的 nginx 就是定制需要的`基础镜像`。后续的操作都是基于 nginx。
- `RUN：`用于执行后面跟着的命令行命令。有以下俩种格式：

shell 格式：

```
RUN <命令行命令>
# <命令行命令> 等同于，在终端操作的 shell 命令。
```

exec 格式：

```
RUN ["可执行文件", "参数1", "参数2"]
# 例如：
# RUN ["./test.php", "dev", "offline"] 等价于 RUN ./test.php dev offline
```

注意：Dockerfile 的指令每执行一次都会在 docker 上新建一层。所以过多无意义的层，会造成镜像膨胀过大。例如：

```
FROM centos
RUN yum install wget
RUN wget -O redis.tar.gz "http://download.redis.io/releases/redis-5.0.3.tar.gz"
RUN tar -xvf redis.tar.gz
以上执行会创建 3 层镜像。可简化为以下格式：
FROM centos
RUN yum install wget \
    && wget -O redis.tar.gz "http://download.redis.io/releases/redis-5.0.3.tar.gz" \
    && tar -xvf redis.tar.gz
```

如上，以 && 符号连接命令，这样执行后，只会创建 1 层镜像。

#### 创建镜像
-t 是给镜像命名 . 是基于当前目录的Dockerfile来构建镜像

```
docker build -t vuenginxcontainer .
```

## 常见错误
### 上传自己的镜像被拒绝denied: requested access to the resource is denied

信息显示是拒接访问，因为tag的名字斜线前面部分不是本人的用户名，下面把它修改为mydockerapp/xxxxx就push成功。需要注意的是mydockerapp是本人的docker用户名。进入docker hub网站查看，发现多了一个公共的repository。
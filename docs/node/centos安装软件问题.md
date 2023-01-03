# centos安装软件问题

## yum安装nodejs后没有安装npm

遇到过在centos 7.x 版本直接通过 yum install -y nodejs 安装node的时候，发现npm包没有连同安装

后来谷歌找到，

切换

```
curl --silent --location https://rpm.nodesource.com/setup_10.x | bash -
```

再安装

```
yum install -y nodejs
```

安装好之后， npm也安装好了

```
node -v

npm -v
```

## 安装 Nginx

yum 安装 nginx 非常简单，就输入一条命令即可。

```
$ sudo yum -y install nginx   # 安装 nginx
$ sudo yum remove nginx  # 卸载 nginx
```

使用 yum 进行 Nginx 安装时，Nginx 配置文件在 `/etc/nginx` 目录下。

### 配置 Nginx 服务

```
 sudo systemctl enable nginx # 设置开机启动 
 sudo service nginx start # 启动 nginx 服务
 sudo service nginx stop # 停止 nginx 服务
 sudo service nginx restart # 重启 nginx 服务
 sudo service nginx reload # 重新加载配置，一般是在修改过 nginx 配置文件时使用。
```

## CentOS7查看开放端口命令及开放端口号

在一次服务器安装纯净版 CentOS7之后，在服务器配置安全组开放端口，和安装了nginx，发现一直访问不网站，报 `HTTP ERROR 502`,一直以为是nginx配置出问题了，明明在平台控制台也配置了安全组，开放了80端口了，后来安装了node，起个node的服务，发现也访问不了，这时就怀疑，端口真的开放了吗？ 就找到下面命令查看下端口是否开放，发现并没有开放的端口。 然后通过命令开放了端口，才正常访问了

查看已开放的端口

```
firewall-cmd --list-ports
```

开放端口（开放后需要要重启防火墙才生效）

```
firewall-cmd --zone=public --add-port=80/tcp --permanent
```
重启防火墙

```
firewall-cmd --reload
```

关闭端口（关闭后需要要重启防火墙才生效）

```
firewall-cmd --zone=public --remove-port=80/tcp --permanent
```

开机启动防火墙

```
systemctl enable firewalld
```

开启防火墙

```
systemctl start firewalld
```

禁止防火墙开机启动

```
systemctl disable firewalld
```

停止防火墙
```
systemctl stop firewalld
```
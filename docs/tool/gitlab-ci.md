# gitlab-ci

## macOS 安装gitlab-runner 

```
sudo curl --output /usr/local/bin/gitlab-runner "https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-darwin-amd64"
```

安装后授权`gitlab-runner`这个文件

```
sudo chmod +x /usr/local/bin/gitlab-runner
```

在火狐浏览器点击域名左边的小锁，  安全连接 -> 更多信息 -> 查看证书 

最后点击 `下载PEM（证书）`

下载的证书改pem后缀名为 crt

或者用命令生成

```
cat comliq-net.pem >> ca.crt
```

到放证书的文件打开终端，执行下面命令

```
gitlab-runner register --tls-ca-file ca.crt
```

安装提示输入 url ,  token,  描述， tag， 选择docker，tico/docker

`gitlab-runner status`
`gitlab-runner start`
`gitlab-runner stop`
`gitlab-runner run`
`gitlab-runner verify`


`gitlab-runner list`    列出所有跑步者

取消注册跑步者，下面三种方法都可以

1. gitlab-runner unregister --url http://git-xxx.com --token TOKEN_NAME
2. gitlab-runner unregister --name NAME
3. 从config.toml文件中删除跑步者并启动跑步者


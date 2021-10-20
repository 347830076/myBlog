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

到放证书的文件打开终端，执行下面命令，`注册runner`

```
gitlab-runner register --tls-ca-file ca.crt
```

**安装提示输入 url ,  token,  描述， tag， 选择shell**

url, token 的信息，在自己的gitlab网站上，项目的setting -> CI/CD -> runner (Expand) -> 左边信息栏中

Register the runner with this URL:

And this registration token:

注册完之后呢，项目的setting -> CI/CD -> runner (Expand) -> 左边信息栏 下面会出现一个 `Available specific runners` 标题，下面都是你注册的runner

然后执行 `gitlab-runner start` `gitlab-runner run`

如果出现你注册的 runner 左边有感叹号，就执行 `gitlab-runner verify` `gitlab-runner stop` `gitlab-runner start` `gitlab-runner run`

`gitlab-runner register`
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


在项目当中，新建个 `.gitlab-ci.yml` 文件，

里面代码如下：

```sh
image: docker
services:
  - docker:dind
stages:
  - deploy

step-deploy-prod:
  stage: deploy
  script:
    - docker logout xxx 
    - docker login --username=xxx --password=xxx xxx.xxx.com
    #- docker images
    #- docker ps
    #- if [ true ]; then echo "this is true"; fi
    #- if [ $(docker images -q vueappcontainer) ]; then docker rmi -f vueappcontainer;fi
    - docker build -t vueappcontainer:v1.0.0 .
    - docker tag $(docker images -q vueappcontainer:v1.0.0) xxx/xxx/vueapp:v1.0.0
    - docker push xxx/xxx/vueapp:v1.0.0
    # 这里是查看当前的服务器上有没有正在运行或者存在我们之前运行过的项目容器，如果有删除了
    # - if [ $(docker ps -aq --filter name=vueapp) ]; then docker rm -f vueapp;fi
    # - docker run -d -p 8002:80 --rm  --name vueapp vueapp
  tags:
    - docker
```

上面代码是使用了`docker 注册，登录`，然后通过项目的`Dockerfile`文件生成一个镜像，最后`push`提交到自己的`镜像仓库地址`

### .gitlab-ci.yml 常用配置：

| 配置	| 说明 |
| --- | --- |
| image	| 镜像 |
| jobs	| 如上所示：install-job、build-job 便是 jobs，是 .gitlab-ci.yml 最基本的元素。|
| stages| 用来组合 jobs 按步骤工作，jobs 下面对应的 stage 和 stages 的子集对应。|
| only	| 指定 jobs 的执行场景，相对应的是 except。|
| script| 执行命令 |
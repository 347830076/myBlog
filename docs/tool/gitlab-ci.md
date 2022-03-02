# gitlab-ci

## macOS 安装gitlab-runner 

```
sudo curl --output /usr/local/bin/gitlab-runner "https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-darwin-amd64"
```

安装后授权`gitlab-runner`这个文件

```
sudo chmod +x /usr/local/bin/gitlab-runner
```

网站的证书可以使用火狐浏览器来下载，点击域名左边的小锁，  安全连接 -> 更多信息 -> 查看证书 

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

`url, token` 的信息，在自己的gitlab网站上，项目的 `setting -> CI/CD -> runner (Expand) -> 左边信息栏中`

Register the runner with this URL: 

And this registration token:

注册完之后呢，项目的setting -> CI/CD -> runner (Expand) -> 左边信息栏 下面会出现一个 `Available specific runners` 标题，下面都是你注册的runner

然后执行 `gitlab-runner start` `gitlab-runner run`

如果出现你注册的 runner 左边有感叹号，就执行 `gitlab-runner verify` `gitlab-runner stop` `gitlab-runner start` `gitlab-runner run`，先验证看看有没有失败的， 停止掉，重新开启，最后再run跑起来

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/tool/gitlab-ci/gitlab-ci.png')" />

`gitlab-runner register` 注册跑步在

`gitlab-runner status` 检查状态

`gitlab-runner start` 开始

`gitlab-runner stop` 停止

`gitlab-runner run` 运行

`gitlab-runner verify` 验证

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
    - docker # 在哪个runner上面执行，在注册runner可以自定义
  when: on_success
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


**`when`** 可以设置以下值：

- `on_success` - 只有前面stages的所有工作成功时才执行。 这是默认值。
- `on_failure` - 当前面stages中任意一个jobs失败后执行。
- `always` - 无论前面stages中jobs状态如何都执行。
- `manual` - 手动执行(GitLab8.10增加)。

**`only and except`** 两个参数说明了job什么时候将会被创建:

- `only`定义了`job`需要执行的所在分支或者标签
- `except`定义了`job`不会执行的所在分支或者标签
- 以下是这两个参数的几条用法规则：
    - `only`和`except`如果都存在在一个`job`声明中，则所需引用将会被`only`和`except`所定义的分支过滤.
    - `only`和`except`允许使用正则
    - `only`和`except`可同时使用。如果`only`和`except`在一个`job`配置中同时存在，则以`only`为准，跳过`except`(从下面示例中得出)。
    - `only`和`except`允许使用特殊的关键字：`branches`，`tags`和`triggers`。
    - `only`和`except`允许使用指定仓库地址但不是`forks`的仓库(查看示例3)。


例子

```sh
stages:
  - deploy

# 变量参数
# $REFRESH_NPM  			是否刷新 npm 依赖包，默认不刷新，值为 TRUE 时刷新
# $TAG_NAME 			    容器标签名，生产环境更新时，必须人为填写
# $CI_COMMIT_BRANCH 	git 分支名：dev，qa，qa2，qa3，prod
# $DOCKER_USERNAME  	阿里云镜像容器账号
# $DOCKER_PASSWORD 	  阿里云镜像容器密码

# 运行发布命令
step-deploy:
  stage: deploy

  # 使用的 gitlab runner
  tags:
    - projectName

  # 监听以下分支变化，自动更新对应环境
  only:
    - dev
    - qa
    - qa2
    - prod

  variables:
    TAG_NAME: "default"

  script:
    # 打印所有参数
    - echo $REFRESH_NPM
    - echo $CI_COMMIT_BRANCH
    - echo $TAG_NAME

    # 多行条件判断：https://www.cnblogs.com/sanduzxcvbnm/p/14962298.html
    # 如果分支为生产环境，则不能使用默认 tag，必须人为输入
    - if [ "$CI_COMMIT_BRANCH" == "prod" ] && [ "$TAG_NAME" == "default" ]; then exit 1; fi

    # 通过 docker file 打包镜像
    - sudo docker build -t shendu-$CI_COMMIT_BRANCH:$TAG_NAME .  --build-arg PROJECT_ENV="${CI_COMMIT_BRANCH}"

    # 重命名镜像
    - sudo docker tag $(sudo docker images -q shendu-$CI_COMMIT_BRANCH:$TAG_NAME) registry.cn-xxx.aliyuncs.com/namespace/web-$CI_COMMIT_BRANCH:$TAG_NAME

    # 登出 阿里云镜像仓库
    - sudo docker logout registry.cn-xxx.aliyuncs.com

    # 登录 docker 阿里云镜像仓库
    - sudo docker login --username=$DOCKER_USERNAME --password="$DOCKER_PASSWORD" registry.cn-xxx.aliyuncs.com

    # 推送镜像到仓库
    - sudo docker push registry.cn-xxx.aliyuncs.com/namespace/web-$CI_COMMIT_BRANCH:$TAG_NAME
```
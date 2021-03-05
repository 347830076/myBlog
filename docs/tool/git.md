# git常用命令

## 安装

请到官网 [git-scm.com](http://git-scm.com) 或国内的下载站，下载安装包。


## 创建项目有两种情况
1. 本地无项目，克隆远程库的文件到本地
例如在github或gitee上已有的项目，可以将其拉取到本地上
```sh
git clone  https://github.com/347830076/myBlog.git  my-projName
cd my-projName
```
注意：上面的git clone命令需要传入第一个参数是远端git库的地址，第二个参数是本地的项目名字（也就是本地的文件夹名称）


2. 本地有项目，合并远程库的文件到本地
例如我本地开发好一个程序应用，并且在github或gitee上创建好一个空的库，需要把代码上传到该库
0. 首先,你需要执行下面两条命令,作为git的基础配置,作用是告诉git你是谁,你输入的信息将出现在你创建的提交中.
```sh
git config --global user.name "你的名字或昵称"
git config --global user.email "你的邮箱"
```
1. 那我们第一步可以初始化本地库先
```sh
//进入到本地程序所在根目录
git init				//git的初始化
```
2. 给该本地库添加远程库地址
```sh
git remote add origin <repo-address>		//把远程库的地址填入到<repo-address>
```
3. 把本地库文件和远程库文件进行合并
```sh
git pull origin master
```
4. 添加文件到本地库
```sh
git add .			                //添加本地队列
git commit -m "第一次提交"		    //把队列中的文件提交到本地库
```

5. 合并后提交代码
```sh
git push origin master			//把本地库的文件推送到远程库的master主线
```
如果需要账号密码的话就输入账号密码，这样就完成了一次提交。

6. 设置操作的默认库和分支
```sh
git branch --set-upstream-to=origin/master
```

## 常用的提交操作

1. 修改或添加好自己的文件后，需要把文件添加到git队列中
```sh
git add .    //把当前所有改动后的文件添加到git队列中    .是代表所有文件，  也可以使用 git add <对应文件的路径>
```
2. 把队列中的文件提交到本地库
```sh
git commit -m "提交说明"
```
尤其注意参数-m ,是必须的，表示提交时的说明文字
3. 如果该项目存在多人协作，这一步必不可少，有效防止文件冲突

```sh
git pull origin master  //表示拉取所设源地址的主线分支代码
```
这一步会把远程库的文件拉取到本地库，会对有冲突的文件进行自动合并(尽量不要让多人同时改动一个文件，否则自动合并失效，需要手动合并)

4. 最后保证上面几步没问题后，把本地库文件推送到远端库

```sh
git push origin master  //表示推送到所设源地址的主线分支
```

## 解决冲突

在提交时可能会存在冲突，所谓的冲突，就是你跟你的基友在修改同一个文件的同一行的内容时，系统无法判断用谁的代码。

当你使用`git pull`的时候，会有冲突提示

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/git/git冲突1.png')" alt="git冲突1">

这个时候，我们的git会自动把冲突位置显示在相关文件里

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/git/git冲突2.png')" alt="git冲突2">

二选一，要么留自己的代码，要么留别人的代码，编辑完成后，再重新四步走。

当然，某些特殊情况，需要强制推送的话，执行下面的命令
```sh
git push origin master -f
```
如果您选择保留线上的readme文件,则需要在提交前先执行
```sh
git pull origin master
```
拉取的时候，Git自动合并，并产生了一次提交。    
如果不能够自动合并，那么会提示

## 提交时老是提示输入用户名密码

```sh
git config --global credential.helper store
```
执行完后，下次提交再次输入账号密码，即可以自动存储了


## 查看git库的当前状态

```sh
git status
```

## 还原修改git checkout

让文件回到最近一次git commit或git add时的状态
```sh
git checkout -- index.html
```

##如果遇到以下情况，无法add和commit

```
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
        modified:   ../index.html

no changes added to commit
```
上面这种情况，其实是因为你改变了index文件，但并没有有效的add到**暂存区**中，需要检查自己是否有把该文件有效的`git add`。
> **根据多年经验，其实往往可能是因为我们cd到了子目录，然后再执行`git add ./`，从而导致修改的文件，并没有真正的添加进去)**

## git pull 失败 ,提示：fatal: refusing to merge unrelated histories

在进行git pull 时，添加一个可选项
```sh
git pull origin master --allow-unrelated-histories
```

## fatal:multiple stage entries for merged file
```
解决办法如下：
1.执行rm .git/index，回车
2.执行git add -A，回车
3.git commit -m "您的修改说明" 
```

### 拉取线上所有分支下来

```
git fetch
```
### 创建新分支的命令

```bash
# 在本地创建新分支
git checkout -b <分支名>
# 第一次提交到远程分支，需要跟远程分支关联起来
git push -u origin <分支名>
# 执行过上一条命令后，以后在新分支就可以直接通过 `git push` 提交代码了
```

## 时光穿梭

1. 先查看要回退的时间点
```sh
git log
```
<img class="zoom-custom-imgs" :src="$withBase('/assets/img/git/时光机.png')" alt="时光机">

2. 根据ID回退到历史的某一个时间
```sh
git reset --hard d48bf2fcd99
```
`hard`的参数值就是第一步所获取到的id(不需要全部，可以截取其中一截就可以了)、

##.gitignore规则不生效的解决办法

把某些目录或文件加入忽略规则，按照上述方法定义后发现并未生效，原因是.gitignore只能忽略那些原来没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。那么解决方法就是先把本地缓存删除（改变成未被追踪状态），然后再提交：
```
git rm -r --cached .
git add .
git commit -m '更新.gitignore'
git pull
git push
```
这样就可以了！

## 如果git远程地址更改了，怎么办

```sh
git remote remove origin                //删除原来的git地址
git remote add origin {新的git地址}      //换成新的git地址
```
这样，当你的git地址变了，但又不想重新克隆，用它吧   
并且记得设置操作的默认库和分支
```
git branch --set-upstream-to=origin/master
```
> 其中origin是你的远程库地址的代号名字，可以改任意名字

## win10用户提交代码一直提示fatal: Authentication failed
**排除掉用户的设置正确之后，依然不行**
后来发现这是一个win10的系统，原来有如下操作：   

Win10 的用户凭据里保存了git的本地用户信息，找到它，删掉就好了!

具体的：
控制面板 > 用户帐户 > 管理你的凭据 > 选择 [Windows 凭据]
git 保存的用户信息在[普通凭据]列表里
   
操作完成后，再正常的git clone下来，4步走即可

## SSL certificate problem: Unable to get local issuer certificate

```
git config --global http.sslVerify false
```

参考文章 [https://confluence.atlassian.com/bitbucketserverkb/ssl-certificate-problem-unable-to-get-local-issuer-certificate-816521128.html](https://confluence.atlassian.com/bitbucketserverkb/ssl-certificate-problem-unable-to-get-local-issuer-certificate-816521128.html)


# git常用命令

```
git status                               查看工作区状态 
git add .                                将所有改动放进暂存区
git commit -m "描述"                      提交并附带概要信息
git pull                                 从远程仓库拉去代码
git push                                 推送代码到远程仓库（master分支）

git log                                  查看日志
git log -p                               查看详细历史
git log --stat                           查看简要统计
git log --oneline --graph 		 查看简单历史，显示树
git reflog                               查看操作记录

git branch 名称                          创建分支
git checkout 名称                        切换分支
git checkout -b 名称                     创建并切换到新分支
git checkout --track 名称                创建新分支并关联新分支
git branch -d 名称                       删除该分支（不能删除当前所在的分支，不能删除没有合并到master上的分支）
git branch -D 名称                       删除该分支（可以删除没有合并到master上的分支）

git commit --amend                      对最新的一条commit进行修正
git reset --hard HEAD^                  丢弃最新提交（未提交的内容会被擦掉）
git reset --soft HEAD^                  丢弃最新提交（未提交的内容不会被擦掉）
git revert HEAD^                        回到某个commit
git rebase 目标基础点                     重新设置基础点
git pull --rebase 			从远程仓库拉去代码并重新设置基础点
git merge 分支名称                       将分支合并到当前分支
git push origin branchName              将代码推送到远程仓库的指定分支
git push -d origin branchName           删除远程分支

git stash                               暂存代码(直接保存当前修改的文件代码)
git stash list                          查看暂存代码列表
git stash apply                         命令时可以通过名字指定使用哪个stash，默认使用最近的stash（即stash@{0}）
git stash pop                           弹出暂存代码（出栈，删除list的这行记录）
git stash drop                          删除指定的stash记录
```

## 安装

请到官网 [git-scm.com](http://git-scm.com) 或国内的下载站，下载安装包。

## 创建项目有两种情况
#### `本地无项目`，克隆远程库的文件到本地

例如在github或gitee上已有的项目，可以将其拉取到本地上

```sh
git clone  https://github.com/347830076/myBlog.git  my-projName
cd my-projName
```

注意：上面的git clone命令需要传入第一个参数是远端git库的地址，第二个参数是本地的项目名字（也就是本地的文件夹名称）

#### `本地有项目`，合并远程库的文件到本地

例如我本地开发好一个程序应用，并且在github或gitee上创建好一个空的库，需要把代码上传到该库

首先,你需要执行下面两条命令,作为git的基础配置,作用是告诉git你是谁,你输入的信息将出现在你创建的提交中.

```sh
git config --global user.name "你的名字或昵称"
git config --global user.email "你的邮箱"
```

1. 那我们第一步可以初始化本地库先
```sh
// 进入到本地程序所在根目录
git init				// git的初始化
```
2. 给该本地库添加远程库地址
```sh
git remote add origin <repo-address>		//把远程库的地址填入到<repo-address>
```
3. 把本地文件和远程库文件进行合并
```sh
git pull origin master
```
4. 添加文件到暂存区
```sh
git add .			           // 添加本地队列
git commit -m "第一次提交"		    // 把队列中的文件提交到本地暂存区
```

5. 合并后提交代码
```sh
git push origin master			//把本地库的文件推送到远程库的master主线
```
如果需要账号密码的话就输入账号密码，这样就完成了一次提交。

## 提交时老是提示输入用户名密码

```sh
git config --global credential.helper store
```
执行完后，下次提交再次输入账号密码，即可以自动存储了

## 查看git库的当前状态

```sh
git status
```

## 撤销

#### 未使用 git add 缓存代码

```sh
git checkout filename // 撤销某个文件，注意“--”左右空格
git checkout .	// 撤销所有文件
```
ps: 此命令不会删除掉刚新建的文件

#### 已经使用了 git add 缓存了代码

```sh
git reset HEAD filename	//放弃某个文件的缓存
git reset HEAD .	//放弃所有的缓存
```

#### 已经用 git commit 提交了代码

```sh
git reset  HEAD^ 		// 与git reset --mixed HEAD^ 效果是一样的, 不删除工作空间改动代码，撤销commit，并且撤销git add . 操作
git reset  HEAD^      	        // 退到上一次commit的状态
git reset  HEAD~2	        // 退到上上一次commit的状态， 数字以此类推，往上撤回
git reset  HEAD	                // 退到当前commit的状态
git reset  commit	        // 回退到任意版本
git reset --mixed HEAD^ 	// 退到上一次commit的状态，将上次commit的改动显示到工作空间
git reset 123987                // 回退到指定的commit id
```

##### 参数的意思

- --mixed

意思是：不删除工作空间改动代码，`撤销commit`，`并且撤销git add .` 操作

这个为默认参数,`git reset --mixed HEAD^ `和` git reset HEAD^` 效果是一样的。

- --soft  

不删除工作空间改动代码，撤销commit，不撤销git add . 

- --hard

删除工作空间改动代码，撤销commit，撤销git add . 

注意完成这个操作后，就恢复到了上一次的commit状态。


#### 如果commit注释写错了，只是想改一下注释，只需要：

```
git commit --amend
```

此时会进入默认vim编辑器，修改注释完毕后保存就好了。


### 创建新分支的命令

```bash
# 在本地创建新分支
git checkout -b <分支名>
# 第一次提交到远程分支，需要跟远程分支关联起来
git push -u origin <分支名>
# 执行过上一条命令后，以后在新分支就可以直接通过 `git push` 提交代码了
```

### 拉取线上所有分支下来

```
git fetch // 会拉取远程所有内容，包括分支，此时本地直接切换分支即可，不用新建分支
```

### 查看本地分支和追踪情况

```
git remote show origin	//可对比查看远程哪些分支删除了，然后根据提醒，删除远程已删除的所有关联本地的分支，再使用git branch -D 删除具体的分支
```
## .gitignore规则不生效的解决办法

把某些目录或文件加入忽略规则，按照上述方法定义后发现并未生效，原因是.gitignore只能忽略那些原来没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。那么解决方法就是先把本地缓存删除（改变成未被追踪状态），然后再提交：
```
git rm -r --cached .
git add .
git commit -m '更新.gitignore'
git pull
git push
```
这样就可以了！

## 设置全局 .gitignore

1. vim ~/.gitignore_global
2. 写入内容
3. 生效配置文件

```
git config --global core.excludesfile ~/.gitignore_global
```

## 如果git远程地址更改了，怎么办

```sh
git remote remove origin [旧的git地址]  // 删除原来的git地址
git remote add origin [新的git地址]     // 换成新的git地址
```
这样，当你的git地址变了，但又不想重新克隆，用它吧   

## 常见错误和解决方法
### win10用户提交代码一直提示fatal: Authentication failed
**排除掉用户的设置正确之后，依然不行**

后来发现这是一个win10的系统，原来有如下操作：   

Win10 的用户凭据里保存了git的本地用户信息，找到它，删掉就好了!

具体的：
`控制面板 `> `用户帐户` > `管理你的凭据` > `选择 [Windows 凭据]`

git 保存的用户信息在[普通凭据]列表里
   
操作完成后，正常git操作就好

### SSL certificate problem: Unable to get local issuer certificate

```
git config --global http.sslVerify false
```

参考文章 [https://confluence.atlassian.com/bitbucketserverkb/ssl-certificate-problem-unable-to-get-local-issuer-certificate-816521128.html](https://confluence.atlassian.com/bitbucketserverkb/ssl-certificate-problem-unable-to-get-local-issuer-certificate-816521128.html)


### git pull 失败 ,提示：fatal: refusing to merge unrelated histories

在进行git pull 时，添加一个可选项
```sh
git pull origin master --allow-unrelated-histories
```

### git pull 失败

提示：

        error: inflate: data stream error (incorrect header check)
        error: unable to unpack 6723035d09cf144d37204910229f202a9c45abbe header
        fatal: loose object 6723035d09cf144d37204910229f202a9c45abbe (stored in .git/objects/67/23035d09cf144d37204910229f202a9c45abbe) is corrupt
        fatal: the remote end hung up unexpectedly

解决： win+鼠标左键，点击.git/objects/67/23035d09cf144d37204910229f202a9c45abbe，在vscode打开这个文件，直接删除这个文件就可以了，在重新git pull就可以

### fatal:multiple stage entries for merged file
```
解决办法如下：
1.执行rm .git/index，回车
2.执行git add -A，回车
3.git commit -m "您的修改说明" 
```

### fatal: unable to access 'https://github.com/xxx': TCP connection reset by peer

```
git gc
```

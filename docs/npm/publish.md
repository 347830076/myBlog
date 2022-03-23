# 如何发布一个自己的npm包
## 1、创建一个npm的账号

[npm 官网](https://www.npmjs.com/)

## 2、初始化一个简单的项目发布

a、本地创建一个文件夹：例如：`npm-test`
b、执行命令进入目录: `cd npm-test`
c、执行 `npm init` 初始化项目。默认一路回车就行

得一个package.json文件，文件的默认字段简介

- `name`：发布的包名，默认是上级文件夹名。不得与现在npm中的包名重复。包名不能有大写字母/空格/下滑线!
- `version`：你这个包的版本号，默认是1.0.0。版本号由三部分组成：`major.minor.patch`，主版本号.次版本号.修补版本号。
    - `补丁`中的更改表示不会破坏任何内容的错误修复。 
    - `次要版本`的更改表示不会破坏任何内容的新功能。 
    - `主要版本`的更改代表了一个破坏兼容性的大变化。 如果用户不适应主要版本更改，则内容将无法正常工作。
- `description`：项目简介
- `main`：入口文件，默认是index.js，可以修改成自己的入口文件 
- `scripts`：包含各种脚本执行命令
- `test`：测试命令。
- `author`：写自己的账号名
- `license`：这个直接回车，开源文件协议吧，也可以是MIT，看需要吧。

## 3、如果本机第一次发布包（非第一次可忽略）

在终端输入`npm adduser`，提示输入账号，密码和邮箱，然后将提示创建成功

【注意】`npm adduser`成功的时候默认你已经登陆了，所以可跳过第四步。

最后一行显示登录信息，as 后面是用户名。on 后是源地址，如果不是`https://registry.npmjs.org/`，比如是淘宝源，请切换为官方源，才能推送项目到npm官方网站。

修改源地址为官方源
```
npm config set registry https://registry.npmjs.org/
```

## 4、非第一次发布包

在终端输入`npm login`，然后输入你创建的账号和密码，和邮箱，登陆，结果同步骤三。


## 5、npm publish 发包

在终端输入  `npm publish` 就可以了

>注意：如果项目里有部分私密的代码不想发布到npm上，可以将它写入`.gitignore` 或`.npmignore`中，上传就会被忽略了

## 6、查询发布的包

到npm官网全局搜索即可

## 7、如何撤销发布的包

终端执行 `npm unpublish`

例如：
- 1、`npm unpublish z-tool@1.0.0` 删除某个版本
- 2、`npm unpublish z-tool --force` 删除整个npm市场的包

不过撤包推荐用法：

- `npm unpublish` 的推荐替代命令：`npm deprecate <pkg>[@<version>] <message>`
- 使用这个命令，并不会在社区里撤销你已有的包，但会在任何人尝试安装这个包的时候得到警告
- 例如：`npm deprecate z-tool '这个包我已经不再维护了哟～'`

>【注意】如果报权限方面的错，加上 --force

参考文章：

[一分钟教你发布npm包](https://segmentfault.com/a/1190000023075167)


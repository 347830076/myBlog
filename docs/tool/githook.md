# git hook 自动部署

本文章教大家，使用git hook来实现本地开发代码一行命令自动上传到远程服务器。

## 第一步创建空git仓库

终端进入你需要放项目的文件夹，可以通过ssh root@host 链接服务器，
cd 命令进入你的文件夹， 这个是需要大家会一些linux命令，这里我就不介绍了。

进入文件夹后，先初始化git
```js
git init
```
然后使用下面一行代码，使得你这个文件夹创建个空仓库，接受代码提交
```js
git config receive.denyCurrentBranch ignore
```
下面我们进入 git 的hook文件做修改，来使用hook监听代码提交后自动拉取代码到我们的项目文件夹。
进入.git/hooks
```js
cd .git/hooks
```
创建post-receive hook钩子， 类似我们vue的生命周期函数，监听代码push到远程仓库后进行操作
```js
touch post-receive
```
然后用vim编辑器打开 post-receive 写入代码
```js
vim post-receive
```
将以下内容复制到⽂件中 （输⼊i，复制粘贴，按 Esc 退出insert模式，按 :wq 保存退出）
```js
#!/bin/sh
unset GIT_DIR
cd /www/wwwroot/yourproject
git checkout -f
```
<b style="color:red">注释说明： cd /www/wwwroot/yourproject   这里的路径是你的服务器项目地址。</b>

授予post-receive可执⾏权限
```js
chmod +x post-receive
```

这样，⼀个空的git仓库就在服务器上建好了，仓库的地址为：
```js
ssh://deployuser@ipaddress/www/wwwroot/yourproject/.git
```
注：deployuser：⽤户名、 ipaddress：服务器ip地址 /www/wwwroot/yourproject/.git :你项目路径的.git文件夹

## 第二步添加公钥
本地生成ssh key 复制添加到服务器上面， 本地[生成ssh key](./sshkey.md)，可以看我的另一篇文章[生成ssh key](./sshkey.md)
生成ssh key后 复制到剪切板

在服务器终端执行下面代码，打开 .ssh/authorized_keys 文件添加我们本地的 ssh key, 这样可以免账号密码推送代码， 多人开发时，只需要回车空行添加多个 ssh key就好。

vim 编辑器打开 复制剪切板的 ssh key  （输⼊i，复制粘贴，按 Esc 退出insert模式，按 :wq 保存退出）
```js
vi ~/.ssh/authorized_keys
```

服务器上面的配置做好了， 接下来的是本地电脑的配置

## 第三步创建bash脚本

根⽬录添加 deploy.sh ⽂件,文件内的代码如下：

<b>vue 项目的配置</b>  执行vue 打包命令，执行完进入 dist文件夹创建git，四步走推送到服务器仓库，服务器的hook钩子会监听到自动拉取代码
```sh
 # 确保脚本抛出遇到的错误
 set -e
 # ⽣成静态⽂件
 npm run build
 # 进⼊⽣成的⽂件夹
 cd dist
 git init
 git add -A
 git commit -m 'deploy'
 git push -f ssh://root@120.79.193.236/www/wwwroot/m_web/.git master
 cd -
```
ssh://root@120.79.193.236/www/wwwroot/m_web/.git 是你上面服务器创建好的空git仓库地址

在package.json srcipts 添加一行
```js
"deploy": "bash deploy.sh"
```

打包发布
```js
npm run deploy
```

这样就大功告成了。

如果想其他非vue打包的项目怎么办呢，我们是可以利用webpack打包工具来帮助我们。
思路是，把当前项目复制一份，然后再写个deploy脚本执行git的四步走。

下面直接上代码：
没有 package.json文件的话，先 npm init 初始化
```js
npm init
```
安装需要的依赖包
```
npm i -D  webpack webpack-cli clean-webpack-plugin copy-webpack-plugin
```

clean-webpack-plugin 是 删除文件插件

copy-webpack-plugin  是 复制文件插件

根目录新建 webpack.config.js 文件，里面代码如下：
```js
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
    entry: path.join(__dirname, 'main.js'), //入口,要使用webpack打包那个文件。
    output: {
        //输出文件的配置
        path: path.join(__dirname, './dist'), //指定到那个目录中去
        filename: "bundle.js" //指定输出文件的名称
    },
    // 开发环境还是生产环境
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    plugins: [
        // 复制根目录下所有文件，并粘贴到./dist文件夹里面去，
        new CopyPlugin({
            patterns: [
                {
                    from: '**/*', to: './',
                    globOptions: {
                        // 忽略不复制文件
                        ignore:['**/dist','**/node_modules']
                    }
                },
            ],
        }),
        // 复制前清除dist文件夹
        new CleanWebpackPlugin()
    ],
};
```

在package.json的scripts添加一行：
```js
"copy": "webpack"
```
这时候的根目录下的 deploy.sh文件代码如下：
```js
# 确保脚本抛出遇到的错误
set -e

# 复制文件
npm run copy

# 进入生成的文件夹
cd dist

git init
git add -A
git commit -m 'deploy'
git push -f ssh://root@118.25.48.195/www/web/yourproject/.git master

cd -
```
打包发布
```js
npm run deploy
```

完美解决各个打包上传代码到服务器，这里涉及的知识点，linux命令操作，生成ssh key，webpack配置. 看不明白的，多仔细跟着看多几遍，注意路径文件问题，一步一步仔细跟着操作，就可以的了，有什么问题也可以在下面评论留言。

<Vssue :options="{ locale: 'zh' }"  />
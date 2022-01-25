# vscode 扩展开发

## 项目初始化

官方为了方便开发人员进行vscode插件的开发，提供了对yo应的脚手架来生成对应的项目。[vscode 扩展开发官方文档](https://code.visualstudio.com/api/get-started/your-first-extension)

```js
// 安装需要的包
npm install -g yo generator-code
// 运行
yo code
```

> 上述命令其实安装了两个包（yo和generator-code)，这两个包用途如下：

    yo模块全局安装后就安装了Yeoman，Yeoman是通用型项目脚手架工具，可以根据一套模板，生成一个对应的项目结构
    generator-code模块是VS Code扩展生成器，与yo配合使用才能构建项目。

执行 yo code之后，会有下面几个选项：

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/tool/vscode/1.png')" />

- ? What type of extension do you want to create(您想要创建什么类型的扩展?)? New Extension (`JavaScript`) 
- ? What's the name of your extension(你的分机名是什么，也就是项目名)? `hello`
- ? What's the identifier of your extension（你的扩展的标识符是什么）? `hello`
- ? What's the description of your extension（什么是您的扩展的描述）? `learn vscode plugin`
- ? Enable JavaScript type checking in 'jsconfig.json'（在'jsconfig.json'中启用JavaScript类型检查）? `Yes`
- ? Initialize a git repository（初始化一个git仓库）? `Yes`
- ? Which package manager to use（使用哪个包管理器）? `npm`


上面标红的是我的选择

在项目生成之后，目录结构如下所示

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/tool/vscode/2.png')" />

然后，在编辑器中，按`F5`。这将在新的扩展开发主机窗口中编译和运行扩展。

在新窗口中从命令面板 ( shift + win + p )运行`Hello World`命令：

您 vscode 界面会看到`Hello World from HelloWorld!`显示的通知。成功！

在项目生成之后，其中**最重要的文件**是`package.json`和`extension.js`，了解这两个文件基本上就可以入门开发一个vscode插件了。

## package.json

该文件是vscode扩展的清单文件，里面有很多字段，[官方](https://code.visualstudio.com/api/references/extension-manifest)对每个字段都进行了详细阐述，本次我们重点阐述以下初始化后期清单文件。

```js
{
    "name": "hello", // 插件名
    "displayName": "hello", // 显示在应用市场的名字
    "description": "learn vscode plugin", // 具体描述
    "version": "0.0.1", // 插件的版本号
    "publisher": "aliwang", // 发布publisher账户名
    "engines": {
        "vscode": "^1.60.0" // 最低支持的vscode版本
    },
    "categories": [
        "Other" // 扩展类别
    ],
    // 激活事件组，在那些事件情况下被激活
    "activationEvents": [
        "onCommand:hello.helloWorld"
    ],
    // 插件的主入口文件
    "main": "./extension.js",
    // 贡献点
    "contributes": {
        // 命令
        "commands": [
            {
                "command": "hello.helloWorld",
                "title": "Hello World"
            }
        ]
    },
    "scripts": {
        "lint": "eslint .",
        "pretest": "npm run lint",
        "test": "node ./test/runTest.js"
    },
    // 开发依赖项
    "devDependencies": {
		"@types/vscode": "^1.63.0",
		"@types/glob": "^7.1.4",
		"@types/mocha": "^9.0.0",
		"@types/node": "14.x",
		"eslint": "^8.1.0",
		"glob": "^7.1.7",
		"mocha": "^9.1.3",
		"typescript": "^4.4.4",
		"@vscode/test-electron": "^1.6.2"
	}
}
```
<!-- 
```js
{
	// 插件的名字，应全部小写，不能有空格
    "name": "vscode-plugin-demo",
	// 插件的友好显示名称，用于显示在应用市场，支持中文
    "displayName": "VSCode插件demo",
	// 描述
    "description": "VSCode插件demo集锦",
	// 关键字，用于应用市场搜索
    "keywords": ["vscode", "plugin", "demo"],
	// 版本号
    "version": "1.0.0",
	// 发布者，如果要发布到应用市场的话，这个名字必须与发布者一致
    "publisher": "",
	// 表示插件最低支持的vscode版本
    "engines": {
        "vscode": "^1.27.0"
    },
	// 插件应用市场分类，可选值： [Programming Languages, Snippets, Linters, Themes, Debuggers, Formatters, Keymaps, SCM Providers, Other, Extension Packs, Language Packs]
    "categories": [
        "Other"
    ],
	// 插件图标，至少128x128像素
    "icon": "images/icon.png",
	// 扩展的激活事件数组，可以被哪些事件激活扩展，后文有详细介绍
    "activationEvents": [
        "onCommand:extension.sayHello"
    ],
	// 插件的主入口
    "main": "./src/extension",
	// 贡献点，整个插件最重要最多的配置项
    "contributes": {
		// 插件配置项
		"configuration": {
            "type": "object",
			// 配置项标题，会显示在vscode的设置页
            "title": "vscode-plugin-demo",
            "properties": {
				// 这里我随便写了2个设置，配置你的昵称
                "vscodePluginDemo.yourName": {
                    "type": "string",
                    "default": "guest",
                    "description": "你的名字"
                },
				// 是否在启动时显示提示
                "vscodePluginDemo.showTip": {
                    "type": "boolean",
                    "default": true,
                    "description": "是否在每次启动时显示欢迎提示！"
                }
            }
        },
		// 命令
        "commands": [
            {
                "command": "extension.sayHello",
                "title": "Hello World"
            }
        ],
		// 快捷键绑定
        "keybindings": [
            {
                "command": "extension.sayHello",
                "key": "ctrl+f10",
                "mac": "cmd+f10",
                "when": "editorTextFocus"
            }
        ],
		// 菜单
        "menus": {
			// 编辑器右键菜单
            "editor/context": [
                {
					// 表示只有编辑器具有焦点时才会在菜单中出现
                    "when": "editorFocus",
                    "command": "extension.sayHello",
					// navigation是一个永远置顶的分组，后面的@6是人工进行组内排序
                    "group": "navigation@6"
                },
                {
                    "when": "editorFocus",
                    "command": "extension.demo.getCurrentFilePath",
                    "group": "navigation@5"
                },
                {
					// 只有编辑器具有焦点，并且打开的是JS文件才会出现
                    "when": "editorFocus && resourceLangId == javascript",
                    "command": "extension.demo.testMenuShow",
                    "group": "z_commands"
                },
                {
                    "command": "extension.demo.openWebview",
                    "group": "navigation"
                }
            ],
			// 编辑器右上角图标，不配置图片就显示文字
            "editor/title": [
                {
                    "when": "editorFocus && resourceLangId == javascript",
                    "command": "extension.demo.testMenuShow",
                    "group": "navigation"
                }
            ],
			// 编辑器标题右键菜单
            "editor/title/context": [
                {
                    "when": "resourceLangId == javascript",
                    "command": "extension.demo.testMenuShow",
                    "group": "navigation"
                }
            ],
			// 资源管理器右键菜单
            "explorer/context": [
                {
                    "command": "extension.demo.getCurrentFilePath",
                    "group": "navigation"
                },
                {
                    "command": "extension.demo.openWebview",
                    "group": "navigation"
                }
            ]
        },
		// 代码片段
        "snippets": [
            {
                "language": "javascript",
                "path": "./snippets/javascript.json"
            },
            {
                "language": "html",
                "path": "./snippets/html.json"
            }
        ],
		// 自定义新的activitybar图标，也就是左侧侧边栏大的图标
        "viewsContainers": {
            "activitybar": [
                {
                    "id": "testDome",
                    "title": "test",
                    "icon": "images/testDome.svg"
                }
            ]
        },
		// 自定义侧边栏内view的实现
        "views": {
			// 和 viewsContainers 的id对应
            "testDome": [
                {
                    "id": "test1",
                    "name": "test1"
                },
                {
                    "id": "test2",
                    "name": "test2"
                },
                {
                    "id": "test3",
                    "name": "test3"
                }
            ]
        },
		// 图标主题
        "iconThemes": [
            {
                "id": "testIconTheme",
                "label": "测试图标主题",
                "path": "./theme/icon-theme.json"
            }
        ]
    },
	// 同 npm scripts
    "scripts": {
        "postinstall": "node ./node_modules/vscode/bin/install",
        "test": "node ./node_modules/vscode/bin/test"
    },
	// 开发依赖
    "devDependencies": {
        "typescript": "^2.6.1",
        "vscode": "^1.1.6",
        "eslint": "^4.11.0",
        "@types/node": "^7.0.43",
        "@types/mocha": "^2.2.42"
    },
	// 后面这几个应该不用介绍了
    "license": "SEE LICENSE IN LICENSE.txt",
    "bugs": {
        "url": "https://github.com/sxei/vscode-plugin-demo/issues"
    },
    "repository": {
        "type": "git",
        "url": "https://github.com/sxei/vscode-plugin-demo"
    },
	// 主页
    "homepage": "https://github.com/sxei/vscode-plugin-demo/blob/master/README.md"
}

``` -->

在这`package.json`文件中，重点关注的主要有三部分内容：`activationEvents`、`main`以及`contributes`，其是整个文件中的重中之重。

### main 

指明了该插件的主入口在哪，只有找到主入口整个项目才能正常的运转

### activationEvents

指明该插件在何种情况下才会被激活，因为只有激活后插件才能被正常使用，官网已经指明了[激活的时机](https://code.visualstudio.com/api/references/activation-events)，这样我们就可以按需设置对应时机。（具体每个时机用的时候详细查看即可）

- onLanguage 打开解析为特定语言文件时被激活，例如"onLanguage:python"
- onCommand 在调用命令时被激活
- onDebug 在启动调试话之前被激活
    - onDebugInitialConfigurations
    - onDebugResolve
- workspaceContains 每当打开文件夹并且该文件夹包含至少一个与 glob 模式匹配的文件时
- onFileSystem 每当读取来自特定方案的文件或文件夹时
- onView 每当在 VS Code 侧栏中展开指定 id 的视图
- onUri 每当打开该扩展的系统范围的 Uri 时
- onWebviewPanel
- onCustomEditor
- onAuthenticationRequest
* 只要一启动vscode，插件就会被激活
- onStartupFinished

### contributes

通过扩展注册contributes用来扩展Visual Studio Code中的各项技能，其有多个配置，如下所示：

- breakpoints 断点
- colors 主题颜色
- commands 命令
- configuration 配置
- configurationDefaults 默认的特定于语言的编辑器配置
- customEditors 自定义编辑器
- debuggers
- grammars
- iconThemes
- jsonValidation
- keybindings 快捷键绑定
- languages
- menus
- problemMatchers
- problemPatterns
- productIconThemes
- resourceLabelFormatters
- snippets 特定语言的片段
- submenus
- taskDefinitions
- themes 颜色主题
- typescriptServerPlugins
- views
- viewsContainers
- viewsWelcome
- walkthroughs

## extension.js文件

该文件时其入口文件，即 `package.json` 中 `main` 字段对应的文件（不一定叫extension.js这个名字），该文件中将导出两个方法：`activate`和`deactivate`，两个方法的执行时机如下所示：

### activate

这是插件被激活时执行的函数

### deactivate

这是插件被销毁时调用的方法，比如释放内存等。

## 实战

上述已经对vscode插件有了基础的认识，下面就进行一个简单的实战，打造属于自己的一个vscode插件，此插件的功能如下：

- 1. 通过在文件编辑区域或文件名上右击弹出按钮，点击按钮获取文件的大小、创建时间和修改时间；
- 2. 如果获取的是文件夹，则指明该文件是文件夹，不是文件，给予提示。

### package.json 修改项

```json
{
    // ……
    // 在getFileState指令下激活
    "activationEvents": [
        "onCommand:getFileState"
    ],
    // 入口文件
    "main": "./extension.js",
    "contributes": {
        // 命令
        "commands": [
            {
                "command": "getFileState",
                "title": "File State"
            }
        ],
        // 菜单项
        "menus": {
            // 编辑上下文菜单
            "editor/context": [
                {
                    "when": "editorFocus",
                    "command": "getFileState",
                    "group": "navigation"
                }
            ],
            // 资源管理器上下文菜单
            "explorer/context": [
                {
                    "command": "getFileState",
                    "group": "navigation"
                }
            ]
        }
    },
    // ……
}
```

### extension.js 主函数内容

```js
const vscode = require('vscode');
const fs = require('fs');

function activate(context) {
    console.log('插件已经被激活');

    // 注册命令
    let commandOfGetFileState = vscode.commands.registerCommand('getFileState', uri => {
        // 文件路径
        const filePath = uri.path.substring(1);
        fs.stat(filePath, (err, stats) => {
            if (err) {
                vscode.window.showErrorMessage(`获取文件时遇到错误了${err}!!!`)
            }

            if (stats.isDirectory()) {
                vscode.window.showWarningMessage(`检测的是文件夹，不是文件，请重新选择！！！`);
            }

            if (stats.isFile()) {
                const size = stats.size;
                const createTime = stats.birthtime.toLocaleString();
                const modifyTime = stats.mtime.toLocaleString();

                vscode.window.showInformationMessage(`
                    文件大小为:${size}字节;
                    文件创建时间为:${createTime};
                    文件修改时间为:${modifyTime}
                `, { modal: true });
            }
        });
        
        const stats = fs.statSync(filePath);
        console.log('stats', stats);
        console.log('isFile', stats.isFile());
    });

    // 将命令放入其上下文对象中，使其生效
    context.subscriptions.push(commandOfGetFileState);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
```

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/tool/vscode/3.gif')" />

## 发布

插件看法完毕之后就是需要分享出去供大家使用，目前有三种方式：

- 1. 直接把文件夹发给别人，让别人找到vscode的插件存放目录并放进去，然后重启vscode，一般不推荐；
- 2. 打包成vsix插件，然后发送给别人安装，如果你的插件涉及机密不方便发布到应用市场，可以尝试采用这种方式；
- 3. 注册开发者账号，发布到官网应用市场，这个发布和npm一样是不需要审核的。

### 打包成vsix插件

每一种方式都可行，并且网上也有很多教程讲述其发布方式，今天我重点讲述一下第二种，毕竟在插件这么多的情况下，很多人更乐于开发一款属于自己的专用插件或者特定自己领域使用的插件，完全没必要发布到应用市场。

#### 安装对应的模块vsce

```sh
npm i vsce -g
```

#### 利用vsce进行打包，生成对应的vsix文件

```
vsce package
```

在项目根目录执行 `vsce package` 命令之后，得到 `hello-0.0.1.vsix`文件

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/tool/vscode/4.png')" />

然后安装插件

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/tool/vscode/5.png')" />

安装成功，就可以直接用了

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/tool/vscode/6.png')" />


#### 发布到vscode应用市场

[vscode官网 发布扩展文档](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#publishing-extensions)

Visual Studio Code的应用市场基于微软自己的Azure DevOps，插件的身份验证、托管和管理都是在这里。 

- 要发布到应用市场首先得有应用市场的`publisher`账号；
- 而要有发布账号首先得有`Azure DevOps`组织；
- 而创建组织之前，首先得创建`Azure`账号；
- 创建`Azure`账号首先得有`Microsoft`账号；

#### 注册账号

首先访问 [https://login.live.com/](https://login.live.com/) 登录你的`Microsoft`账号，没有的先注册一个。

登录你的`Microsoft`账号之后，按照文档在 Azure DevOps中[创建自己的组织](https://docs.microsoft.com/zh-cn/azure/devops/organizations/accounts/create-organization?view=azure-devops)。

#### 创建令牌

<!-- kp7i7ti6hshcums3h7y6mkf5vndic37mj2juhmyygewhczrt6jta -->

然后访问 [https://aka.ms/SignupAzureDevOps](https://aka.ms/SignupAzureDevOps)进入你的组织。

从您组织的主页，打开您的个人资料图片旁边的用户设置下拉菜单，然后选择个人访问令牌：

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/tool/vscode/7.png')" />

在Personal Access Tokens页面上，选择`New Token`以创建新的 Personal Access Token 并设置以下详细信息：

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/tool/vscode/8.png')" />

**`创建完成token之后，一定要自己手动复制保存好，平台不会帮你保存`**

#### 创建发布账号

点击 [https://aka.ms/vscode-create-publisher](https://aka.ms/vscode-create-publisher) 去创建publisher账号

创建成功后，用 `vsce login your-publisher-name` 来登录。 登录成功如下：

```
hello git:(master) ✗ vsce login aliwang
https://marketplace.visualstudio.com/manage/publishers/
Personal Access Token for publisher 'aliwang': ****************************************************

The Personal Access Token verification succeeded for the publisher 'aliwang'.
```

>注意：现在不能使用vsce以下命令创建新的发布者账号了，你执行 `vsce create-publisher your-publisher-name`, 就会报下面的错误

>ERROR  The 'create-publisher' command is no longer available. You can create a publisher directly in the Marketplace: https://aka.ms/vscode-create-publisher

#### 发布应用

- 1. 全局下载 `npm install -g vsce`
- 2. 项目打包 `vsce package` （执行完打包命令会发现项目多了一个.vsix文件）
- 3. 登录 `vsce login your-publisher-name` （用上面创建的名称, 会提示你输入token，自己复制上面创建的token就可以了）
- 4. 项目发布 `vsce publish` (成功之后会弹出一个http链接，等上几分钟之后就可以去点击链接查看你发布的插件啦。或者去商店立搜索就可以啦！)

根据上面步骤走，发布成功后大概需要过几分钟才能在应用市场搜到。过几分钟就可以访问网页版的插件主页：[https://marketplace.visualstudio.com/manage/publishers](https://marketplace.visualstudio.com/manage/publishers)

#### 发布注意事项

- README.md 文件默认会显示在插件主页；
- README.md 中的资源必须全部是HTTPS的，如果是HTTP会发布失败；
- CHANGELOG.md 会显示在变更选项卡；
- 如果代码是放在git仓库并且设置了repository字段，发布前必须先提交git，否则会提示Git working directory not clean；

#### 这里在发布时有几个常见错误：

#### 错误1：如前面所说，如果`Organization`没有选择`all accessible organizations`，或者`Scopes`没有选择`Full access`，发布的时候可能会报如下错误：

```
Error: Failed Request: Unauthorized(401) - https://marketplace.visualstudio.com/_apis/gallery
Be sure to use a Personal Access Token which has access to **all accessible accounts**.
See https://code.visualstudio.com/docs/tools/vscecli#_common-questions for more information.
```

#### 错误2：Error:Missing publisher name. Learn more:https://code.visualstudio.com...
解决方式：在`package.json`中将刚刚创建好的发布账号配置进去`"publisher":"your name"`,

#### 错误3：Error:Make sure to edit the README.md file before you publish your extension
解决方式：看下README.md文件中是否有http地址

#### 错误4：A ‘repository’field is missing from the 'package.josn' manifest file .Do you want to continue? [y/n]
解决方式：y

#### 增量发布

版本号：`major.minor.patch`

如果想让发布之后版本号的`patch`自增，例如：`1.0.2 -> 1.0.3`，可以这样：

```
vsce publish patch
```
执行这个命令后会自动修改`package.json`里面的版本号。同理，`vsce publish minor`也是可以的。

#### 更新发布

如果修改了插件代码想要重新发布，只需要`修改版本号`然后重新执行`vsce publish`即可。

#### 取消发布

```
vsce unpublish (publisher name).(extension name)
```

#### 插件升级

- 如果发布到了应用市场，那么一般来说会自动检测有没有新版本，有的话会自动无感知升级，但具体什么时候会去检测我还没有研究过，已经确定的是在扩展面板搜索插件名字会自动检测，重启vscode也会检测。
- 如果是打包成vsix，本地安装，那么只能自己实现升级检测功能呢，通过对比服务器上某个文件的版本号，具体我就不细讲了。

参考文章：

[从0到1开发一款自己的vscode插件](https://segmentfault.com/a/1190000040720760)

[VSCode插件开发全攻略（十）打包、发布、升级](https://www.cnblogs.com/liuxianan/p/vscode-plugin-publish.html)

[VSCode插件开发梳理](https://segmentfault.com/a/1190000017279102)
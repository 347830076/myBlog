---
sidebarDepth: 2
---
## vscode提高开发插件

下面介绍的vscode, 英文才是插件名称， 中文是解释， 在扩展只需要输入英文名就可以搜索到了，install安装即可

### Chinese 编辑器汉化包

使用方法

安装后，在 locale.json 中添加 "locale": "zh-cn"，即可载入中文（简体）语言包。要修改 locale.json，你可以同时按下 Ctrl+Shift+P 打开命令面板， 输入 "Configure Display Language" 配置显示语言，回车。，选择 zh-cn (中文)， 如果你需要其他语言，则选择安装其他语言

mac 的话，经作者测试，按住 shift + win + p 打开命令面版，同样输入 "Configure Display Language" 配置显示语言，回车。，选择 zh-cn (中文)， 如果你需要其他语言，则选择安装其他语言

### Auto Rename Tag 修改标签对（双标签）

这是一个修改标签对的插件,修改标签名的时候，回同时把前后两个标签名一起修改，支持HTML / XML

### Auto Close Tag

自动添加 HTML / XML 关闭标记

### HTML Snippets 标签的代码提示

可为你提供 html 标签的代码提示，不用键入尖括号了。 就是输入标签名，会有提示，回车即可自动输入双标签


### Bracket Pair Colorizer  各种括号高亮不同颜色

为代码中的括号每一对括号都不同颜色，可以让开发者更加清晰明了嵌套层级关系

### CSS Peek 快速查看定位

快速查看定位 CSS 定义非常的方便

### Npm Intellisense  自动导入模块

import、require npm 模块是自动补全

### open in browser 用浏览器打开

在文件右键 可以选择在浏览器预览。

### live server 可以在当前页面打开本地服务

这是一个为静态和动态页面启动具有实时重新加载功能的开发本地服务器。

### vscode-icons

可以为你的 VSCode 的文件类型提供相应的图标

### Path Intellisense

可以很好的识别引入文件路径

### Beautify

美化 javascript，JSON，CSS，Sass，和 HTML 在 Visual Studio 代码。

### JavaScript (ES6) code snippets

JavaScript（ES6）代码段，以及快速输入

### Vetur

vue语法提示

### Debugger for Chrome

让 vscode 映射 chrome 的 debug 功能，静态页面都可以用 vscode 来打断点调试。

### stylelint

检验 CSS/SASS/LESS 代码规范

### ESlint 自定义规则

按快捷键 Win + Shift + p (mac环境) 输入 setting，选择 Preference: Open Settings(JSON)，打开 JSON 格式的配置文件
或者直接 win + ,  直接打开设置，然后点击右上角倒数第二个图标（打开设置(json))

在末尾添加以下配置：

```js
{
    // ...
    "[vue]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[javascript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[typescript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "eslint.format.enable": true
}
```

配置含义：

- eslint.format.enable：使用 ESlint 作为所有由 ESlint 验证的文件的格式化工具
- "editor.defaultFormatter": "dbaeumer.vscode-eslint"：指定对应语言的默认格式化工具为我们装的 ESLint 插件
- editor.codeActionsOnSave：用于指定当保存代码时需要编辑器执行的动作，里面的值 "source.fixAll": true 表示为包括 ESLint 的所有插件启用自动修复， 也可以通过 "source.fixAll.eslint": true 只开启 ESLint 的自动修复
- editor.formatOnSave：保存文件时自动格式化，当启用了 editor.codeActionsOnSave 时建议关掉 editor.formatOnSave，如果同时打开会导致保存文件时格式化两次

### EditorConfig for vs code

EditorConfig 有助于为跨越各种编辑器和 IDE 的同一项目的多个开发人员维护一致的编码样式。

### TODO Highlight

突出显示TODO，FIXME和所有关键字，注释...

### Remote - SSH  本地VSCode编辑远程服务器文件

安装完Remote - SSH插件之后，
- 在编辑器按F1， 
- 输入 Remote-ssh , 
- 选择 Remote-ssh: Connect to Host, 
- 然后输入你的 ip, 密码即可， 
- 例子：root@192.182.2.2   回车  输入密码 
- ip 是你服务器的ip
- 链接完成了就会打开一个新的编辑器，点击open folder 就可以看到你服务器上面的文件目录了，选择你自己想要编辑的项目文件，点击OK就可以了
- 大功告成，就可以本地很愉快的编辑服务器文件了，相当于本地可视化界面远程链接控制服务器

下面你也可以配置下， 在编辑器按F1，输入 Remote-ssh , 选择Remote-ssh: Open Configuration File, 选择第一个， 把下面的配置格式写上保存就好，下面代码ip改成你自己服务器的ip

```js
Host 42.192.230.88
    HostName 42.192.230.88
    User root
```

[本地VSCode编辑远程服务器文件 - 鲲逸鹏 - 博客园](https://www.cnblogs.com/dotnetcrazy/p/11254225.html)

### 如何比较文件？如何比较二个文件的异同

[如何比较文件？如何比较二个文件的异同](https://jingyan.baidu.com/article/647f011568f8303f2148a8d3.html)

参考文章

[用了这22个功能最强大的插件，前端工作效率提高了一倍！](https://mp.weixin.qq.com/s/HsBEyzDDmptI7WaZhm58wQ)



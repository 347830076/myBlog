(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{533:function(t,s,a){"use strict";a.r(s);var r=a(3),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"pm2-命令使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pm2-命令使用方法"}},[t._v("#")]),t._v(" PM2 命令使用方法")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://pm2.keymetrics.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PM2"),s("OutboundLink")],1),t._v("是一个守护进程管理器，它将帮助您管理和保持您的应用程序在线。PM2 入门非常简单，它以简单直观的 C​​LI 形式提供，可通过 NPM 安装。")]),t._v(" "),s("p",[t._v("这里推荐一个 node 版本控制工具 -- "),s("RouterLink",{attrs:{to:"/tool/nvm.html"}},[t._v("nvm")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("ul",[s("li",[t._v("后台运行(关掉cmd窗口依然运行)")]),t._v(" "),s("li",[t._v("0 秒停机重载，维护升级时不需要停机")]),t._v(" "),s("li",[t._v("Linux (stable) & MacOSx (stable) & Windows (stable).多平台支持")]),t._v(" "),s("li",[t._v("进程守护 (停止不稳定的进程，避免无限循环)")]),t._v(" "),s("li",[t._v("内建负载均衡")]),t._v(" "),s("li",[t._v("实时控制台检测")]),t._v(" "),s("li",[t._v("提供 HTTP API等")]),t._v(" "),s("li",[t._v("远程控制和实时的接口API ( nodejs 模块,允许和PM2进程管理器交互 )")]),t._v(" "),s("li",[t._v("不仅仅可以启动node程序，对于一般的脚本程序同样可以")])]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install pm2@latest -g\n")])])]),s("p",[t._v("或")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yarn global add pm2\n")])])]),s("h2",{attrs:{id:"启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pm2 start app.js\n")])])]),s("p",[t._v("可以传递给 CLI 的一些选项：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("--name")]),t._v(" 指定应用程序名称")]),t._v(" "),s("li",[s("code",[t._v("--watch")]),t._v("：监听应用目录文件的变化，一旦发生变化，自动重启。如果要精确监听、不监听的目录，最好通过配置文件。")]),t._v(" "),s("li",[s("code",[t._v("-i")]),t._v(" --instances：启用多少个实例，可用于负载均衡。如果-i 0或者-i max，则根据当前机器核数确定实例数目。")]),t._v(" "),s("li",[s("code",[t._v("--ignore-watch")]),t._v('：排除监听的目录/文件，可以是特定的文件名，也可以是正则。比如--ignore-watch="test node_modules "')]),t._v(" "),s("li",[s("code",[t._v("--max-memory-restart <200MB>")]),t._v("  设置应用程序重载的内存阈值")]),t._v(" "),s("li",[s("code",[t._v("--log <log_path>")]),t._v("  指定日志文件")]),t._v(" "),s("li",[s("code",[t._v("-- arg1 arg2 arg3")]),t._v(" 向脚本传递额外的参数")]),t._v(" "),s("li",[s("code",[t._v("--restart-delay <delay in ms>")]),t._v(" 自动重启时间间隔，单位为毫秒")]),t._v(" "),s("li",[s("code",[t._v("--time")]),t._v(" 日志前缀写上时间")]),t._v(" "),s("li",[s("code",[t._v("-n")]),t._v(" --name：指定应用的名称。查看应用信息的时候可以用到。")]),t._v(" "),s("li",[s("code",[t._v("-o")]),t._v(" --output "),s("code",[t._v("<path>")]),t._v("：标准输出日志文件的路径。")]),t._v(" "),s("li",[s("code",[t._v("-e")]),t._v(" --error "),s("code",[t._v("<path>")]),t._v("：错误输出日志文件的路径。")]),t._v(" "),s("li",[s("code",[t._v("--no-autorestart")]),t._v("  不自动重启应用程序")]),t._v(" "),s("li",[s("code",[t._v("--interpreter")]),t._v(" "),s("code",[t._v("<interpreter>")]),t._v("：the interpreter pm2 should use for executing app (bash, python...)。比如你用的coffee script来编写- 应用。")]),t._v(" "),s("li",[s("code",[t._v("-x")]),t._v("：用fork模式启动app.js，而不是cluster模式\n"),s("ul",[s("li",[s("code",[t._v("fork模式")]),t._v("：单实例多进程，常用于多语言混编，比如php、python等，不支持端口复用，需要自己做应用的端口分配和负载均衡的子进程业务代码。\n"),s("ul",[s("li",[t._v("缺点：就是单服务器实例容易由于异常会导致服务器实例崩溃。")])])]),t._v(" "),s("li",[s("code",[t._v("cluster模式")]),t._v("：多实例多进程，但是只支持node，端口可以复用，不需要额外的端口配置，0代码实现负载均衡。\n"),s("ul",[s("li",[t._v("优点：就是由于多实例机制，可以保证服务器的容错性，就算出现异常也不会使多个服务器实例同时崩溃。")])])])])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("例子：\n\npm2 start app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("watch "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实时监控的方式启动，app.js文件有变动时，pm2会自动reload(重启)")]),t._v("\npm2 start app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i max "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据有效CPU数目启动最大进程数目")]),t._v("\npm2 start app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动3个进程")]),t._v("\npm2 start app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("ignore"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("watch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test node_modules"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 排除监听的目录/文件")]),t._v("\npm2 start app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("name mynode  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动一个进程并把它命名为mynode")]),t._v("\npm2 start app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动进程, 可以在 app.json里设置选项")]),t._v("\npm2 start app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("z "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 – 之后给 app.js 传递参数（-z 10）")]),t._v("\n")])])]),s("h2",{attrs:{id:"查看与监视进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看与监视进程"}},[t._v("#")]),t._v(" 查看与监视进程")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("pm2 list")]),t._v("：显示所有进程信息；")]),t._v(" "),s("li",[s("code",[t._v("pm2 show 11")]),t._v("，"),s("code",[t._v("pm2 info 11")]),t._v("：查看进程id为 11 的详细信息；")]),t._v(" "),s("li",[s("code",[t._v("pm2 monit")]),t._v("：进入监视页面，监视每个node进程的CPU和内存的使用情况。")]),t._v(" "),s("li",[s("code",[t._v("pm2 plus")]),t._v("  监控和诊断 Web 界面 基于 Web 的仪表板，具有诊断系统的跨服务器：")])]),t._v(" "),s("h2",{attrs:{id:"重载、重启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重载、重启"}},[t._v("#")]),t._v(" 重载、重启")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("pm2 restart 11")]),t._v("：重启id为 11 的进程；")]),t._v(" "),s("li",[s("code",[t._v("pm2 restart all")]),t._v("：重启所有进程；")]),t._v(" "),s("li",[s("code",[t._v("pm2 reload 11")]),t._v("：0秒停机重载id为 11 进程（用于 NETWORKED 进程）；")]),t._v(" "),s("li",[s("code",[t._v("pm2 reload all")]),t._v("：重载所有进程；")])]),t._v(" "),s("h2",{attrs:{id:"停止、删除进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#停止、删除进程"}},[t._v("#")]),t._v(" 停止、删除进程")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("pm2 stop/delete 11")]),t._v("：停止/删除id为 11 的进程；")]),t._v(" "),s("li",[s("code",[t._v("pm2 stop/delete all")]),t._v("：停止/删除所有进程；")])]),t._v(" "),s("h2",{attrs:{id:"日志操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日志操作"}},[t._v("#")]),t._v(" 日志操作")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("pm2 logs")]),t._v("：显示所有进程的日志；")]),t._v(" "),s("li",[s("code",[t._v("pm2 logs 11")]),t._v("：显示进程id为 11 的日志；")]),t._v(" "),s("li",[s("code",[t._v("pm2 flush")]),t._v("：清空所有日志文件；")]),t._v(" "),s("li",[s("code",[t._v("pm2 reloadLogs")]),t._v("：重载所有日志；")]),t._v(" "),s("li",[s("code",[t._v("pm2 startup")]),t._v("：产生 init 脚本，保持进程活着；")])]),t._v(" "),s("h2",{attrs:{id:"杀进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#杀进程"}},[t._v("#")]),t._v(" 杀进程")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("pm2 kill")]),t._v("：杀死pm2进程 ;")])]),t._v(" "),s("h2",{attrs:{id:"开机自动启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开机自动启动"}},[t._v("#")]),t._v(" 开机自动启动")]),t._v(" "),s("ol",[s("li",[t._v("通过"),s("code",[t._v("pm2 save")]),t._v("保存当前进程状态。")]),t._v(" "),s("li",[t._v("通过"),s("code",[t._v("pm2 startup [platform]")]),t._v("生成开机自启动的命令。例如："),s("code",[t._v("pm2 startup centos")]),t._v(" "),s("code",[t._v("pm2 startup mac")])]),t._v(" "),s("li",[t._v("将步骤2生成的命令，粘贴到控制台进行，搞定。")])]),t._v(" "),s("h2",{attrs:{id:"pm2配置文件启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pm2配置文件启动"}},[t._v("#")]),t._v(" pm2配置文件启动")]),t._v(" "),s("p",[t._v("您还可以创建一个称为生态系统文件的配置文件来管理多个应用程序。要生成生态系统文件：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pm2 ecosystem\n")])])]),s("p",[t._v("这将生成一个 ecosystem.config.js 文件：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("apps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./app.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"development"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("env_production")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'worker'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'worker.js'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("并轻松启动它：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pm2 start ecosystem.config.js\n")])])]),s("h3",{attrs:{id:"配置文件-ecosystem-config-js-配置属性详细介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件-ecosystem-config-js-配置属性详细介绍"}},[t._v("#")]),t._v(" 配置文件 ecosystem.config.js 配置属性详细介绍")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// apps是一个json结构的数组 ，每一个数组成员对应一个pm2中运行的应用")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("apps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 应用程序名称")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'next-test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行文件")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 应用程序所在的目录")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("cwd")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递给脚本的参数")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定的脚本解释器")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("interpreter")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递给解释器的参数")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("interpreter_args")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("watch")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// watch: './',")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不用监听的文件")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ignore_watch")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logs'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 应用程序启动模式，这里设置的是 cluster_mode（集群），默认是fork")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("exec_mode")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cluster_mode'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("instances")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最大内存限制数，超出自动重启")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("max_memory_restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义应用程序的错误日志文件(错误日志文件)")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("error_file")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./logs/app-err.log'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义应用程序日志文件(正常日志文件)")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("out_file")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./logs/app-out.log'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置追加日志而不是新建日志")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("merge_logs")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定日志文件的时间格式")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("log_date_format")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD HH:mm:ss'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最小运行时间，这里设置的是60s即如果应用程序在* 60s内退出，pm2会认为程序异常退出，此时触发重启* max_restarts设置数量，应用运行少于时间被认为是异常启动")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("min_uptime")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'60s'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置应用程序异常退出重启的次数，默认15次（从0开始计数）,最大异常重启次数，即小于min_uptime运行时间重启次数；")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("max_restarts")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启用/禁用应用程序崩溃或退出时自动重启，默认为true, 发生异常的情况下自动重启")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("autorestart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定时启动，解决重启能解决的问题，crontab时间格式重启应用，目前只支持cluster模式;")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("cron_restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异常重启情况下，延时重启时间")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("restart_delay")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'60s'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 环境配置")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// env: {")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   // 公共变量")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   COMMON_VARIABLE: true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// },")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生产环境配置")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $ pm2 start app.js --env")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 环境参数，当前指定为生产环境 process.env.NODE_ENV")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前环境接口地址，如果不用可不配置 process.env.REMOTE_ADDR")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REMOTE_ADDR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.dzm.com/'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开发环境配置")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $ pm2 start app.js --env_dev")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("env_dev")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 环境参数，当前指定为开发环境 process.env.NODE_ENV")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前环境接口地址，如果不用可不配置 process.env.REMOTE_ADDR")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REMOTE_ADDR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.dzm-dev.com/'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测试环境配置")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $ pm2 start app.js --env_test")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("env_test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 环境参数，当前指定为测试环境 process.env.NODE_ENV")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前环境接口地址，如果不用可不配置 process.env.REMOTE_ADDR")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REMOTE_ADDR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.dzm-test.com/'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 环境部署")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("deploy")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成环境")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、上传代码到云端仓库")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、部署命令预览：")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 首次部署: $ pm2 deploy ecosystem.json production setup ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新版本: $ pm2 deploy ecosystem.json production update ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回上一个版本: $ pm2 deploy ecosystem.json production revert 1 ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3、执行首次部署：$ pm2 deploy ecosystem.json production setup")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4、执行部署运行：$ pm2 deploy ecosystem.json production")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5、看到 success 成功，报错看错误自行百度")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("production")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ssh的用户名，登录远程服务器的用户名")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dzm'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 要发布的机器，远程服务器的IP或hostname，此处可以是数组同步部署多个服务器，不过鉴于我们只有一个服务器，因此我们填写 10.0.90.164")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10.0.90.164'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 服务器端口")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8083")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 要发布的代码分支，远端名称及分支名")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ref")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin/master'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码Git仓库地址")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("repo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git@gitlab.dzm.net:dzm/nuxt-test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 服务器存储代码地址，远程服务器部署目录，需要填写user具备写入权限的目录，也就是服务器存放上面git库代码的地方")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/usr/local/var/www/production'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ssh权限配置")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'ssh_options': 'StrictHostKeyChecking=no',")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'ssh_options'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'StrictHostKeyChecking=no'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PasswordAuthentication=no'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、在 setup 前触发，如安装 git")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'pre-setup'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、在 setup 后触发，如做一些其他配置")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'post-setup'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3、在 deploy 前触发，执行本地脚本")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'pre-deploy-local'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4、在 deploy 前触发，执行远程脚本")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'pre-deploy'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git fetch --all'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5、在 deploy 后触发，执行远程脚本，如 npm install，部署后需要执行的命令")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env production',")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'post-deploy'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'npm install && pm2 reload ecosystem.config.js --env production'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 环境变量")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'env'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定为生成环境")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'NODE_ENV'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[s("code",[t._v("注：pm2 restart命令不会重新进行 配置文件 需要关掉重启。")])])]),t._v(" "),s("p",[t._v("参考文章:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6889300755539312653#heading-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("PM2 命令使用方法总结"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6926357629375610887",target:"_blank",rel:"noopener noreferrer"}},[t._v("PM2 配置文件（ecosystem.config.js 字段详细介绍）"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{594:function(t,s,a){"use strict";a.r(s);var v=a(3),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"基础语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础语法"}},[t._v("#")]),t._v(" 基础语法")]),t._v(" "),s("p",[t._v("TypeScript 程序由以下几个部分组成：")]),t._v(" "),s("ul",[s("li",[t._v("模块")]),t._v(" "),s("li",[t._v("函数")]),t._v(" "),s("li",[t._v("变量")]),t._v(" "),s("li",[t._v("语句和表达式")]),t._v(" "),s("li",[t._v("注释")])]),t._v(" "),s("h2",{attrs:{id:"第一个-typescript-程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一个-typescript-程序"}},[t._v("#")]),t._v(" 第一个 TypeScript 程序")]),t._v(" "),s("p",[t._v('我们可以使用以下 TypeScript 程序来输出 "Hello World" ：')]),t._v(" "),s("p",[t._v("app.ts 文件代码：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hello"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("以上代码首先通过 "),s("code",[t._v("tsc")]),t._v(" 命令编译：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("tsc app.ts\n")])])]),s("p",[t._v("同目录下得到如下 js 代码：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hello "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("我们也可以同时编译多个 ts 文件：")]),t._v(" "),s("p",[t._v("tsc file1.ts file2.ts file3.ts")]),t._v(" "),s("h2",{attrs:{id:"tsc-常用编译参数如下表所示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tsc-常用编译参数如下表所示"}},[t._v("#")]),t._v(" tsc 常用编译参数如下表所示：")]),t._v(" "),s("table",{staticClass:"reference"},[s("tbody",[s("tr",[s("th",{staticStyle:{"text-align":"center",width:"10%"}},[t._v("序号")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("编译参数说明")])]),t._v(" "),s("tr",[s("td",{staticClass:"ts"},[t._v("1.")]),t._v(" "),s("td",[s("p",[s("b",[t._v("--help")])]),t._v(" "),s("p",[t._v("显示帮助信息")])])]),t._v(" "),s("tr",[s("td",{staticClass:"ts"},[t._v("2.")]),t._v(" "),s("td",[s("p",[s("b",[t._v("--module")])]),t._v(" "),s("p",[t._v("载入扩展模块")])])]),t._v(" "),s("tr",[s("td",{staticClass:"ts"},[t._v("3.")]),t._v(" "),s("td",[s("p",[s("b",[t._v("--target")])]),t._v(" "),s("p",[t._v("设置 ECMA 版本")])])]),t._v(" "),s("tr",[s("td",{staticClass:"ts"},[t._v("4.")]),t._v(" "),s("td",[s("p",[s("b",[t._v("--declaration")])]),t._v(" "),s("p",[t._v("额外生成一个 .d.ts 扩展名的文件。")]),t._v(" "),s("pre",{staticStyle:{color:"#fff"}},[s("span",{staticClass:"pln"},[t._v("tsc ts")]),s("span",{staticClass:"pun"},[t._v("-")]),s("span",{staticClass:"pln"},[t._v("hw")]),s("span",{staticClass:"pun"},[t._v(".")]),s("span",{staticClass:"pln"},[t._v("ts ")]),s("span",{staticClass:"pun"},[t._v("--")]),s("span",{staticClass:"pln"},[t._v("declaration")])]),s("p",[t._v("\n以上命令会生成 ts-hw.d.ts、ts-hw.js 两个文件。")])])]),t._v(" "),s("tr",[s("td",{staticClass:"ts"},[t._v("5.")]),t._v(" "),s("td",[s("p",[s("b",[t._v("--removeComments")])]),t._v(" "),s("p",[t._v("删除文件的注释")])])]),t._v(" "),s("tr",[s("td",{staticClass:"ts"},[t._v("6.")]),t._v(" "),s("td",[s("p",[s("b",[t._v("--out")])]),t._v(" "),s("p",[t._v("编译多个文件并合并到一个输出的文件")])])]),t._v(" "),s("tr",[s("td",{staticClass:"ts"},[t._v("7.")]),t._v(" "),s("td",[s("p",[s("b",[t._v("--sourcemap")])]),t._v(" "),s("p",[t._v("生成一个 sourcemap (.map) 文件。")]),t._v(" "),s("p",[t._v("sourcemap 是一个存储源代码与编译代码对应位置映射的信息文件。")])])]),t._v(" "),s("tr",[s("td",{staticClass:"ts"},[t._v("8.")]),t._v(" "),s("td",[s("p",[s("b",[t._v("--module noImplicitAny")])]),t._v(" "),s("p",[t._v("在表达式和声明上有隐含的 any 类型时报错")])])]),t._v(" "),s("tr",[s("td",{staticClass:"ts"},[t._v("9.")]),t._v(" "),s("td",[s("p",[s("b",[t._v("--watch")])]),t._v(" "),s("p",[t._v("在监视模式下运行编译器。会监视输出文件，在它们改变时重新编译。")])])])])]),t._v(" "),s("h3",{attrs:{id:"空白和换行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空白和换行"}},[t._v("#")]),t._v(" 空白和换行")]),t._v(" "),s("p",[t._v("TypeScript 会忽略程序中出现的空格、制表符和换行符。")]),t._v(" "),s("p",[t._v("空格、制表符通常用来缩进代码，使代码易于阅读和理解。")]),t._v(" "),s("h3",{attrs:{id:"typescript-区分大小写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-区分大小写"}},[t._v("#")]),t._v(" TypeScript 区分大小写")]),t._v(" "),s("h3",{attrs:{id:"分号是可选的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分号是可选的"}},[t._v("#")]),t._v(" 分号是可选的")]),t._v(" "),s("p",[t._v("如果语句写在同一行则一定需要使用分号来分隔，否则会报错，如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('console.log("aliwang");console.log("Google");\n')])])])])}),[],!1,null,null,null);s.default=_.exports}}]);
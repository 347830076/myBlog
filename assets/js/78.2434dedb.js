(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{531:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-expect-介绍和用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-expect-介绍和用法"}},[s._v("#")]),s._v(" Linux expect 介绍和用法")]),s._v(" "),t("p",[s._v("expect是一个自动化交互套件，主要应用于执行命令和程序时，系统以交互形式要求输入指定字符串，实现交互通信。(大白话就是：shell脚本在终端执行时遇到要交互的，可以使用expect来自动输入)")]),s._v(" "),t("p",[s._v("expect自动交互流程："),t("code",[s._v("spawn")]),s._v("启动指定进程 -> "),t("code",[s._v("expect")]),s._v("获取指定关键字 -> "),t("code",[s._v("send")]),s._v("向指定程序发送指定字符 -> 执行完成退出.")]),s._v(" "),t("h2",{attrs:{id:"安装-expect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-expect"}},[s._v("#")]),s._v(" 安装 expect")]),s._v(" "),t("p",[s._v("想执行expect命令，肯定先要安装expect")]),s._v(" "),t("p",[s._v("CentOS系统安装方式")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("yum install -y expect\n")])])]),t("p",[s._v("ubuntu系统安装方式")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo apt-get install tcl tk expect\n")])])]),t("h2",{attrs:{id:"expect常用命令总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expect常用命令总结"}},[s._v("#")]),s._v(" expect常用命令总结:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("spawn               交互程序开始后面跟命令或者指定程序\nexpect              获取匹配信息匹配成功则执行expect后面的程序动作\nsend exp_send       用于发送指定的字符串信息\nexp_continue        在expect中多次匹配就需要用到\nsend_user           用来打印输出 相当于shell中的echo\nexit                退出expect脚本\neof                 expect执行结束 退出\nset                 定义变量\nputs                输出变量\nset timeout         设置超时时间\n")])])]),t("h2",{attrs:{id:"例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),t("h3",{attrs:{id:"ssh登录远程主机执行命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh登录远程主机执行命令"}},[s._v("#")]),s._v(" ssh登录远程主机执行命令")]),s._v(" "),t("p",[s._v("新建个 login.sh 文件，代码如下")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/expect")]),s._v("\n\nspawn "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@192.168.56.103\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*password*"')]),s._v("\nsend "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" eof\n")])])]),t("p",[s._v("在终端执行： "),t("code",[s._v("expect ./login.sh")]),s._v(", 就自动执行 "),t("code",[s._v("ssh root@192.168.56.103")]),s._v(" 命令，遇到了需要输入密码 ，"),t("code",[s._v('expect "*password*"')]),s._v("匹配到终端提示包含"),t("code",[s._v("password")]),s._v(", 就自动在终端输入 "),t("code",[s._v("123456")]),s._v(",  "),t("code",[s._v("\\r")]),s._v(" 换行   "),t("code",[s._v("expect eof")]),s._v(" 结束退出")]),s._v(" "),t("h3",{attrs:{id:"定义变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义变量"}},[s._v("#")]),s._v(" 定义变量")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置密码为123456")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置超时时间 30秒")]),s._v("\n\nspawn "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@192.168.56.103\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# {}里面代码多条匹配 exp_continue 匹配到继续匹配")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*yes/no*"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" send "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yes'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" exp_continue "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*password*"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" send "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$passwd")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这里使用密码变量$passwd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" eof\n")])])]),t("h3",{attrs:{id:"expect脚本内部定义参数并传参"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expect脚本内部定义参数并传参"}},[s._v("#")]),s._v(" expect脚本内部定义参数并传参")]),s._v(" "),t("p",[s._v("login.exp文件，代码如下")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/expect")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#if { $argc < 4 } {   #这里运用了if语句，这个$argc表示参数的数目，这里判断参数数目小于4就执行下面的语句，$argv0为脚本名字本身，$argv为命令行参数。[lrange$argv 0 0]表示第1个参数，[lrange $argv 0 4]为第一个到第五个参数。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("llength "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$argv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这里跟上面的意思一致，这里是计算参数的长度，当它的长度小于4就执行下面的语句 ")]),s._v("\n     puts "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Usage:'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$argc")]),s._v(' <host> <username> <password> <cmd>"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#puts可以读取变量，输出内容，跟下面一句话的意思一致，所以这里贴了两句，这里意思是打印输入参数的个数，然后<host> <username> <password> <cmd>输出。")]),s._v("\n     send_user "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Usage:'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$argv0")]),s._v(" cmd <host> <username> <password> <cmd>"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#send_user 命令用来把后面的参数输出到标准输出中去，默认的的send、exp_send 命令都是将参数输出到程序中去的。这里的$argv0是脚本本身，send_user默认不换行，所以要加\\n换行符。")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这里是打印一个状态码，好让后面的程序知道一个返回的结果。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("lindex "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$argv")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义host变量的位置，set 就是设置变量名。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" username "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("lindex "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$argv")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用户名在第二个参数位置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" password "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("lindex "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$argv")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#密码在第三个参数位置,也可以set password 654321 这样直接指定变量以及实际密码。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" cmd "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("lindex "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$argv")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行命令在第四个参数位置")]),s._v("\nspawn "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cmd")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行语句,并传参")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yes/no"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("send "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yes'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("exp_continue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*password"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("send "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$password")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#密码传参到了这里")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" eof\n")])])]),t("p",[s._v("先来一个错误的执行结果示例：")]),s._v(" "),t("p",[s._v("终端执行 "),t("code",[s._v("expect login.exp 192.168.1.111 root 654321")])]),s._v(" "),t("p",[s._v("结果如下：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Usage:3 <host> <username> <password> <cmd>\nUsage:./login.exp cmd <host> <username> <password> <cmd>\nnpm ERR! code ELIFECYCLE\nnpm ERR! errno 1\nnpm ERR! front-end-standard@1.0.0 deploy: `expect ./deploy/deploy.sh 192.168.1.111 root 654321`\nnpm ERR! Exit status 1\nnpm ERR! \n")])])]),t("p",[s._v("再来一个正确的结果示例：")]),s._v(" "),t("p",[s._v("expect login.exp 192.168.1.111 root 654321 ifconfig")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("spawn ssh root@192.168.1.111 ifconfig\nroot@192.168.1.111's password: \neth0      Link encap:Ethernet  HWaddr 00:0C:29:FA:C9:A2  \n          inet addr:192.168.1.111  Bcast:192.168.1.255  Mask:255.255.255.0\n")])])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("本文章只是带入门，简单的使用了expect，体会到它的自动化的魅力，还有更多用法，等待大家自己去挖掘。")]),s._v(" "),t("p",[s._v("参考文章：")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/saneri/p/10819348.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux expect 介绍和用法"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"http://www.51niux.com/?id=55",target:"_blank",rel:"noopener noreferrer"}},[s._v("expect使用详解"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"http://xstarcd.github.io/wiki/shell/expect.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("expect - 自动交互脚本"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{528:function(s,e,t){"use strict";t.r(e);var a=t(3),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"centos添加用户并设置免密登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos添加用户并设置免密登录"}},[s._v("#")]),s._v(" centos添加用户并设置免密登录")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("添加用户，同时创建对应 home 目录: "),e("code",[s._v("useradd aliwang -m")])])]),s._v(" "),e("li",[e("p",[s._v("切换到该用户: "),e("code",[s._v("su aliwang")])])]),s._v(" "),e("li",[e("p",[s._v("进入用户 home 目录："),e("code",[s._v("cd ~/")])])]),s._v(" "),e("li",[e("p",[s._v("生成密钥对（也可以通过已有密钥文件生成，具体参考网上的方法）："),e("code",[s._v("ssh-keygen -t rsa")])])]),s._v(" "),e("li",[e("p",[s._v("进入 .ssh 目录："),e("code",[s._v("cd .ssh")])])]),s._v(" "),e("li",[e("p",[s._v("备份公钥文件："),e("code",[s._v("cp id_rsa.pub id_rsa_bak.pub")])])]),s._v(" "),e("li",[e("p",[s._v("将公钥文件重命名为 authorized_keys："),e("code",[s._v("mv id_rsa.pub authorized_keys")])])]),s._v(" "),e("li",[e("p",[s._v("重命名 id_rsa 文件，添加 .pem 后缀："),e("code",[s._v("mv id_rsa aliwang.pem")])])]),s._v(" "),e("li",[e("p",[s._v("修改 .ssh 目录权限："),e("code",[s._v("chmod 700 ../.ssh/")])])]),s._v(" "),e("li",[e("p",[s._v("修改 authorized_keys 文件权限："),e("code",[s._v("chmod 644 authorized_keys")])])]),s._v(" "),e("li",[e("p",[s._v("下载私钥文件："),e("code",[s._v("scp -i ./certs/xxx.pem root@111.11.1.1:/home/aliwang/.ssh/aliwang.pem ./ aliwang.pem")])])])]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.runoob.com/linux/linux-comm-scp.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("scp 命令"),e("OutboundLink")],1),s._v(" Linux scp 命令用于 Linux 之间复制文件和目录。")]),s._v(" "),e("ol",{attrs:{start:"12"}},[e("li",[s._v("编写登录脚本，以后就可以通过该登录脚本进行登录了：")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/certs/xxx.pem\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/certs/xxx.pem aliwang@111.11.1.1\n")])])]),e("h2",{attrs:{id:"常见错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见错误"}},[s._v("#")]),s._v(" 常见错误")]),s._v(" "),e("h3",{attrs:{id:"nginx-stat-failed-13-permission-denied"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-stat-failed-13-permission-denied"}},[s._v("#")]),s._v(" Nginx: stat() failed (13: permission denied)")]),s._v(" "),e("p",[s._v("查看nginx 的日志如下：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('2022/09/06 14:23:40 [crit] 3986195#0: *4 stat() "/home/bihu/prod-assets/xiaotianxia-web/" failed (13: Permission denied), client: 61.144.105.238, server: xtxpjw.cn, request: "GET / HTTP/1.1", host: "www.xtxpjw.cn"\n2022/09/06 14:23:40 [crit] 3986195#0: *4 stat() "/home/bihu/prod-assets/xiaotianxia-web/index.html" failed (13: Permission denied), client: 61.144.105.238, server: xtxpjw.cn, request: "GET / HTTP/1.1", host: "www.xtxpjw.cn"\n')])])]),e("p",[s._v("解决办法：给 /home/bihu 目录添加 "),e("code",[s._v("+x")]),s._v(" 权限："),e("code",[s._v("chmod +x /home/bihu")]),s._v("，然后执行 "),e("code",[s._v("systemctl reload nginx")]),s._v(" 重新加载即可")])])}),[],!1,null,null,null);e.default=n.exports}}]);
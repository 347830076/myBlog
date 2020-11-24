(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{524:function(s,a,t){"use strict";t.r(a);var e=t(9),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"如何生成ssh-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何生成ssh-key"}},[s._v("#")]),s._v(" 如何生成SSH key")]),s._v(" "),t("p",[s._v("SSH key提供了一种与GitHub通信的方式，通过这种方式，能够在不输入密码的情况下，将GitHub作为自己的remote端服务器，进行版本控制")]),s._v(" "),t("h1",{attrs:{id:"步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[s._v("#")]),s._v(" 步骤")]),s._v(" "),t("p",[s._v("*检查SSH keys是否存在\n*生成新的ssh key\n*将ssh key添加到GitHub中")]),s._v(" "),t("h1",{attrs:{id:"_1-检查ssh-keys是否存在"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-检查ssh-keys是否存在"}},[s._v("#")]),s._v(" 1. 检查SSH keys是否存在")]),s._v(" "),t("p",[s._v("输入下面的命令，如果有文件id_rsa.pub 或 id_dsa.pub，则直接进入步骤3将SSH key添加到GitHub中，否则进入第二步生成SSH key")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("ls "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("al "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssh\n")])])]),t("h1",{attrs:{id:"_2-生成新的ssh-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-生成新的ssh-key"}},[s._v("#")]),s._v(" 2. 生成新的ssh key")]),s._v(" "),t("p",[s._v("第一步：生成public/private rsa key pair")]),s._v(" "),t("p",[s._v('在命令行中输入ssh-keygen -t rsa -C "your_email@example.com"')]),s._v(" "),t("p",[s._v("your_email@example.com 是你github的账号")]),s._v(" "),t("p",[s._v("默认会在相应路径下生成id_rsa和id_rsa.pub两个文件，如下面代码所示")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("ssh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("keygen "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t rsa "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("C")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@example.com"')]),s._v("\n")])])]),t("p",[s._v("第二步：输入passphrase（本步骤可以跳过） 直接回车")]),s._v(" "),t("p",[s._v("如果你设置passphrase后，进行版本控制时，每次与GitHub通信都会要求输入passphrase，以避免某些“失误”")]),s._v(" "),t("h1",{attrs:{id:"_3-将ssh-key拷贝到粘贴板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-将ssh-key拷贝到粘贴板"}},[s._v("#")]),s._v(" 3. 将ssh key拷贝到粘贴板")]),s._v(" "),t("p",[s._v("不同的操作系统，均有一些命令，直接将SSH key从文件拷贝到粘贴板中，如下：")]),s._v(" "),t("p",[s._v("mac  执行下面命令回车")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("pbcopy < ~/.ssh/id_rsa.pub\n")])])]),t("p",[s._v("windows 执行下面命令回车")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("clip < ~/.ssh/id_rsa.pub\n")])])]),t("p",[s._v("linux 执行下面命令回车")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo apt-get install xclip\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("xclip -sel clip < ~/.ssh/id_rsa.pub\n")])])]),t("h1",{attrs:{id:"_4-将ssh-key添加到github中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-将ssh-key添加到github中"}},[s._v("#")]),s._v(" 4. 将ssh key添加到GitHub中")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/assets/img/github1.jpg")}}),s._v(" "),t("img",{attrs:{src:s.$withBase("/assets/img/github2.jpg")}}),s._v(" "),t("img",{attrs:{src:s.$withBase("/assets/img/github3.jpg")}}),s._v(" "),t("img",{attrs:{src:s.$withBase("/assets/img/github4.jpg")}})])}),[],!1,null,null,null);a.default=r.exports}}]);
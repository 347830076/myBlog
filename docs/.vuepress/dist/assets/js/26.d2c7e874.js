(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{522:function(t,a,s){"use strict";s.r(a);var e=s(9),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git常用命令"}},[t._v("#")]),t._v(" git常用命令")]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("请到官网 "),s("a",{attrs:{href:"http://git-scm.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-scm.com"),s("OutboundLink")],1),t._v(" 或国内的下载站，下载安装包。")]),t._v(" "),s("h2",{attrs:{id:"创建项目有两种情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建项目有两种情况"}},[t._v("#")]),t._v(" 创建项目有两种情况")]),t._v(" "),s("ol",[s("li",[t._v("本地无项目，克隆远程库的文件到本地\n例如在github或gitee上已有的项目，可以将其拉取到本地上")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone  https://github.com/347830076/myBlog.git  my-projName\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" my-projName\n")])])]),s("p",[t._v("注意：上面的git clone命令需要传入第一个参数是远端git库的地址，第二个参数是本地的项目名字（也就是本地的文件夹名称）")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("本地有项目，合并远程库的文件到本地\n例如我本地开发好一个程序应用，并且在github或gitee上创建好一个空的库，需要把代码上传到该库")]),t._v(" "),s("li",[t._v("首先,你需要执行下面两条命令,作为git的基础配置,作用是告诉git你是谁,你输入的信息将出现在你创建的提交中.")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你的名字或昵称"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你的邮箱"')]),t._v("\n")])])]),s("ol",[s("li",[t._v("那我们第一步可以初始化本地库先")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("//进入到本地程序所在根目录\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\t\t\t\t//git的初始化\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("给该本地库添加远程库地址")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("repo-address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t\t//把远程库的地址填入到"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("repo-address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("把本地库文件和远程库文件进行合并")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("添加文件到本地库")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\t\t\t                //添加本地队列\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"第一次提交"')]),t._v("\t\t    //把队列中的文件提交到本地库\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("合并后提交代码")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\t\t\t//把本地库的文件推送到远程库的master主线\n")])])]),s("p",[t._v("如果需要账号密码的话就输入账号密码，这样就完成了一次提交。")]),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[t._v("设置操作的默认库和分支")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream-to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("origin/master\n")])])]),s("h2",{attrs:{id:"常用的提交操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的提交操作"}},[t._v("#")]),t._v(" 常用的提交操作")]),t._v(" "),s("ol",[s("li",[t._v("修改或添加好自己的文件后，需要把文件添加到git队列中")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("    //把当前所有改动后的文件添加到git队列中    .是代表所有文件，  也可以使用 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("对应文件的路径"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("把队列中的文件提交到本地库")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"提交说明"')]),t._v("\n")])])]),s("p",[t._v("尤其注意参数-m ,是必须的，表示提交时的说明文字\n3. 如果该项目存在多人协作，这一步必不可少，有效防止文件冲突")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master  //表示拉取所设源地址的主线分支代码\n")])])]),s("p",[t._v("这一步会把远程库的文件拉取到本地库，会对有冲突的文件进行自动合并(尽量不要让多人同时改动一个文件，否则自动合并失效，需要手动合并)")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("最后保证上面几步没问题后，把本地库文件推送到远端库")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master  //表示推送到所设源地址的主线分支\n")])])]),s("h2",{attrs:{id:"解决冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决冲突"}},[t._v("#")]),t._v(" 解决冲突")]),t._v(" "),s("p",[t._v("在提交时可能会存在冲突，所谓的冲突，就是你跟你的基友在修改同一个文件的同一行的内容时，系统无法判断用谁的代码。")]),t._v(" "),s("p",[t._v("当你使用"),s("code",[t._v("git pull")]),t._v("的时候，会有冲突提示")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/img/git/git冲突1.png"),alt:"git冲突1"}}),t._v(" "),s("p",[t._v("这个时候，我们的git会自动把冲突位置显示在相关文件里")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/img/git/git冲突2.png"),alt:"git冲突2"}}),t._v(" "),s("p",[t._v("二选一，要么留自己的代码，要么留别人的代码，编辑完成后，再重新四步走。")]),t._v(" "),s("p",[t._v("当然，某些特殊情况，需要强制推送的话，执行下面的命令")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master -f\n")])])]),s("p",[t._v("如果您选择保留线上的readme文件,则需要在提交前先执行")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master\n")])])]),s("p",[t._v("拉取的时候，Git自动合并，并产生了一次提交。"),s("br"),t._v("\n如果不能够自动合并，那么会提示")]),t._v(" "),s("h2",{attrs:{id:"提交时老是提示输入用户名密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交时老是提示输入用户名密码"}},[t._v("#")]),t._v(" 提交时老是提示输入用户名密码")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global credential.helper store\n")])])]),s("p",[t._v("执行完后，下次提交再次输入账号密码，即可以自动存储了")]),t._v(" "),s("h2",{attrs:{id:"查看git库的当前状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看git库的当前状态"}},[t._v("#")]),t._v(" 查看git库的当前状态")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n")])])]),s("h2",{attrs:{id:"还原修改git-checkout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#还原修改git-checkout"}},[t._v("#")]),t._v(" 还原修改git checkout")]),t._v(" "),s("p",[t._v("让文件回到最近一次git commit或git add时的状态")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -- index.html\n")])])]),s("p",[t._v("##如果遇到以下情况，无法add和commit")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("On branch master\nYour branch is up-to-date with 'origin/master'.\nChanges not staged for commit:\n        modified:   ../index.html\n\nno changes added to commit\n")])])]),s("p",[t._v("上面这种情况，其实是因为你改变了index文件，但并没有有效的add到"),s("strong",[t._v("暂存区")]),t._v("中，需要检查自己是否有把该文件有效的"),s("code",[t._v("git add")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("根据多年经验，其实往往可能是因为我们cd到了子目录，然后再执行"),s("code",[t._v("git add ./")]),t._v("，从而导致修改的文件，并没有真正的添加进去)")])])]),t._v(" "),s("h2",{attrs:{id:"git-pull-失败-提示-fatal-refusing-to-merge-unrelated-histories"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-pull-失败-提示-fatal-refusing-to-merge-unrelated-histories"}},[t._v("#")]),t._v(" git pull 失败 ,提示：fatal: refusing to merge unrelated histories")]),t._v(" "),s("p",[t._v("在进行git pull 时，添加一个可选项")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master --allow-unrelated-histories\n")])])]),s("h2",{attrs:{id:"fatal-multiple-stage-entries-for-merged-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fatal-multiple-stage-entries-for-merged-file"}},[t._v("#")]),t._v(" fatal:multiple stage entries for merged file")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('解决办法如下：\n1.执行rm .git/index，回车\n2.执行git add -A，回车\n3.git commit -m "您的修改说明" \n')])])]),s("h2",{attrs:{id:"时光穿梭"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时光穿梭"}},[t._v("#")]),t._v(" 时光穿梭")]),t._v(" "),s("ol",[s("li",[t._v("先查看要回退的时间点")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n")])])]),s("img",{attrs:{src:t.$withBase("/assets/img/git/时光机.png"),alt:"时光机"}}),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("根据ID回退到历史的某一个时间")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard d48bf2fcd99\n")])])]),s("p",[s("code",[t._v("hard")]),t._v("的参数值就是第一步所获取到的id(不需要全部，可以截取其中一截就可以了)、")]),t._v(" "),s("p",[t._v("##.gitignore规则不生效的解决办法")]),t._v(" "),s("p",[t._v("把某些目录或文件加入忽略规则，按照上述方法定义后发现并未生效，原因是.gitignore只能忽略那些原来没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。那么解决方法就是先把本地缓存删除（改变成未被追踪状态），然后再提交：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git rm -r --cached .\ngit add .\ngit commit -m '更新.gitignore'\ngit pull\ngit push\n")])])]),s("p",[t._v("这样就可以了！")]),t._v(" "),s("h2",{attrs:{id:"如果git远程地址更改了-怎么办"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果git远程地址更改了-怎么办"}},[t._v("#")]),t._v(" 如果git远程地址更改了，怎么办")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote remove origin                //删除原来的git地址\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("新的git地址"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("      //换成新的git地址\n")])])]),s("p",[t._v("这样，当你的git地址变了，但又不想重新克隆，用它吧"),s("br"),t._v("\n并且记得设置操作的默认库和分支")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git branch --set-upstream-to=origin/master\n")])])]),s("blockquote",[s("p",[t._v("其中origin是你的远程库地址的代号名字，可以改任意名字")])]),t._v(" "),s("h2",{attrs:{id:"win10用户提交代码一直提示fatal-authentication-failed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#win10用户提交代码一直提示fatal-authentication-failed"}},[t._v("#")]),t._v(" win10用户提交代码一直提示fatal: Authentication failed")]),t._v(" "),s("p",[s("strong",[t._v("排除掉用户的设置正确之后，依然不行")]),t._v("\n后来发现这是一个win10的系统，原来有如下操作：")]),t._v(" "),s("p",[t._v("Win10 的用户凭据里保存了git的本地用户信息，找到它，删掉就好了!")]),t._v(" "),s("p",[t._v("具体的：\n控制面板 > 用户帐户 > 管理你的凭据 > 选择 [Windows 凭据]\ngit 保存的用户信息在[普通凭据]列表里")]),t._v(" "),s("p",[t._v("操作完成后，再正常的git clone下来，4步走即可")])])}),[],!1,null,null,null);a.default=r.exports}}]);
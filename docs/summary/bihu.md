---
sidebarDepth: 2
---
# 壁虎工作记录

## 快结款pc管理后台

### 时间

2021.1.7 - 2021.1.20
### 技术栈

`vue` `vuex` `vue-router` `axios`  `ant-design-vue` `@antv/g2`  `sass`

### 实现功能

- 独立完成所有页面开发
- 登录退出
- 首页数据展示，使用`@antv/g2`图表展示 
- 待处理页面 => 表格数据展示，有待审核订单，授信申请，认证申请，提现申请，还款申请 tab
- 订单列表页面 => 订单详情
- 用户列表页面 => 用户详情

### 收获

- 上手实际项目运用 `ant-design-vue` ui框架和`@antv/g2`图标库


## 快结款小程序
### 技术栈

`taro` `vue` `vuex` `taro-axios` `eslint` `stylelint`

### 实现功能

- 核心功能 =》1.授信/认证 2.发起订单 3.还款 4.提现/结款
- 企业授信认证 =》 上传营业执照，身份证，填写信息
- 首页额度展示 底部 tab 栏
- 采购 =》填写订单-信息确认-等待接单-预付额度 四个步骤
- 付款方，收款方，各自有订单列表，进入订单操作各种状态流程

### 收获

这个项目，我是提测阶段接手，通过实现一些收尾细节，和修复bug，熟系了整个项目。也顺利如期交付上线。

这考验了我的接入新项目，快速上手能力（也是基于我本身对vue和小程序开发的熟系），就`taro`是新框架，看文档也很快上手

## 小天下小程序重构

### 时间

2021.01.21 - 2021.02.06

### 技术栈

`taro3.x` `react` 
### 重构心得总结，和得到的提升

自己独立重构，使用`taro3.x + react` 技术栈，精简了代码量，代码写法变为简单化，整理一些文件在一个文件，不拆分过于碎，注释详细，方便以后其他同事接手简单和容易维护

- 时间上

虽然在飞书创建小天下小程序重构任务是1月4号开始，直到现在写总结是2月6号，历时一个月，实际上，我算了下，真正重构小天下的时间为11个工作日， 中途期间优先级先做了快结款pc管理后台，和在库票源改版。

- 技术上

接到小天下重构任务时，我是没有使用过`taro`和`react hook`开发过，通过下班时间晚上恶补相关知识, 重构完小天下后，使得我对`taro`框架 和`react hook`的技术栈使用得到实战性的突破和掌握，也能顺利完成工作需求，和进行了一些优化。

- 业务上

由于重构的时候，需要自己花大量时间精力去研究之前项目写法的逻辑，和业务流程，自测的时候，全部跑通所有的流程，包括注册验证企业信息，绑定银行卡， 上传票据得到信息报价，进行买票，然后结合票店管理后台，和小天下管理后台，进行订单的审核，接单，改价，资金方打款，持票方背书，资金方签收，交易完成，提现，等流程，使得自己也熟系了公司的小天下业务流程，和对公司票据业务的了解。

## 壁虎识票electro2.0

### 技术栈

`electron` `vue全家桶`（vue vuex vue-router）`axios` `zhengxin-bcui-vue` `sass` `eslint` `bignumber.js` `stylelint` 

### 个人实现功能

- 发布票据
- 发布记录订单列表 =》 订单详情 =》各种订单状态
- 更新版本

### 收获

对electron开发更加深入了解了

## 快结款2.0 pc版本

### 时间
### 2021.7.16 - 8.16

### 技术栈

`react` `redux` `antd`  `axios` `eslint`  `stylelint`

### 实现功能

- 主要业务流程是， 采购方发起采购订单，平台把订单需要的物品，拆分给入驻的供应商，供应商发货。 
- 平台在中间调控，采购方收到货，在周期内统一扎帐，扎帐后，平台财务上传发票给采购方财务审核，审核通过，和仓廪实签署在线合同交一部分保证金给第三方保理公司，后面可以分期付款。
- 确认收货后，供应方财务在周期内统一扎帐，上传发票给平台审核，审核通过和仓廪实签署保理合同，然后保理公司转账给供应商

#### 角色
- 采购方 =》 业务员，财务，企业管理者
- 供应商 =》业务员，财务，企业管理者
- 平台  =》 业务员，财务，仓廪实，保理公司
### 收获

通过这个项目的开发，使得自己对`react`项目开发更加得心应手。


## 壁虎找票客户端（electron）

### 时间

2021.08.27 - 2021.09.26

### 技术栈

`electron` `vue全家桶`（vue vuex vue-router）`axios` `@bihu/bcui-vue` `sass` `eslint`  `stylelint` 

`@bihu/bcui-vue` 是公司搭建的npm 组件库，也是基于 `element-ui`框架进行二次开发
### 个人实现功能

- 组件开发
    - 多选项，单选，全选业务组件
    - 添加或排除承兑人组件
    - 签约弹窗组件
- 账户管理模块
- 自定义接单和秒贴接单流程交互
- 自定义接单和秒贴接单体验流程交互，使用了`shepherd.js`

### 收获

- 封装组件尽可能的独立，解耦
- 父子组件之间的通讯方法
    - 可通过传参，传回调函数
    - 也可以在子组件使用`this.$emit()`的方式触发父组件事件
    - 也可以在父组件使用`this.$refs` 的方式来调用子组件的方法
- 学习使用了shepherd.js（体验流程步骤）插件的使用
- 使用electron新建带操作按钮的窗口

## 壁虎找票管理后台

### 时间

2021.10.27 - 2021.11.03
### 技术栈

`vue` `vuex` `vue-router` `axios` `bignumber.js` `sass` `@bihu/element-ui` `eslint` `stylelint`

`@bihu/element-ui` 是公司搭建的npm 组件库，也是基于 `element-ui`框架进行二次开发

### 个人实现功能

- 项目界面布局（左右布局，右边顶部固定，剩下右边做子路由嵌入）
- 路由规范嵌套，涉及嵌套子路由的时候，使用下面方式：
```
component: {
    render(h) {
    return h('router-view')
    }
},
```
- 登录状态在项目统一处理，未登录使用`路由beforeEach守卫`拦截，返回登录页，登录后保存token在本地，和个人信息在``store``
- 动态面包屑组件封装，更加路由父子级嵌套关系，自动生成多层面包屑，点击上一级可返回
- 封装排除承兑人组件(输入框做建议下拉框搜索，)，前端对数据做是否已排除处理，
- 导出数据 xls表格形式，根据请求后端接口，拿到后端返回的blob文件流，使用`URL.createObjectURL`生成url，创建a标签模拟点击下载，最后删除a标签
- 对首页收费统计，使用element的Skeleton 骨架屏，在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。
### 收获

- 封装了面包屑组件，最主要的是使用了`this.$route.matched`，使得自己对$route对象的属性有了更多的了解。
- 使用骨架屏，对用户的体验更好。后续想研究自动生成骨架屏

## 深度项目

## 红牛
## 有钱花 元信钱包

## 风声雨声

- [风声雨声 官网](https://fsys.app/) https://fengshengyusheng-qa.piaodian.net/
- 基于 ChatGPT 的翻译服务 多语言版本 多格式支持
- 帮你读，让 AI 帮你阅读和解惑 快速提取信息｜随时可以提问｜分钟级响应速度｜无须提前阅，上传你需要阅读或分析的文件，并等待索引创建完成，像对话一样，提出你的问题，等待 AI 给你答案

## wild card

- [wild card 官网](https://bewildcard.com/) https://wildcard-qa.piaodian.net
- 专为订阅场景而生的美国借记卡服务


## 陈秘书 

- [陈秘书 官网]('https://chenmishu.app/') https://secretary-chen-qa.piaodian.net/
- 基于gpt开发 提供各种需要写作的任务模板（例如 PPT提纲 工作报告 草案和规划，错误反思，总结，新闻 简报  请假条  简历/求职信 命题作文  文案  自定义聊天），点击模板即可进入写作流程。

2023.4.06 - 2023.4.27

### 技术栈

`react` `react-dom` `react-redux` `antd` `axios` `sass` `typescript` `@craco/craco` `ahooks` `paho-mqtt` `eslint` `stylelint` `svgo`

#### 个人实现功能

- gpt聊天功能
- 和后端约定使用了[阿里云的MQTT服务](https://help.aliyun.com/document_detail/73742.htm?spm=a2c4g.11186623.0.0.33ae695fJZ8VUC#section-llx-5ay-oma) 
- 前端主要是使用了 `paho-mqtt` 包来进行封装开发，封装一个 MyWebsocket 继承 Event类（订阅发布） ，功能有 创建链接 mqtt，断开自动重连，发送消息，接受消息，重置
- 要和后端约定好订阅的topics，有两个topics，一个用来发送，一个用来接受消息
- 一开始没有用长链接（mqtt，websocket）用短连接(接口请求)的时候，也封装了一个内容打字效果组件，后来用mqtt接受信息是一个一个单词字接收了，也就自己有打字效果了

## 其他收获

-  **2021.05.20 - 2021.08.31** 学习《浏览器工作原理与实践》专题
    - 浏览器进程，线程，协程
    - TCP协议、HTTP协议、HTTPS
        - 三次握手，四次挥手
        - OSI七层模型
    - 浏览器渲染完整流程
        - cssom树
        - Dom树构建流程
        - 渲染流水线
        - 分层和合成机制
    - 从输入URL到页面展示，中间发生什么
    - 变量提升，调用栈，块级作用域，作用域，闭包
    - this指向，执行上下文
    - 栈空间，堆空间，垃圾回收机制
    - 编译器，解释器
    - 消息队列，事件循环， 微任务，宏任务
    - setTimeout是如何实现的
    - XMLHttpRequest
    - Promise
    - async-await
    - Chrome网络面板做性能分析
    - 页面性能优化
    - 虚拟DOM
    - 渐进式网页应用PWA
    

## 每周收获

### 2020.12.16 入职
### 2020.12.16 - 2020.12.18

- 熟系项目，MonoRepo 的方式来组织和管理多个项目的代码， 基于 Lerna 的 MonoRepo 
- 多项目协同开发及代码管理工作流，并模仿做新手任务
- 使用了新工具，飞书，notion, figma, 
- 项目技术栈为 taro  react  vue ts
### 2020.12.21 - 2020.12.25

- 学习了taro、 react、 ts的基础用法，并修改项目小bug
- 辅助开发接手快结款小程序，技术栈为taro + vue
### 2020.12.28 - 2021.1.6

- 重构小天下 ,技术栈为taro + react（hook）  (业务)
- 更加熟系使用了taro 和 react(hook)技术,
### 2021.1.7 - 2021.1.20

- 快结款pc端管理后台 技术栈为 vue + ant，  (业务)
- 熟系使用了ant, 封装了面包屑组件，使用AntV G2图表
### 2021.1.21 - 2021.1.29

- 小天下小程序使用 taro + react重构完成
- 编写小天下小程序重构报告文档
- 参与制定编写 html, css, js, eslint, readme, 文件命名等规范
- 编写年终总结
### 2021.1.29 - 2020.2

- bug 上报工具小程序版
### 2021.2 - 2021.5.5

- 项目接入eslint
- 快结款项目的code-review(使得自己的代码变得更加健壮，符合规范，更加稳定)
- 学习了tpyescript的语法和编写，在项目中使用
- 学习了微信相关知识
    - 微信与业务服务器的交互流程
    - 微信与业务服务器的定位
    - appid，secret，access_token有什么用
    - 什么是 cookie 会话机制，session 会话机制，JWT(json web token) 会话机制
    - 用户不关注的情况下，可以获取openId吗？
    - 用户不关注的情况下，可以获取用户信息吗？ 
    - 用户已关注的情况下，可以无感获取用户信息吗？
    - 微信各种平台了解
- 京东秒贴，企业微信小程序调研 (业务)
- 小天下小程序项目的迭代更新 (业务)
- 小天下管理后台项目的迭代更新 (业务)
- 调研学了stylelint配置和使用，项目也接入了stylelint
- 学习调研单元测试，出选型方案
- 分享js,线程、事件循环、宏任务、微任务
- 参与前端站的一些内容编写，积极分享，活跃前端团队的分享气氛，互相学习，互相帮助。
- 负责前端站编写内容
    - 规范： html、css、js、readme、命名等规范，stylelint配置使用
    - 资源站：常用快捷键，Jest测试框架的使用，实用网站资源
    - code-review: code review 流程规范
    - 分享：小天下小程序重构报告，前端自动化测试框架选型，eslint 编译时警告或错误配置
    - 会议纪要：
- 更加了解了page.json文件中各个字段的作用
- 更加了解import exports exports default 写一些写法和作用，使得自己对es6 moudle模块化的导入导出更好理解和使用
- 了解Vue框架 dist 目录下各个文件的区别
- 学习了node设置全局命令
- 学习了原生js导出json为excel的三种方式
- 更新自己的个人博客一些文章
- 看带团队管理的第一年（管理书籍）
    - 编写读后感，和听静文分享管理心得

### 2021.5.6 - 2021.5.14

- 接入包分配electron项目的开发迭代，学习了electron的开发流程
- 深入了解了TPC/UDP/IP协议
- 知道了如何使用内部npm

工作的过程中，非常感谢静文，和朝润的帮助和技术支持，给自己提供了学习上和工作上很大的帮助

在为人处事上面，静文也给了一些很好的建议，也向他学习到了一些管理经验

技术上朝润给予了很多的帮忙和解答，有技术上的问题，经常找朝润请教
### 2021.5.16 - 8.16

- 接入壁虎识票electron2.0版本开发，对electron开发更加深入了解了
- 学习了浏览器专题
    - 浏览器渲染流程
    - HTTP，TCP, IP
    - 作用域，this
    - 垃圾回收
    - 编译器解释器执行原理
    - XMLHttpRequest，跨域问题及解决，fetch
    - Chrome开发者工具，网络面板
- 新版快结款开发
### 2021.08.27 - 2021.09.03

- 【壁虎找票1.0.0】组件开发
    - 封装组件尽可能的独立，解耦
    - 父子组件之间的通讯方法
    - 可通过传参，传回调函数
    - 也可以在子组件使用`this.$emit()`的方式触发父组件事件
    - 也可以在父组件使用`this.$refs` 的方式来调用子组件的方法

- 原型，原型链原理，数据类型判断的几种判断方式，几种继承方式的学习
    - prorotype 显式原型对象
    - __proto__ 隐式原型
    - typeof   Object.prorotype.toString.call()

### 2021.09.06 - 2021.09.08

- 【壁虎找票1.0.0】自定义接单和秒贴接单流程交互，体验流程交互
    - 学习使用了shepherd.js（体验流程步骤）插件的使用
### 2021.09.13 - 2021.09.18

- 能够把原型和原型链的原理，通过通俗易懂的方式分享讲出来给同学们听，经过和同学们的分享讨论，也使得自己对原型的理解更加透彻和清晰
### 2021.09.22 - 2021.09.24

- Vue中封装带有取消请求的axios
### 2021.09.26 - 2021.09.30

- 学习正则，分享讨论，更加了解正则的规则和使用
- fetch拦截和封装使用
### 2021.10.8 - 2021.10.15

- 调研Vue项目接入jest的单元测试，并分享给同学们使用。
- 调研整理 eslint-plugin-vue vue项目的eslint规则
### 2021.10.18 - 2021.10.22

- 学习了docker技术，并且能通过gitlab-ci，项目提交代码，自动生成镜像，上传到阿里云镜像仓库，最后在阿里云配置 `容器服务 Kubernetes`，进行外网访问镜像容器
- 基于element-ui进行二次开发，@bihu/element组件库，给Button组件和Loading组件添加了新功能
### 2021.10.25 - 2021.11.5

- 封装了动态生成面包屑组件，根据路由嵌套层级的`title`自动生成面包屑
- @bihu/element组件库 message组件 添加了黑色主题风格
### 2021.11.8 - 2021.11.19

- vue项目热更新设置，vue项目的热更新是通过 `vue-hot-reload-api` 依赖包实现的。我们找到这个依赖包的项目代码，添加判断是否执行热更新就可以了。
- 这样就方便后端同学，不用下载项目安装依赖，能够实时获取前端本地代码进行调式，提高了后端同学想那前端项目调试的效率。
- `sass` 学习到了 对象语法、函数传参方式。 写mixin的时候传入对象参数，使得mixin函数更加灵活，封装通用样式更加方便。
- 对`sass`封装css公共样式的思路有了更深一步，可以把css公共样式抽离和vue组件一样，css样式也可以写成样式组件来调用。封装一些快捷键形式的mixin，可以很方便的引入一些重复性的代码。慢慢积累形成很通用的mixin库。
- 在原有点击约束插件，添加了element的loading动画组件，使得点击约束插件的动画样式更加好看，也更容易扩展不同的loading样式，深入学习了vue指令开发。对编写vue指令更加熟练。
- 编写一篇`svg`在项目中一行命令统一压缩svg文件博客文章。 压缩原理是使用了 `svgo` 和 `svgo-config`库， 结合 package.json的脚步命令来执行

### 2021.11.20 - 2021.11.28

- echarts图表思路，x轴，y轴可以隐藏，自己写。图表里面的一些样式，可以使用rich富文本写一些样式
- npm发布了[automatic-breadcrumb](https://www.npmjs.com/package/automatic-breadcrumb)包, 过程学习了，如何发布自己的代码到npm，也学会了如何封装vue组件，打包发布到npm上

### 2021.11.29 - 2021.12.10

- 编写[超详细vue组件间通信的12种方式](https://347830076.github.io/myBlog/vue/vue%E7%BB%84%E4%BB%B6%E9%80%9A%E8%AE%AF%E6%96%B9%E5%BC%8F.html)文章，通过整理这篇文章，了解到了一些不常用的vue命令，和技巧。了解到vue组件中通信方式有很多种，看实际业务场景来使用不同的通信方式
- 帮助惠闲解决疑难杂症
    - 1.  登录 注册 的input 框，注册的时候，手机号码，验证码框不要弹窗提示浏览器管理密码，经过调查，看[input type="password" MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/password),了解到就算设置了 `autocomplete="off"`也是不能解决问题的。
    >(官方描述) "off" 不让浏览器或密码管理器自动填写密码字段。 请注意，某些软件会忽略此值，因为它通常会损害用户维护安全密码操作的能力
    - 所以在密码框是不能组织谷歌浏览器弹窗密码管理提示的。 但是可以做到其他输入框不弹出密码管理提示，在 密码框设置 `autocomplete="new-password"`, 其他输入框就不显示密码管理提示了
    - 比如登录页，想要手机号码输入框，和密码框都提示密码管理提示，这两个 输入框都设置 `autocomplete="new-password"`即可

    - 2. 在 ie11浏览器，element 库的 input组件 密码框 的小眼睛没办法进行点击切换。 经过查看 html结构，排除删除可能影响的元素，和查看样式，最后发现，element input组件库，给这个小眼睛的span 加上了 `pointer-events: none;` 样式，这个样式是阻止鼠标事件的触发。 但是为什么就只有在ie 11浏览器
        才会有这样的bug呢，其他浏览器不会呢？ 经过排查样式发现，是在ie11浏览器时，这个span也用到了 `position: absolute;` 绝对定位，结合 `pointer-events: none;`, 导致 `pointer-events: none;`阻止鼠标事件之后，元素不会再往下进行捕获触发子元素的点击事件，这时把绝对定位改成 相对定位的话，也可以解决点击触发，但是这个就更改了布局，影响了布局，最后，只需把 `pointer-events: none;`这行样式注释掉即可解决问题，而且不影响布局，看了input组件的html结构，也不会有其他影响。
    - 3. ie10 在用户中心页面的顶部样式错误问题。 经过查看html结构，一个一个删除排除可能受影响的元素，和查看css样式，思考是哪个元素的结构或者css样式影响导致了，后来发现，一是页面整体布局时，给个最小宽度 1440px，超出就出现滚动条，左右布局，左边写死宽度，右边没有设置宽度自适应。也没有设置width: calc(1440px -252px); 并且刚刚好在右边的元素里面的子元素，有一部分是写死了最小宽度，导致整体最小宽度，超出了范围，在其他浏览器呢，右边元素是出现滚动条的，但是在IE10浏览器没有出现滚动条，而是整体页面出现。因为一开始右边没有设置width: calc(1440px -252px);宽度。

        - 最终解决思路，一是，右边布局元素，也设置计算剩余宽度；二是，子元素的最小宽度，不要设置大于父元素，让他自适应宽度，避免出现滚动条

### 2021.12.20 - 2021.12.24

- 参考荣胜代码，了解到了webpack的这个[require.context](https://webpack.docschina.org/guides/dependency-management/)的用法，然后对路由文件的引入方式，改造成`require.context`引入，这样的好处是，以后新添加路由文件的时候，添加即可，`require.context`自动引入，就不需要再去写引入文件代码

### 2021.12.25 - 2021.12.31

- 编写[vue 2.0 生命周期对比 3.0 生命周期](https://347830076.github.io/myBlog/vue/vue2%E4%B8%8Evue3%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%AF%B9%E6%AF%94.html)文章
- 编写[超详细Vue3的7种和Vue2的12种组件间通信方式](https://347830076.github.io/myBlog/vue/vue%E7%BB%84%E4%BB%B6%E9%80%9A%E8%AE%AF%E6%96%B9%E5%BC%8F.html)文章，整理了vue3的一些组件间的通信方式。

### 2022.01.10 - 2022.01.14

- stylelint升级到14版本

### 2022.01.17 - 2022.01.27

- 编写[vscode 扩展开发教程](https://347830076.github.io/myBlog/tool/vscode-plugin.html)

### 2022.02.14 - 2022.02.18

- 在做深度后台项目时，需要寻找定位bug所在，看到了朝润使用了DOM 断点，引起了好奇心，还有这种断点方式，通过朝润介绍的js 6种打断点调试方式， 自己又亲自操作一遍，编写[JS的 6 种打断点调试方式](https://347830076.github.io/myBlog/javascript/js%E6%89%93%E6%96%AD%E7%82%B9%E7%9A%84%E6%96%B9%E5%BC%8F.html)， 设置断点后，可以通过调用堆栈，看断点处经历了哪些函数调用。朝润给我讲解了如何分析了调用堆栈，一些属于vue框架的可以不用管，看哪些是自己写的代码。从而分析代码的执行顺序，理清逻辑，找到问题所在。

- 例如：在深度后台项目做按钮点击约束的时候，点击约束的原理是通过 `dom.vnodeForWaiting.ref.i.props.loading = true`, 给按钮添加了loading效果，按钮就会变宽，导致了按钮位置换行。这时出现的bug现状是，按钮添加了is-loading 类(class)之后，又立马删除了is-loading 类(class)，就看不到了按钮点击约束效果了。  朝润通过在按钮的dom设置了dom属性修改断点，然后分析调用堆栈，看到了element-plus框架触发了个 resize事件，函数里面执行了表格高度变化，该变量使用了vue3的ref, 所以会导致vue3会重新渲染， 这时就能猜测到了，是给按钮设置`dom.vnodeForWaiting.ref.i.props.loading = true`添加loading样式后，导致按钮宽度变宽，从而导致换行，换行触发了element-plus的布局resize监听，就重新赋值了ref变量，vue3重新渲染了Vnode， 因此 `dom.vnodeForWaiting.ref.i.props.loading`的值又会重置为false，所以就会出现这中bug现象

### 2022.02.21 - 2022.02.25

- 编写[grid网格布局文章](http://ebook.wanggege.cn/css/18-grid%E7%BD%91%E6%A0%BC%E5%B8%83%E5%B1%80.html) 

### 2022.02.28 - 2022.03.04

- 编写[vue3的JSX写法](https://347830076.github.io/myBlog/vue/vue3%E7%9A%84JSX%E5%86%99%E6%B3%95.html)，加深熟系vue3的JSX写法
- 前端站提交代码自动部署，使用 gitlab-ci 结合 [expect](https://347830076.github.io/myBlog/node/linux-expect.html), expect 是终端自动化交互软件
- [vue3+element递归生成无限菜单组件](https://347830076.github.io/myBlog/components/menu-list.html)
- [项目中使用husky统一管理git-hooks](https://347830076.github.io/myBlog/tool/husky-githook.html), 在深度项目中使用husky + pre-commit 的 gitHooks, 实现了在提交commit时候，先校验eslint 0 警告 0 错误，才能commit成功，也在我个人博客项目，用husky + pre-push 实现了，我push代码之前，利用[gitHooK自动部署](https://347830076.github.io/myBlog/tool/githook.html)项目到github静态服务

### 2022.03.14 - 2022.03.21

- 搞清楚 [package.json 与 package-lock.json 的关系](https://347830076.github.io/myBlog/npm/package.json%E4%B8%8Epackage-lock.json.html)

### 2022.04.18 - 2022.04.22

- 了解到在火狐浏览器，使用window.open 或者 通过js,创建a标签，模拟点击跳转新页面，在异步的时候，都会给火狐浏览器当做弹窗来拦截了，解决方法就是把异步改成同步化。 思路是，使用window.open的时候，先window.open(''),一个空白页，通过异步请求回来，再修改url。具体代码如下：

```js
/**
 * 打开新窗口
 * @param {any} val 传入的是url字符串，或者是异步函数(返回 url)
 */
export async function openWindow(val) {
  const win = window.open('', '_blank')
  let url = ''

  if (typeof val === 'string') { // 传入字符串
    url = val
    win.location.href = url
  } else if (Object.prototype.toString.call(val) === '[object Function]') { // 传入函数
    try {
      url = val()
      if (url && typeof url.then === 'function') {
        url = await url
      }
      win.location.href = url
    } catch (error) {
      win.close()
    }
  }
}
```

- 在设计师提的要求下，要求`el-message`的消息提示，要跟弹窗的中间显示，没有弹窗就根据页面居中显示，一开始我是想的把弹窗做居中，消息提示也做居中，这样相对来说就是消息提示在弹窗中间了，这样也会存在一个问题，当浏览器高度小的时候，弹窗大于浏览器高度时，弹窗居中显示就会显示不全。
后来朝润提出一个方案，可以先获取最顶弹窗的位置和高度大小，重写`el-message`方法，使得根据弹窗中间位置来显示。 
  - 思路就是：
    - 获取弹窗dom`document.querySelectorAll('.el-dialog__wrapper')`
    - 遍历看哪个 display 不等于 node, 而且 z-index 最高,
    - 获取这个弹窗dom的位置，和高度 / 2，计算message偏移量，
    - 没有弹窗，就获取浏览器高度 / 2

### 2022.05.30

- 360浏览器下，video标签会默认有个小窗口播放按钮，点击后，他会弹出一个小窗口放video标签，会使用以下样式进行覆盖
```css
    position: fixed;
    top: 0px;
    left: 0px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    height: 100%;
    width: 100%;
    z-index: 9999;
    background-color: rgb(0, 0, 0);
    text-indent: 0;
    opacity: 1;
```
我本来的样式是：
```css
position: absolute;
top: 50%;
left: 50%;
width: 1080px;
height: 612px;
transform: translateX(-50%) translateY(-50%);
```
所以就会导致视频只显示一半，因为使用了`transform: translateX(-50%) translateY(-50%)`

### 2022.07.14

在看农产品官网时，发现小图标好像不是正方形，有点变形，然后打开调试查看样式，发现图片设置了宽度百分比，然后高度设置了auto
```css
width: 25%;
height: auto;
```
当浏览器宽度变大的时候，发现实际展示的高宽比不一致了，就导致了，图片变形了

后面调试发现height有个属性可以设置很好的解决

```css
width: 25%:
height: max-content;
```
设置 `max-content` 之后，图片的比例，就很好的根据宽度的大小来展示了

### 2022.08.01 - 2022.08.16

系统学习了typescript，并且运用到鹰信后台项目实战中，也编写了[typescript 基础教程](https://347830076.github.io/myBlog/typescript/1-%E7%AE%80%E4%BB%8B.html)

### 2022.08.17

编写nodejs脚本，来遍历整个项目的svg文件，用svgo进行压缩，并且整理成一篇技术分享文章 [svgo 压缩](https://347830076.github.io/myBlog/tool/svgo.html)

### 2022.12.01

[centos安装软件问题](https://347830076.github.io/myBlog/node/centos%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6%E9%97%AE%E9%A2%98.html)

### 2022.12.06

[Web Worker 的使用](https://347830076.github.io/myBlog/javascript/worker.html)

### 2022.12.08 - 2022.12.09

通过对 [Ant-Design-Mobile](https://mobile.ant.design/zh/components/modal) 框架的modal组件进行二次封装（风格样式组件），学会了 useRef 的typescript的写法, 和学会如何引入框架的typescript 声明类型 （引入框架组件的时候，查看组件的引用类型，然后点击进入框架的声明文件，看有什么其他类型export 找到自己需要的声明）

了解学习到了， [如何监听浏览器回退事件，和阻止浏览器回退的方法](https://347830076.github.io/myBlog/react/)

### 2022.12.14 - 2022.12.16

朝润介绍了[vConsole](https://github.com/Tencent/vConsole/blob/dev/README_CN.md) 一个轻量、可拓展、针对手机网页的前端开发者调试面板。这是移动端网页开发调试的福音

```js
if (process.env.REACT_APP_API_ENV !== 'production') {
  // qa 环境打包后使用 vconsole 来调试
  const loadVConsole = async() => {
    const VConsole = await import('vconsole')
    // eslint-disable-next-line no-new, new-cap
    new VConsole.default()
  }
  loadVConsole()
}
```

学习了解 [Node 服务管理模块 forever](https://347830076.github.io/myBlog/node/forever.html) [PM2 命令使用方法](https://347830076.github.io/myBlog/node/pm2.html)

forever 和 pm2 都是cli命令工具，推荐使用pm2，比较主流，用的人多，功能多，有性能监控（可视化）

### 2022.12.20

整理编写 [获取页面高宽和元素的位置](https://347830076.github.io/myBlog/javascript/%E8%8E%B7%E5%8F%96%E7%BD%91%E9%A1%B5%E5%AE%BD%E5%BA%A6.html)


### 2023.2.3

了解使用 [env-cmd](https://www.npmjs.com/package/env-cmd)包来配置process.env环境变量
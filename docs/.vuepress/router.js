module.exports = [
    {
        title: '首页',   // 必要的
        path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            '/about'
        ]
    },
    {
        title: 'css',   // 必要的
        path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true, 可折叠的
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            '/css/',
            '/css/resetCss',
            '/css/viewport',
            '/css/隐藏元素'
        ]
    },
    {
        title: 'javascript',   // 必要的
        path: '/javascript/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            '/javascript/浏览器渲染原理流程',
            '/javascript/搞清事件循环宏任务微任务',
            '/javascript/函数',
            '/javascript/内存管理',
            '/javascript/作用域',
            '/javascript/闭包原理',
            '/javascript/this详解',
            '/javascript/事件详解',
            '/javascript/事件订阅发布',
            '/javascript/定时器',
            '/javascript/模块化使用总结',
            '/javascript/深浅拷贝',
            '/javascript/防抖节流',
            '/javascript/九种跨域方式实现原理',
            '/javascript/实用API',
        ]
    },
    {
        title: '组件使用教程',
        path: '/components/',
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
            '/components/pxtorem'
        ]
    },
    {
        title: 'node技巧',
        children: [
            '/node/配置全局命令'
        ]
    },
    {
        title: 'taro',
        path: '/taro/',
        children: [
            '/taro/实战经验',
            '/taro/编译配置'
        ]
    },
    {
        title: '工具栏',   // 必要的
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            '/tool/nvm',
            '/tool/nrm',
            '/tool/git',
            '/tool/sshkey',
            '/tool/githook',
            '/tool/vscode',
        ]
    },
    {
        title: '规范',
        children: [
          '/standard/html',
          '/standard/css',
          '/standard/js',
          '/standard/eslint',
          '/standard/stylelint',
          '/standard/file',
          '/standard/ts',
        //   '/standard/git',
        //   '/standard/project-readme',
        //   '/standard/publish',
        //   '/standard/templates',
        ],
    },
    {
        title: '资源分享',
        children: [
            '/resource/api',
            '/resource/shortcuts',
        ]
    }
]
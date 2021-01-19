// 不要忘了安装 moment
const moment = require('moment')
moment.locale('zh-cn')
module.exports = {
    base: '/myBlog/',
    title: '阿离王-前端分享',
    description: '阿离王-前端分享笔记',
    head: [
        ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
    ],
    plugins: {
        //代码实时展示效果
        'demo-block': {
            settings: {
            }
        },
        'vuepress-plugin-element-tabs': true,
        //代码块复制功能
        'vuepress-plugin-code-copy': true,
        //github留言
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',

            // 其他的 Vssue 配置
            owner: '347830076',
            repo: 'myBlog',
            clientId: '56139b003e776521ec4f',
            clientSecret: 'd2f0d31963661c1366e388b2c54dde210e70dc86',
            autoCreateIssue: true
        },
        //最后更新时间
        '@vuepress/last-updated':
        {
            transformer: (timestamp) => {
                return moment(timestamp).format('LLLL')
            }
        }
        ,

        // '@vuepress/pwa': {
        //     serviceWorker: true,
        //     updatePopup: {
        //         message: "发现新内容可用",
        //         buttonText: "刷新"
        //     }
        // }
    },
    themeConfig: {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/347830076/myBlog',
        logo: '/assets/img/logo.jpg',
        head: [
            ['link', { rel: 'icon', href: '/logo.jpg' }],
            ['meta', { name: 'author', content: '阿离王' }],
            ['meta', { name: 'keywords', content: '热爱代码，前端分享' }],
            ['link', { rel: 'manifest', href: '/manifest.json' }],
            ['meta', { name: 'theme-color', content: '#3eaf7c' }],
            ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
            ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
            ['link', { rel: 'apple-touch-icon', href: '/icons/lufei.jpg' }],
            ['link', { rel: 'mask-icon', href: '/icons/lufei.jpg', color: '#3eaf7c' }],
            ['meta', { name: 'msapplication-TileImage', content: '/icons/lufei.jpg' }],
            ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
        ],
        nav: [
            { text: '首页', link: '/' },
            { text: '关于我', link: '/about' },
            // {
            //     text: '更多功能',
            //     items: [
            //         {
            //             text: '分组一', items: [
            //                 { text: 'css', link: '/css/' },
            //             ]
            //         },
            //         {
            //             text: '分组二', items: [
            //                 { text: '工具类', link: '/tool/' },
            //             ]
            //         }
            //     ]
            // },
            { text: '谷歌搜索', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '首页',   // 必要的
                path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
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
                    '/javascript/定时器',
                    '/javascript/模块化使用总结',
                    '/javascript/深浅拷贝',
                    '/javascript/防抖节流',
                    '/javascript/九种跨域方式实现原理',
                    '/javascript/实用API',
                ]
            },
            {
                title: '工具栏',   // 必要的
                path: '/tool/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                // collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/tool/nvm',
                    '/tool/nrm',
                    '/tool/git',
                    '/tool/sshkey',
                    '/tool/githook'
                ]
            }
        ],
        lastUpdated: '更新时间', // string | boolean
    }
}
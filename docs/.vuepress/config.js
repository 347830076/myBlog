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
        'demo-block': {
            settings: {
            }
        },
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
            {
                text: '更多功能',
                items: [
                    {
                        text: '分组一', items: [
                            { text: 'css', link: '/css/' },
                        ]
                    },
                    {
                        text: '分组二', items: [
                            { text: '工具类', link: '/tool/' },
                        ]
                    }
                ]
            },
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
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/css/'
                ]
            },
            {
                title: '工具栏',   // 必要的
                path: '/tool/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/tool/nvm',
                    '/tool/nrm',
                    '/tool/sshkey',
                    '/tool/githook'
                ]
            },
            {
                title: 'API',   // 必要的
                path: '/others/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/others/bluejApi',
                ]
            },
        ],
        lastUpdated: '更新时间', // string | boolean
    }
}
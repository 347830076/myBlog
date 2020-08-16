// 不要忘了安装 moment
const moment = require('moment')
moment.locale('zh-cn')
module.exports = {
    base: '/myBlog/',
    title: '阿离王-前端分享',
    description: '阿离王-前端分享笔记',
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    return moment(timestamp).format('LLLL')
                }
            }
        ]
    ],
    themeConfig: {
        logo: '/assets/img/logo.jpg',
        head: [
            ['link', { rel: 'icon', href: '/logo.jpg' }]
        ],
        nav: [
            { text: 'Home', link: '/' },
            { text: 'github', link: '/guide/' },
            {
                text: 'Languages',
                items: [
                    {
                        text: 'Group1', items: [
                            { text: 'Home', link: '/' },
                            { text: 'css', link: '/css/' },
                        ]
                    },
                    {
                        text: 'Group2', items: [
                            { text: 'Home', link: '/' },
                            { text: 'css', link: '/css/' },
                        ]
                    }
                ]
            },
            { text: '谷歌搜索', link: 'https://google.com' },
        ],
        sidebar: [
            '',
            {
                title: '美丽的css',   // 必要的
                path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/css/'
                ]
            },
        ],
        lastUpdated: '更新时间', // string | boolean
    }
}
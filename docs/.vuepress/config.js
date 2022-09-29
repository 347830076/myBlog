// 不要忘了安装 moment
const moment = require('moment')
moment.locale('zh-cn')

module.exports = {
    base: '/myBlog/',
    title: '阿离王-前端分享',
    description: '阿离王-前端分享笔记',
    dest: 'dist',
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/logo.jpg' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_2343212_wc0gkht90m.css' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
        ['script', {}, `
            // 百度统计
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?b867e5073a751b691958d2066964b07b";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
            })();
            
            // 引入谷歌统计,不需要可删除这段
            (function() {
                var hm1 = document.createElement("script");
                hm1.src = "https://www.googletagmanager.com/gtag/js?id=G-E76M3WVRT6";
                var s1 = document.getElementsByTagName("script")[0]; 
                s1.parentNode.insertBefore(hm1, s1);
            })();

            // 谷歌加载,不需要可删除
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-E76M3WVRT6');
        `]
    ],
    plugins: [
        // 代码实时展示效果
        [
            'demo-block',
            {
                settings: {
                }
            }
        ],
        [
            'vuepress-plugin-element-tabs'
        ],
        // 代码块复制功能
        [
            'vuepress-plugin-code-copy'
        ],
        // github留言
        [
            '@vssue/vuepress-plugin-vssue',
            {
                // 设置 `platform` 而不是 `api`
                platform: 'github-v4',
    
                // 其他的 Vssue 配置
                owner: '347830076',
                repo: 'myBlog',
                clientId: '56139b003e776521ec4f',
                clientSecret: 'd2f0d31963661c1366e388b2c54dde210e70dc86',
                autoCreateIssue: true
            }
        ],
        // 图片放大
        [
            '@vuepress/medium-zoom',
            {
                selector: 'img.zoom-custom-imgs',
                 // See: https://github.com/francoischalifour/medium-zoom#options
                options: {
                    margin: 16
                }
            }
        ],
        // 返回顶部
        require('./src/plugins/back-to-top/plugin.js'),
        //最后更新时间
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    return moment(timestamp).format('LLLL')
                }
            }
        ],
        // 谷歌统计
        [
            '@vuepress/google-analytics',
            {
              'ga': '289628995'
            }
        ],
        [
            '@vuepress/pwa',{
                serviceWorker: true,
                updatePopup: {
                    message: "发现新内容可用",
                    buttonText: "刷新"
                }
            }
        ]
    ],
    themeConfig: {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/347830076/',
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
        // 顶部路由
        nav: [
            { text: '首页', link: '/' },
            { text: '关于我', link: '/about' },
            { text: '前端基础电子书', link: 'http://ebook.wanggege.cn/' },
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
        ],
        // 侧边栏路由
        sidebar: [
            {
                title: '首页',   // 必要的
                path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                // collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
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
                    '/css/常用css',
                    '/css/隐藏元素',
                    '/css/css变量的使用',
                    '/css/伪元素表单控件默认样式重置',
                    '/css/粘性定位sticky的用途',
                    '/css/cssModule',
                    '/css/滚动视觉差',
                    '/css/a标签小妙用',
                    '/css/sass',
                    '/css/css使用小技巧',
                    '/css/实战经验',
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
                    '/javascript/点击约束',
                    '/javascript/promise使用和实现方法',
                    '/javascript/fetch拦截和封装',
                    '/javascript/函数柯里化',
                    '/javascript/正则',
                    '/javascript/js打断点的方式',
                    '/javascript/获取网页宽度',
                    '/javascript/bignumber',
                ]
            },
            {
                title: 'typescript',
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    'typescript/1-简介',
                    'typescript/2-安装',
                    'typescript/3-基础语法',
                    'typescript/4-基础类型',
                    'typescript/5-变量声明',
                    'typescript/6-接口',
                    'typescript/7-数组的类型',
                    'typescript/8-函数的类型',
                    'typescript/9-类型断言',
                    'typescript/10-声明文件',
                    'typescript/11-内置对象',
                    'typescript/12-type用法',
                    'typescript/13-类',
                    'typescript/14-泛型',
                    'typescript/15-声明合并',
                    'typescript/从对象中的值或键创建联合类型',
                ]
            },
            {
                title: 'Vue',
                children: [
                    '/vue/Vue框架dist目录下各个文件的区别',
                    '/vue/eslint-config',
                    '/vue/ts-vue',
                    '/vue/常用技巧',
                    '/vue/vue组件通讯方式',
                    '/vue/路由守卫',
                    '/vue/axios取消请求',
                    '/vue/自动生成面包屑',
                    '/vue/动态热更新设置',
                    '/vue/vue2与vue3生命周期对比',
                    '/vue/vue3的JSX写法',
                    '/vue/Vue项目中出现Loading chunk {n} failed问题的解决方法'
                ]
            },
            {
                title: 'react',
                path: '/react/',
                children: [
                    '/react/react常见的一些报错',
                    '/react/react组件暴露自身API的方法',
                    '/react/按需加载路由',
                    '/react/获取路由参数'
                ]
            },
            {
                title: '组件使用教程',
                path: '/components/',
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: [
                    '/components/pxtorem',
                    '/components/react-pdf',
                    '/components/http-server',
                    '/components/menu-list',
                ]
            },
            {
                title: 'node技巧',
                children: [
                    '/node/配置全局命令',
                    '/node/前端路由Nginx配置',
                    '/node/Nginx配置密码访问',
                    '/node/Nginx反向代理配置',
                    'node/centos添加用户并设置免密登录',
                    '/node/linux-expect',
                ]
            },
            {
                title: 'npm',
                path: '/npm/',
                sidebarDepth: 1,
                children: [
                    '/npm/nrm',
                    '/npm/link',
                    '/npm/package.json与package-lock.json',
                    '/npm/publish',
                ]
            },
            {
                title: '工具栏',   // 必要的
                // collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/tool/nvm',
                    '/tool/n',
                    '/tool/nrm',
                    '/tool/git',
                    '/tool/sshkey',
                    '/tool/mtp',
                    '/tool/githook',
                    '/tool/husky-githook',
                    '/tool/vscode',
                    '/tool/谷歌插件',
                    '/tool/jest单元测试',
                    '/tool/docker',
                    '/tool/gitlab-ci',
                    '/tool/svgo',
                    '/tool/vscode-plugin',
                    '/tool/badge',
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
                  '/standard/stylelint14',
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
                    '/resource/skills',
                    '/resource/interview',
                ]
            },
            {
                title: '实用例子',
                children: [
                    '/demo/拖拽',
                    '/demo/原生js导出json为excel的三种方式',
                    '/demo/使用原生js来替换title属性的悬浮文字提示',
                ]
            },
            // {
            //     title: '个人总结',
            //     children: [
            //         '/summary/2021年总结',
            //     ]
            // },
        ],
        lastUpdated: '更新时间', // string | boolean
    },
    markdown: {
        extendMarkdown: md => {
            // markdown 插件，支持定义勾选列表
            md.use(require('markdown-it-task-lists'))
        }
    }
}
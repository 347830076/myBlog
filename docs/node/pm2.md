# PM2 命令使用方法

[PM2](https://pm2.keymetrics.io/)是一个守护进程管理器，它将帮助您管理和保持您的应用程序在线。PM2 入门非常简单，它以简单直观的 C​​LI 形式提供，可通过 NPM 安装。

这里推荐一个 node 版本控制工具 -- [nvm](../tool/nvm.md)。

## 优点

- 后台运行(关掉cmd窗口依然运行)
- 0 秒停机重载，维护升级时不需要停机
- Linux (stable) & MacOSx (stable) & Windows (stable).多平台支持
- 进程守护 (停止不稳定的进程，避免无限循环)
- 内建负载均衡
- 实时控制台检测
- 提供 HTTP API等
- 远程控制和实时的接口API ( nodejs 模块,允许和PM2进程管理器交互 )
- 不仅仅可以启动node程序，对于一般的脚本程序同样可以

## 安装

```
npm install pm2@latest -g
```
或
```
yarn global add pm2
```

## 启动

```
pm2 start app.js
```

可以传递给 CLI 的一些选项：

- `--name` 指定应用程序名称
- `--watch`：监听应用目录文件的变化，一旦发生变化，自动重启。如果要精确监听、不监听的目录，最好通过配置文件。
- `-i` --instances：启用多少个实例，可用于负载均衡。如果-i 0或者-i max，则根据当前机器核数确定实例数目。
- `--ignore-watch`：排除监听的目录/文件，可以是特定的文件名，也可以是正则。比如--ignore-watch="test node_modules "
- `--max-memory-restart <200MB>`  设置应用程序重载的内存阈值
- `--log <log_path>`  指定日志文件
- `-- arg1 arg2 arg3` 向脚本传递额外的参数
- `--restart-delay <delay in ms>` 自动重启时间间隔，单位为毫秒
- `--time` 日志前缀写上时间
- `-n` --name：指定应用的名称。查看应用信息的时候可以用到。
- `-o` --output `<path>`：标准输出日志文件的路径。
- `-e` --error `<path>`：错误输出日志文件的路径。
- `--no-autorestart`  不自动重启应用程序
- `--interpreter` `<interpreter>`：the interpreter pm2 should use for executing app (bash, python...)。比如你用的coffee script来编写- 应用。
- `-x`：用fork模式启动app.js，而不是cluster模式
    - `fork模式`：单实例多进程，常用于多语言混编，比如php、python等，不支持端口复用，需要自己做应用的端口分配和负载均衡的子进程业务代码。
      - 缺点：就是单服务器实例容易由于异常会导致服务器实例崩溃。
    - `cluster模式`：多实例多进程，但是只支持node，端口可以复用，不需要额外的端口配置，0代码实现负载均衡。
      - 优点：就是由于多实例机制，可以保证服务器的容错性，就算出现异常也不会使多个服务器实例同时崩溃。

```js
例子：

pm2 start app.js --watch // 实时监控的方式启动，app.js文件有变动时，pm2会自动reload(重启)
pm2 start app.js -i max // 根据有效CPU数目启动最大进程数目
pm2 start app.js -i 3  // 启动3个进程
pm2 start app.js --ignore-watch="test node_modules" // 排除监听的目录/文件
pm2 start app.js --name mynode  // 启动一个进程并把它命名为mynode
pm2 start app.json  // 启动进程, 可以在 app.json里设置选项
pm2 start app.js -i max - -z 10 // 在 – 之后给 app.js 传递参数（-z 10）
```

## 查看与监视进程

- `pm2 list`：显示所有进程信息；
- `pm2 show 11`，`pm2 info 11`：查看进程id为 11 的详细信息；
- `pm2 monit`：进入监视页面，监视每个node进程的CPU和内存的使用情况。
- `pm2 plus`  监控和诊断 Web 界面 基于 Web 的仪表板，具有诊断系统的跨服务器：

## 重载、重启

- `pm2 restart 11`：重启id为 11 的进程；
- `pm2 restart all`：重启所有进程；
- `pm2 reload 11`：0秒停机重载id为 11 进程（用于 NETWORKED 进程）；
- `pm2 reload all`：重载所有进程；

## 停止、删除进程

- `pm2 stop/delete 11`：停止/删除id为 11 的进程；
- `pm2 stop/delete all`：停止/删除所有进程；

## 日志操作

- `pm2 logs`：显示所有进程的日志；
- `pm2 logs 11`：显示进程id为 11 的日志；
- `pm2 flush`：清空所有日志文件；
- `pm2 reloadLogs`：重载所有日志；
- `pm2 startup`：产生 init 脚本，保持进程活着；

## 杀进程

- `pm2 kill`：杀死pm2进程 ;

## 开机自动启动

1. 通过`pm2 save`保存当前进程状态。
2. 通过`pm2 startup [platform]`生成开机自启动的命令。例如：`pm2 startup centos` `pm2 startup mac`
3. 将步骤2生成的命令，粘贴到控制台进行，搞定。

## pm2配置文件启动

您还可以创建一个称为生态系统文件的配置文件来管理多个应用程序。要生成生态系统文件：

```
pm2 ecosystem
```

这将生成一个 ecosystem.config.js 文件：

```js
module.exports = {
  apps : [{
    name: "app",
    script: "./app.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }, {
     name: 'worker',
     script: 'worker.js'
  }]
}
```

并轻松启动它：
```
pm2 start ecosystem.config.js
```

### 配置文件 ecosystem.config.js 配置属性详细介绍
```js
module.exports = {
  // apps是一个json结构的数组 ，每一个数组成员对应一个pm2中运行的应用
  apps : [
    {
      // 应用程序名称
      name: 'next-test',
      // 执行文件
      script: 'index.js',
      // 应用程序所在的目录
      cwd: './',
      // 传递给脚本的参数
      args: '',
      // 指定的脚本解释器
      interpreter: '',
      // 传递给解释器的参数
      interpreter_args: '',
      // 是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。
      watch: true, // watch: './',
      // 不用监听的文件
      ignore_watch: [
        'node_modules',
        'logs'
      ],
      // 应用程序启动模式，这里设置的是 cluster_mode（集群），默认是fork
      exec_mode: 'cluster_mode',
      // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
      instances: 4,
      // 最大内存限制数，超出自动重启
      max_memory_restart: 8,
      // 自定义应用程序的错误日志文件(错误日志文件)
      error_file: './logs/app-err.log',
      // 自定义应用程序日志文件(正常日志文件)
      out_file: './logs/app-out.log',
      // 设置追加日志而不是新建日志
      merge_logs: true,
      // 指定日志文件的时间格式
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      // 最小运行时间，这里设置的是60s即如果应用程序在* 60s内退出，pm2会认为程序异常退出，此时触发重启* max_restarts设置数量，应用运行少于时间被认为是异常启动
      min_uptime: '60s',
      // 设置应用程序异常退出重启的次数，默认15次（从0开始计数）,最大异常重启次数，即小于min_uptime运行时间重启次数；
      max_restarts: 10,
      // 启用/禁用应用程序崩溃或退出时自动重启，默认为true, 发生异常的情况下自动重启
      autorestart: true,
      // 定时启动，解决重启能解决的问题，crontab时间格式重启应用，目前只支持cluster模式;
      cron_restart: '',
      // 异常重启情况下，延时重启时间
      restart_delay: '60s',
      // 环境配置
      // env: {
      //   // 公共变量
      //   COMMON_VARIABLE: true
      // },
      // 生产环境配置
      // $ pm2 start app.js --env
      env: {
        // 环境参数，当前指定为生产环境 process.env.NODE_ENV
        NODE_ENV: 'production',
        // 当前环境接口地址，如果不用可不配置 process.env.REMOTE_ADDR
        REMOTE_ADDR: 'http://www.dzm.com/'
      },
      // 开发环境配置
      // $ pm2 start app.js --env_dev
      env_dev: {
        // 环境参数，当前指定为开发环境 process.env.NODE_ENV
        NODE_ENV: 'development',
        // 当前环境接口地址，如果不用可不配置 process.env.REMOTE_ADDR
        REMOTE_ADDR: 'http://www.dzm-dev.com/'
      },
      // 测试环境配置
      // $ pm2 start app.js --env_test
      env_test: {
        // 环境参数，当前指定为测试环境 process.env.NODE_ENV
        NODE_ENV: 'test',
        // 当前环境接口地址，如果不用可不配置 process.env.REMOTE_ADDR
        REMOTE_ADDR: 'http://www.dzm-test.com/'
      }
    }
  ],

  // 环境部署
  deploy : {
    // 生成环境
    // 1、上传代码到云端仓库
    // 2、部署命令预览：
    // 首次部署: $ pm2 deploy ecosystem.json production setup 
    // 更新版本: $ pm2 deploy ecosystem.json production update 
    // 返回上一个版本: $ pm2 deploy ecosystem.json production revert 1 
    // 3、执行首次部署：$ pm2 deploy ecosystem.json production setup
    // 4、执行部署运行：$ pm2 deploy ecosystem.json production
    // 5、看到 success 成功，报错看错误自行百度
    production : {
      // ssh的用户名，登录远程服务器的用户名
      user : 'dzm',
      // 要发布的机器，远程服务器的IP或hostname，此处可以是数组同步部署多个服务器，不过鉴于我们只有一个服务器，因此我们填写 10.0.90.164
      host : '10.0.90.164',
      // 服务器端口
      port : 8083,
      // 要发布的代码分支，远端名称及分支名
      ref  : 'origin/master',
      // 代码Git仓库地址
      repo : 'git@gitlab.dzm.net:dzm/nuxt-test',
      // 服务器存储代码地址，远程服务器部署目录，需要填写user具备写入权限的目录，也就是服务器存放上面git库代码的地方
      path : '/usr/local/var/www/production',
      // ssh权限配置
      // 'ssh_options': 'StrictHostKeyChecking=no',
      'ssh_options': ['StrictHostKeyChecking=no', 'PasswordAuthentication=no'],
      // 1、在 setup 前触发，如安装 git
      'pre-setup': '',
      // 2、在 setup 后触发，如做一些其他配置
      'post-setup': '',
      // 3、在 deploy 前触发，执行本地脚本
      'pre-deploy-local': '',
      // 4、在 deploy 前触发，执行远程脚本
      'pre-deploy': 'git fetch --all',
      // 5、在 deploy 后触发，执行远程脚本，如 npm install，部署后需要执行的命令
      // 'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      // 环境变量
      'env'  : {
        // 指定为生成环境
        'NODE_ENV': 'production'
      }
    }
  }
};
```

**`注：pm2 restart命令不会重新进行 配置文件 需要关掉重启。`**

参考文章:

[PM2 命令使用方法总结](https://juejin.cn/post/6889300755539312653#heading-8)

[PM2 配置文件（ecosystem.config.js 字段详细介绍）](https://juejin.cn/post/6926357629375610887)
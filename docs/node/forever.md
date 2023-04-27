# Node 服务管理模块 forever

一个简单的 CLI 工具，用于确保给指定的脚本连续运行 ([forever 的官方描述](https://github.com/foreversd/forever)) 

## forever有什么作用？

forever 是一个简单的命令式 nodejs 的守护进程，能够启动，停止，重启App应用。forever 完全基于命令行操作，在 forever 进程之下，创建 node 的子进程，通过 monitor 监控 node 子进程的运行情况，一旦文件更新，或者进程挂掉，forever 会自动重启 node 服务器，确保应用正常运行。

简单来说，就是 forever 可以帮我们开启一个进程，用 node 运行我们写的代码， 运行，管理，停止，重启等等功能

## 安装forever

```
// 记得加-g，forever要求安装到全局环境下
npm install forever -g
```

## 命令操作介绍

```
start:启动守护进程
stop:停止守护进程
stopall:停止所有的forever进程
restart:重启守护进程
restartall:重启所有的foever进程
list:列表显示forever进程
config:列出所有的用户配置项
set <key> <val>: 设置用户配置项
clear <key>: 清楚用户配置项
logs: 列出所有forever进程的日志
logs <script|index>: 显示最新的日志
columns add <col>: 自定义指标到forever list
columns rm <col>: 删除forever list的指标
columns set<cols>: 设置所有的指标到forever list
cleanlogs: 删除所有的forever历史日志

配置参数options：

-m MAX: 运行指定脚本的次数
-l LOGFILE: 输出日志到LOGFILE
-o OUTFILE: 输出控制台信息到OUTFILE
-e ERRFILE: 输出控制台错误在ERRFILE
-p PATH: 根目录
-c COMMAND: 执行命令，默认是node
-a, –append: 合并日志
-f, –fifo: 流式日志输出
-n, –number: 日志打印行数
–pidFile: pid文件
–sourceDir: 源代码目录
–minUptime: 最小spinn更新时间(ms)
–spinSleepTime: 两次spin间隔时间
–colors: 控制台输出着色
–plain: –no-colors的别名，控制台输出无色
-d, –debug: debug模式
-v, –verbose: 打印详细输出
-s, –silent: 不打印日志和错误信息
-w, –watch: 监控文件改变
–watchDirectory: 监控顶级目录
–watchIgnore: 通过模式匹配忽略监控
-h, –help: 命令行帮助信息
```


## forever使用说明

## 启动操作

### 简单的启动

```
forever start app.js
```

### 指定forever信息输出文件，当然，默认它会放到~/.forever/forever.log

```
forever start -l forever.log app.js
```

### 指定app.js中的日志信息和错误日志输出文件

-o 就是console.log输出的信息，-e 就是console.error输出的信息

```
forever start -o out.log -e err.log app.js
```

### 追加日志，forever默认是不能覆盖上次的启动日志
 
 所以如果第二次启动不加-a，则会不让运行

```
forever start -l forever.log -a app.js
```

## 监听当前文件夹下的所有文件改动

```
forever start -w app.js
```

## 显示所有运行的服务

```
forever list
```

## 停止操作

停止其中一个

```
forever stop app.js
```

停止全部

```
forever stopall
```

## 重启操作

```
forever restart app.js
```

```
forever restartall
```

## 模拟异常退出，自动重启

```js
// app.js
setTimeout(function(){
  console.log(new Date());
  throw new Error('App is error from inner!');
},3000);
```

执行下面命令

```
forever -p . -l ./logs/access.log -e ./logs/error.log -a start app.js
```

通过查询log日志看到，每三秒打印一次，就代表forever收到异常退出后，自动帮我们又重新运行了app.js

参考文章

[Nodejs服务器管理模块forever](http://blog.fens.me/nodejs-server-forever/)
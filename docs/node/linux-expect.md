# Linux expect 介绍和用法

expect是一个自动化交互套件，主要应用于执行命令和程序时，系统以交互形式要求输入指定字符串，实现交互通信。(大白话就是：shell脚本在终端执行时遇到要交互的，可以使用expect来自动输入)

expect自动交互流程：`spawn`启动指定进程 -> `expect`获取指定关键字 -> `send`向指定程序发送指定字符 -> 执行完成退出.

## 安装 expect

想执行expect命令，肯定先要安装expect

CentOS系统安装方式

```
yum install -y expect
```

ubuntu系统安装方式

```
sudo apt-get install tcl tk expect
```

## expect常用命令总结:

```
spawn               交互程序开始后面跟命令或者指定程序
expect              获取匹配信息匹配成功则执行expect后面的程序动作
send exp_send       用于发送指定的字符串信息
exp_continue        在expect中多次匹配就需要用到
send_user           用来打印输出 相当于shell中的echo
exit                退出expect脚本
eof                 expect执行结束 退出
set                 定义变量
puts                输出变量
set timeout         设置超时时间
```

## 例子

### ssh登录远程主机执行命令

新建个 login.sh 文件，代码如下
```sh
#!/usr/bin/expect

spawn ssh root@192.168.56.103
expect "*password*"
send "123456\r"
expect eof
```

在终端执行： `expect ./login.sh`, 就自动执行 `ssh root@192.168.56.103` 命令，遇到了需要输入密码 ，`expect "*password*"`匹配到终端提示包含`password`, 就自动在终端输入 `123456`,  `\r` 换行   `expect eof` 结束退出

### 定义变量

```sh
#!/bin/bash

set passwd 123456 # 设置密码为123456

set timeout 30 # 设置超时时间 30秒

spawn ssh root@192.168.56.103
expect { # {}里面代码多条匹配 exp_continue 匹配到继续匹配
"*yes/no*" { send "yes\r"; exp_continue }
"*password*" { send "$passwd\r" } #这里使用密码变量$passwd
}
expect eof
```

### expect脚本内部定义参数并传参

login.exp文件，代码如下

```sh
#!/usr/bin/expect

#if { $argc < 4 } {   #这里运用了if语句，这个$argc表示参数的数目，这里判断参数数目小于4就执行下面的语句，$argv0为脚本名字本身，$argv为命令行参数。[lrange$argv 0 0]表示第1个参数，[lrange $argv 0 4]为第一个到第五个参数。
if { [llength $argv] < 4 } {  #这里跟上面的意思一致，这里是计算参数的长度，当它的长度小于4就执行下面的语句 
     puts "Usage:$argc <host> <username> <password> <cmd>" #puts可以读取变量，输出内容，跟下面一句话的意思一致，所以这里贴了两句，这里意思是打印输入参数的个数，然后<host> <username> <password> <cmd>输出。
     send_user "Usage:$argv0 cmd <host> <username> <password> <cmd>\n" #send_user 命令用来把后面的参数输出到标准输出中去，默认的的send、exp_send 命令都是将参数输出到程序中去的。这里的$argv0是脚本本身，send_user默认不换行，所以要加\n换行符。
     exit 1  #这里是打印一个状态码，好让后面的程序知道一个返回的结果。
}
set timeout 3
set host [lindex $argv 0]  #定义host变量的位置，set 就是设置变量名。
set username [lindex $argv 1]  #用户名在第二个参数位置
set password [lindex $argv 2]  #密码在第三个参数位置,也可以set password 654321 这样直接指定变量以及实际密码。
set cmd [lindex $argv 3] #执行命令在第四个参数位置
spawn ssh $username@$host $cmd  #执行语句,并传参
expect {
     "yes/no" {send "yes\r";exp_continue}
     "*password" {send "$password\r"} #密码传参到了这里
}
expect eof
```

先来一个错误的执行结果示例：

终端执行 `expect login.exp 192.168.1.111 root 654321`  

结果如下：

```
Usage:3 <host> <username> <password> <cmd>
Usage:./login.exp cmd <host> <username> <password> <cmd>
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! front-end-standard@1.0.0 deploy: `expect ./deploy/deploy.sh 192.168.1.111 root 654321`
npm ERR! Exit status 1
npm ERR! 
```

再来一个正确的结果示例：

expect login.exp 192.168.1.111 root 654321 ifconfig

```
spawn ssh root@192.168.1.111 ifconfig
root@192.168.1.111's password: 
eth0      Link encap:Ethernet  HWaddr 00:0C:29:FA:C9:A2  
          inet addr:192.168.1.111  Bcast:192.168.1.255  Mask:255.255.255.0
```

## 总结

本文章只是带入门，简单的使用了expect，体会到它的自动化的魅力，还有更多用法，等待大家自己去挖掘。


参考文章： 

[Linux expect 介绍和用法](https://www.cnblogs.com/saneri/p/10819348.html)

[expect使用详解](http://www.51niux.com/?id=55)

[expect - 自动交互脚本](http://xstarcd.github.io/wiki/shell/expect.html)
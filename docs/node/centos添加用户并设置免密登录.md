# centos添加用户并设置免密登录

1. 添加用户，同时创建对应 home 目录: `useradd aliwang -m`
2. 切换到该用户: `su aliwang`
3. 进入用户 home 目录：`cd ~/`
4. 生成密钥对（也可以通过已有密钥文件生成，具体参考网上的方法）：`ssh-keygen -t rsa`
5. 进入 .ssh 目录：`cd .ssh`
6. 备份公钥文件：`cp id_rsa.pub id_rsa_bak.pub`
7. 将公钥文件重命名为 authorized_keys：`mv id_rsa.pub authorized_keys`
8. 重命名 id_rsa 文件，添加 .pem 后缀：`mv id_rsa aliwang.pem`
9. 修改 .ssh 目录权限：`chmod 700 ../.ssh/`
10. 修改 authorized_keys 文件权限：`chmod 644 authorized_keys`

11. 下载私钥文件：`scp -i ./certs/xxx.pem root@111.11.1.1:/home/aliwang/.ssh/aliwang.pem ./ aliwang.pem`

[scp 命令](https://www.runoob.com/linux/linux-comm-scp.html) Linux scp 命令用于 Linux 之间复制文件和目录。

12. 编写登录脚本，以后就可以通过该登录脚本进行登录了：

```sh
#!/usr/bin/env sh
chmod 600 ../certs/xxx.pem
ssh -i ../certs/xxx.pem aliwang@111.11.1.1
```


## 常见错误

###  Nginx: stat() failed (13: permission denied)

查看nginx 的日志如下：

```
2022/09/06 14:23:40 [crit] 3986195#0: *4 stat() "/home/bihu/prod-assets/xiaotianxia-web/" failed (13: Permission denied), client: 61.144.105.238, server: xtxpjw.cn, request: "GET / HTTP/1.1", host: "www.xtxpjw.cn"
2022/09/06 14:23:40 [crit] 3986195#0: *4 stat() "/home/bihu/prod-assets/xiaotianxia-web/index.html" failed (13: Permission denied), client: 61.144.105.238, server: xtxpjw.cn, request: "GET / HTTP/1.1", host: "www.xtxpjw.cn"
```

解决办法：给 /home/bihu 目录添加 `+x` 权限：`chmod +x /home/bihu`，然后执行 `systemctl reload nginx` 重新加载即可
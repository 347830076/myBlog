# Nginx配置密码访问网页

nginx做web服务，但由于安全问题需求，访问网页时需要输入用户名和密码进行认证

实现步骤：

## 1.安装密码生成工具

```
 yum -y install httpd-tools
```

## 2. 生成用户和密码文件

```
$ htpasswd -c /usr/local/nginx/password username
# 回车后输入密码，就自动生成了一个含有账号密码的文件了
# -c 创建一个加密文件
```

`password` 是文件名称

`username` 是自定义用户名

### 查看生成的用户名和密码

```
cat /usr/local/nginx/password
```

### 删除用户和密码

```
$ htpasswd -D /usr/local/nginx/password username
# -D 删除指定的用户
```

### 修改用户和密码

```
$ htpasswd -D /usr/local/nginx/password username
$ htpasswd -b /usr/local/nginx/password username pass
# -D 删除指定的用户
# -b htpassswd命令行中一并输入用户名和密码而不是根据提示输入密码
# -p htpassswd命令不对密码进行进行加密，即明文密码
```

## 3. 配置Nginx认证

找到 nginx 配置文件，通常默认的配置文件在`/usr/local/nginx/conf/nginx.conf`，要对整个站点开启验证，需在配置文件中的server加上认证配置
`auth_basic` 和 `auth_basic_user_file`

```
server {
  listen 80;
  server_name  localhost;
  # ...
  
  auth_basic "请输入用户和密码"; # 验证时的提示信息
  auth_basic_user_file /usr/local/nginx/password; # 认证文件

  location / {
      root   /var/www;
      index  index.html index.htm;
  }
  # ...
}
```

## 4. 重启/重载Nginx使站点的认证生效

```
/usr/local/nginx/sbin/nginx -s reload
```
 
参考文章 [Nginx配置密码访问-访问网页需输入用户名密码](https://segmentfault.com/a/1190000023086569)
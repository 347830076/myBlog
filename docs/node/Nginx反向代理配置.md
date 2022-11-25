# Nginx 反向代理配置

```js
location /{
    proxy_pass http://127.0.0.1:7002;   #反向代理，指向具体的node监听端口
    proxy_redirect     off;                           #关闭地址的重定向

    # 在代理请求头中加入下面的信息，方便我们用nodejs获取一些客户端信息
    # proxy_set_header   Host             $host;        #本机地址（ip或域名）这个可以注释掉，
    proxy_set_header   X-Real-IP        $remote_addr; #客户端真实ip
    proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;#客户端真实ip
}
```
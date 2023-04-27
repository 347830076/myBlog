# 前端路由 Nginx 配置

```js
server {
        listen       80;
        server_name  "xxx.xxx.net";
        root     /home/bihu/qa-assets/carry/;
        add_header Cache-Control no-cache;

        location / {
                add_header Cache-Control  max-age=1;
                # 有.html后缀的重定向到没.html后缀
                if ($request_uri ~ ^/(.*)\.html$) {
                        return 302 /$1$args;
                }
                # 没有.html后缀的也可以访问
                try_files $uri $uri.html $uri/ @router /404.html index.html;
                index index.html;
        }

        # 动态路由
        location ~ /(.*)?/[^.]*$ {
                try_files $uri $uri.html /$1/[id].html $uri/ @router /404.html;
        }

        location @router {
                rewrite ^.*$ /index.html last;
        }

        location ~ .*\.(js|css|gif|jpg|jpeg|png|bmp|swf|woff|ttf)$ {
                expires 2d;
        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
                root html;
        }
}

server {
        listen     443 ssl;
        server_name  "xxx.xxx.net";
        root     /home/bihu/qa-assets/carry/;
        ssl_certificate     /etc/letsencrypt/live/piaodian.net/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/piaodian.net/privkey.pem;
        add_header Cache-Control no-cache;

        location / {
                add_header Cache-Control  max-age=1;
                if ($request_uri ~ ^/(.*)\.html$) {
                        return 302 /$1$args;
                }
                try_files $uri $uri.html $uri/ @router /404.html index.html;
                index index.html;
        }

        # 动态路由
        location ~ /(.*)?/[^.]*$ {
                try_files $uri $uri.html /$1/[id].html $uri/ @router /404.html;
        }

        location @router {
                rewrite ^.*$ /index.html last;
        }

        location ~ .*\.(js|css|gif|jpg|jpeg|png|bmp|swf|woff|ttf)$ {
                expires 2d;
        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
                root html;
        }
}
```

参考文章

[Nginx 配置移动端和电脑端自动双向跳转](https://learnku.com/articles/33563)

pc 配置

```
server {
    listen       80;
    server_name  www.phpblog.com.cn;
    if ($http_user_agent ~* (mobile|nokia|iphone|ipad|android|samsung|htc|blackberry|miuibrowser)) {
            rewrite  ^(.*)    http://m.phpblog.com.cn$1 permanent;
        }
    location / {
        root   www;
        index  index.html index.htm;
    }
}
```

移动端配置

```
server {
    listen       80;
    server_name  m.phpblog.com.cn;
    if ($http_user_agent !~* (mobile|nokia|iphone|ipad|android|samsung|htc|blackberry|miuibrowser)) {
            rewrite  ^(.*)    http://www.phpblog.com.cn$1 permanent;
        }
    location / {
        root   m;
        index  index.html index.htm;
    }
}
```

## nextjs 生成静态文件配置

```js
server {
        listen       80;
        server_name xxx; 
        root     /home/xxx/;
        add_header Cache-Control no-cache;

        location / {
                add_header Cache-Control  max-age=1;

                if ($request_uri ~ ^/(.*)\.html$) {
                    return 302 /$1$args;
                }
                index index.html;
                try_files $uri $uri.html $uri/ /404.html;
        }

        # 动态路由
        location ~ /(.*)?/[^.]*$ {
                # 上面的正则也会匹配到 /api/xxx，所以要在这里面做判断
                # 2022.8.17 更新：以下这个正则和判断会导致 $1 的值永远为空，项目中接口直接通过 https://carry.so 来调用，所以不需要这个判断
                # if ($uri ~ ^/api/) {
                #         proxy_pass http://127.0.0.1:8080;
                # }
                try_files $uri $uri.html /$1/[id].html $uri/ @router /404.html;
        }

        # location /api {
        #         proxy_pass http://carry.so;
        # }
}

server {
        listen       443;
        server_name xxx; 
        root     /home/xxx;
        add_header Cache-Control no-cache;
        ssl_certificate /etc/nginx/cert/xxx.pem;
        ssl_certificate_key /etc/nginx/cert/xxx.key;

        location / {
                add_header Cache-Control  max-age=1;

                if ($request_uri ~ ^/(.*)\.html$) {
                    return 302 /$1$args;
                }
                index index.html;
                try_files $uri $uri.html $uri/ /404.html;
        }

        # 动态路由
        location ~ /(.*)?/[^.]*$ {
                # 上面的正则也会匹配到 /api/xxx，所以要在这里面做判断
                # 2022.8.17 更新：以下这个正则和判断会导致 $1 的值永远为空，项目中接口直接通过 https://carry.so 来调用，所以不需要这个判断
                # if ($uri ~ ^/api/) {
                #         proxy_pass http://127.0.0.1:8080;
                # }
                try_files $uri $uri.html /$1/[id].html $uri/ @router /404.html;
        }

        # location /api {
        #         proxy_pass http://carry.so;
        # }
}
```
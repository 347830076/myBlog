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
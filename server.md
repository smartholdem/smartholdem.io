sudo nginx -t && sudo systemctl reload nginx
sudo rm -f /etc/nginx/sites-enabled/default
sudo certbot --nginx -d smartholdem.io -d www.smartholdem.io

## Nginx config smartholdem.io

```
# 1. ОСНОВНОЙ САЙТ (HTTPS, non-WWW)
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name smartholdem.io;

    root /var/www/smartholdem.io;
    index index.html index.htm;

    # SSL Certbot
    ssl_certificate /etc/letsencrypt/live/smartholdem.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/smartholdem.io/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # Gzip
    gzip_static on;
    gzip on;
    gzip_comp_level 5;
    gzip_min_length 256;
    gzip_proxied any;
    gzip_vary on;
    gzip_types
        application/javascript
        application/json
        application/xml
        text/css
        text/javascript
        text/plain
        text/xml
        image/svg+xml;

    # Кэш статики Nuxt (1 год)
    location ~* \.(?:css|js|jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc|woff|woff2|ttf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
        log_not_found off;
    }

    # Роутинг без принудительного слэша
    location / {
        #try_files $uri $uri.html /index.html;
        # 1. $uri            -> проверяет точный файл
        # 2. $uri/index.html -> отдает SSG HTML из подпапки без 301-редиректа на слэш!
        # 3. $uri.html       -> проверяет файл с расширением .html
        # 4. /index.html     -> фоллбек на SPA, если статичной страницы нет
        try_files $uri $uri/index.html $uri.html /index.html;
        add_header Cache-Control "no-cache, must-revalidate";
    }
}

# 2. РЕДИРЕКТ С WWW (HTTP и HTTPS) -> на https://smartholdem.io
server {
    listen 80;
    listen [::]:80;
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name www.smartholdem.io;

    ssl_certificate /etc/letsencrypt/live/smartholdem.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/smartholdem.io/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    return 301 https://smartholdem.io$request_uri;
}

# 3. РЕДИРЕКТ С HTTP (smartholdem.io) -> на https://smartholdem.io
server {
    listen 80;
    listen [::]:80;
    server_name smartholdem.io;

    return 301 https://smartholdem.io$request_uri;
}
```
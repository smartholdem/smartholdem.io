# HOW TO USE (nginx):
#
# 1) In the http {} block:
#
#    map_hash_max_size 8192;
#    map_hash_bucket_size 128;
#    map $uri $news_redirect {
#        default "";
#        include /etc/nginx/news-redirects.map;
#    }
#
# 2) In the server {} block serving smartholdem.io (BEFORE other location rules):
#
#    if ($news_redirect) {
#        return 301 $news_redirect;
#    }
#
# 3) Copy news-redirects.map to /etc/nginx/ and reload:  nginx -s reload
#
# Regenerate the map after publishing news:  yarn news:redirects

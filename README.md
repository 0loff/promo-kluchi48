For beget.com hosting (http://kluchi-nedvizhimost48.ru/) and using mail sender on subdomain, right redicrect rules.

RewriteEngine On

RewriteBase /
RewriteCond %{HTTP_HOST} ^(www\.)?msk\.caffeshka\.ru$ [NC]
RewriteCond %{REQUEST_URI} !^/msk/
RewriteRule ^(.*)$ msk/$1 [L]

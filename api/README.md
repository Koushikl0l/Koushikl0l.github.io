# Contact form API

`send-mail.php` sends the portfolio contact form to **kushalka@clarkson.edu** using PHP’s `mail()`.

## Deploy

1. Upload the `api/` folder to a PHP-enabled server (same domain as your site or a subdomain).
2. Ensure the server can send mail (e.g. sendmail or SMTP). Many shared hosts support `mail()` out of the box.
3. In your frontend, set the API URL:
   - **Same domain:** Build and deploy the React app so it’s served from the same server; the form uses `/api/send-mail.php` by default.
   - **Different origin:** Set `VITE_SEND_MAIL_API` in `.env` to the full URL, e.g. `VITE_SEND_MAIL_API=https://yoursite.com/api/send-mail.php`, and add that origin to the PHP `$allowedOrigins` array (or set `ALLOWED_ORIGIN` on the server).

## Local testing (PHP)

From the project root:

```bash
php -S localhost:8888 -t .
```

Then set `VITE_SEND_MAIL_API=http://localhost:8888/api/send-mail.php` in `.env` and run the Vite app. Note: `mail()` may not actually send on localhost unless your OS is configured to relay mail.

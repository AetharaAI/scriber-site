# Scriber Site VM Handoff

Deployment target:

- domain: `scriber.aetherpro.us`
- DNS: already resolves to the existing VM
- app type: static Vite site
- source repo: `git@github.com:AetharaAI/scriber-site.git`

## Current Product Truth

- This repo is separate from the Scriber desktop app repo.
- The site is intentionally static.
- No auth.
- No Stripe webhook handling.
- No Google Analytics or ad pixels.
- Pricing buttons use direct Stripe payment links.
- Download button is intended to point to a direct `.deb` file served from this site domain.

## Build

On the VM or from a CI pull path:

```bash
git clone git@github.com:AetharaAI/scriber-site.git
cd scriber-site
npm install
npm run build
```

Build output:

```text
dist/
```

## Suggested Static Web Root

Recommended target:

```text
/var/www/scriber-site
```

Copy build output:

```bash
sudo mkdir -p /var/www/scriber-site
sudo rsync -av --delete dist/ /var/www/scriber-site/
```

Suggested public download directory:

```text
/var/www/scriber-site/downloads
```

Expected launch artifact URL:

```text
https://scriber.aetherpro.us/downloads/Scriber_1.1.15_amd64.deb
```

## Suggested nginx Shape

This site should be served as a static site, not proxied to an app server.

Suggested config filename:

```text
/etc/nginx/sites-available/scriber.aetherpro.us.conf
```

Suggested server block:

```nginx
server {
    listen 80;
    server_name scriber.aetherpro.us;

    root /var/www/scriber-site;
    index index.html;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

After HTTP is confirmed, use Certbot in the same style as the other VM sites and then convert to an SSL server block.

Typical follow-up:

```bash
sudo ln -s /etc/nginx/sites-available/scriber.aetherpro.us.conf /etc/nginx/sites-enabled/scriber.aetherpro.us.conf
sudo nginx -t
sudo systemctl reload nginx
sudo certbot --nginx -d scriber.aetherpro.us
```

## Environment Variables

The current build already has sane defaults, but these may be set with a `.env` file if needed:

```bash
VITE_SCRIBER_FOUNDER_PAYMENT_LINK=https://buy.stripe.com/6oU4gz2Wz2Rb5TJ0Us9sk04
VITE_SCRIBER_PRO_PAYMENT_LINK=https://buy.stripe.com/9B614n54HezT6XNav29sk06
VITE_SCRIBER_STUDIO_PAYMENT_LINK=https://buy.stripe.com/6oU00jbt5crL95VgTq9sk05
VITE_SCRIBER_DOWNLOAD_LINK=https://scriber.aetherpro.us/downloads/Scriber_1.1.15_amd64.deb
VITE_SCRIBER_CONTACT_EMAIL=cory@aetherpro.us
```

## Pages Included

- `/`
- `/privacy.html`
- `/terms.html`

## Safe Deploy Notes

- This should not interfere with the existing VM sites if it gets its own nginx server block and static root.
- No backend service or port binding is required.
- No database or runtime daemon is required.
- A standard static-site nginx deploy is enough.
- The `.deb` installer should be copied into the `downloads/` directory under the same static root so the public download button resolves without relying on GitHub.

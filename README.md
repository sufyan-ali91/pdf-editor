# EasyPDFPlay

Static website and in-browser PDF editor. Deploy the project folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, etc.). No build step.

```
index.html          Landing page + PDF editor
about.html          About
contact.html        Contact (mailto form)
privacy.html        Privacy Policy
terms.html          Terms & Conditions
sitemap.xml         Sitemap
robots.txt          Crawler rules
site.webmanifest    PWA manifest
assets/             Styles, scripts, icons, og-image.png (1200×630)
```

**Live site:** https://easypdfplay.com  
**Support:** support@easypdfplay.com · +92 347 3300647

## Deploy notes

If the domain changes, find and replace `https://easypdfplay.com` in all `.html` files, `sitemap.xml`, and `robots.txt`.

After deploy:

1. Add the property in [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters), then submit `https://easypdfplay.com/sitemap.xml`.
2. Validate sharing previews ([Open Graph checker](https://www.opengraph.xyz)) and structured data ([Rich Results Test](https://search.google.com/test/rich-results)).

## Contact form

The contact page opens the visitor’s email client with a pre-filled message to `support@easypdfplay.com`. No server-side handler is required.

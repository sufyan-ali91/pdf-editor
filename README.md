# PDFlow – launch checklist

Static site: upload the whole folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3…). No build step.

```
index.html     landing page + the PDF editor (same engine as before)
about.html  privacy.html  terms.html  contact.html
assets/        site.css, site.js, logo + icons
```

## Replace before launch (search for these)

- **Brand name** – "PDFlow" is a placeholder. Find & replace it in all `.html` files.
- **Contact details** – `hello@yourdomain.com`, `support@yourdomain.com`, `privacy@yourdomain.com`,
  `legal@yourdomain.com`, phone, and address in `contact.html`, `privacy.html`, `terms.html`.
- **Legal placeholders** – yellow-highlighted text such as `[Company Legal Name]`, `[Jurisdiction]`,
  `[Hosting provider]`, retention periods, liability cap. Have a lawyer review Privacy + Terms.
- **Analytics** – if you add analytics/cookies, update the Privacy Policy (marked in yellow).
- **SEO** – add `<link rel="canonical">`, absolute `og:url` / `og:image`, a `sitemap.xml` and `robots.txt`
  once the domain is final (see the TODO comment in each `<head>`).
- **Contact form** – it opens the visitor's email app (no backend). Swap in Formspree/Netlify Forms/etc. later if wanted.
# pdf-editor

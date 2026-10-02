# CourtsAbove website

Built with [Astro](https://astro.build). Every page is plain, fast static HTML.

## Put it online (Netlify, no GitHub needed)
1. Run `npm install` then `npm run build` (or use the ready-made `dist` folder you were sent).
2. Go to https://app.netlify.com/drop and drag the **dist** folder onto the page.
3. In Netlify: Domain management -> Add a domain -> enter your domain.
4. In VentraIP: DNS settings for the domain -> add the records Netlify shows
   (usually an A record for the bare domain and a CNAME for www).
5. Netlify turns on https automatically once the domain points at it.

## Edit the site
- Pages live in `src/pages/` (one file per page). Shared header and footer: `src/layouts/Base.astro`.
- Images live in `public/images/`.
- Chords and lyrics for Eternal Word: `src/lib/chords.js`.
- Preview locally with `npm run dev`, then open http://localhost:4321.

## Before launch
- Set your real domain in `astro.config.mjs` (`site:`), `public/robots.txt` and `public/sitemap.xml`.

# jorgemendoza.io

Personal website for Jorge Mendoza built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. The site is bilingual (Spanish default, English at `/en`), SEO-friendly, and ready for static export/deployment.

## Features
- Minimalist layout with palette: background `#F5F5F7`, text `#212429`, headings `#000000`, accent `#1F7AE0`.
- Sections: Home, About, Work (logo strip + experience cards), Writing (Substack feed), Contact.
- Spanish and English routes: `/`, `/about`, `/work`, `/writing`, `/contact` and `/en` equivalents.
- SEO: metadata per page, OpenGraph/Twitter cards, canonical + language alternates, `sitemap.xml`, `robots.txt`.
- Static export configured (`output: "export"`, unoptimized images for portability).

## Getting started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run dev server**
   ```bash
   npm run dev
   ```
3. **Lint**
   ```bash
   npm run lint
   ```
4. **Build**
   ```bash
   npm run build
   ```
5. **Static export** (outputs to `/out`)
   ```bash
   npm run export
   ```

## Content & configuration
- **Profile photo**: replace `public/profile.svg` with a 1:1 portrait (SVG or static image). Update the path if you prefer a JPG/PNG.
- **Client logos**: replace SVG placeholders in `public/logos/` (xtrim.svg, mapfre.svg, claro.svg, righttek.svg). Maintain grayscale for consistency.
- **Substack feed**: update `FEED_URL` in `lib/rss.ts` if the Substack URL changes.
- **Social/contact links**: update constants in `app/contact/page.tsx` and `app/en/contact/page.tsx`.
- **Copy**: bilingual text lives in `lib/content.ts`.

## Deployment (S3 + CloudFront)
1. Run `npm run export` to generate the static site in `/out`.
2. Sync `/out` to an S3 bucket configured for static hosting (ensure `index.html` + `404.html`).
3. Set appropriate cache headers (e.g., long-lived for assets, shorter for HTML if desired).
4. Put CloudFront in front of the bucket with the S3 origin. Invalidate `/sitemap.xml`, `/robots.txt`, and HTML paths after each deploy.

## Localization notes
- Spanish is the default locale. English pages live under `/en`. Navigation and metadata use the same copy source to keep both locales aligned.

## Troubleshooting
- **Dependency installation**: ensure outbound npm access/proxy settings allow fetching from the registry.
- **Static export**: images are marked `unoptimized`; no additional image optimization service is required for deployment.

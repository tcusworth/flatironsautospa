# Flatirons Auto Spa

Website for [Flatirons Auto Spa](https://flatironsautospa.com), built with [Eleventy](https://www.11ty.dev/) (v3) and deployed on Netlify.

## Commands

```bash
npm install     # once
npm start       # dev server with live reload at http://localhost:8080
npm run build   # production build into _site/
```

## Where things live

| To change...                                   | Edit...                                      |
| ---------------------------------------------- | -------------------------------------------- |
| Phone, address, nav links, footer text         | `src/_data/site.js`                          |
| Homepage copy, packages and prices, FAQs       | `src/_data/home.js`                          |
| Gallery images and captions                    | `src/_data/gallery.js` (+ files in `src/assets/images/`) |
| A service or location page                     | `src/pages/<name>.md` (front matter + Markdown body) |
| Contact page and form                          | `src/contact.njk`                            |
| Page shell (head, header, footer)              | `src/_includes/layouts/base.njk`             |
| Look and feel                                  | `src/assets/styles.css`                      |
| Structured data (JSON-LD for Google/AI search) | `src/_lib/schema.js` (generated from the data files above; don't hand-edit) |
| Hours, profile links, map, search-console codes | `src/_data/site.js` (see "Local SEO facts" below) |
| Footer links, nav                              | `src/_data/site.js`                          |

Prices, FAQs, address and gallery images feed the visible page **and** the JSON-LD, so they stay in sync.

### Images

Use the `img` shortcode instead of a plain `<img>`. It builds AVIF/WebP/JPEG at several widths,
sets width/height, and lazy-loads:

```njk
{% img "about.png", "Alt text", "(min-width: 980px) 45vw, 100vw" %}
{% img "hero-1.png", "", "100vw", { loading: "eager", fetchpriority: "high", widths: [800, 1280, 1920] } %}
```

Put source images in `src/assets/images/`. Optimized files go to `_site/assets/img/` at build time
(first clean build ~30 s). Full-size originals are also published under `/assets/images/` and are
used for social-share previews and the gallery structured data.

### Local SEO facts (fill these in)

`src/_data/site.js` has optional fields that flow into the structured data only when filled in:
`hours`, `sameAs` (Google Business Profile, Yelp, Facebook...), `mapUrl`, `geo`, and
`verification` (Google Search Console / Bing Webmaster meta tokens).

### Adding a service or location page

Copy any file in `src/pages/`, change the front matter and body. The file name becomes the URL
(`src/pages/headlight-restoration.md` -> `/headlight-restoration/`). Pages with `sitemapPriority`
in their front matter are added to `sitemap.xml` automatically (with `lastmod` from git).
Front matter also drives the H1 (`heading`), breadcrumb (`crumb`), `areaServed`, and which
homepage FAQs to show (`faqs`: ids from `src/_data/home.js`).

## Contact form

The form uses [Netlify Forms](https://docs.netlify.com/forms/setup/). After the first deploy:
Netlify dashboard -> **Forms** shows submissions. Turn on email alerts under
**Forms -> Form notifications** so requests reach the shop.

## Deploying

Netlify builds on every push to `main` using `netlify.toml` (`npm run build`, publish `_site`, Node 22).

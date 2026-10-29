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
| Structured data (JSON-LD for Google/AI search) | `src/_data/schema.js` (generated from the data files above) |

Prices, FAQs, address and gallery images feed the visible page **and** the JSON-LD, so they stay in sync.

### Adding a service or location page

Copy any file in `src/pages/`, change the front matter and body. The file name becomes the URL
(`src/pages/headlight-restoration.md` -> `/headlight-restoration/`). Pages with `sitemapPriority`
in their front matter are added to `sitemap.xml` automatically.

## Contact form

The form uses [Netlify Forms](https://docs.netlify.com/forms/setup/). After the first deploy:
Netlify dashboard -> **Forms** shows submissions. Turn on email alerts under
**Forms -> Form notifications** so requests reach the shop.

## Deploying

Netlify builds on every push to `main` using `netlify.toml` (`npm run build`, publish `_site`, Node 22).

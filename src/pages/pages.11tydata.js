// Applies to every file in src/pages/: detail layout, /<file-name>/ URLs,
// and per-page structured data (Service + breadcrumbs + business).
import { buildPageSchema } from "../_lib/schema.js";

export default {
  layout: "layouts/detail.njk",
  eleventyComputed: {
    permalink: (data) => `/${data.page.fileSlug}/`,
    jsonLd: (data) => buildPageSchema(data),
  },
};

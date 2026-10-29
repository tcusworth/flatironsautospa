// Applies to every file in src/pages/: detail layout, and /<file-name>/ URLs.
export default {
  layout: "layouts/detail.njk",
  eleventyComputed: {
    permalink: (data) => `/${data.page.fileSlug}/`,
  },
};

export default function (eleventyConfig) {
  // Static files copied as-is to the site root
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  // Pages that appear in sitemap.xml (any page with sitemapPriority in its front matter)
  eleventyConfig.addCollection("sitemapPages", (api) =>
    api
      .getAll()
      .filter((item) => item.data.sitemapPriority)
      .sort(
        (a, b) =>
          b.data.sitemapPriority - a.data.sitemapPriority ||
          a.url.localeCompare(b.url)
      )
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}

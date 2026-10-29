import path from "node:path";
import { execSync } from "node:child_process";
import Image from "@11ty/eleventy-img";

const OUTPUT_DIR = "_site";
const IMG_SRC = "src/assets/images";

// Date (YYYY-MM-DD) of the last git commit touching any of the given paths.
// Returns undefined when git history isn't available.
function gitLastModified(paths) {
  try {
    const out = execSync(
      `git log -1 --format=%cs -- ${paths.map((p) => `"${p}"`).join(" ")}`,
      { stdio: ["ignore", "pipe", "ignore"] }
    )
      .toString()
      .trim();
    return out || undefined;
  } catch {
    return undefined;
  }
}

// Full-width CSS background images: generated once per build under stable names.
const BACKGROUNDS = [
  { name: "hero-1", file: "hero-1.png" },
  { name: "hero-2", file: "hero-2.png" },
  { name: "gallery-hero", file: "sample-vw-in-garage.jpeg" },
];

export default function (eleventyConfig) {
  // Static files copied as-is to the site root. Original full-size images stay
  // available (used for social-share previews and image structured data).
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/favicons": "/" });

  // Responsive <picture> (AVIF/WebP/JPEG, multiple widths, width/height set,
  // lazy by default). Usage: {% img "file.jpeg", "alt text", "sizes", { class: "x" } %}
  eleventyConfig.addAsyncShortcode(
    "img",
    async function (file, alt, sizes = "100vw", attrs = {}) {
      const { widths = [480, 800, 1200], ...htmlAttrs } = attrs;
      const metadata = await Image(path.join(IMG_SRC, file), {
        widths,
        formats: ["avif", "webp", "jpeg"],
        outputDir: `${OUTPUT_DIR}/assets/img/`,
        urlPath: "/assets/img/",
        sharpAvifOptions: { quality: 55, effort: 2 },
        sharpWebpOptions: { quality: 72 },
        sharpJpegOptions: { quality: 78, mozjpeg: true },
        filenameFormat: (id, src, width, format) =>
          `${path.parse(src).name}-${width}w-${id}.${format}`,
      });
      return Image.generateHTML(metadata, {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
        ...htmlAttrs,
      });
    }
  );

  eleventyConfig.on("eleventy.before", async () => {
    for (const bg of BACKGROUNDS) {
      await Image(path.join(IMG_SRC, bg.file), {
        widths: [1920],
        formats: ["webp"],
        outputDir: `${OUTPUT_DIR}/assets/bg/`,
        urlPath: "/assets/bg/",
        sharpWebpOptions: { quality: 70 },
        filenameFormat: () => `${bg.name}.webp`,
      });
    }
  });

  // Pages that appear in sitemap.xml (any page with sitemapPriority in its front matter)
  eleventyConfig.addCollection("sitemapPages", (api) =>
    api
      .getAll()
      .filter((item) => item.data.sitemapPriority)
      .map((item) => {
        const sources = [item.inputPath.replace(/^\.\//, "")];
        if (item.url === "/") sources.push("src/_data/home.js");
        if (item.url === "/gallery/") sources.push("src/_data/gallery.js");
        item.data.lastmod = gitLastModified(sources);
        return item;
      })
      .sort(
        (a, b) =>
          b.data.sitemapPriority - a.data.sitemapPriority ||
          a.url.localeCompare(b.url)
      )
  );

  return {
    dir: {
      input: "src",
      output: OUTPUT_DIR,
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}

// ============================================================
//  ELEVENTY CONFIG — High Tech Pest Control
// ============================================================
//  Yeh file 11ty ko batati hai ki site kaise build karni hai
// ============================================================

module.exports = function(eleventyConfig) {

  // ── Static files copy karo (jaisa hai waisa) ──
  // Yeh saari files build ke baad _site folder mein chali jaayengi
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("post-construction.html");
  eleventyConfig.addPassthroughCopy("porous-pipe.html");
  eleventyConfig.addPassthroughCopy("general-pest.html");
  eleventyConfig.addPassthroughCopy("about.html");
  eleventyConfig.addPassthroughCopy("contact.html");
  eleventyConfig.addPassthroughCopy("privacy-policy.html");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("og-image.jpg");
  eleventyConfig.addPassthroughCopy("termite-photo.png");
  eleventyConfig.addPassthroughCopy("porous-pipe-icon.png");
  eleventyConfig.addPassthroughCopy("admin");      // Decap CMS files
  eleventyConfig.addPassthroughCopy("images");      // uploaded images

  // ── Date filter (readable dates) ──
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const d = new Date(dateObj);
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    // Markdown files ko HTML banao
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};

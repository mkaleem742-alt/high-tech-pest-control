module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ "hightechpest-website": "/" });
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    try {
      return new Date(dateObj).toISOString().split('T')[0];
    } catch(e) {
      return "";
    }
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    try {
      const d = new Date(dateObj);
      const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
    } catch(e) {
      return "";
    }
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ "hightechpest-website": "/" });
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");

  // Inhe abhi build se ignore karo (baad mein theek karenge)
  eleventyConfig.ignores.add("post.njk");
  eleventyConfig.ignores.add("blog.njk");
  eleventyConfig.ignores.add("_posts/**");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};

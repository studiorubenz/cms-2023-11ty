module.exports = function(eleventyConfig) {
  // Return your Object options:
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};

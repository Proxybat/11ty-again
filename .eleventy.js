module.exports = function (eleventyConfig) {
  // Tag thingy
  eleventyConfig.addFilter("sortObjectByKey", (collection) => {
    const entries = Object.entries(collection);
    const toReturn = entries.sort((entry1, entry2) => {
      if (entry1[0] <= entry2[0]) return -1;
      else return 1;
    });
    return toReturn;
  });

  eleventyConfig.addCollection("all", (collections) => {
    // get all posts by tag 'art'
    return (
      collections
        .getFilteredByTag("art")
        // exclude all drafts
        .filter((post) => !Boolean(post.data.all))
    );
  });

  // Set custom directories for input, output, includes, and data
  //   eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/art-assets");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};

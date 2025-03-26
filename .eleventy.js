module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("public/");

	return {
        dir: {
            input: "src/content",
            includes: "../_includes",
			data: "../_data",
            output: "_site"
        }
	}
};
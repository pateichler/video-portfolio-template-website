module.exports = function(eleventyConfig) {

    eleventyConfig.addFilter("relativePath", function(value) {
        if(value.length == 0 || value[0] != '/')
            return value;
        
        return value.slice(1);
     });

	eleventyConfig.addPassthroughCopy({"src/public/": "public/"});

	return {
        dir: {
            input: "src/content",
            includes: "../_includes",
			data: "../_data",
            output: "_site"
        }
	}
};
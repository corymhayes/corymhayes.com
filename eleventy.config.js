export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.setServerOptions({
        showAllHosts: true
    })
}
"use strict";

/**
 * Universal Disqus loader. 
 * @function
 * @param {string} name - The short name of the website. 
 * @param {string} url - The URL for disqus_config. 
 * @param {*} id - The identifier for disqus_config. 
 * @param {string} title - The title for disqus_config. 
 */
const disqusLoader = function (name, url, id, title) {
    //Set variables
    window.disqus_config = function () {
        this.page.url = url;
        this.page.identifier = id;
        this.page.title = title;
    };
    //Load embed
    $("<script>").attr("src", "https://" + name + ".disqus.com/embed.js").attr("data-timestamp", (new Date()).getTime()).appendTo("head");
};

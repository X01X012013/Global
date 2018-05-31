/**
 * Based on Disqus Universal Code.
 */
"use strict";

/**
 * Disqus loader.
 * @function
 * @param {string} name - The short name of the website.
 * @param {string} url - The URL for disqus_config.
 * @param {Any} id - The identifier for disqus_config.
 * @param {string} title - The title for disqus_config.
 */
const disqusLoader = function (name, url, id, title) {
    window.disqus_config = function () {
        this.page.url = url;
        this.page.identifier = id;
        this.page.title = title;
    };

    const script = document.createElement("script");
    script.src = "https://" + name + ".disqus.com/embed.js";
    script.setAttribute("data-timestamp", Date.now());
    document.head.append(script);
};

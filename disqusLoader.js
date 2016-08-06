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
    let script = document.createElement('script');
    script.src = "//" + name + ".disqus.com/embed.js";
    script.setAttribute("data-timestamp", +new Date());
    document.head.appendChild(script);
};

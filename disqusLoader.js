"use strict";

//Universal disqus loader
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

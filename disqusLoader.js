//Universal disqus loader
let disqus_config;
let disqusLoader = function (name, url, id, title) {
    //Set variables
    disqus_config = function () {
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

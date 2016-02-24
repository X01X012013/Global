//Universal disqus loader
var disqus_config;
var disqusLoader = function(name, url, id, title){
  //Set variables
  disqus_config = function(){
    this.page.url = url;
    this.page.identifier = id;
    this.page.title = title;
  };
  //Load embed
  var d = document, s = d.createElement('script');
  s.src = '//' + name + '.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
};

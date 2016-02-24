//Universal disqus loader
var disqus_config = function(){};
var disqusLoader = function(name, url, id, title){
  //Set variables
  disqus_config.prototype.page.url = url;
  disqus_config.prototype.page.identifier = id;
  disqus_config.prototype.page.title = title;
  //Load embed
  var d = document, s = d.createElement('script');
  s.src = '//' + name + '.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
};

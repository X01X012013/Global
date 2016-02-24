//Universal disqus loader
var disqus_config, disqus_url, disqus_id, disqus_title;
var disqusLoader = function(name, url, id, title){
  //Set variables
  disqus_url = url;
  disqus_id = id;
  disqus_title = title;
  disqus_config = function(){
    this.page.url = disqus_url;
    this.page.identifier = disqus_id;
    this.page.title = disqus_title;
  };
  //Load embed
  var d = document, s = d.createElement('script');
  s.src = '//' + name + '.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
};

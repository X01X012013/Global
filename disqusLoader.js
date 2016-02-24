//Universal disqus loader
var disqus_config = function(){
  //this.page.url = "";
  //this.page.identifier = "";
  //this.page.title = "";
  this.update = function(url, id, title){
    this.page.url = url;
    this.page.identifier = id;
    this.page.title = title;
  }
};
var disqusLoader = function(name, url, id, title){
  //Set variables
  disqus_config.update(url, id, title);
  //Load embed
  var d = document, s = d.createElement('script');
  s.src = '//' + name + '.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  alert("load")//(d.head || d.body).appendChild(s);
};

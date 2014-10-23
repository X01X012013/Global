var tempLoaderFunction = function(s){
  var t = document.createElement("script");
  t.setAttribute("charset", "utf-8");
  t.setAttribute("src", s);
  document.getElementsByTagName('head')[0].appendChild(t);
  return null;
}
tempLoaderFunction("http://X01X012013.github.io/jQuery/Core-2.1.1/min.js");
tempLoaderFunction("http://X01X012013.github.io/jQuery/Color-2.1.2/min.js");

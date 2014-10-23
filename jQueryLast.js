var tempLoaderFunction = function(src){
  var tempVarObject = document.createElement("script");
  tempVarObject.setAttribute("charset", "utf-8");
  tempVarObject.setAttribute("src", src);
  document.getElementsByTagName('head')[0].appendChild(tempVarObject);
  return null;
}
tempLoaderFunction("http://X01X012013.github.io/jQuery/Core-2.1.1/min.js");
tempLoaderFunction("http://X01X012013.github.io/jQuery/Color-2.1.2/min.js");

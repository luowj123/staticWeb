document.getElementById("showMenu").addEventListener("click", function(e) {

  //取得menu的css样式
  var cssText = document.getElementById("menu").style.cssText;

  //隐藏的css
  var cssTextVisible = "float: left; width: 15%; min-height: 300px; display: none;";

  //手机版显示时的css
  var cssTextInvisible = "display: block; with: 100%;";

  //如果menu是隐藏的
  if(cssText == "" || cssText.indexOf("display: none") != -1) {
    document.getElementById("menu").style.cssText = cssTextInvisible;
  } else {
    document.getElementById("menu").style.cssText = cssTextVisible;
  }
  
});



document.getElementById("menu").addEventListener("click", function(e) {
  
  // 当菜单被点击时，并且点击的是li时
  if(e.target && e.target.nodeName == "LI") {
    // 替换post的内容
    document.getElementById("posts").innerHTML = e.target.innerHTML + " 被点击了 ";
  }
});
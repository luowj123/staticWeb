document.getElementById("showMenu").addEventListener("click", function(e) {

  //ȡ��menu��css��ʽ
  var cssText = document.getElementById("menu").style.cssText;

  //���ص�css
  var cssTextVisible = "float: left; width: 15%; min-height: 300px; display: none;";

  //�ֻ�����ʾʱ��css
  var cssTextInvisible = "display: block; with: 100%;";

  //���menu�����ص�
  if(cssText == "" || cssText.indexOf("display: none") != -1) {
    document.getElementById("menu").style.cssText = cssTextInvisible;
  } else {
    document.getElementById("menu").style.cssText = cssTextVisible;
  }
  
});



document.getElementById("menu").addEventListener("click", function(e) {
  
  // ���˵������ʱ�����ҵ������liʱ
  if(e.target && e.target.nodeName == "LI") {
    // �滻post������
    document.getElementById("posts").innerHTML = e.target.innerHTML + " ������� ";
  }
});
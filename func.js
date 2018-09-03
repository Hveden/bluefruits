function insertText(){
    document.getElementById("newContent").innerHTML = "Her er din text <br> HELLO </br>"
}

function calculate(){
  var w = parseFloat(document.getElementById("widthBox").value);
  var l = parseFloat(document.getElementById("lengthBox").value);
  var h = parseFloat(document.getElementById("heightBox").value);

  var res = w*l*h;

  document.getElementById("result").innerHTML = "Her er dit resultat: " + res

}

function multiply(){
  var tal = parseFloat(document.getElementById("factor").value);
  for(var i=1; i<=10; i++){
    var res = tal*i;
    document.getElementById("gangeTabel").innerHTML += res+ " ";
  }
}

function rens(){
  document.getElementById("gangeTabel").innerHTML = "";
}

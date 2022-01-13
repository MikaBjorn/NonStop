function heippa() {
  var arvo = document.getElementById('kieli').value;
  if (arvo == "en") {
    document.getElementById('vastaus').innerHTML = "Hello World";
  }
  else if (arvo == "es") {
    document.getElementById("vastaus").innerHTML = "Hola Mundo";
  }
  else if (arvo == "se") {
  document.getElementById("vastaus").innerHTML = "Hej Världen";
  }
  else {
    document.getElementById("vastaus").innerHTML = "Et Valinnut mitään";
  }
}

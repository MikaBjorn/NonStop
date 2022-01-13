function paritonParillinen() {
  var luku
  numero = parseInt(document.getElementById('luku').value);
  if (numero%2==0) {
  document.write("Luku on parillinen");
  } else {
    document.write("Luku on pariton")
  }
}

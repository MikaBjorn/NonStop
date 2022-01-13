function tarkista() {
var numero = document.getElementById('nro').value;
switch (numero) {
  case "1":
  document.getElementById('paiva').innerHTML = "Maanantai"
  break;
  case "2":
  document.getElementById('paiva').innerHTML = "Tiistai!"
  break;
  case "3":
  document.getElementById('paiva').innerHTML = "Keskiviikko!"
  break;
  case "4":
  document.getElementById('paiva').innerHTML = "Torstai!"
  break;
  case "5":
  document.getElementById('paiva').innerHTML = "Perjantai!"
  break;
  case "6":
  document.getElementById('paiva').innerHTML = "Lauantai tai Sunnuntai!"
  break;
  default:
  document.getElementById('paiva').innerHTML = "Et kirjoittanut numeroa 1-6 väliltä."
}
}

function tarkista() {
var vuosiluku = document.getElementById('vuosi').value;
if ((0 == vuosiluku % 4) && (0 != vuosiluku % 100) || (0 == vuosiluku % 400)) {
  document.getElementById('vuosluku').innerHTML = "Vuosi on karkausvuosi"
}
else {
  document.getElementById('vuosluku').innerHTML = "Vuosi ei ole karkausvuosi"
}
}

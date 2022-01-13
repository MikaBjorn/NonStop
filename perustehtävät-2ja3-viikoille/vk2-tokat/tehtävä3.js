function tarkista() {
var vuosiluku = document.getElementById('vuosi').value;
if (vuosiluku % 400 === 0) {
  document.getElementById('vuosluku').innerHTML = "Vuosi on karkausvuosi"
}
else if (vuosiluku % 4 === 0) {
  document.getElementById('vuosluku').innerHTML = "Vuosi on karkausvuosi"
}
else {
  document.getElementById('vuosluku').innerHTML = "Vuosi ei ole karkausvuosi"
}
}

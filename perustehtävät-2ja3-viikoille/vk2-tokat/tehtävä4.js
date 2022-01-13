function laske() {
var yks = document.getElementById('eka').value;
var kaks = document.getElementById('toka').value;
var kol = document.getElementById('kolmas').value;
var neli = document.getElementById('neljas').value;
var viis = document.getElementById('viides').value;
var summa = parseInt(yks) + parseInt(kaks) + parseInt(kol) + parseInt(neli) + parseInt(viis);
var keskiarvo = summa/5;

document.getElementById('vastaus').innerHTML = "Lukujen summa on: " + summa+ " ja keskiarvo on: " + keskiarvo;
}

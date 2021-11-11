function osoiteTiedot(etunimi, sukunimi, osoite, postinum, toimipaikka, numero, sposti) {
  this.etunimi = etunimi,
  this.sukunimi = sukunimi,
  this.lahiosoite = osoite,
  this.postinumero = postinum,
  this.postitoimipaikka = toimipaikka,
  this.puhelinnumero = numero,
  this.sahkoposti = sposti
}
var Mika = new osoiteTiedot("Mika", "Björn", "Papintie 1", "04250", "Kerava", "0409675077", "mika.bjorn@edu.keuda.fi");
console.log(Mika.sukunimi);

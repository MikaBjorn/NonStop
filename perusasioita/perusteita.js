function perusteet()
{
  var a = parseInt(document.getElementById('eka').value);
  var b = parseInt(document.getElementById('toka').value);
  let summa = a+b;
  document.getElementById('vastaus').innerHTML = summa;
}

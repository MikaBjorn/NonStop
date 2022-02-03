function salasanaksi(){
  var sana = document.getElementById('sana').value;
  var palaute = "<p>";
  for(var j = 0; j < sana.length; j++)
  {
    palaute += sana[j] + 'Ö';
  }
  palaute += "</p>";
  document.getElementById('palaute').innerHTML = palaute;
}

function laskeKerroin()
{
  var luku = document.getElementById('kerro').value;
  var laske = 1;
  for(var z = 1; z <= luku; z++)
  {
    laske*=z;
  }
  document.getElementById('vastaus').innerHTML = '<p>Luvun ' + luku + ' kertoma on '+laske + '</p>';
}

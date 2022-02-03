function tarkista()
{
  var tarkistettava = document.getElementById('sana').value;
  var vastaus = 'Ei oo';
  for(var k = 0; k < tarkistettava.length; k++)
  {
    if(tarkistettava[k] == 'ö' || tarkistettava[k] == 'Ö')
    {
      vastaus = 'On';
    }
  }
  document.getElementById('vastaus').innerHTML = '<p>' + vastaus + '</p>';
}

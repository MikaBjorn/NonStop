function laske()
{
  yhteensa = 0;
  for(var y = 1; y <=10; y++)
  {
    yhteensa += y;
  }
  document.getElementById('tulostus').innerHTML = '<p>'+ yhteensa + '</p>';
}

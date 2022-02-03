function viisi()
{
  var tulostus = '';
  for(var y = 1; y <= 100; y++)
  {
    if(y%3==0 && y%5==0)
    {
      tulostus+='Hip Heijaa ';
    }
    else if(y%5 == 0)
    {
      tulostus+='Heijaa ';
    }
    else if(y%3 == 0)
    {
      tulostus+='Hip ';
    }
    else {
      tulostus+=y+' ';
    }
    document.getElementById('tulostus').innerHTML = tulostus;
  }
}

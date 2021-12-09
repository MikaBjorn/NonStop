function etsi()
  {
    var num1, num2, num3, num4, num5, suurin;
    num1 = parseInt(document.getElementById('yks').value);
    num2 = parseInt(document.getElementById('kaks').value);
    num3 = parseInt(document.getElementById('kol').value);
    num4 = parseInt(document.getElementById('nel').value);
    num5 = parseInt(document.getElementById('viis').value);
    if(num1 < num2 && num3 < num2 && num4 < num2 && num5 < num2)
    {
      suurin = num2;
    }
    else if(num1 < num3 && num4 < num3 && num5 < num3)
    {
      suurin = num3;
    }
    else if(num1 < num4 && num5 < num4)
    {
      suurin = num4;
    }
    else if(num1 < num5)
    {
      suurin = num5;
    }
    else {
      suurin = num1;
    }
    document.write("Annoit luvut: " + num1 + ' ' + num2 + ' ' + num3 + ' ' + num4 + ' ' + num5);
    document.write("<br>Suurin luku on: " + suurin);
  }

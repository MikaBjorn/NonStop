function etsi(){
  var taulu = [], tmp;
  for(var x = 0; x < 5; x++)
  {
    tmp = document.getElementById('taulukko['+x+']').value;
    tmp = parseInt(tmp);
    taulu.push(tmp);
    //alert(taulu);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById('vastaus').innerHTML = '<p>Pienin luku: ' + taulu[0] + ' ja suurin luku: '+ taulu[taulu.length-1];
}

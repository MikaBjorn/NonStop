function parilliset(){
  var karvo = parseInt(document.getElementById('luku').value);
  var jono = "<p>";
  for(var i = 2; i <= karvo; i= i+2)
  {
    jono+=i;
    jono+=" ";
  }
  jono+="</p>";
    document.getElementById('parit').innerHTML = jono;
}

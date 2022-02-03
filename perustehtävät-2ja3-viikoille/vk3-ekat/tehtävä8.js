function tehtävä8(){
var korko = document.getElementById('korko').value;
var potenssi = document.getElementById('potenssi').value;
yht = korko;
for(var p = 1; p < potenssi; p++)
{
yht *= korko;
}
document.getElementById('vastaus').innerHTML = '<p>' + yht + '</p>';
}

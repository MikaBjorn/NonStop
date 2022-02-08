function kerroin() {
  let luku = parseInt(document.getElementById('luku').value);
  let lause = luku + " x 1 = " + luku * 1 + "<br>";
  lause += luku + " x 2 = " + luku * 2 + "<br>";
  lause += luku + " x 3 = " + luku * 3 + "<br>";
  lause += luku + " x 4 = " + luku * 4 + "<br>";
  lause += luku + " x 5 = " + luku * 5 + "<br>";
  lause += luku + " x 6 = " + luku * 6 + "<br>";
  lause += luku + " x 7 = " + luku * 7 + "<br>";
  lause += luku + " x 8 = " + luku * 8 + "<br>";
  lause += luku + " x 9 = " + luku * 9 + "<br>";
  lause += luku + " x 10 = " + luku * 10;

  document.getElementById('vastaus').innerHTML = lause;
}

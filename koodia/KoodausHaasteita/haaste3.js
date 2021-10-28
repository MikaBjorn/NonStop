function Haaste3() {
  let x = +document.getElementById("num1").value + +document.getElementById("num2").value;
  let text;
  if (x > 100) {
    text = "Luvut ovat liian suuria, jotta pystyisin laskemaan niitä!";
  } else {
    text = "Lukujen summa on alle 100";
  }
  document.getElementById("lasku").innerHTML = text;
}

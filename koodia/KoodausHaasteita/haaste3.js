function Haaste3() {
  let x = +document.getElementById("num1").value + +document.getElementById("num2").value;
  let text;
  if (x > 100) {
    console.log("Luvut ovat liian suuria, jotta pystyisin laskemaan niitä!")
  } else {
    console.log("Lukujen summa on alle 100")
  }
}

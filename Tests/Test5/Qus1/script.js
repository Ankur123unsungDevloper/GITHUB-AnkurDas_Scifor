function concatenateStrings() {
  let string1 = document.getElementById("str1").value;
  let string2 = document.getElementById("str2").value;

  let result = string1 + string2;
  document.getElementById("result").textContent = result;
}
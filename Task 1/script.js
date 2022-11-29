/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg / 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const item = document.querySelector("form");

item.addEventListener("submit", skaiciuok);
function skaiciuok(event){
  event.preventDefault();
  const inputs = event.target;
  const skacius = inputs.text1.value;
  const output = document.querySelector("#output");

  output.textContent = skacius * 2.2046 + " lb / " + skacius / 0.0010000 + " g / " + skacius / 35.274 + " oz";
}
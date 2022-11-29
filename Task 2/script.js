/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let push = document.querySelector("#btn__element");
let clickNr = 0;

push.addEventListener("click", myFunction);
function myFunction() {
  clickNr += 1;
  document.querySelector("#btn__state").textContent=clickNr;
}
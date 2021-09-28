import totalGlobal from "./App";

const form = document.querySelector("#register");
const cant = document.querySelector("#cant-items");
const price = document.querySelector("#precio-items");
const state = document.querySelector("#codigo-estado");
const description = document.querySelector("#descripcion-items");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  var total = totalGlobal(cant.value,price.value,state.value);
  

  div.innerHTML = "<p>" + "El precio final a pagar es :" +total + "</p>";
});

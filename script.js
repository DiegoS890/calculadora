const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll("button");

let primerNumero = "";
let segundoNumero = "";
let operador = "";
let resetPantalla = false;

function calcular(a, operador, b) {
  a = Number(a);
  b = Number(b);

  if (operador === "+") return a + b;
  if (operador === "-") return a - b;
  if (operador === "*") return a * b;
  if (operador === "/") return b !== 0 ? a / b : "Error";
}

botones.forEach(boton => {
  boton.addEventListener("click", () => {

    const valor = boton.textContent;

    
    if (valor === "AC") {
      pantalla.textContent = "0";
      primerNumero = "";
      segundoNumero = "";
      operador = "";
      resetPantalla = false;
      return;
    }

    if (valor === "=") {
      segundoNumero = pantalla.textContent;

      if (primerNumero === "" || operador === "") return;

      const resultado = calcular(primerNumero, operador, segundoNumero);

      pantalla.textContent = resultado;

      primerNumero = resultado;
      segundoNumero = "";
      operador = "";
      resetPantalla = true;
      return;
    }

   
    if (["+", "-", "*", "/"].includes(valor)) {
      if (operador !== "") return; // evita doble operador

      primerNumero = pantalla.textContent;
      operador = valor;
      resetPantalla = true;
      return;
    }

    
    if (pantalla.textContent === "0" || resetPantalla) {
      pantalla.textContent = valor;
      resetPantalla = false;
    } else {
      pantalla.textContent += valor;
    }
  });
});
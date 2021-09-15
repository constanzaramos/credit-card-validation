import validator from './validator.js';

const botonValidar = document.getElementById("Validartj");

botonValidar.addEventListener("click", () => {
  const numTarjeta = document.getElementById("numTarjeta");
  const isValid = validator.isValid(numTarjeta.value);
  const maskify = validator.maskify(numTarjeta.value);
  console.log(maskify);


// ALERTAS
  if (isValid === true) {
    alert("La tarjeta de crédito es válida");
  } else {
    alert("La tarjeta de crédito no es válida");
  }





});

console.log(validator);

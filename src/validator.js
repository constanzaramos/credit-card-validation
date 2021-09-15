//VALIDACION NUMEROS DE TARJETA DE CRÉDITO
const validator = {
  isValid: (numTarjeta) => {
    let convertir = numTarjeta.split('').reverse();
    let suma = 0;
    let num = 0;
    for (let index = 0; index < convertir.length; index++) {
      if (index % 2 === 1) {
        num = Number(convertir[index]) * 2;
        if (num >= 10) {
          num = (num - 10) + 1;
        }
      } else {
        num = Number(convertir[index]);
      }
      suma += num;
    }
    return suma % 10 === 0 ? true : false;
  },
  // ENMASCARAR NÚMEROS DE LA TARJETA 
  maskify: (numTarjeta) => {
    return numTarjeta.split("").map((numero, idx) => idx < numTarjeta.length - 4 ? "#" : numero).join("");
  }
};



export default validator;

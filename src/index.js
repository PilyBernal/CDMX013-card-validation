import validator from "./validator.js";

const arregloCuadritos = document.getElementById("cuadros").children;
let cardNumber = [];

for (let i = 0; i < 16; i++) {
  arregloCuadritos[i].addEventListener("input", function () {
    if (isNaN(parseInt(arregloCuadritos[i].value))) {
      arregloCuadritos[i].value = ""
    } else {
      capturandoValores(i);
      if (i < 15) {
        arregloCuadritos[i + 1].focus();
      } else {
        resultado()
      }
    }
  })
}

function resultado() {
  letreros();
  if (validator.isValid(cardNumber)) {
    document.getElementById("letreroValida").style.display = "block";
  } else {
    document.getElementById("letreroInvalida").style.display = "block";
  }
  let enmascarandoValores = validator.maskify(cardNumber);
  Array.from(document.getElementById("cuadros").children).forEach(function (digit, i) {
    digit.value = enmascarandoValores[i]
  })
}

function capturandoValores(indexCuadrito) {
  cardNumber[indexCuadrito] = arregloCuadritos[indexCuadrito].value;
}

function letreros() {
  document.getElementById("descripcion").style.display = "none";
  document.getElementById("ingreso").style.display = "none";
  document.getElementById("numero").style.display = "block";
}

const validator = {

  isValid: function (cardNumber) {

    /**********************************
    //Aquí empieza el algoritmo de Luhn
    **********************************/

    let reverseCardNumber = cardNumber.reverse();
    let digitosPares = [];
    let digitosNones = [];

    for (let i = 0; i < 16; i++) {
      if (i % 2 === 0) {
        digitosNones.push(parseInt(reverseCardNumber[i]))
      } else {
        digitosPares.push(parseInt(reverseCardNumber[i]))
      }
    }

    for (let i = 0; i < 8; i++) {
      digitosPares[i] = digitosPares[i] * 2;
      if (digitosPares[i] > 9) {
        digitosPares[i] = digitosPares[i] - 9
      }
    }

    let sumaTotal = 0;

    for (let i = 0; i < 8; i++) {
      sumaTotal = sumaTotal + digitosPares[i] + digitosNones[i];
    }
    let mSumaTotal = sumaTotal % 10;
    if (mSumaTotal == 0) {
      return true
    } else {
      return false
    }
  },


  maskify: function (arregloCuadritos) {

    arregloCuadritos = arregloCuadritos.reverse();
    if (arregloCuadritos.length > 4) {
      for (let i = 0; i < arregloCuadritos.length - 4; i++) {
        arregloCuadritos[i] = "#";
      }
    }

    return arregloCuadritos
  }
}

export default validator;

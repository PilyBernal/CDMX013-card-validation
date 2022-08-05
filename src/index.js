const arregloCuadritos=[];
  let cardNumber=[];
  //arregloCuadritos.length=16;
  
  arregloCuadritos[0]=document.getElementById("dig1");
  arregloCuadritos[1]=document.getElementById("dig2");
  arregloCuadritos[2]=document.getElementById("dig3");
  arregloCuadritos[3]=document.getElementById("dig4");
  arregloCuadritos[4]=document.getElementById("dig5");
  arregloCuadritos[5]=document.getElementById("dig6");
  arregloCuadritos[6]=document.getElementById("dig7");
  arregloCuadritos[7]=document.getElementById("dig8");
  arregloCuadritos[8]=document.getElementById("dig9");
  arregloCuadritos[9]=document.getElementById("dig10");
  arregloCuadritos[10]=document.getElementById("dig11");
  arregloCuadritos[11]=document.getElementById("dig12");
  arregloCuadritos[12]=document.getElementById("dig13");
  arregloCuadritos[13]=document.getElementById("dig14");
  arregloCuadritos[14]=document.getElementById("dig15");
  arregloCuadritos[15]=document.getElementById("dig16");
  
  for (let i=0; i<16; i++){
    arregloCuadritos[i].addEventListener("input", function(){
        if (i<15){
          //console.log(parseInt(arregloCuadritos[i].value));
          if (isNaN(parseInt(arregloCuadritos[i].value))){
            arregloCuadritos[i].value = ""
          }
          else{
            arregloCuadritos[i+1].focus();
          }
        }
        else {
            capturandoValores();
          validar();
      }
      })
  }
  
  function capturandoValores(){
  //let cardNumber=[];
  cardNumber.length = 16;
  //let digitosPares = [];
  //let digitosNones = [];
  
  for (let i=0; i<16; i++){
    cardNumber[i] = arregloCuadritos[i].value;
  }
 
  }
  
  /*******
  //Aquí empieza el algoritmo de Luhn
  ******/
    
  function validar(){
  let reverseCardNumber = cardNumber.reverse();
  let digitosPares = [];
  let digitosNones = [];
  //return reverseCardNumber;
  //convertirAEnteros();
    
  for(let i=0; i<16; i++){
    if(i % 2 === 0){
      digitosNones.push(parseInt(reverseCardNumber[i]))
    }
    else{
      digitosPares.push(parseInt(reverseCardNumber[i]))
    }
  }
  
  for(let i=0; i<8; i++){
    digitosPares[i] = digitosPares[i] * 2;
    if (digitosPares[i] >9){
      digitosPares[i] = digitosPares[i] -9
    }
  }
  
  let sumaTotal = 0;
  
  for(let i=0; i<8; i++){
    sumaTotal = sumaTotal + digitosPares[i] + digitosNones[i];
  }
  
  let mSumaTotal=sumaTotal%10;

  letreros();
  enmascarandoValores();
  
if (mSumaTotal==0){
  document.getElementById("letreroValida").style.display = "block";
  } else{
    document.getElementById("letreroInvalida").style.display = "block";
  
}

}

function letreros(){
document.getElementById("descripcion").style.display = "none";
  document.getElementById("ingreso").style.display = "none";
  document.getElementById("numero").style.display = "block";
  }

  function enmascarandoValores(){
    for(let i=0; i<12; i++){
  arregloCuadritos[i].value = "#";
      }
  }
  
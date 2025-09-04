const numero = parseInt(prompt("Ingrese un número:"));
let divisores = "";

  if (numero % 2 === 0){
    (divisores =  " por 2,");
  } 
  if (numero % 3 === 0){
    divisores = divisores + " por 3,";
  } 
  if (numero % 5 === 0){
    divisores = divisores + " por 5,";
  } 
  if (numero % 7 === 0){
    divisores = divisores + " por 7,";
  } 

  if ( divisores = divisores.substring(0, divisores.length - 1)) {
     document.writeln("El número " + numero + " es divisible" + divisores );
  } else{
    divisores.length === 0
    document.writeln("El número " + numero + " no es divisible por 2, 3, 5 ni 7" );
  }
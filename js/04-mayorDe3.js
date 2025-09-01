const numero1 = parseInt(prompt("ingresa un número"))
const numero2 = parseInt(prompt("ingrese un 2do número"))
const numero3 = parseInt(prompt("ingrese un 3er número"))
if(numero1 > numero2){
    document.writeln("el número "+numero1+ " es más grande")
}else{
    if(numero3 > numero1 && numero3 > numero2){
    document.writeln("el número "+numero3+ " es más grande")
}else{
    document.writeln("el número "+numero2+ " es más grande") 
}
}


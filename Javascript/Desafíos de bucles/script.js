// Imprimir impares 1-20 Usando un bucle, escribe un código que haga que console.log
//imprima todos los valores impares del 1 al 20.

for(let i=1; i<=20; i+=2) {
    console.log(i);
}

// Disminuir múltiplos de 3 Usando un bucle, escribe un código que haga que console.logimprima todos los valores 
//que sean divisibles de manera uniforme por 3 del 100 al 0.

for(var  e=100; e >= 0; e-- ) {
    if(e % 3 == 0) {
    console.log(e);
}
}

// Imprime la secuencia Usando un bucle, escribe un código que haga que console.log 
//imprima los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5.

for(let i=4; i>=-4; i-=1.5){
    console.log(i)
}

// Sigma Escribe código que sume todos los valores del 1 al 100 en una variable sum y, al final, console.log dé 
//como resultado 1 + 2 + 3 + ... + 98 + 99 + 100. Deberíamos obtener 5050 al final.
var suma= 0;
for(var e=1; e < 101; e++ ){
    suma+=e;
} 
console.log(suma);

/* Factorial Escribe código que multiplique todos los valores del 1 al 12 
en una variable producty, al final, console.logdé como resultado  
 1 * 2 * 3 * ... * 10 * 11 * 12. Deberíamos obtener  479001600al final.*/

var productly = 1;
for (var i = 1; i < 13; i++) {
    productly *= i;
}
console.log(productly);
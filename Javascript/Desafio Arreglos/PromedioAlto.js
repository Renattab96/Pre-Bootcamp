// Mejor que el promedio
// Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio.
function mejorPromedio(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    promedio = sum / arr.length
    // cuenta cuántas variables son mayores que el promedio
    var count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > promedio) {
            count++
        }
    }
    return count;
}
var resultado = mejorPromedio([6, 8, 3, 10, -2, 5, 9]);
console.log(resultado); // esperamos 4 de vuelta
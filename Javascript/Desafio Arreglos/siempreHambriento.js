/**Siempre Hambriento 
 * Escribe una función a la que se le asigne un arreglo,
 * y cada vez que el valor sea "comida"
 * debería mostrar "delicioso"en la consola
 * . Si "comida" no estaba presente en el arreglo, 
 * que la consola registre "Tengo hambre" una vez.*/

// esto debería mostrar "delicioso, "delicioso"

function siempreHambriento(arr) {
    let contador = 0; //vale 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "comida") {
            console.log("Delicioso");
            contador = contador + 1
        }
    }
    if (contador == 0){
        console.log("Tengo Hambre")
    }
}
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);

// // esto debería mostrar "Tengo hambre"
// siempreHambriento([4, 1, 5, 7, 2]);
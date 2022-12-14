// El horno de pizza
// Crea una functionllamada pizzaOven.  Debemos sentirnos libres de personalizar la información 
// que registramos para nuestra pizza, pero asegurémonos de incluir lo 
// siguiente:  tipoCorteza, tipoSalsa, quesos,y salsas.

// let pizza = {
//     pan : " ",
//     quesos : " ",
//     tipoCorteza : [" ", " ",],
//     tipoSalsa : " ",
// }

function  pizzaOven(panificado, quesitos, tipotopping, tipoSalsa){
    let pizza = {};
        pizza.pan = panificado;
        pizza.quesos = quesitos;
        pizza.tipotopping = tipotopping;
        pizza.tipoSalsa = tipoSalsa;
    return pizza;
}
console.log("Primer pedido de pizza")
let pizzaUno = pizzaOven("Cibatta", "mozzarella", ["verdura", "pepperoni"],["tomate", "cebolla", "oregano"])
console.log(pizzaUno)
console.log("Segundo pedido de pizza")
let pizzaDos = pizzaOven("hecho a mano", "mozzarella", ["aceituna", "pepperoni", "cebolla"],["tomate", "cebolla", "oregano"])
console.log(pizzaDos)

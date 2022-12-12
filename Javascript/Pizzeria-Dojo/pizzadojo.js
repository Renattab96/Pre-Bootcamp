// Pizzería Dojo
// Objetivos
// Practicar la creación de objetos JavaScript
// Practicar el uso deMath.random()
// Una fábrica de sándwiches
// ¡En esta tarea haremos pizzas en JavaScript! Y si solo vamos a hacer 
// una pizza, podemos definirla de una vez como el sándwich que vemos a continuación.
var sandwich = {
    pan:    "masa madre",
    proteína:  "asado",
    queso:   "queso suizo lacey",
    salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"]
};
    
// console.log(sandwich);

// Pero, ¿y si quisiéramos hacer varios sándwiches? ¡Podríamos definir una 
// función que nos permita elaborar un sándwich!

function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}


var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(" Primer Sandwish preparado con una funcion a base de un objeto ",s1);
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

function  pizzaOven(panificado, quesitos, tipoCorteza, tipoSalsa){
    let pizza = {};
        pizza.pan = panificado;
        pizza.quesos = quesitos;
        pizza.tipoCorteza = tipoCorteza;
        pizza.tipoSalsa = tipoSalsa;
    return pizza;
}
console.log("Primer pedido de pizza")
let pizzaUno = pizzaOven("Cibatta", "mozzarella", ["verdura", "pepperoni"],["tomate", "cebolla", "oregano"])
console.log(pizzaUno)
console.log("Segundo pedido de pizza")
let pizzaDos = pizzaOven("hecho a mano", "mozzarella", ["aceituna", "pepperoni", "cebolla"],["tomate", "cebolla", "oregano"])
console.log(pizzaDos)

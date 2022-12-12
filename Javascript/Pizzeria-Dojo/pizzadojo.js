
//  Una fábrica de sándwiches
//  ¡En esta tarea haremos pizzas en JavaScript! Y si solo vamos a hacer una pizza, podemos definirla de una vez como el sándwich que vemos a continuación.


// var sandwich = {
//     pan:    "masa madre",
//     proteína:  "asado",
//     queso:   "queso suizo lacey",
//     salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"]
// };
    
// console.log(sandwich);
//  Pero, ¿y si quisiéramos hacer varios sándwiches? ¡Podríamos definir una función que nos permita elaborar un sándwich!


// function sandwichFactory(pan, proteína, queso, salsas) {
//     var sandwich = {};
//     sandwich.pan = pan;
//     sandwich.proteína = proteína;
//     sandwich.queso = queso;
//     sandwich.salsas = salsas;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
// console.log(s1);

// El horno de pizza
// Crea una functionllamada pizzaOven.  Debemos sentirnos libres de personalizar la información que registramos para nuestra pizza, pero asegurémonos de incluir lo siguiente:  tipoCorteza, tipoSalsa, quesos,y salsas.

// Crea una función llamada pizzaOven que devuelva un objeto JavaScript (Pizza)

// Crea una pizza con: "estilo Chicago", "tradicional", ["mozzarella"] y ["pepperoni", "salchicha"]

// Crea una pizza con: "lanzada a mano" , "marinara" , ["mozzarella", "feta"] y ["champiñones", "aceitunas", "cebollas"]

// ¡Crea 2 pizzas más con los ingredientes que quieras!
function pizzaOven (chicago,tradicional,mozzarella ,pepperoni, salchicha) {
    var pizza = {};
    pizza.prepizza = prepizza,
    pizza.decorado = decorado,
    pizza.agregado = agregado,
    pizza.salsas = salsas
    return pizza;
}
var pizza1 = pizzaOven( "marinara" , "mozzarella" ,"champiñones", "aceitunas")
console.log(pizza1)
var pizza2 = pizzaOven( "marinara" , "mozzarella" ,"champiñones", "aceitunas")
console.log(pizza2)

var chicago = {
    prepizza: 'Cuadrada',
    decorado:'Chorizo',
    agregado:"Panceta ",
    salsas:'Locote y Tomate ',
}
var pepperoni = {
    prepizza: 'Cuadrada',
    decorado:'Chorizo',
    agregado:"Panceta ",
    salsas:'tomate cebolla oregano',
}

var mozarella = {
    prepizza: 'Cuadrada',
    decorado:'alhabaca',
    agregado:"Aceituna",
    salsas:'tomate y cebolla',
}
var tradicional = {
    prepizza: 'Cuadrada',
    decorado:'alhabaca',
    agregado:"Aceituna",
    salsas:'tomate',
}
var salchicha = {
    prepizza: 'Cuadrada',
    decorado:'alhabaca',
    agregado:"Aceituna",
    salsas:'tomate cebolla oregano',
}

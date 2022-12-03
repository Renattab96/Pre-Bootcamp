count = 1;
CountElement = document.querySelector('#count');

// console.log(CountElement);
function add() {
    count++;
    console.log(count)
    CountElement.innerText= count +' Likes'
}


// index 2 

// metodo uno
function addUno(){
    let numero = document.querySelector("#number1");
    console.log(numero);
    let nuevoNumero = parseInt(numero.innerHTML);
    nuevoNumero +=1;
    numero.innerHTML = nuevoNumero;
    
}

function addDos(){
    let numero = document.querySelector("#number2");
    console.log(numero);
    let nuevoNumero = parseInt(numero.innerHTML);
    nuevoNumero +=1;
    numero.innerHTML = nuevoNumero;
    
}

function addTres(){
    let numero = document.querySelector("#number3");
    console.log(numero);
    let nuevoNumero = parseInt(numero.innerHTML);
    nuevoNumero +=1;
    numero.innerHTML = nuevoNumero;
    
}




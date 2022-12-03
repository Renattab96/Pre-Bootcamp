console.log("page loaded...");
//Variable de Edcion 
var NombreCompleto = document.querySelector('#NombreCompleto ');
var Ciudad = document.querySelector('#Ciudad');
var Resumen = document.querySelector('#Resumen');
//variables para eliminar y agregar 
var respuestaSpan = document.querySelector('#request')
var coneccionSpan = document.querySelector('#connection')

// la imagen a cambiar
var imagen = document.querySelector('#fotoCarnet')
console.log(imagen);
function edicion(){
    imagen.src = "images/mi-perfil.jpg";
    NombreCompleto.innerText ='Renatta Benitez';
    Ciudad.innerText ='Itaugua Paraguay';
    Resumen.innerText ='Analista de Sistemas Informaticas  Actualmente soy Tester en un empresa de Software en mi pais';

}


function aceptar(id){
    var element = document.querySelector(id);
    element.remove();
    respuestaSpan.innerText--;
    coneccionSpan.innerText ++;
    // console.log(eliminado);
}

 function eliminar(id){
    var element = document.querySelector(id);
    element.remove();
    respuestaSpan.innerText--;

 }
console.log('Acceso a elementos del DOM (Document Object Model');

// manipulación del elemento h1 del HTML
var h1 = document.getElementById("titulo");
console.log(h1.innerHTML);

h1.innerHTML = "Un nuevo Texto";
h1.style.color = "red";
h1.style.background = "yellow";

// manipulación del elemento párrafo del HTML
var parrafo = document.getElementById("parrafo");
parrafo.style.color = "olive";

// manipulación del elemento Button
var boton = document.getElementById("boton");

function cambiar() {
    parrafo.style.color = "blue";
    console.log('entro a la función cambiar...');
}
// agregando los parentesis se ejecuta la función sin hacer el click
boton.onclick = cambiar; // sin los paréntesis espera la acción de hacer click

// Manejo de Eventos en el botón
boton.addEventListener('mouseover', function(){
    console.log('has pasado por encima del botón');
})

boton.addEventListener('mouseout', function(){
    console.log('has abandonado el botón');
})
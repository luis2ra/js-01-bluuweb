console.log('estoy en el documento de javascript');

var saludoId = document.getElementById('saludo');
var sumaId = document.getElementById('suma');
var multiplicaId = document.getElementById('multiplica');

// function saludar(nombre) {
//     return 'Hola ' + nombre;
// }

// Modelo de función tipo básico
var saludar = nombre => 'Hola ' + nombre;
saludoId.innerHTML = saludar('Luis usando funciones flecha');

// Modelo de función con más de un parámetro
var sumar = (num1, num2) => num1 + num2;
sumaId.innerHTML += sumar(10,20);

// Modelo de función con mas de una sentencia a ejecutar
var multiplicar = (var1, var2) => {
    var var3 = 10;
    return var1*var2*var3;
}
multiplicaId.innerHTML += multiplicar(2,3);
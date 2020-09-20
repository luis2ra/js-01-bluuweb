// LocalStorage: Guarda cadenas de texto en el navegador, clave => valor

// SET: hace referencia a guardar/asignar algo
// GET: hace referencia a obtener algo

// definición de una constante de JavaScript
const nombre = 'Luis Rodolfo';

// asignación de una variable en el Local Storage del navegador
localStorage.setItem('nombreUsuario', nombre);

// captura del valor almacenado en Local Storage
const obtenerValor = localStorage.getItem('nombreUsuario');

// visualización de la variable registrada en Local Storage
console.log('valor almacenado: ', obtenerValor);
console.log(localStorage);

// con esta sentencia se elimina las variables asignadas en 'Local Storage'
// => localStorage.removeItem('nombreUsuario');
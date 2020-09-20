// LocalStorage: Guarda cadenas de texto en el navegador, Key => Value

// SET: hace referencia a guardar/asignar algo
// GET: hace referencia a obtener algo

// definición de una constante de JavaScript
const nombre2 = 'Luis Alfonso';

// asignación de un "Key" en el Local Storage del navegador
localStorage.setItem('nombre2', nombre2);

// captura el valor almacenado en algún "Key" del Local Storage
const obtenerValor = localStorage.getItem('nombre2');

// visualización de la variable registrada en Local Storage
console.log('valor registrado en "nombre2": ', obtenerValor);

// con esta sentencia se elimina las variables asignadas en 'Local Storage'
// => localStorage.removeItem('nombre2');
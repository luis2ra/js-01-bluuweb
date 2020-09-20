console.log('test de var, let y const');

// var edad = 55;
// var edad = 60;
// console.log(edad);

/*
let edad = 55;
console.log(edad);
edad = 60;
console.log(edad);
*/

// // esto puede ser considerado un error en programación 
// for(var i = 0; i <= 5; i++) {
//     console.log(i);
// }
// console.log(i);

// let j = 50;
// for(let j = 0; j <= 5; j++) {
//     console.log(j);
// }
// console.log(j);  // esta sentencia puede generar error si de declara o no la variable j con let


// var demo_var;
// console.log(demo_var);

// let demo_let;
// console.log(demo_let);

// // const demo_const;  // => esto genera un error.  Las constantes deben asignarse un valor
// const demo_const = 7;

// demo_const = 10;
// console.log(demo_const);

const numeros = [55, 60, 65];
console.log(numeros);

numeros.push(70);
console.log(numeros);

const persona ={
    nombre: "Luis",
    apellido: "Altuve",
    edad: 40
}
console.log(persona);

persona.edad = 44
console.log(persona);
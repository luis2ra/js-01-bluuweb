console.log("Demo del canal Bluuweb donde se crea los objetos y su importancia en el uso de las API's");

/*** Ejemplo de uso de Arreglos */
// var arreglo = ['HTML', 15, true];

// console.log(arreglo);
// console.log(arreglo[0]);


/*** Ejemplo de uso de Objetos */
// var objeto = {
//     nombre: 'HTML', 
//     duracion: 15,
//     estado: true,
//     capitulos: {
//         nombre: "Introducción",
//         videos: 10
//     }
// }

// console.log(objeto);
// console.log(objeto.capitulos);
// console.log(objeto.capitulos.nombre);

var arrayObjetos = [
    {
        nombre: 'HTML', 
        duracion: 15,
        estado: true
    },
    {
        nombre: 'CSS', 
        duracion: 10,
        estado: false
    },
    {
        nombre: 'JS', 
        duracion: 12,
        estado: true
    }
] 

// console.log(arrayObjetos);
// console.log(arrayObjetos[0]);
// console.log(arrayObjetos[0].nombre);
// console.log(arrayObjetos[1].nombre);
// console.log(arrayObjetos[2].nombre);

for( let indice of arrayObjetos ) {
    // console.log(indice);
    console.log(indice.nombre);
}

var dolar = [{"fecha":"2020-07-14T04:00:00.000Z","valor":788.22},{"fecha":"2020-07-13T04:00:00.000Z","valor":790.82},{"fecha":"2020-07-10T04:00:00.000Z","valor":781.74},{"fecha":"2020-07-09T04:00:00.000Z","valor":786.18},{"fecha":"2020-07-08T04:00:00.000Z","valor":793.88},{"fecha":"2020-07-07T04:00:00.000Z","valor":798.79},{"fecha":"2020-07-06T04:00:00.000Z","valor":801.46},{"fecha":"2020-07-03T04:00:00.000Z","valor":803.98},{"fecha":"2020-07-02T04:00:00.000Z","valor":816.29},{"fecha":"2020-07-01T04:00:00.000Z","valor":821.23},{"fecha":"2020-06-30T04:00:00.000Z","valor":816.36},{"fecha":"2020-06-26T04:00:00.000Z","valor":813.25},{"fecha":"2020-06-25T04:00:00.000Z","valor":820.68},{"fecha":"2020-06-24T04:00:00.000Z","valor":817.9},{"fecha":"2020-06-23T04:00:00.000Z","valor":816.02},{"fecha":"2020-06-22T04:00:00.000Z","valor":817.33},{"fecha":"2020-06-19T04:00:00.000Z","valor":812.19},{"fecha":"2020-06-18T04:00:00.000Z","valor":798.53},{"fecha":"2020-06-17T04:00:00.000Z","valor":779.1},{"fecha":"2020-06-16T04:00:00.000Z","valor":796.87},{"fecha":"2020-06-15T04:00:00.000Z","valor":790.73},{"fecha":"2020-06-12T04:00:00.000Z","valor":784.65},{"fecha":"2020-06-11T04:00:00.000Z","valor":767.93},{"fecha":"2020-06-10T04:00:00.000Z","valor":771.96},{"fecha":"2020-06-09T04:00:00.000Z","valor":769.26},{"fecha":"2020-06-08T04:00:00.000Z","valor":764.97},{"fecha":"2020-06-05T04:00:00.000Z","valor":775.58},{"fecha":"2020-06-04T04:00:00.000Z","valor":769.13},{"fecha":"2020-06-03T04:00:00.000Z","valor":782.86},{"fecha":"2020-06-02T04:00:00.000Z","valor":796.46},{"fecha":"2020-06-01T04:00:00.000Z","valor":806.32}]

for( let i of dolar) {
    // console.log(i);
    console.log(i.valor);
}
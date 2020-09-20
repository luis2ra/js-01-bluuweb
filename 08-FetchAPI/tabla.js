console.log('Lectura de una archivo JSON desde JavaScript usando Fetch');

var contenido = document.querySelector('#contenido');

function traer() {

    fetch('tabla.json')
        .then( res => res.json() )
        .then( data => {
            // console.log(data);
            pintarTabla(data);
        });
     
}

function pintarTabla(datos) {
    // console.log(datos);
    
    contenido.innerHTML = '';
    for( let valor of datos ) {
        console.log(valor.nombre);
        // se usa el operador += para que concatene el contenido
        contenido.innerHTML += `
            <tr>
                <th scope="row">${ valor.id }</th>
                <td>${ valor.nombre }</td>
                <td>${ valor.email }</td>
                <td>${ valor.estado ? "Activo" : "Inactivo" }</td>
            </tr>
        `

    }
}
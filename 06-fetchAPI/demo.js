console.log('Lectura del contenido de un archivo externo desde JavaScript usando Fetch');

var contenido = document.querySelector('#contenido');

function traer() {

    // contenido.innerHTML = `
    //     <p>prueba de contenido</p>
    // `;

    fetch('texto.txt')
        .then(data => data.text())
        .then(data => {
            // console.log(data);
            contenido.innerHTML = `
            <p>${data}</p>
            `;
        });
}
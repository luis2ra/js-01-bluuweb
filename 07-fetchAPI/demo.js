console.log('Lectura de una API desde JavaScript usando Fetch');

var contenido = document.querySelector('#contenido');

function traer() {

    // contenido.innerHTML = `
    //     <p>prueba de contenido</p>
    // `;

    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            // console.log(data.results);
            console.log(data.results['0']);
            contenido.innerHTML = `
                <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
                <p>Nombre: ${data.results['0'].name.last} </p>
            `
        });
     
}
console.log('Envío de data de un Formulario al servidor usando FetchAPI!');

var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e) {

    /***
     * Por defecto el formulario se procesa usando el método GET
     * En el navegador se muestra la ruta:
     * http://127.0.0.1:5500/index.html?usuario=&pass=
     * 
     * la función preventDefault evita que se procese el 
     * evento por defecto que usa el navegador.
     */
    
    e.preventDefault();
    
     /***
     * Al usar la función anterior, el navegador no redirecciona
     * a ninguna parte, quedando:
     * http://127.0.0.1:5500/index.html
     */

    console.log('me diste un click...');

    var datos = new FormData(formulario);

    console.log(datos);
    console.log(datos.get('usuario'));
    console.log(datos.get('pass'));

    /***
     * Ahora buscamos enviar "datos" usando fetch al servidor (en este caso simulado en post.php)
     */
    fetch('post.php', {
        method: 'POST',
        body: datos
    })
        .then( res => res.json())
        .then( data => {
            // console.log(data);
            if(data === 'error') {
                respuesta.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        Llenar los campos
                    </div>
                `
            } else {
                respuesta.innerHTML = `
                    <div class="alert alert-warning" role="alert">
                        ${ data }
                    </div>
                `
            }
        });
});
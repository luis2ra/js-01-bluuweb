// Variables globales
const btnBotones = document.querySelector('#btnBotones');
const botones = document.querySelector('#botones');
const fondo = document.querySelector('#fondo');

(()=>{
    btnBotones.addEventListener('click', agregarBotones);
    botones.addEventListener('click', delegacion);
})();

function delegacion(e) {
    e.preventDefault();
    //console.log('Diste click en: ', e.target.classList[1]);
    //console.log('Estoy en delegación: ', e);
    const colorBoton = e.target.classList[1];

    switch(colorBoton) {
        case('btn-primary'):
            console.log('Diste click en: ', colorBoton);
            fondo.className = colorBoton;
            break;
        case('btn-secondary'):
            console.log('Diste click en: ', colorBoton);
            fondo.className = colorBoton;
            break;
        case('btn-danger'):
            console.log('Diste click en: ', colorBoton);
            fondo.className = colorBoton;
            break;
        case('btn-success'):
            console.log('Diste click en: ', colorBoton);
            fondo.className = colorBoton;
            break;
        case('btn-warning'):
            console.log('Diste click en: ', colorBoton);
            fondo.className = colorBoton;
            break;
    }
}

function agregarBotones(e) {
    e.preventDefault();
    console.log('Diste click en el botón negro');
    
    botones.innerHTML = `<button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button>`;
}
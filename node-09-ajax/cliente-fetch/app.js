alert('Aun no hemos empezado');

fetch('http://localhost:3000')
    .then(respuesta => respuesta.json()) //convertir la respuesta a json
    .then(objeto => rellenarParrafo(objeto.nombre))
    .catch(error => console.error('Fallo:', error));

alert('Ya hemos empezado');

function rellenarParrafo(texto) {
    let div1 = document.getElementById('div1');
    //querySelector devuelve el primero que coincida
    //con el selector CSS que se pasa por parámetro
    let p = div1.querySelector('p');
    p.innerHTML = texto;
}
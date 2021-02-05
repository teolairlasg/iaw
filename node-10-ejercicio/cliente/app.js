alert('Aun no hemos empezado');

fetch('http://localhost:3000')
    .then(respuesta => respuesta.json()) //convertir la respuesta a json
    .then(objeto => rellenarParrafo(objeto.nombre))
    .catch(error => console.error('Fallo:', error));

alert('Ya hemos empezado');

function rellenarBody(lista) {
    //anyadir ul
    // hacer un for of recorriendo la
    // lista y anyadiendo li por 
    // cada palabra de la lista
}
alert('Aun no hemos empezado');

fetch('http://localhost:3000')
    .then(respuesta => respuesta.json()) //convertir la respuesta a json
    .then(objeto => rellenarBody(objeto.lista))
    .catch(error => console.error('Fallo:', error));

alert('Ya hemos empezado');

function rellenarBody(lista) {
    let elementoUl = document.createElement('ul');
    document.body.appendChild(elementoUl);
    for (const texto of lista) {
        let elementoLi = document.createElement('li');
        elementoLi.innerHTML = texto;
        elementoUl.appendChild(elementoLi);
    }
}
alert('Aun no hemos empezado');

fetch('http://localhost:3000/lista')
    .then(respuesta => respuesta.json()) //convertir la respuesta a json
    .then(objeto => rellenarLista(objeto.lista))
    .catch(error => console.error('Fallo:', error));


fetch('http://localhost:3000/texto')
    .then(respuesta => respuesta.json()) //convertir la respuesta a json
    .then(objeto => rellenarTexto(objeto.texto))
    .catch(error => console.error('Fallo:', error));

alert('Ya hemos empezado');

function rellenarLista(lista) {
    let elementoUl = document.createElement('ul');
    document.body.appendChild(elementoUl);
    for (const texto of lista) {
        let elementoLi = document.createElement('li');
        elementoLi.innerHTML = texto;
        elementoUl.appendChild(elementoLi);
    }
}

function rellenarTexto(txt) {
    let elementoP = document.createElement('p');
    elementoP.innerHTML = txt;
    document.body.appendChild(elementoP);
}
alert('JS en cliente');
let respuesta;
let httpReq = new XMLHttpRequest();

httpReq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200){
        respuesta = JSON.parse(this.responseText);
        rellenaParrafo(respuesta);
    }
};
let url = "http://localhost:3000";
httpReq.open("GET",url, true);
httpReq.send();

function rellenaParrafo(objeto) {
    let parrafo = document.getElementById("idPar");
    parrafo.innerHTML = objeto.nombre;
}
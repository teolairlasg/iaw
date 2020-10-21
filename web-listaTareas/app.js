let lista = document.getElementById("listaTareas");
let tarea = document.getElementById("inputTarea");
function agregarTarea() {
    let liTarea = document.createElement("li");
    liTarea.innerHTML = tarea.value;
    lista.appendChild(liTarea);
    tarea.value = "";
}
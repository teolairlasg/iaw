let lista = document.getElementById("listaTareas");
let tarea = document.getElementById("inputTarea");
function agregarTarea() {
    if (tarea.value != "") {
        let liTarea = document.createElement("li");
        let liTexto = document.createElement("span");
        let papelera = document.createElement("img");
        let lapiz = document.createElement("img");
        lapiz.src = "./img/lapiz.svg";
        papelera.src = "./img/trash.svg";
        papelera.addEventListener("click", borrarEstaTarea);
        lapiz.addEventListener("click", editarEstaTarea);
        liTexto.innerHTML = tarea.value;
        liTarea.appendChild(liTexto);
        liTarea.appendChild(lapiz);
        liTarea.appendChild(papelera);
        lista.appendChild(liTarea);
        tarea.value = "";
    }
    tarea.focus();
}

function editarEstaTarea(evento) {
    let valorDevuelto = prompt("Escribe el nuevo valor:", evento.target.parentElement.children[0].innerHTML);
    if (valorDevuelto != null) {
        evento.target.parentElement.children[0].innerHTML = valorDevuelto;
    }
}

function borrarEstaTarea(evento) {
    //target es la papelera (img)
    //target.parentElement es su padre, el <li>
    let nombreTarea = evento.target.parentElement.children[0].innerHTML;
    let confirmacion = confirm(`¿Estás seguro de que quieres eliminar la tarea "${nombreTarea}"?`);
    /*
    //Otras formas de ponerlo. Comillas dobles (hay que escapar el caracter comillas poniendo la contrabarra delante) y 'sumar' las strings
    
    let confirmacion = confirm("¿Estás seguro de que quieres eliminar la tarea \"""+nombreTarea+"\"?");
    
    //Comillas simples, ya no tenemos que escapar el caracter " pero tenemos que sumar las cadenas.
    
    let confirmacion = confirm('¿Estás seguro de que quieres eliminar la tarea "'+nombreTarea+'"?');
    
    */
    if (confirmacion == true) {
        evento.target.parentElement.remove();
    }
}

function gestionarTecla(evento) {
    // console.log(evento);
    if (evento.keyCode == 13) {
        agregarTarea();
    }
}

function borrarTarea() {
    let valorDevuelto = prompt("Escribe el número de tarea que quieres borrar:");
    if (valorDevuelto > 0 && valorDevuelto <= lista.childElementCount) {
        lista.children[valorDevuelto - 1].remove();
        // lista.removeChild(lista.children[valorDevuelto-1]);  
    } else {
        alert("Esa tarea no existe!");
    }
}
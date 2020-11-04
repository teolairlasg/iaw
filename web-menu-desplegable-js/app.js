let menuMostrado = false;

function mostrarOcultarMenu() {
    if(menuMostrado){
        ocultarMenu();
    }else{
        mostrarMenu();
    }
}


function mostrarMenu() {
    /* codigo para mostrar el menu */
    let menu = document.getElementById("listaMenu");
    for (const liHijo of menu.children) {
        liHijo.children[1].style.display = "inline";    
    }
    
    /* ---- */
    menuMostrado = true;
}

function ocultarMenu() {
    /* codigo para ocultar el menu */
    let menu = document.getElementById("listaMenu");
    for (const liHijo of menu.children) {
        liHijo.children[1].style.display="none";
    }

    /* ---- */
    menuMostrado = false;
}




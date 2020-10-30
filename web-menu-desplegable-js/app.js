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
    console.log(menu);
    menu.children[0].children[1].style.display = "inline";
    menu.children[1].children[1].style.display = "inline";
    menu.children[2].children[1].style.display = "inline";
    menu.children[3].children[1].style.display = "inline";


    /* ---- */
    menuMostrado = true;
}

function ocultarMenu() {
    /* codigo para ocultar el menu */
    let menu = document.getElementById("listaMenu");
    menu.children[0].children[1].style.display = "none";
    menu.children[1].children[1].style.display = "none";
    menu.children[2].children[1].style.display = "none";
    menu.children[3].children[1].style.display = "none";



    /* ---- */
    menuMostrado = false;
}




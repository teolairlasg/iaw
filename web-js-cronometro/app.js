let contador = 0;
let objetoTimer;
function empezarCrono() {
    objetoTimer=setInterval(incrementarCrono,100);
}

function empezarConCuentaAtras() {
    new Promise ( function () {
        // para el miercoles
    }

    )
    
}

function incrementarCrono() {
    contador++;
    document.getElementById("crono").innerHTML = contador;  
}

function pararCrono() {
    window.clearInterval(objetoTimer);    
}

function restablecerCrono() {
    contador = 0;
    document.getElementById("crono").innerHTML = contador;  
}


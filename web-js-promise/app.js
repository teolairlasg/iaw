let resPromesa = new Promise( function(f_exito, f_error) {
    setTimeout( () => {
            f_exito(Math.random());
            },
            3000);
})

setTimeout(function 
    () {
    
}, 2000);

let resPromesa = new Promise( (f_exito, f_error) => {
    setTimeout( function numAleatorio() {
        f_exito(Math.random());
    }, 3000);
})



document.getElementById("p_resultado").innerHTML = "Hola mundo";

let bob = a => a+100;
console.log(bob(5));

bob = function (a){ return a+100; }

let frase = "este es un ejemplo";
let array = frase.split(" ");

function separarEspacios(frase) { return frase.split(" "); }

let separarEspacios = (frase) => frase.split(" ");


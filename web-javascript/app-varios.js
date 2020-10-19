function avisa() {
    alert("Avisa");
}

function saluda(nombre) {
    alert("Hola "+nombre);
}

// saluda("Pedro");

let nombre1 = "Juan";

saluda(nombre1);

let ok = confirm("Haz click en lo que quieras");

if(ok == true){
    alert("Has apretado Ok");
}else{
    alert("Has apretado Cancel");
}
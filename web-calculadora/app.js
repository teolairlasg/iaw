function imprimirSuma() {
    let op1 = document.getElementById("op1");
    let op2 = document.getElementById("op2");
    let resultado = suma(op1.value, op2.value);

    /*
    TODO rellenar el párrafo con id resultado sólo si el resultado no es null 
    */
    document.getElementById("res").innerHTML= resultado;
    
}


function suma(o1, o2) {
    let resultado;
    /* TODO: 
     - Comprobar que los parámetros son números
     - Si los dos son números sumarlos en la variable resultado
     - Si alguno de los dos no es número resultado = null
     
     */



    return resultado;
}
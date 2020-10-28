function calcular() {
    /*lectura de operandos y operacion*/
    let op1 = document.getElementById("op1");
    let op2 = document.getElementById("op2");
    let operacion = document.getElementById("operacion");
    let resultado;
    let parrafoResultado = document.getElementById("res");
    /* comprobar si los operandos son correctos*/
    if(operandosCorrectos(op1.value, op2.value)){
        /* realizar la operacion */
        resultado = realizarOperacion(op1.value, op2.value, operacion.value);
        /* imprimir el resultado */
        parrafoResultado.innerHTML = resultado;
    }else{
        /* imprimir mensaje de error */
        parrafoResultado.innerHTML = "Error en los operandos";
    }
}

function operandosCorrectos(operando1, operando2) {
    if (isNaN(operando1) == true || isNaN(operando2) == true){
        return false;
    }else{
        return true;
    }
}

function realizarOperacion(operando1, operando2, operacion) {
    let resultado = null;
    if (operacion == "suma") {
        resultado=(parseFloat(operando1) + parseFloat(operando2)).toFixed(2);
    } else if (operacion == "resta") {
        resultado=(parseFloat(operando1) - parseFloat(operando2)).toFixed(2);
    } else if (operacion == "multi"){
        resultado=(parseFloat(operando1) * parseFloat(operando2)).toFixed(2);
    }
    return resultado;
}
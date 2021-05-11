/*
Cread una funcion
imprimirError que acepte un sólo parámetro
de entrada y lo imprima por la consola de error
*/
function imprimirError(texto) {
    console.error(texto);
}

imprimirError("prueba adsfdasf asfsd asf");
/*
Cread una función imprimirConsola
que acepte un sólo parámetro de entrada 
y lo imprima por la consola de log.
*/
function imprimirConsola(texto) {
    console.log(texto);
}

imprimirConsola("prueba");
/*
Cread una función imprimir que acepte
dos parámetros de entrada. El primero
tiene que ser la palabra log o la palabra
error. El segundo tiene que ser un texto.
Si el parámetro 1 es log, la función 
debe llamar a imprimirConsola(parametro2).
Si el parámetro 1 es error, la función
debe llamar a imprimirError(parametro2)
Si el parámetro 1 no es ni log ni error
la función debe imprimir por la consola de
error lo siguiente "La función se ha usado mal".
*/

function imprimir(param1, param2) {
    if (param1 == "log") {
        imprimirConsola(param2);
    } else if (param1 == "error") {
        imprimirError(param2);
    } else {
        console.error("La funcion se ha usado mal");
    }
}


imprimir("log", "hola mundo1");
imprimir("error", "hola mundo2");
imprimir("test", "hola mundo3");
//valor 4
alert("Empieza el ejercicio 4");
/*
La función Math.random() retorna un punto flotante ("punto flotante" es otra manera de llamar a un número decimal), un número pseudo-aleatorio dentro del rango [0, 1). Esto es, desde el 0 (Incluido) hasta el 1 pero sin incluirlo (excluido), el cual se puede escalar hasta el rango deseado. La implementación selecciona la semilla inicial hasta el algoritmo que genera el número aleatorio; este no puede ser elegido o cambiado por el usuario.

La función Math.floor(num) devuelve el número entero más alto por debajo del parámetro pasado num. Esto es, le quita los decimales a un número decimal.
 
¿Cuál sería el resultado si multiplicamos el número que sale de Math.random() por 5?.
Evidentemente sería un número aleatorio, pero... ¿cuál sería su valor mínimo?
--> Respuesta: 
¿Y su valor máximo?
--> Respuesta:

Ejercicio:
Dado lo anterior, completa la función generarAleatorio(max) que pasado un número máximo nos devuelva un número entero entre [0 y max] ambos incluidos. Para ello debes usar la función Math.random y la función Math.floor().
Así console.log(generarAleatorio(7)) debería imprimir por la consola un número aleatorio entre 0 y 7. Los resultados posibles tendrían que ser 0, 1, 2, 3, 4, 5, 6 y 7.
*/

function geneararAleatorio(max) {
    let resultado;
    // Completa el código entre los comentarios, tendrás que conseguir
    // que dentro de la variable resultado se cree un numero aleatorio
    // entre 0 y max



    //
    return resultado;
}


// Esto es para que compruebes si te funciona, imprimirá 20 veces en la consola el número
// generado por tu función, deberían haber ceros, unos, doses y treses.
for (let index = 0; index < 20; index++) {
    console.log(geneararAleatorio(3));
}



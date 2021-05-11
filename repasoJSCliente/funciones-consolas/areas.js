/*
cread las funciones de manera que devuelvan el 
resultado numérico (usando return)
*/
function areaTriangulo(base, altura) {
    if (isNaN(base) || isNaN(altura)) {
        throw "Error en los parámetros: base: " + base + " y altura: " + altura + ". Alguno de los dos (o ambos) no es un número";
    }
    return base * altura / 2;
}

function areaCuadrado(lado) {
    if (isNaN(lado)) {
        throw "Error en el parámetro lado: " + lado + ", no es un número";
    }
    return lado * lado;
}

function areaRectangulo(base, altura) {
    return base * altura;
}

function areaPoligonoRegular(perimetro, apotema) {
    let area = perimetro * apotema / 2;
    return area;
}

function volumenCubo(lado) {
    return lado * lado * lado;
}

function volumenParalelepipedo(anchura, profundidad, altura) {
    return anchura * profundidad * altura;
}
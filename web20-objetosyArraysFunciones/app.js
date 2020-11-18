let string1 = "hola mundo";
let string2 = string1;

string2 = "Hola mundo";
console.log(string2);
console.log(string1);
let array1 = [4, 5, 6, 7, 7, 8, 9, 10];
let array2 = array1;
array1[0] = 5;

console.log(array1);
console.log(array2);


let objeto1 = {
    "propiedad1": 3,
    "propedad2": "Hola"
}

let objetoclon = { ...objeto1 }

objetoclon.propiedad1 = 10;

let objeto2 = objeto1;

objeto2.propiedad1 = 5;

console.log(objeto2);
console.log(objeto1);
console.log(objetoclon);

let objetoA = {
    "p1": 4,
    "prop2": "HOla",
    "pr3": true
}

let objetoB = {
    "p4": 4,
    "prop2": "Hala",
    "pr6": true
}
let simple = [4, 5, 6, 7, 8];

let objetoAB = { ...objetoB, ...objetoA };

console.log(objetoAB);

let doble = simple.map(x => x * 2);

let numGrandes = simple.filter(elemento => elemento > 6);

let numGrandes2 = simple.filter(function (e) {
    return e > 6;
});

function doblar(x) {
    return x * 2;
}

console.log(simple);
console.log(doble);

console.log(numGrandes);
console.log(numGrandes2);

//crear un array de nombres de mujeres
let nombresMujer = ["María", "Laura", "Eva", "Rosa", "Julia"];
//con map crear otro array que añada "Doña " delante de cada nombre
//Solución con funciones flecha
let nombresConTratamiento = nombresMujer.map(e => "Doña " + e);

//Solución con funciones internas
let nombresConTratamiento2 = nombresMujer.map(
    function (nombre) {
        return "Doña " + nombre;
    }
);

//Solución con funciones externas
//Aquí le voy a añadir un poco más de lógica, pensando en que
//quizá esta función ya la teníamos y la queremos reutilizar
function anyadirTratamiento(nombre, genero) {
    ret = nombre;
    if (genero == 'H') {
        ret = "Don " + nombre;
    } else if (genero == 'M') {
        ret = "Doña " + nombre;
    }
    return ret;
}
//como la función tiene dos parámetros, y la función de callback está 
//pensada para solo 1 lo que hago no es reutilizar
//la función sino estoy usando una nueva que utiliza 
//a la función de arriba.

let nombresConTratamiento3 = nombresMujer.map(function (e) { return anyadirTratamiento(e, 'M') });
//o con una función flecha, pero fijaros en que en ninguno de los casos

let nombresConTratamiento4 = nombresMujer.map(e => anyadirTratamiento(e, 'M'));
console.log(nombresConTratamiento);
console.log(nombresConTratamiento2);
console.log(nombresConTratamiento3);
console.log(nombresConTratamiento4);

//filtrar los nombres cortos y ponerlos en otro array 
//Solución con funciones flecha
let nombresCortos = nombresMujer.filter(nombre => nombre.length < 4);
console.log(nombresCortos);

//Solución con funciones internas
let nombresCortos2 = nombresMujer.filter(
    function (e) {
        return e.length < 4
    }
);
console.log(nombresCortos2);

//Solución con funciones externas
let nombresCortos3 = nombresMujer.filter(nombreCorto);
console.log(nombresCortos3);
function nombreCorto(nombre) {
    let ret = false;
    if (nombre.length < 4) {
        ret = true;
    }
    return ret;
}

// Function reduce

let arrayNumeros = [4, 5, 6, 7, 8, 9, 23, 1];
let suma = arrayNumeros.reduce((a, b) => a + b);
console.log(suma);

let n = 2;
let esPar = (n % 2 == 0) ? true : false;

if (n % 2 == 0) {
    esPar = true;
} else {
    esPar = false;
}

console.log("n es dos? " + (n == 2 ? "Sí" : "No"));

let maximo = arrayNumeros.reduce((a, b) => a < b ? a : b);
console.log(maximo);

let avg = suma / arrayNumeros.length;
console.log(avg);

let numerosOrdenados = arrayNumeros.sort(comparacion);
console.log(numerosOrdenados);

function comparacion(x, y) {
    if (x > y) {
        return -1;
    } else if (x < y) {
        return 1;
    } else {
        return 0;
    }
}

let coches = [
    {
        marca: "Fiat",
        modelo: "Uno",
        anyo: 1990
    },
    {
        marca: "Fiat",
        modelo: "Punto",
        anyo: 1995
    },
    {
        marca: "Citroën",
        modelo: "AX",
        anyo: 1991
    },
    {
        marca: "Volvo",
        modelo: "S80",
        anyo: 1989
    }
]

let cochesOrdenados = coches.sort(
    function (coche1, coche2) {
        if (coche1.anyo < coche2.anyo) {
            return -1;
        } else if (coche1.anyo > coche2.anyo) {
            return 1;
        } else {
            return 0;
        }
    }
);

console.log(cochesOrdenados);
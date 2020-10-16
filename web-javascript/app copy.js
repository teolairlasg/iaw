let texto = "Hola \"mundo\"";
let texto2 = 'Hola "mundo"';
console.log(texto);
console.log(texto2);

let numeros = [1, 2, 3];
let nombres = ["Teo", "Saúl", "Soledad"];
let mezcla = [1, "Hola Mundo", true, 4.5];

console.log(numeros);
console.log(nombres[1]);
console.log(mezcla[3]);
console.log(nombres);

nombres[2] = "Iker";
nombres[3] = "Juan";
nombres[10] = "Jose";

console.log(nombres.length);

console.log(nombres[8]);

let persona = {
    "nombre": "Juan",
    "apellido": "Pérez",
    "edad actual": 21
};

let clase = {
    codigo: "B02",
    radiadores: 2,
    alumnos: ["Iker", "Saúl", "Javier", "Iván", "Adrián", "Borja", "Jose Miguel", "Alberto"],
    ordenadores: 25,
    profesor: "Teo"
}

console.log(clase);
// Imprime la primera letra de la propiedad profesor del objeto clase

console.log(clase.profesor[0]);

// unión de cadenas de texto
console.log("La clase " + clase.codigo + " tiene " + clase.radiadores + " radiadores.");


console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
// Otra manera de acceder a las propiedades
// cuando tienen caracteres especiales en el nombre
// es útil
console.log(persona["edad actual"]);

let persona2 = {
    nombre: "Manolo",
    edad: 25
}

let persona3 = {
    nombre: "Luis",
    edad: 16
}

// Operadores de comparación
// == , ===, !=, !==
// <  <=  >  >=

if (persona2.edad >= 18) {
    console.log(persona2.nombre + " es mayor de edad.");
} else {
    console.log(persona3.nombre + " es menor de edad.");
}

if (persona3.edad >= 18) {
    console.log(persona3.nombre + " es mayor de edad.");
} else {
    console.log(persona3.nombre + " es menor de edad.");
}

// Comprobar si un numero de dni es valido.
let id = "ABC81818G";

if (id.length == 9 &&
    id[8] != "0" &&
    id[8] != "1" &&
    id[8] != "2" &&
    id[8] != "3" &&
    id[8] != "4" &&
    id[8] != "5" &&
    id[8] != "6" &&
    id[8] != "7" &&
    id[8] != "8" &&
    id[8] != "9") {
    console.log("El DNI " + id + " es válido");
} else {
    console.error("El DNI " + id + " no es válido.");
}







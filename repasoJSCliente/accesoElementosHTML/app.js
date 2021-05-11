/* Modificad el contenido del parrafo1 para que ponga "Adiós Mundo"
Usad la función document.getElementById("")
Para cambiar el contenido la propiedad es innerHTML
*/
let listaFrases = ["Hola Mundo", "Adiós Mundo", "Hola Clase", "Adiós Clase"];

let par1 = document.getElementById("parrafo1");
let par2 = document.getElementById("parrafo2");

/*
Poned dentro del párrafo1 la frase con índice 3
listaFrases[3]
Poned dentro del párrafo2 la frase con índice 1
*/
par1.innerHTML = listaFrases[3];
par2.innerHTML = listaFrases[1];


/*
Cread un elemento párrafo con id parrafo4 y con contendio la frase con índice 2. 
usad document.createElement
*/
let par4 = document.createElement("p");
par4.innerHTML = listaFrases[2];

/*
Añadid el elemento al body. Con 
document.body.appendChild(elemento);
*/
document.body.appendChild(par4);

let textoNegrita = document.createElement("b");
textoNegrita.innerHTML = "abcd";
par4.appendChild(textoNegrita);

// mete en un array todos los elementos <p>
let arrayParrafos = document.getElementsByTagName("p");
for (const parrafo of arrayParrafos) {
    parrafo.innerHTML = parrafo.innerHTML + "...";
}


let elementosClaseA = document.getElementsByClassName("enlaceA");
for (const elClaseA of elementosClaseA) {
    elClaseA.innerHTML = elClaseA.innerHTML + "......";
}


let persona = {
        nombre: 'Juan',
        apellido: 'Pérez',
        'edad': 45,
        mascotas: ['Tommy', 'Fuffy', 'Chiki'],
        // Las propiedades con un nombre con espacios/caracteres raros
        // deben ponerse entre comillas.
        "¿esta casado?": true,
        "¿Tiene hijos?": "Sí"
    }
    // Manera 1 de acceder a una propiedad
console.log(persona["edad"])
    // Manera 2 de acceder a una propiedad. Más simple.
console.log(persona.edad)
    // Si el nombre de la propiedad, tiene caracteres
    // extraños, usamos la manera 1.
console.log(persona["¿esta casado?"])

// Si el nombre de la propiedad lo tenemos metido
// en una variable, en el ejemplo de debajo propNombre
let propNombre = "edad";
// Usamos la manera 1 con la variable (lógicamente sin las comillas)
console.log(persona[propNombre])

for (const propiedad in persona) {
    if (Object.hasOwnProperty.call(persona, propiedad)) {
        // Capturo el valor de la propiedad (lo que está despues de los dos puntos)
        const valor = persona[propiedad];
        // Creo un nuevo elemento de tipo p HTML con createElement
        let pNuevo = document.createElement("p");
        // Le pongo un contenido al párrafo con la etiqueta y el valor
        // de la propiedad
        pNuevo.innerHTML = propiedad + ": " + valor;
        // Añado el párrafo recién creado al body.
        document.body.appendChild(pNuevo);
    }
}
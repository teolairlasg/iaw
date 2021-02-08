const express = require('express');
const app = express();
const puerto = 3000;

app.get('/lista', function (req,res) {
    let respuesta = {
        "lista": ["Hola", "adios","alumno","mundo"]
    };
    // Permitir conexiones desde otros origenes.
    //Necesario para xhttp response
    res.header("Access-Control-Allow-Origin", "*");
    res.json(respuesta);
});

app.get('/texto', function (req,res) {
    let respuesta = {
        "texto": "Hola Mundo"
    };
    // Permitir conexiones desde otros origenes.
    //Necesario para xhttp response
    res.header("Access-Control-Allow-Origin", "*");
    res.json(respuesta);
});



app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log('servidor iniciado');
}
const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', function (req,res) {
    let respuesta = {
        "lista": ["Alumno", "adios"]
    }
    // Permitir conexiones desde otros origenes.
    //Necesario para xhttp response
    //res.header("Access-Control-Allow-Origin", "*");
    res.json(respuesta);
})

app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log('servidor iniciado');
}
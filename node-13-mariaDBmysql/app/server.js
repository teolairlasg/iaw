const express= require('express');
const app = express();
const path = require('path');
const puerto = 3000;
const mariadb = require('mariadb');
const datosBD = {
    //Dirección del servidor
    host: 'iesguara.cf',
    port: 3700,
    user: 'profeasir1',
    password: 'profeisa1',
    database: 'profeasir1_Peliculas2',
    connectionLimit: 5
}


app.get('/', function(req, res) {
    res.send('Hola mundo');
    const conexion = mariadb.createPool(datosBD);

})

app.listen(puerto, iniciaServidor());
function iniciaServidor() {
    console.log(`Servidor iniciado en
    http://localhost:${puerto}`);
}
const express = require('express');
const path = require('path');
const fs = require('fs');

const server = express();
server.set('puerto', 3000);

const rutaIndex = path.join(__dirname, '..', 'public', 'index.html');
const rutaCss = path.join(__dirname, '..', 'public', 'style.css');
const rutaAppjs = path.join(__dirname, '..', 'public', 'app.js');
const rutaDatos = path.join(__dirname,'datos.json');

server.get('/', function (req, res) {
    res.sendFile(rutaIndex);
});

server.get('/style.css', function (req, res) {
    res.sendFile(rutaCss);
});

server.get('/app.js', function (req, res) {
    res.sendFile(rutaAppjs);
});

server.get('/api/:propiedad',function (req, res) {
    //console.log(req.params.propiedad);
    let prop = req.params.propiedad;
    let datosTxt = fs.readFileSync(rutaDatos);
    let datos = JSON.parse(datosTxt);
    if(datos.hasOwnProperty(prop)){
        res.send(datos[prop]);
    }else{
        res.send("Error!!!");
    }
})


server.listen(server.get('puerto'), servidorIniciado());
function servidorIniciado() {
    console.log(`Servidor arrancado en:
    http://localhost:${server.get('puerto')}`);
}
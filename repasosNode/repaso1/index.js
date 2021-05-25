const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
 let rutaIndex = path.join(__dirname, 'index.html');
 res.sendFile( rutaIndex );
})

app.get('/clase', (req, res) => {
 res.send('hola clase');
})




app.listen(3000, inicioServidor )

function inicioServidor() {
 console.log (`escuchando en el puerto 3000`);
}
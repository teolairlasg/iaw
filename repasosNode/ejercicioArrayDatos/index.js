const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'plantillasEJS'));

const puerto = 3000;

//LEEMOS EL FICHERO datos.json
//creamos la ruta
let rutaDatos = path.join(__dirname,'datos.json');
//leemos el contenido en texto
let contenido = fs.readFileSync(rutaDatos,'utf-8');
//convertimos el texto a una variable JS con JSON.parse
let datos = JSON.parse(contenido);

app.get('/persona/:id', function (req,res) {
 let id = req.params.id;
 if (id >= 0 && id < datos.length){
  res.render('persona',datos[id]);
 }
 res.send("Error");
})


app.listen(3000, function () {
 console.log(
  `Escuchando en
  http://localhost:3000`
 );
});

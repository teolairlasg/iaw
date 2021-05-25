const express = require('express');
const puerto = 3000;
const app = express();
const fs = require('fs');
const path = require('path');

let mensajes = [];

app.get('/', function (req, res) {
 res.send('hoola mundo');
})

//ruta que al pedir /saludar/nombre devuelva un
// texto que ponga hola nombre siendo nombre un parámetro
// por ejemplo localhost:3000/saludar/teo devuelve
// Hola teo.

app.get('/saludar/:nombre', function (req,res) {
 res.send('Hola '+req.params.nombre);
});

app.get('/recoger/:cadena', function (req,res) {
 let objGuardar = {
  fecha: new Date(),
  mensaje: req.params.cadena,
  ip_emisor: req.ip
 }
 console.log(objGuardar);
 let nombreArchivo =__dirname+'/msg'+objGuardar.fecha+'.json';
 fs.writeFile(nombreArchivo,
              JSON.stringify(objGuardar),
              function () {
                 res.send('ok'); 
              });
});


// ruta /guardarMemoria/:mensaje
// que lo que guarde es un objeto
// json como en la ruta anterior
// en el array mensajes (push)

app.get('/guardarMemoria/:mensaje',function (req,res) {
 let objGuardar = {
  fecha: new Date(),
  mensaje: req.params.mensaje,
  ip_emisor: req.ip
 };
 mensajes.push(objGuardar);
 res.send('ok');
})

// ruta /volcarMemoria que guarde
// todos los mensajes del array mensajes en un fichero json
// que se guarden siempre en el mismo archivo
// registro.json
app.get('/volcarMemoria',function (req,res) {
 let rutaVolcado = path.join(__dirname,'registro','volcado.json');
 fs.writeFileSync(rutaVolcado, JSON.stringify(mensajes));
 res.send('ok');
})


app.listen(3000, function () {
 console.log(
  `Servidor a la escucha en http://localhost:${puerto}`
 );
})
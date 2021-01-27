const express = require('express');
const path = require('path');
//para usar body-parser
const bodyParser = require('body-parser');
const app = express();
app.set('puerto',3000);

app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,"form.html"));
});

app.post('/form', function (req,res) {
  console.log("peticion recibida: "+req.method);
/*
// Método sin libreria body-parser
  let body = '';
  req.on('data', function (dato) {
    body+= dato.toString();
  });
  req.on('end', function () {
    console.log(body);
    res.sendFile(path.join(__dirname,"form.html"));
  }); 
*/

//con body-parser
  let recibido = req.body;
  console.log(`El usuario ha introducido ${recibido.vName} en el campo Nombre y ${recibido.vSurname} en el campo Apellido`);
  res.sendFile(path.join(__dirname,"form.html"));

})


app.listen(app.get('puerto'), iniciarServidor());

function iniciarServidor() {
  console.log(
    `Servidor en http://localhost:${app.get('puerto')}`);
}

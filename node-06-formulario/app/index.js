const express = require('express');
const path = require('path');

const app = express();
app.set('puerto',3000);
// todo usar body Parser y sanitizar datos.
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,"form.html"));
});

app.post('/form', function (req,res) {
  //todo capturar datos
})


app.listen(app.get('puerto'), iniciarServidor());

function iniciarServidor() {
  console.log(
    `Servidor en http://localhost:${app.get('puerto')}`);
}

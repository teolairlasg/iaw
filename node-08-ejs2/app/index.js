const express = require('express');
const app = express();
const path = require('path');

let dirVistas = path.join(__dirname,'vistas');

app.set('puerto', 3000);
app.set('view engine', 'ejs');
app.set('views',dirVistas);

app.get('/', function (req, res) {
 res.render('paginas/inicio',
  { texto: "Hola Mundo", ip: req.ip, ruta: req.path, protocolo: req.protocol, urlBase: req.baseUrl,
  seguro: req.secure });
});

app.get('/style.css', function (req,res) {
  let rutaCSS = path.join(__dirname,'css','style.css');
  res.sendFile(rutaCSS);
})

app.listen(app.get('puerto'),
 function () {
  console.log(
   `App en: http://locahost:${app.get('puerto')}`);
 });
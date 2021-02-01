const express = require('express');
const app = express();

app.set('puerto', 3000);
app.set('view engine', 'ejs');
app.set('views',__dirname+'/vistas')

app.get('/', function (req, res) {

 res.render('paginas/inicio',
  { texto: "Hola Mundo" });
});


app.listen(app.get('puerto'),
 function () {
  console.log(
   `App en: http://locahost:${app.get('puerto')}`);
 });
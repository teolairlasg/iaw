const express = require('express');
const app = express();
const path = require('path');
const puerto = 3000;

let rutaPublic = path.join(__dirname, 'public');
app.use(express.static(rutaPublic));
app.set('view engine', 'ejs');

let datos = {
    'itemsAside': ['main', 'pagina2', 'pagina3', 'pagina4', 'pagina5'],
    'pagina': 'main'
};

app.get('/', function (req, res) {
    datos.pagina='main';
    res.render('index',datos);
})

app.get('/:pag',function (req,res) {
   datos.pagina=req.params.pag;
   res.render('index', datos);
});

app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log(`Servidor iniciado en http://localhost:${puerto}`);
}
const express = require('express');
const app = express();
const path = require('path');
const puerto = 3000;

let rutaPublic = path.join(__dirname, 'public');
app.use(express.static(rutaPublic));
app.set('view engine', 'ejs');

let datos = {
    'itemsAside': ['main', 'pagina2', 'pagina3', 'pagina4']
};

app.get('/', function(req, res) {
    res.render('index', {
        ...datos,
        pagina: 'main'
    });
})

app.get('/:pag', function(req, res) {
    //indexOf me devuelve el índice de un elemento
    //dentro del array. Si no existe devuelve -1
    let main
    if (datos.itemsAside.indexOf(req.params.pag) == -1) {
        main = 'error';
    } else {
        main = req.params.pag;
    }
    res.render('index', {
        ...datos,
        pagina: main
    });
});

app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log(`Servidor iniciado en http://localhost:${puerto}`);
}
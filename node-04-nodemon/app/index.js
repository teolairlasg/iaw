const express = require('express');
const app = express();
const path = require('path');

app.set('puerto', 3000);

app.get('/',
    function (req, res) {
        let pathToIndex =
            path.join(__dirname, "public", "index.html");
        res.sendFile(pathToIndex);
    }
);

app.get('/:nombre',
    function (req, res) {
        let nombreArchivo = req.params.nombre+".html";
        let pathToIndex =
            path.join(__dirname, "public", nombreArchivo);
        res.sendFile(pathToIndex); 
    }
);



app.listen(app.get('puerto'), inicioServidor());

function inicioServidor() {
    console.log(
        `Servidor iniciado en 
http://localhost:${app.get("puerto")}`);
}



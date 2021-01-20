const express = require('express');
const puerto = 3000;
const web = express();
const path = require('path');
const rutaHTML = path.join(__dirname,'html');
web.set('puerto', 3000);

web.get('/',
    function (req, res) {
        res.sendFile(path.join(rutaHTML,'index.html'));
    }
);

web.get('/adios',
    function (req, res) {
        res.sendFile(path.join(rutaHTML,'adios.html'));
    }
);

web.listen(web.get('puerto'),
    function () {
        console.log(
            `Servidor a la escucha en http://localhost:${web.get('puerto')}`
        );
    }
);
const express = require('express');
const puerto = 3000;
const web = express();

web.set('puerto', 3000);

web.get('/',
    function (req, res) {
        res.send('Hola mundo');
    }
);

web.get('/adios',
    function (req, res) {
        res.send('Adiós mundo');
    }
);

web.listen(web.get('puerto'),
    function () {
        console.log(
            `Servidor a la escucha en http://localhost:${web.get('puerto')}`
        );
    }
);
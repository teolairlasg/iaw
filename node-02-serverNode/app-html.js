const http = require('http');

const hostname = "127.0.0.1";
const puerto = 3001;

const servidor = http.createServer(
    //normalmente req (request: petición)
    // y res (response: respuesta)
    function (peticion, respuesta){
        respuesta.statusCode = 200;
        respuesta.setHeader('Content-Type','text/html');
        respuesta.end(
        `<html>
        <head>
            <title>Pagina web</title>
        </head>
        <body><h1>Hola mundo</h1></body>
        </html>`
        );
    }
);

servidor.listen(puerto, hostname,
    function(){
        console.log("El servidor se está ejecutando");
        console.log(`Puerto: ${puerto} - IP: ${hostname}`)
    }
);
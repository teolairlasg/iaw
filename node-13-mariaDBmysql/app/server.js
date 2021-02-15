const express = require('express');
const dotenv = require('dotenv');
const app = express();
const path = require('path');
const puerto = 3000;
const mariadb = require('mariadb');
//Lee las variables del fichero .env
//y las exporta como variables de entorno
// se usa para no exponer las contraseñas en
// el código. Hay que asegurarse de que no subimos
// el fichero .env al repositorio
dotenv.config();
app.set('view engine','ejs');
//Por defecto views tiene que estar en la carpeta de
// proyecto
let dirViews = path.join(__dirname, 'views');
app.set('views',dirViews);
let dirPublic= path.join(__dirname, 'public');
app.use(express.static(dirPublic))
const datosBD = {
    //Dirección del servidor
    host: process.env.BD_HOST,
    port: process.env.BD_PUERTO,
    user: process.env.BD_USUARIO,
    password: process.env.BD_PASS,
    database: process.env.BD_USUARIO + '_' + process.env.BD_SCHEMA,
    connectionLimit: 5
}


app.get('/', function (req, res) {
    const grupoConexion = mariadb.createPool(datosBD);
    grupoConexion.getConnection()
        .then(conexion => {
            console.log("Conectado!", conexion.threadId);
            conexion.query("SELECT * FROM Pelicula")
                .then(filas => {
                    console.log(filas.meta);
                    res.render('index', {datosTabla: filas} );
                })
                .catch(error => {
                    console.log("Error en la consulta", error);
                });
            conexion.release();
        })
        .catch(error => {
            console.log("No conectado", error);
        });
});

app.listen(puerto, iniciaServidor());
function iniciaServidor() {
    console.log(`Servidor iniciado en
    http://localhost:${puerto}`);
}
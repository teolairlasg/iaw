const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const puerto = 3000;

const dirPublic = path.join(__dirname, 'public');

dotenv.config();

const mariadb = require('mariadb');
const datosBD = {
    //Dirección del servidor
    host: process.env.BD_HOST,
    port: process.env.BD_PUERTO,
    user: process.env.BD_USUARIO,
    password: process.env.BD_PASS,
    database: process.env.BD_USUARIO + '_' + process.env.BD_SCHEMA,
    connectionLimit: 5
}

app.use(express.static(dirPublic));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/guardarPeli', function (req, res) {
    console.log(req.body);
    //Recuperar los datos enviados
    const titulo = req.body.nTitulo;
    const duracion = req.body.nDuracion;
    //Conectar con la base de datos
    const grupoConexion = mariadb.createPool(datosBD);
    grupoConexion.getConnection()
        //Ejecutar la consulta de inserción
        .then(conexion => {
            conexion.query("INSERT INTO Pelicula(titulo,duracion,id_Director) VALUES(?,?,?)", [titulo, duracion, 1])
                .then(resultado => {
                    console.log(resultado);
                    conexion.release();
                }).catch(errorConsulta => {
                    console.log(errorConsulta);
                });
        })
        .catch(error => {
            console.log(error);
        });
});

app.post('/guardarPeli2', async function(req, res) {
    console.log(req.body);
    //Recuperar los datos enviados
    const titulo = req.body.nTitulo;
    const duracion = req.body.nDuracion;
    //Conectar con la base de datos
    try {
        const resultado = await insertarPelicula(titulo,duracion);
        console.log(resultado);
        res.send("ok");
    } catch (error) {
        imprimirError(error);
    }
});


async function insertarPelicula(tit, dur){
    const grupoConexion = mariadb.createPool(datosBD);
    const conexion = await grupoConexion.getConnection();
    return conexion.query("INSERT INTO Pelicula(titulo,duracion,id_Director) VALUES(?,?,?)", [tit, dur, 2]);
}


function imprimirError(e) {
    console.log(e);
}

app.listen(puerto, iniciaServidor());
function iniciaServidor() {
    console.log(`Servidor a la escucha en:
    http://localhost:${puerto}`);
}

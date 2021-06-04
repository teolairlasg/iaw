const express = require('express');
const puerto = 3000;
const path = require('path');
// módulo necesario para conectar con BD
// mariaDB. Hay que instalarlo como 
// dependencia npm i mariadb
const mariadb = require('mariadb');
const dotenv = require('dotenv');
const fs = require('fs');
const YAML = require('yaml');

//Esto carga las variables de entorno en .env
dotenv.config();

let rutaPlantillas = path.join(__dirname, 'plantillas');
const app = express();
app.set('view engine', 'ejs');
app.set('views', rutaPlantillas);

const datosBD = {
 //Dirección del servidor
 host: process.env.BD_HOST,
 port: process.env.BD_PUERTO,
 user: process.env.BD_USUARIO,
 password: process.env.BD_PASS,
 database: process.env.BD_SCHEMA,
 connectionLimit: 5
}



app.get('/', function (req, res) {
 const grupoConexion = mariadb.createPool(datosBD);
 grupoConexion.getConnection()
  .then(conexion => {
   console.log("Conectado!", conexion.threadId);
   conexion.query("SELECT * FROM Pelicula WHERE titulo like 'E%'")
    .then(filas => {
     console.log(filas);
     res.render('index', { datosTabla: filas });
    })
    .catch(error => {
     console.log("Error en la consulta", error);
     res.send("Error en la consulta");
    });
   conexion.release();
  })
  .catch(error => {
   console.log("No conectado", error);
   res.send("Error en la conexión");
  });
});

app.get('/guardarDatos',function (req,res) {
 const grupoConexion = mariadb.createPool(datosBD);
 grupoConexion.getConnection()
  .then(conexion => {
   console.log("Conectado!", conexion.threadId);
   conexion.query("SELECT * FROM Pelicula WHERE titulo like 'E%'")
    .then(filas => {
      let texto = JSON.stringify(filas);
      let textoYAML = YAML.stringify(filas);
      let rutaFichero = path.join(__dirname, 'filas.json');
      let rutaFicheroYAML = path.join(__dirname, 'filas.yml');
      fs.writeFileSync(rutaFichero,texto);
      fs.writeFileSync(rutaFicheroYAML,textoYAML);
      res.send(filas);
    })
    .catch(error => {
     console.log("Error en la consulta", error);
     res.send("Error en la consulta");
    });
   conexion.release();
  })
  .catch(error => {
   console.log("No conectado", error);
   res.send("Error en la conexión");
  });
})

app.listen(3000, function () {
 console.log(
  `servidor a la escucha en:
  http://localhost:${puerto}`
 );
});
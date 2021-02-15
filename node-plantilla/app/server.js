const express = require('express');
const path = require('path');

rutaPublic = path.join(__dirname, 'client', 'public');

const app = express();
app.set('host', 'localhost')
app.set('puerto', 3000);
app.use(express.static(rutaPublic));

app.listen(app.get('puerto'), inicioServidor());


function inicioServidor() {
    console.log(`Servidor iniciado en http://${app.get('host')}:${app.get('puerto')}`);
}
const express = require('express');
const app = express();

app.get('/:key/:value',
  function (req, res) {
    let jsonRespuesta = {
      "key": req.params.key,
      "value": req.params.value
    };
    res.json(jsonRespuesta);
  }
);

app.listen(3000, iniciarServidor());

function iniciarServidor() {
  console.log("Servidor iniciado");
}
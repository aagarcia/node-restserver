require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//express tiene su propio bodyParser por si acaso como recomendacion

//configuracion global de rutas
app.use(require('./routes/index'));

//=====conexion a mongodb
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');
});

//=====conexion a mongodb

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto: ', process.env.PORT);
});
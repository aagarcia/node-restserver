const express = require('express');
const fs = require('fs');
const path = require('path');
const { verificaTokenImg } = require('../middlewares/autenticacion');

let app = express();

app.get('/imagen/:tipo/:img', verificaTokenImg, (req, res) => {
    let tipo = req.params.tipo;
    let img = req.params.img;

    let pathImagen = path.resolve(__dirname, `../../uploads/${ tipo }/${ img }`);

    if (fs.existsSync(pathImagen)) {
        //fs.unlinkSync(pathImagen);
        res.sendfile(pathImagen);
    } else {
        let noImagePath = path.resolve(__dirname, '../assets/no-image.jpg');
        //en proximas versiones de node la f es mayuscula, la f minuscula estara deprecada
        res.sendfile(noImagePath);
    }
});

module.exports = app;
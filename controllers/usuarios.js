const { response } = require('express');

const getUsuarios = (req, res = response) => {
    res.json({
       msg: "get controlador api"
    });
}

const postUsuario = (req, res = response) => {
    res.json({
        msg: "post controlador api"
    });
}

const putUsuario = (req, res = response) => {

    const id = req.params.id;

    res.json({
       msg: "put controlador api",
       id
    });
 }

const deleteUsuario = (req, res = response) => {
    res.json({
       msg: "delete controlador api"
    });
 }

 const patchUsuario = (req, res = response) => {
    res.json({
    msg: "patch controlador api"
    });
}

module.exports = {
    getUsuarios,
    postUsuario,
    putUsuario,
    deleteUsuario,
    patchUsuario
}
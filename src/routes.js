//importa express
const express = require('express');

//importa arquivo menu
const Menu = require("../controllers/menu");

//instancia função router
var routes = express.Router();

//define a rota e o controller a ser acessado
routes.get('/menu', Menu.index );

//torna o arquivo exportável
module.exports = routes;
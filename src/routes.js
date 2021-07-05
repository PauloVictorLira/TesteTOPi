//importa express
const express = require('express');

//importa o controller menu
const Menu = require("./controllers/Menu");

//instancia função router
var routes = express.Router();

//define as rotas
routes.get('/home', Menu.index );
routes.post('/home', Menu.index ); //post para o form de pesquisa
//routes.get('/create', Menu.create); //rota usada para criar os registros no banco

//torna o arquivo exportável
module.exports = routes;
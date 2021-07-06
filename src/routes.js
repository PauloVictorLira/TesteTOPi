//importa express
const express = require('express');

//importa o controller menu
const Menu = require( __dirname+"/controllers/menu");

//instancia função router
var routes = express.Router();

//define as rotas
routes.get('/home', Menu.pesquisar); //url digitada no browser
routes.post('/home', Menu.pesquisar); //post para o form de pesquisa

//torna o arquivo exportável
module.exports = routes;
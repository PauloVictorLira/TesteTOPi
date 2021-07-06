//importa os pacotes necessários
const express = require("express");
const mongoose = require("mongoose");
const requireDir = require('require-dir'); //disponibiliza diretórios
// necessário para conseguir interpolar o back no html
const handlebars = require('express-handlebars'); //passar variáveis do back no frontend

//instancia o express
const app = express();

//conexão BD
mongoose.connect("mongodb+srv://admin:admin@cluster0.4sjwu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

//requere o diretório de models
requireDir('./src/models');
//usa o diretório src no frontend (css e js)
app.use(express.static(__dirname + '/src'));

// Configuração pra conseguir acessar os inputs de um form
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// diz que o app usará o arquivo routes para definir as rotas 
app.use("/", require("./src/routes"));

//configuração do handlebars
app.engine( 'handlebars' , handlebars({ 
    defaultLayout: "main", //views/layouts/main será o template html
    runtimeOptions: { // necessário para manipular objetos JSON passados para o html
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }, 
}));
app.set('view engine','handlebars');

//define a porta para o servidor 
// process.env.PORT -> necessário por conta do Heroku
app.listen( process.env.PORT || 3001 , console.log("Server ok"))
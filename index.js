//importa os pacotes necessários
const express = require("express");
const mongoose = require("mongoose");
const requireDir = require('require-dir');
const handlebars = require('express-handlebars'); // necessário para conseguir interpolar o back no html

//instancia o express
const app = express();

//conexão BD
mongoose.connect("mongodb+srv://admin:admin@cluster0.4sjwu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

//requere o diretório de models
requireDir('./src/models');
app.use(express.static(__dirname + '/src'));

// Configuração do bodyParser
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// diz que o app usará o arquivo routes para definir as rotas 
app.use("/", require("./src/routes"));

//configuração do handlebars
app.engine( 'handlebars' , handlebars({ 
    defaultLayout: "main", //views/layouts/main será nosso template html
    runtimeOptions: { // necessário para manipular objetos passados para o html
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }, 
}));
app.set('view engine','handlebars');

//define a porta para o servidor 
// process.env.PORT -> necessário por conta do Heroku
app.listen( process.env.PORT || 3001 )
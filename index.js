//importa o pacote expres
const express = require("express");

//importa o pacote mongoose
const mongoose = require("mongoose");

//instancia o express
const app = express();

//conexão BD
mongoose.connect("mongodb+srv://admin:admin@cluster0.4sjwu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

//responde com uma msg no browser
app.use("/", require("./src/routes"));

//define a porta 3000 do localhost e inicia o servidor
app.listen(3000, () => console.log("servidor up"));
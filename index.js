//importa o pacote expres
const express = require("express");

//instancia o express
const app = express();

//responde com uma msg no browser
app.use("/", require("./src/routes"));

//define a porta 3000 do localhost e inicia o servidor
app.listen(3000, () => console.log("servidor up"));
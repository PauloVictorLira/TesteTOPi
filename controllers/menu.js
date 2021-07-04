//importa o pacote mongoose
const mongoose = require("mongoose");

//instancia a tabela meal
const menu = mongoose.model("meal")

//torna o próprio arquivo (menu.js) em um pacote "exportável"
module.exports = {
    
    //função "index", responde uma msg
    async index(req, res) {
        const meals = await menu.find(req.body);
        return res.json(meals)
    }

};
//torna o próprio arquivo (menu.js) em um pacote "exportável"
module.exports = {
    
    //função "index", responde uma msg
    async index(req, res) {
        return res.json("blz")
    }

};
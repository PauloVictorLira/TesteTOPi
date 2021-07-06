//importa o pacote mongoose
const mongoose = require("mongoose");

//instancia a "tabela/model" meal
const Meal = mongoose.model("Meal")

//torna o próprio arquivo (menu.js) em um pacote "exportável"
module.exports = {
    
    //função assíncrona que retorna a lista de meals
    async pesquisar(req, res) {

      var search = {};
      
      // Verifica se tem input do formulário recebido pelo post
      if( req.body.search ){
         search = {
            // Monta o %LIKE% no banco, i = case-insensitive
            strMeal: {$regex: req.body.search, $options: 'i'}
         }
      }

      // Busca os registros e retorna apenas os campos 'strMeal strCategory strArea strMealThumb strInstructions'
      // Necessário await, por ser uma function async, dessa forma ele aguarda o retorno para seguir para o próxima linha
      const meals = await Meal.find( search , 'strMeal strCategory strArea strMealThumb strInstructions');

      // Renderiza na view list o retorno da busca
      return res.render("list", { meals: meals } );
    }
};
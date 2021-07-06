//Variáveis
var paragrafos = document.querySelectorAll(".card__p");
var cards = document.querySelectorAll(".hidden");
var botaoSection = document.getElementById("meals__btn");
var qntCards = 3;

// Click do botão 'carregar mais'
botaoSection.addEventListener("click", function() {
    carregarCards();
});

// Carrega 3 itens dos cards
function carregarCards(){
    //Percorre os cards
    for( i = 0; i < qntCards; i++){
        var card = cards[i];

        if( card ){
            card.classList.remove('hidden'); // remove a classe hidden, que esconde os cards
        }
    }
    qntCards += 3; //Sempre vai aumentando 3

    var diferencaQnt = qntCards % cards.length;

    // Se todos os cards já foram carregados, remove o botão
    // Quando a diferença é 1 ou 2, simboliza que faltam 1 ou 2 cards ainda para serem mostrados.
    // Quando o valor é 0, significa que não tem mais itens 
    if( cards.length == 0 || (cards.length < qntCards && (  diferencaQnt > 3 ||  diferencaQnt == 0 )) )
        botaoSection.remove();
}

// Chama a função no carregamento da página
carregarCards();
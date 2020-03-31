var initCards = function () {

}


const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'];
const signs = ['♠', '♥', '♦', '♣'];
const allCards = [];

var createCards = function () {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < signs.length; j++) {
            allCards.push({'symbol': signs[j], 'number': numbers[i] });
        }
    }
}

createCards();

console.log(allCards);
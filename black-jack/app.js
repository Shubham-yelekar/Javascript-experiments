
window.addEventListener('DOMContentLoaded', ()=>{
    
let playerCards = []
let dealerCards = []

const newDeck = generateDeck()

DealCard(playerCards, newDeck , "Player")
DealCard(playerCards, newDeck , "Player")
DealCard(dealerCards, newDeck, "Dealer")
DealCard(dealerCards, newDeck, "Dealer")

console.log("Player's Hand:", playerCards);
console.log("Dealer's Hand:", dealerCards);

// console.log("Player's Total:", checkScore(playerCards));
// console.log("Dealer's Total:", checkScore(dealerCards));

while(checkScore(playerCards) < 17) {
    DealCard(playerCards, newDeck , "Player")
}

while(checkScore(dealerCards) < 17) {
    DealCard(dealerCards, newDeck , "Player")
}

const finalPlayerScore = checkScore(playerCards)
const finalDealerScore = checkScore(dealerCards)

if(finalPlayerScore > 21) {
    console.log("Bust! House Wins. Player:", finalPlayerScore, "Dealer:", finalDealerScore);
} else if (finalDealerScore > 21){
    console.log("Dealer Busts! You Win! Player:", finalPlayerScore, "Dealer:", finalDealerScore);
} else if (finalPlayerScore > finalDealerScore){
    console.log("You Win! Player:", finalPlayerScore, "Dealer:", finalDealerScore);
}else if (finalPlayerScore < finalDealerScore) {
    console.log("House Wins. Player:", finalPlayerScore, "Dealer:", finalDealerScore);
} else {
    console.log("It's a Tie! Player:", finalPlayerScore, "Dealer:", finalDealerScore);
}



})


// generate a deck
function generateDeck() {
    const myDeck = []
    const suites = ["Heart", "Spades", "Diamond", "Club"]
    const cards = ["2", "3","4", "5","6", "7", "8","9", "10","Jack", "Queen", "King","Ace"]
  
    for (const card of cards) {
        for(const suite of suites){
            myDeck.push({"card":card, "suite": suite})
        }
    }
    return myDeck
}

// draw a card
    function drawCard(deck){
        const randomIndex = Math.floor(Math.random() * deck.length)   
        // remove that card from the card deck
        return deck.splice(randomIndex, 1)[0]
    }

// Deal 2 cards to player and dealer 

function DealCard(hand, deck, name) {
    const drawnCard = drawCard(deck);
    hand.push(drawnCard)
}

// check score of a hand
function checkScore(hand){
    let total = hand.reduce((acc, card)=> checkValue(card) + acc , 0)
    function checkValue(card){
        if (card.card == "King" || card.card == "Queen" || card.card == "Jack" ){
            return 10
        } else if (card.card == 'Ace'){
            return 1
        } else {
           return Number(card.card)
        }
    }
    return total
}


// Game loop 


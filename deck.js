function createDeck() {
    let suits = ['H', 'C', 'D', 'S'];
    let ranks = ['6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    let deck = [];

    for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j<ranks.length; j++) {
            deck.push(ranks[j] + suits[i]);
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for(let i=0; i<deck.length; i++) {
        let tempCard = deck[i];
        let randomIndex = Math.floor(Math.random() * deck.length);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard;
    }
}

let newDeck = createDeck();
shuffleDeck(newDeck); 
console.log(newDeck);

let newHand1 = newDeck.splice(0,6);
console.log(newHand1);
console.log(newDeck);

let newHand2 = newDeck.splice(0,6);
console.log(newDeck);
console.log(newHand2);
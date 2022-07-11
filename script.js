import Deck from "./deck.js"

const computerCardSlot = document.querySelector('.computer-card-slot')

const deck = new Deck(); 
deck.shuffle()
console.log(deck.cards)

computerCardSlot.appendChild(deck.cards[0].getHTML());

// shuffle deck

// give each player 6 cards

// make the 13th cards suit the trump card

// player 1 puts down any card

// check if card in player 2's hand matches suit and is higher rank

// check if card in player 2's hand holds a trump if not matching the suit

// once player 2 puts down card to beat player 1's hand, then check if player
// 1 has a card has a card in his hand that matches the value, if yes, game continues
// if not the round ends and everything in the play pile gets picked up.




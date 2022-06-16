// main function runs on each player's turn.

// the sequence of actions in the game would follow:

// 1. shuffling of deck
//  shuffle on page load.
// create an array consisting on all the cards? -> 52 cards
// create a random generator function to "shuffle" the cards - perhaps a number generator that randomly selects indexes and push into a new array.

// this picks an indexOf from the array of cards
let randomCardOne = Math.ceil(Math.random() * 52);
let randomCardTwo = Math.ceil(Math.random() * 52);

let cards = [
  "clubs-ace",
  "clubs-2",
  "clubs-3",
  "clubs-4",
  "clubs-5",
  "clubs-6",
  "clubs-7",
  "clubs-8",
  "clubs-9",
  "clubs-10",
  "clubs-jack",
  "clubs-queen",
  "clubs-king",
  "diamonds-ace",
  "diamonds-2",
  "diamonds-3",
  "diamonds-4",
  "diamonds-5",
  "diamonds-6",
  "diamonds-7",
  "diamonds-8",
  "diamonds-9",
  "diamonds-10",
  "diamonds-jack",
  "diamonds-queen",
  "diamonds-king",
  "hearts-ace",
  "hearts-2",
  "hearts-3",
  "hearts-4",
  "hearts-5",
  "hearts-6",
  "hearts-7",
  "hearts-8",
  "hearts-9",
  "hearts-10",
  "hearts-jack",
  "hearts-queen",
  "hearts-king",
  "spades-ace",
  "spades-2",
  "spades-3",
  "spades-4",
  "spades-5",
  "spades-6",
  "spades-7",
  "spades-8",
  "spades-9",
  "spades-10",
  "spades-jack",
  "spades-queen",
  "spades-king",
];

let randomCard = cards[randomCardOne] + " " + cards[randomCardTwo];
console.log(randomCard);

var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};

// 2. user clicks submit to deal cards
// When user click submit, the program gives the player 1 card facing up, then 1 card for the computer face down. The player then receives another card, face up, and then another for the dealer, face up.

//  it's a button
//  you click button, the deck will come up with 2 cards, (ideal scenario is we can see the cards, instead of them telling me what the cards are.)

// 3. the player's hand and computer's hand are analyzed for winning conditions. e.g. blackjack.
// if user has blackjack, a notice will appear above the cards. else proceed to the next step.

// return blackjack if there is an A J Q or K

// 4. the user will decide whether to hit or stand.
// a, either decide by using submit button with input
// b, buttons to decide the choice

// draw or skip

// 5. the cards are analysed for winning/losing conditions.
// 21? bust?

// 6. once the player has decide to end the turn, the computer will now hit or stand automatically based on the game rules.

// 7. the winner of the round will be decided, and the game comes to an end with an option to play another round.

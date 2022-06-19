// main function runs on each player's turn.

// the sequence of actions in the game would follow:

// 1. shuffling of deck

// create another array to be the deck holding shuffled cards

// create variables to hold player and computer card hands

// create an array consisting of 6 decks -> 52 * 6 = 312 cards

// create a random generator function for the shuffle function

// create a shuffle function that diminishes "cards" from the cardCounter every loop run

// reset cardCounter back to 312;

// shuffle on page load.

// 2. user clicks submit to deal cards
// When user click submit, the program gives the player 1 card facing up, then 1 card for the computer face down. The player then receives another card, face up, and then another for the dealer, face up.

// 3. the player's hand and computer's hand are analyzed for winning conditions. e.g. blackjack.
// if user has blackjack, a notice will appear above the cards. else proceed to the next step.

// 4. the user will decide whether to hit or stand.
// a, either decide by using submit button with input
// b, buttons to decide the choice

// 5. the cards are analysed for winning/losing conditions.
// 21? bust?

// 6. once the player has decide to end the turn, the computer will now hit or stand automatically based on the game rules.

// 7. the winner of the round will be decided, and the game comes to an end with an option to play another round.

// -------------------------------------------------

// 1. Game initialization
// - create const for suit and value.

let ace = 11;
let jack = 10;
let queen = 10;
let king = 10;

const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const VALUE = [ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king];
const NAME = [
  "Ace",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Jack",
  "Queen",
  "King",
];

const standardDeck = [];

// - generate a deck using object constructors
let createDeck = function () {
  for (let i = 0; i < 4; i++) {
    // first loop for suits
    standardDeck.push({
      Suit: SUITS[i],
      Value: VALUE[i],
      Name: `${NAME[i]} of ${SUITS[i]}`,
    });

    console.log("standardDeck");
    console.log(standardDeck);

    for (let o = 0; o < 13; o++) {
      // second loop is for attaching value
      // add name property to object
    }
  }
};

var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};

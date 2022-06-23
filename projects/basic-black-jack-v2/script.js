// main function runs on each player's turn.

// the sequence of actions in the game would follow:

// 1. shuffling of deck

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

// 0. Pre-game initialization
// ask for player's name. (main function)
// when user inputs name, welcome the player.
// there will be two buttons, "Start" and "Rules".
// "Rules" button will explain the rules of the game.
// "Start" button will change the game mode to gamePrepare.
// in gamePrepare mode, "Play" and "Add Credits" button will appear
// If there are no credits in the player's account, the "Play" button is disabled.
// the player will be asked to enter a credit amount for waging. (max credit of 1,000)
// when user added credits, enable the "Play" button.
// "Play" button will change the game mode to "gameStart" and initiate 1.
// the player will be able to input a wager amount
// a "Deal" button will appear next to the wager input
// "Deal" button will initiate the 2.

// 1. Game initialization
// - set various game modes.
let gameMode = "";

// - create object to store account username and passwords
const ACCOUNTS = [];

// - give value to face cards.
let ace = 11;
let jack = 10;
let queen = 10;
let king = 10;

// - create const for suit, value and name.
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

// - create holder for unshuffled deck and a shuffled deck.
const unshuffledDeck = [];
const shuffledDeck = [];

// - create a function to generate a deck with the help of objects
let createDeck = function () {
  // first loop for 6 decks (casino standard)
  for (let u = 0; u < 6; u++) {
    // second loop for suits
    for (let i = 0; i < 4; i++) {
      // third loop for adding value and names to cards
      for (let o = 0; o < 13; o++) {
        unshuffledDeck.push({
          suit: SUITS[i],
          value: VALUE[o],
          name: `${NAME[o]} of ${SUITS[i]}`,
        });
      }
    }
  }
};

// create a function to shuffle the standardDeck
let shuffleDeck = function () {
  // this loop will run through the amount of cards in standardDeck. (312)
  for (let i = 0; i < unshuffledDeck.length; i++) {
    // random number generator will assign random objects to the shuffled deck. (shuffling)
    let shuffle = Math.floor(Math.random() * unshuffledDeck.length);
    shuffledDeck.push(unshuffledDeck[shuffle]);
  }
};

// 2.

var main = function (input1, input2) {
  // game mode = "login"
  if (gameMode == "login") {
    userName = input1;
    password = input2;

    // check if username and password matches

    // if account list items matches username and password, log in, else return
    // "incorrect username or password"
    if (userName) return alert("login succeed");
  }

  if (gameMode == "signUp") {
    userName = input1;
    password = input2;

    // check if username is in the database

    // if username is not registered, add username to the list

    // otherwise, reject username. "choose another username"

    return alert("sign up succeed");
  }

  if (gameMode == "gamePrepare") {
  }

  if (gameMode == "gameStart") {
  }

  let result = userName + password;
  return result;
};

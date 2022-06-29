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
// in gamePrepare mode, "Play" and "Top up" button will appear
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
let ACCOUNTS = [
  {
    username: "userName",
    password: "passWord",
  },
];

// store player balance and number of bets
let playerBalance = 0;
let playerBetTimes = 0;
let currentBet = 0;

// store player and dealer's hand
let playerHand = [];
let dealerHand = [];

// store player and dealer's deal  ( -1 is the new 0)
let playerDealCount = -1;
let dealerDealCount = -1;

// - card images
let cardBackImg = document.createElement("div");
cardBackImg.innerHTML = '<img src="./images/back-of-card.png">';

// - give value to face cards.
let ace = 11;
let jack = 10;
let queen = 10;
let king = 10;

// - create const for suit, value and name.
const SUITS = ["clubs", "diamonds", "hearts", "spades"];
const VALUE = [ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king];
const NAME = [
  "ace",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "jack",
  "queen",
  "king",
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
          name: `${NAME[o]}-of-${SUITS[i]}`,
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

let initializeGame = function () {
  // hide visible buttons, admin message display "Welcome user, select a bet amount.
  document.getElementById("div-containers").style.backgroundImage =
    "url('./images/blackjack-table-cloth.jpg')";
  // fade out start button, keep back and topup buttons add a deal button.

  document.getElementById("start-button").style.display = "none";
  document.getElementById("top-up-button").style.display = "none";
  document.getElementById("rules-button").style.display = "none";
  document.getElementById("admin-message").style.display = "none";
  // change bg to blackjack table mat
  // show an input to enter bet amount
  document.getElementById("bet-input-container").style.display = "block";
  document.getElementById("deal-button").style.display = "inline-block";
  document.getElementById("back-button").style.display = "inline-block";

  // switch off late game message
  document.getElementById("result-show").style.display = "none";
};

let dealCards = function () {
  // distribute cards to player and dealer accordingly
  if (gameMode == "first-turn") {
    playerHand[playerDealCount] = shuffledDeck.shift();
    playerDealCount += 1;

    document.getElementById("card-placement").style.display = "flex";
    document.getElementById("player-first-hand").style.backgroundImage =
      "url('./images/back-of-card.png')";

    setTimeout(function () {
      document.getElementById("player-first-hand").style.transform =
        "rotateY(180deg)";
      document.getElementById("player-first-hand").style.opacity = "100%";
      document.getElementById(
        "player-first-hand"
      ).style.backgroundImage = `url('./images/${
        playerHand[playerDealCount - 1].name
      }.png')`;

      console.log(playerHand);

      setTimeout(function () {
        dealerHand[dealerDealCount] = shuffledDeck.shift();
        dealerDealCount += 1;

        document.getElementById("dealer-first-hand").style.backgroundImage =
          "url('./images/back-of-card.png')";

        setTimeout(function () {
          document.getElementById("dealer-first-hand").style.transform =
            "rotateY(180deg)";
          document.getElementById("dealer-first-hand").style.opacity = "100%";
          document.getElementById(
            "dealer-first-hand"
          ).style.backgroundImage = `url('./images/${
            dealerHand[dealerDealCount - 1].name
          }.png')`;

          console.log(dealerHand);

          setTimeout(function () {
            playerHand[playerDealCount] = shuffledDeck.shift();
            playerDealCount += 1;

            document.getElementById(
              "player-second-hand"
            ).style.backgroundImage = "url('./images/back-of-card.png')";

            setTimeout(function () {
              document.getElementById("player-second-hand").style.transform =
                "rotateY(180deg)";
              document.getElementById("player-second-hand").style.opacity =
                "100%";
              document.getElementById(
                "player-second-hand"
              ).style.backgroundImage = `url('./images/${
                playerHand[playerDealCount - 1].name
              }.png')`;

              console.log(playerHand);

              setTimeout(function () {
                dealerHand[dealerDealCount] = shuffledDeck.shift();
                dealerDealCount += 1;

                document.getElementById(
                  "dealer-second-hand"
                ).style.backgroundImage = "url('./images/back-of-card.png')";

                setTimeout(function () {
                  document.getElementById("dealer-second-hand").style.opacity =
                    "100%";

                  console.log(dealerHand);

                  setTimeout(function () {
                    gameMode = "player-turn";

                    let playerScore = document.getElementById("player-score");

                    document.getElementById("player-score").style.opacity =
                      "100%";

                    document.getElementById("dealer-score").style.opacity =
                      "100%";

                    if (playerHand[-1].value + playerHand[0].value == 21) {
                      playerScore.innerText = `BJ`;

                      if (dealerHand[-1].value + dealerHand[0].value == 21) {
                        dealerScore.innerText = `BJ`;

                        document.getElementById("result-show").style.display =
                          "block";

                        let resultShow = document.getElementById("result-show");
                        resultShow.innerText =
                          "Draw! Both sides drew Black Jack!";

                        // play again? or go back button.
                        document.getElementById("play-button").style.display =
                          "inline-block";
                        document.getElementById("return-button").style.display =
                          "inline-block";

                        playerDealCount = -1;
                        dealerDealCount = -1;
                        return;
                      } else {
                        document.getElementById("result-show").style.display =
                          "block";

                        let resultShow = document.getElementById("result-show");
                        resultShow.innerText = `You won ${
                          currentBet * 2
                        } credits with Black Jack!`;

                        // play again? or go back button.
                        document.getElementById("play-button").style.display =
                          "inline-block";
                        document.getElementById("return-button").style.display =
                          "inline-block";

                        playerDealCount = -1;
                        dealerDealCount = -1;
                        return;
                      }
                    } else if (dealerHand[-1].value == 10) {
                      if (dealerHand[-1].value + dealerHand[0].value == 21) {
                        let dealerScore =
                          document.getElementById("dealer-score");
                        dealerScore.innerText = `BJ`;
                        if (
                          dealerHand[-1].value + dealerHand[0].value >
                          playerHand[-1].value + playerHand[0].value
                        ) {
                          document.getElementById("result-show").style.display =
                            "block";

                          let resultShow =
                            document.getElementById("result-show");
                          resultShow.innerText = `Dealer wins with Black Jack!`;

                          // play again? or go back button.
                          document.getElementById("play-button").style.display =
                            "inline-block";
                          document.getElementById(
                            "return-button"
                          ).style.display = "inline-block";

                          playerDealCount = -1;
                          dealerDealCount = -1;
                          return;
                        } else {
                          playerScore.innerText = `BJ`;

                          document.getElementById("result-show").style.display =
                            "block";

                          let resultShow =
                            document.getElementById("result-show");
                          resultShow.innerText =
                            "Draw! Both sides drew Black Jack!";

                          // play again? or go back button.
                          document.getElementById("play-button").style.display =
                            "inline-block";
                          document.getElementById(
                            "return-button"
                          ).style.display = "inline-block";

                          playerDealCount = -1;
                          dealerDealCount = -1;
                          return;
                        }
                      } else {
                        playerScore.innerText = `${
                          playerHand[-1].value + playerHand[0].value
                        }`;

                        // Double down, Hit or Stand button.
                        document.getElementById("double-button").style.display =
                          "inline-block";
                        document.getElementById("hit-button").style.display =
                          "inline-block";
                        document.getElementById("stand-button").style.display =
                          "inline-block";

                        return;
                      }
                    } else {
                      playerScore.innerText = `${
                        playerHand[-1].value + playerHand[0].value
                      }`;

                      // Double down, Hit or Stand button.
                      document.getElementById("double-button").style.display =
                        "inline-block";
                      document.getElementById("hit-button").style.display =
                        "inline-block";
                      document.getElementById("stand-button").style.display =
                        "inline-block";

                      return;
                    }
                  }, 500);
                }, 500);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }
};

var main = function (input1, input2) {
  console.log("main function is running");
  console.log("gamemode is " + gameMode);

  // game mode = "login"
  if (gameMode == "login") {
    let userName = input1;
    let passWord = input2;

    // check if username and password matches
    for (let i = 0; i <= ACCOUNTS.length; i++) {
      if (
        userName == ACCOUNTS[i].username &&
        passWord == ACCOUNTS[i].password
      ) {
        document.getElementById("login-signup-input-container").style.display =
          "none";
        document.getElementById("login-button").style.display = "none";
        document.getElementById("sign-up-button").style.display = "none";

        document.getElementById("admin-message").style.display = "block";
        let p = document.getElementById("admin-message");
        p.innerText = `Signed in successfully!`;

        p.style = "revert";
        p.style.fontSize = "1.2rem";

        // gamemode = "gamePrepare"
        gameMode == "gamePrepare";

        document.getElementById("start-button").style.display = "inline-block";
        document.getElementById("top-up-button").style.display = "inline-block";
        document.getElementById("rules-button").style.display = "inline-block";

        setTimeout(function () {
          let p = document.getElementById("admin-message");
          p.style.fontSize = "0.8rem";
          p.innerText = `Click the start button to play.
          (There must be credits in your balance to begin playing.)

          Click the Top up button to add credits to your bankroll.

          Click the Rules button to view the rules of Blackjack.`;
        }, 0);

        // show balance and username
        document.getElementById("account-details-div").style.display = "block";
        let userBalance = document.getElementById("credit-balance-div");
        userBalance.innerText = `Balance: ${playerBalance}`;

        let accountName = document.getElementById("account-name-div");
        accountName.innerText = `User: ${input1}`;

        return console.log("Signed in successfully.");
      } else {
        document.getElementById("admin-message").style.display = "block";
        let p = document.getElementById("admin-message");
        p.innerText = "Incorrect username or password.";

        // styling
        p.style.color = "red";
        p.style.fontSize = "small";
        p.style.backgroundColor = "whitesmoke";
        p.style.borderRadius = "5px";
        p.style.padding = "5px 10px 5px 10px";
        p.style.margin = "10px";

        return console.log("Incorrect username or password.");
      }
      // if account list items matches username and password, log in, else return
      // "incorrect username or password"
    }
  }

  // gamemode = "signup"
  if (gameMode == "signUp") {
    console.log("signUp mode is running");

    let userName = input1;
    let passWord = input2;

    // check if username is in the database
    for (let i = 0; i <= ACCOUNTS.length; i++) {
      specialCharCheck = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if (userName == ACCOUNTS[i].username) {
        // if username is in the database, reject account creation
        return console.log(
          "This username is already registered, choose another."
        );
      } else if (userName.length < 4) {
        document.getElementById("admin-message").style.display = "block";
        let p = document.getElementById("admin-message");
        p.innerText = "Please input a username longer than 4 characters.";

        // styling
        p.style.color = "red";
        p.style.fontSize = "small";
        p.style.backgroundColor = "whitesmoke";
        p.style.borderRadius = "5px";
        p.style.padding = "5px 10px 5px 10px";
        p.style.margin = "10px";

        return console.log("Please input a username longer than 4 characters.");
      } else if (specialCharCheck.test(userName)) {
        document.getElementById("admin-message").style.display = "block";
        let p = document.getElementById("admin-message");
        p.innerText =
          "Please input a username without special characters or spaces.";

        // styling
        p.style.color = "red";
        p.style.fontSize = "small";
        p.style.backgroundColor = "whitesmoke";
        p.style.borderRadius = "5px";
        p.style.padding = "5px 10px 5px 10px";
        p.style.margin = "10px";

        return console.log(
          "Please input a username without special characters or spaces."
        );
      } else {
        if (passWord.length < 4) {
          document.getElementById("admin-message").style.display = "block";
          let p = document.getElementById("admin-message");
          p.innerText = "Your password must be longer than 4 characters.";

          // styling
          p.style.color = "red";
          p.style.fontSize = "small";
          p.style.backgroundColor = "whitesmoke";
          p.style.borderRadius = "5px";
          p.style.padding = "5px 10px 5px 10px";
          p.style.margin = "10px";

          return console.log("Your password must be longer than 4 characters.");
        }

        ACCOUNTS.push({
          username: userName,
          password: passWord,
        });

        document.getElementById("login-signup-input-container").style.display =
          "none";
        document.getElementById("login-button").style.display = "none";
        document.getElementById("sign-up-button").style.display = "none";

        document.getElementById("admin-message").style.display = "block";
        let p = document.getElementById("admin-message");
        p.innerText = `Account registered successfully!
        You are now signed in.`;

        p.style = "revert";
        p.style.fontSize = "1.2rem";

        // gamemode = "gamePrepare"
        gameMode = "gamePrepare";

        document.getElementById("start-button").style.display = "inline-block";
        document.getElementById("top-up-button").style.display = "inline-block";
        document.getElementById("rules-button").style.display = "inline-block";

        setTimeout(function () {
          let p = document.getElementById("admin-message");
          p.style.fontSize = "0.8rem";
          p.innerText = `Click the start button to play.
          (There must be credits in your balance to begin playing.)

          Click the Top up button to add credits to your bankroll.

          Click the Rules button to view the rules of Blackjack.`;
        }, 0);

        // show balance and username
        document.getElementById("account-details-div").style.display = "block";
        let userBalance = document.getElementById("credit-balance-div");
        userBalance.innerText = `Balance: ${playerBalance}`;

        let accountName = document.getElementById("account-name-div");
        accountName.innerText = `User: ${input1}`;

        return console.log("Account successfully registered!");
      }
    }

    // if username is not registered, add username to the list

    // otherwise, reject username. "choose another username"
  }

  if (gameMode == "gameStart") {
    console.log(gameMode);
    let playerBet = document.querySelector("#input-field-bet");
    let playerBal = document.querySelector("#credit-balance-div");

    if (
      isNaN(playerBet.value) ||
      playerBet.value == "" ||
      playerBet.value == 0 ||
      playerBet.value < 0
    ) {
      document.getElementById("admin-message").style.display = "block";
      let p = document.getElementById("admin-message");
      p.innerText = `Invalid input.`;

      // styling
      p.style.color = "red";
      p.style.fontSize = "small";
      p.style.backgroundColor = "whitesmoke";
      p.style.borderRadius = "5px";
      p.style.padding = "5px 10px 5px 10px";
      p.style.margin = "10px";

      return console.log("Invalid input.");
    }

    if (playerBalance - playerBet.value < 0) {
      // if bet is more than balance
      document.getElementById("admin-message").style.display = "block";
      let p = document.getElementById("admin-message");
      p.innerText = `You don't have enough credits,
        top up first before playing.`;

      // styling
      p.style.color = "red";
      p.style.fontSize = "small";
      p.style.backgroundColor = "whitesmoke";
      p.style.borderRadius = "5px";
      p.style.padding = "5px 10px 5px 10px";
      p.style.margin = "10px";

      return console.log(
        "You don't have enough credits, top up first before playing."
      );
    }

    if (playerBalance - playerBet.value >= 0) {
      playerBetTimes += 1;

      document.getElementById("admin-message").style.display = "block";
      let p = document.getElementById("admin-message");
      p.style = "revert";
      p.style.fontSize = "1rem";
      p.innerText = ``;

      // if bet is valid for first turn & first turn + first bet
      setTimeout(function () {
        currentBet = playerBet.value;
        p.innerText = `Bet validated...`;
      }, 600);

      // if it's player's first bet
      if (playerBetTimes == 1) {
        setTimeout(function () {
          p.innerText = `First bet initialization...`;
          setTimeout(function () {
            p.innerText = `Building deck...`;
            setTimeout(function () {
              p.innerText = `Shuffling deck...`;
              shuffleDeck();
              gameMode = "first-turn";
              dealCards();
              setTimeout(function () {
                document.getElementById("admin-message").style.display = "none";
                p.innerText = "";
              }, 1200);
            }, 1200);
            createDeck();
          }, 1200);
        }, 1800);
      } else {
        gameMode = "first-turn";
        dealCards();
      }

      playerBalance -= playerBet.value;
      playerBal.innerText = `Balance: ${playerBalance}`;

      document.getElementById("deal-button").style.display = "none";
      document.getElementById("back-button").style.display = "none";
      document.getElementById("input-field-bet").style.display = "none";
      document.getElementById("bet-input-container").style.display = "none";

      return console.log("game start.");
    }
  }

  if (gameMode == "player-turn") {
    if (input1 == "double") {
      document.getElementById("double-button").style.display = "none";
      document.getElementById("hit-button").style.display = "none";
      document.getElementById("stand-button").style.display = "none";

      let playerScore = document.getElementById("player-score");
      // draw a card.
      playerHand[playerDealCount] = shuffledDeck.shift();
      playerDealCount += 1;

      document.getElementById("player-third-hand").style.backgroundImage =
        "url('./images/back-of-card.png')";

      setTimeout(function () {
        document.getElementById("player-third-hand").style.transform =
          "rotateY(180deg)";
        document.getElementById("player-third-hand").style.opacity = "100%";
        document.getElementById(
          "player-third-hand"
        ).style.backgroundImage = `url('./images/${
          playerHand[playerDealCount - 1].name
        }.png')`;

        console.log(playerHand);
        setTimeout(function () {
          // check if ace is in play, check if value is over 21, reduce ace value to 1. end the turn.
          for (let i = -1; i < playerHand.length; i++) {
            if (playerHand[i].SUITS == "ace") {
              if (
                playerHand[-1].value +
                  playerHand[0].value +
                  playerHand[1].value >
                21
              ) {
                playerHand[i].value = 1;
              }
            }
          }

          if (
            playerHand[-1].value + playerHand[0].value + playerHand[1].value >
            21
          ) {
            playerScore.innerText = "BUST";

            document.getElementById("result-show").style.display = "block";
            let resultShow = document.getElementById("result-show");
            resultShow.innerText = `BUST!`;

            // play again? or go back button.
            document.getElementById("play-button").style.display =
              "inline-block";
            document.getElementById("return-button").style.display =
              "inline-block";

            playerDealCount = -1;
            dealerDealCount = -1;

            return;
          }
          // else, end the turn
          playerScore.innerText = `${
            playerHand[-1].value + playerHand[0].value + playerHand[1].value
          }`;

          document.getElementById("result-show").style.display = "block";
          let resultShow = document.getElementById("result-show");
          resultShow.innerText = `Dealer's turn`;
          return;
        }, 500);
      }, 500);
      // else if ace is not in play, check if value is over 21, bust. end the turn.

      return;
    } else if (input1 == "hit") {
      return;
    } else if (input1 == "stand") {
      return;
    }
  }
};

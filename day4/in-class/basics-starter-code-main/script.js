// create a game where a player must correctly guess secret words to win.

// 3 secret words, "banana", "apple", "orange"

// must guess correctly twice in total.

// must show guessed words, secret word, remaining guesses to win.

let wins = 0;
let guessToWin = 2;
let numberGenerator;
// create array to store secret words.
let secretArray = ["banana", "apple", "orange"];
let holdNumber;
let holdArray;

let secretWordGame = function (guessWord) {
  // if wins needed left 0. stop the game
  console.log(secretArray.length);

  if (guessToWin == 0) {
    return `STOP PLAYING, YOU ALREADY WON!`;
  }

  // create number generator.

  if (secretArray.length == 2) {
    numberGenerator = Math.floor(Math.random() * 2);
    console.log("2nd");
  } else {
    numberGenerator = Math.floor(Math.random() * 3);
    holdNumber = numberGenerator;
  }

  // if condition to check whether the player guess correctly
  let chosenWord = secretArray[numberGenerator];

  if (chosenWord == guessWord) {
    holdArray = secretArray[holdNumber];
    wins += 1;

    if (guessToWin > 0) {
      guessToWin -= 1;
    }

    if (wins == 2) {
      let result = `Congrats! Your guess word is ${guessWord}. You've guessed the secret word ${chosenWord}! You won the game! You don't need to guess anymore!`;

      return result;
    }

    // Secret words cannot be repeated 2 guesses in a row.

    secretArray.splice(holdNumber, 1);
    console.log(secretArray);

    let result = `Congrats! Your guess word is ${guessWord}. You've guessed the secret word ${chosenWord}! You need ${guessToWin} more guesses to win the game!`;

    return result;
  } else {
    if (guessToWin == 1) {
      secretArray.push(holdArray);
      console.log(secretArray);
    }

    if (wins > 0) {
      wins -= 1;
    }

    if (guessToWin < 2) {
      guessToWin += 1;
    }
    let result = `HAHA WRONG! You can guess again! Your guess word is ${guessWord}. the secret word ${chosenWord}! You need ${guessToWin} more guesses to win the game!`;

    return result;
  }
};

// var generateHand = function () {
//   // declare an array to store the possible outputs
//   const hand = ["scissors", "paper", "stone"]

//   // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 3.
//   var randomDecimal = Math.random() * 3;

//   // Remove the decimal with the floor operation.
//   // This will be an integer from 0 to 2 inclusive.
//   var randomInteger = Math.floor(randomDecimal);

//   return hand[randomInteger];

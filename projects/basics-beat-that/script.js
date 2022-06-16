// 2 player game
// game mode starts with rolling
// game prompts the first player to click the submit button
// when a player clicks submit, game rolls 2 dice and shows it. Game mode switches to selecting
// the first player then picks the order of the dice they want
// once the first player picks the order of the dice, the game will then prompt the second player to click the submit button
// upon clicking the submit button, the game will roll 2 dice and show it.
// the second player will then pick the order of the dice they want
// once choosing the order of dice, the number of both players will be compared and the higher number wins.

// declare game mode
let gameMode = "rolling";
// declare player number
let playerNumber = 1;
// declare global array for player one and two, and initial dice rolls for storage of value
let diceRolls = [];
let playerOneRolls = [];
let playerTwoRolls = [];

// create a variable to hold the initial player order
let playerOrder;
let diceRollOne;
let diceRollTwo;

let main = function (input) {
  // check game mode for rolling
  if (gameMode == "rolling") {
    // game rolls 2 six-sided die
    diceRollOne = Math.ceil(Math.random() * 6);
    diceRollTwo = Math.ceil(Math.random() * 6);

    // store the number in an array for two dice rolls
    diceRolls.push(diceRollOne, diceRollTwo);
    console.log(diceRolls);

    // switch game mode to selecting
    gameMode = "selecting";
    console.log(gameMode);

    // game shows the dice rolls to the player
    let result = `Player ${playerNumber} rolls:<br>
  <br>
  Dice one: ${diceRollOne}<br>
  <br>
  Dice two: ${diceRollTwo}<br>
  <br>
  Please input "1" to select the first die as the first in order.
  <br><br>
  OR
  <br><br>
  Input "2" to select the second die as the first in order.`;

    return result;
  }

  // check game mode for selecting
  if (gameMode == "selecting") {
    // check which die did the player choose
    if (input == "1") {
      // assign the first die as the first in order
      playerOrder = String(diceRolls[0]) + String(diceRolls[1]);
    } else if (input == "2") {
      playerOrder = String(diceRolls[1]) + String(diceRolls[0]);
    } else {
      return `Please enter "1" or "2" only.<br>
  <br>
  Dice one: ${diceRollOne}<br>
  <br>
  Dice two: ${diceRollTwo}`;
    }

    // check which player is playing the game

    if (playerNumber == 1) {
      playerOneRolls = playerOrder;
      let result = `Player One has got a score of ${playerOneRolls}. It is player Two's turn to roll the dice!`;

      // switch mode to rolling
      gameMode = "rolling";
      console.log(gameMode);

      // reset diceRolls array
      diceRolls = [];

      // add 1 to playerNumber to switch to player two
      playerNumber += 1;

      return result;
    } else {
      playerTwoRolls = playerOrder;
      let result = `Player Two has got a score of ${playerTwoRolls}. Click submit again to reveal the winner!`;

      gameMode = "results";
      console.log(gameMode);

      return result;
    }
  }

  if (gameMode == "results") {
    let winningScore;

    if (playerOneRolls > playerTwoRolls) {
      winningScore = `The winner is player One with the score of ${playerOneRolls} beating player Two with the score of ${playerTwoRolls}!<br><br>
      Hit the submit button again to reset the game!`;

      gameMode = "reset";
      console.log(gameMode);

      return winningScore;
    } else if (playerTwoRolls > playerOneRolls) {
      winningScore = `The winner is player Two with the score of ${playerTwoRolls} beating player One with the score of ${playerOneRolls}!<br><br>
      Hit the submit button again to reset the game!`;

      gameMode = "reset";
      console.log(gameMode);

      return winningScore;
    } else {
      winningScore = `The result is a draw with both players rolling the score of ${playerOneRolls}!<br><br>
      Hit the submit button again to reset the game!`;

      gameMode = "reset";
      console.log(gameMode);

      return winningScore;
    }
  }

  // add a reset condition when the game ends
  if (gameMode == "reset") {
    gameMode = "rolling";
    input.disabled = true;
    input.value = "Click the submit button to roll the dice.";

    playerNumber = 1;
    diceRolls = [];
    playerOneRolls = [];
    playerTwoRolls = [];

    return `New game started! It is player One's turn! Click the submit button to roll the dice.`;
  }
};

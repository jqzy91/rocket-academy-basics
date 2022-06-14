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
// declare global array for player one and two
let playerOneRolls = [];
let playerTwoRolls = [];

let main = function (input) {
  // check game mode for rolling
  if (gameMode == "rolling") {
    // game rolls 2 six-sided die
    let diceRollOne = Math.ceil(Math.random() * 6);
    let diceRollTwo = Math.ceil(Math.random() * 6);

    // store the number in an array for two dice rolls
    let diceRolls = [];
    diceRolls.push(diceRollOne, diceRollTwo);
    console.log(diceRolls);

    // switch game mode to selecting
    gameMode = "selecting";

    // game shows the dice rolls to the player
    let result = `Player ${playerNumber} rolls:<br>
  <br>
  Dice One: ${diceRollOne}<br>
  <br>
  Dice Two: ${diceRollTwo}<br>
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
      // check which player does the rolls belong to
      if ()
    }
  }
};

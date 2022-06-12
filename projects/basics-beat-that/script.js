//  Project Beat That!

// There are 2 players, turn based.

// roll 2 dice, then decide if the order of the dice.

// let rollingDice = function () {
//   let diceRoll = Math.ceil(Math.random() * 6);
//   let diceRollTwo = Math.ceil(Math.random() * 6);

//   var result = [diceRoll, diceRollTwo];

//   return result;
// };

// let playerChoice = function (input) {
//   let playerDice = rollingDice();
//   let firstDice;
//   let secondDice;

//   input == "first dice"
//     ? (firstDice = playerDice[0])
//     : (firstDice = playerDice[1]);

//   firstDice == playerDice[0]
//     ? (secondDice = playerDice[1])
//     : (secondDice = playerDice[0]);

//   return `${firstDice}${secondDice}`;
// };

// let win = function (playerOneInput, playerTwoInput) {
//   let playerOneER = playerChoice(playerOneInput);
//   let playerTwoER = playerChoice(playerTwoInput);

//   if (Number(playerOneER) > Number(playerTwoER)) {
//     return `Player one winz, ${playerOneER} is more than ${playerTwoER}.`;
//   } else if (Number(playerOneER) == Number(playerTwoER)) {
//     return `Drawz, ${playerOneER} is equals to ${playerTwoER}.`;
//   } else {
//     return `Player two winz, ${playerTwoER} is more than ${playerOneER}.`;
//   }
// };

// let dice = rollingDice();

// 2 players, take turns

// when a player clicks submit, game will roll 2 dice and return 2 dice rolls.

// the player will then select the order of the dice roll. (either 1st or 2nd dice)

// the next player will then click submit, and the whole rolling dice process repeats.

// once the second player has chosen the order, the player with the higher combined number wins.

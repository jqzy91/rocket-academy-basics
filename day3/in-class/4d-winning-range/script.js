// Create a version of 4D where the player wins if they guess within 1000 (above or below) of the winning 4-digit number. consider using comparison operators such as less than (<) and greater than (>).

// create a function that the user will input a number.

var playFourDigitGame = function (luckyNumber) {
  // the function will generate a number range, in this case 0 - 10000.
  var generateNumber = Math.floor(Math.random() * 10001);

  // create variable for result assumming the user has loss.

  var result = `The winning number is ${generateNumber}, you picked ${luckyNumber}. Sorry, you did not win this time!`;

  // the user's input will be compared against the generated number, if it is less than or greater than the generated number by 1000, the user wins. Else, the user loses.

  if (
    (luckyNumber >= generateNumber && luckyNumber <= generateNumber + 1000) ||
    (luckyNumber <= generateNumber && luckyNumber >= generateNumber + 1000)
  ) {
    result = `The winning number is ${generateNumber}, you picked ${luckyNumber}. Congratulations!`;
    return result;
  }

  // return result for loss if luckyNumber did not win.
  return result;
};

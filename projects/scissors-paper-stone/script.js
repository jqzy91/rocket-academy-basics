// Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.

// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

// User input has to be either scissors, paper or stone.

// output should be a message indicating the player's choice vs the computer generated choice and state a winner according to the rules.

// computer generated choice should be a random integer from 1 to 3. 1 being scissor, 2 being paper, 3 being stone.

// prompt for player's name

let playerName = prompt("What is your name?", "");


// global variables: userScore, computerScore, drawScore

let userScore = 0;
let computerScore = 0;
let drawScore = 0;

let playSPS = function (userChoice) {
  // assign user input as player choice, and run computer random number generator, random number assigned to computer choice.
  let playerChoice = userChoice;
  let computerChoice = cpuChoice();

  // draw conditions

  let result = `${playerName} chose ${playerChoice} against the computer's ${computerChoice}! It's a draw!`;

  // input validation

  if (
    playerChoice == "scissors" ||
    playerChoice == "paper" ||
    playerChoice == "stone"
  ) {
    console.log(`Valid input ${playerChoice}`);
  } else {
    return "Please choose scissors, paper or stone.";
  }

  // player round win conditions
  if (playerChoice == "scissors" && computerChoice == "paper") {
    result = `${playerName} chose ${playerChoice} against the computer's ${computerChoice}! You won!`;
    userScore += 1;
  } else if (playerChoice == "paper" && computerChoice == "stone") {
    result = `${playerName} chose ${playerChoice} against the computer's ${computerChoice}! You won!`;
    userScore += 1;
  } else if (playerChoice == "stone" && computerChoice == "scissors") {
    result = `${playerName} chose ${playerChoice} against the computer's ${computerChoice}! You won!`;
    userScore += 1;
  }

  // player lose conditions

  if (playerChoice == "scissors" && computerChoice == "stone") {
    result = `${playerName} chose ${playerChoice} against the computer's ${computerChoice}! You lost!`;
    computerScore += 1;
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    result = `${playerName} chose ${playerChoice} against the computer's ${computerChoice}! You lost!`;
    computerScore += 1;
  } else if (playerChoice == "stone" && computerChoice == "paper") {
    result = `${playerName} chose ${playerChoice} against the computer's ${computerChoice}! You lost!`;
    computerScore += 1;
  }

  // game won / loss conditions

  if (userScore == 5) {
    let submitButton = document.querySelector("#submit-button");
    submitButton.disabled = true;
    return `${playerName} was the first to reach the score of 5! ${playerName} is the winner!`;
  } else if (computerScore == 5) {
    let submitButton = document.querySelector("#submit-button");
    submitButton.disabled = true;
    return `The computer managed to be the first to reach the score of 5! ${playerName} have lost!`;
  }

  // if draw, drawScore += 1;

  if (userChoice == computerChoice) {
    drawScore += 1;
  }

  return result;
};

// computer choice

let cpuChoice = function () {
  let randomNumber = Math.ceil(Math.random() * 3);

  if (randomNumber == 1) {
    let result = "scissors";
    return result;
  } else if (randomNumber == 2) {
    let result = "paper";
    return result;
  } else if (randomNumber == 3) {
    let result = "stone";
    return result;
  }
};

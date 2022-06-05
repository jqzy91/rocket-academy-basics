// Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.

// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

// User input has to be either scissors, paper or stone.

// output should be a message indicating the player's choice vs the computer generated choice and state a winner according to the rules.

// computer generated choice should be a random integer from 1 to 3. 1 being scissor, 2 being paper, 3 being stone.

// global variables: userScore, computerScore, totalRounds, drawScore

let userScore = 0;
let computerScore = 0;
let totalRounds = 0;
let drawScore = 0;

let playSPS = function (userChoice) {
  let playerChoice = userChoice;
  let computerChoice = cpuChoice();

  let result = `You chose ${playerChoice} against the computer's ${computerChoice}! It's a draw!`;

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

  // player win conditions
  if (playerChoice == "scissors" && computerChoice == "paper") {
    result = `You chose ${playerChoice} against the computer's ${computerChoice}! You won!`;
    userScore += 1;
    totalRounds += 1;
    return result;
  } else if (playerChoice == "paper" && computerChoice == "stone") {
    result = `You chose ${playerChoice} against the computer's ${computerChoice}! You won!`;
    userScore += 1;
    totalRounds += 1;
    return result;
  } else if (playerChoice == "stone" && computerChoice == "scissors") {
    result = `You chose ${playerChoice} against the computer's ${computerChoice}! You won!`;
    userScore += 1;
    totalRounds += 1;
    return result;
  }

  // player lose conditions

  if (playerChoice == "scissors" && computerChoice == "stone") {
    result = `You chose ${playerChoice} against the computer's ${computerChoice}! You lost!`;
    computerScore += 1;
    totalRounds += 1;
    return result;
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    result = `You chose ${playerChoice} against the computer's ${computerChoice}! You lost!`;
    computerScore += 1;
    totalRounds += 1;
    return result;
  } else if (playerChoice == "stone" && computerChoice == "paper") {
    result = `You chose ${playerChoice} against the computer's ${computerChoice}! You lost!`;
    computerScore += 1;
    totalRounds += 1;
    return result;
  }

  // if draw, drawScore += 1;
  drawScore += 1;
  totalRounds += 1;
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

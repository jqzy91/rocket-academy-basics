// input will store a word. input adjectives

// in the create mode, when you click submit, the output will change based on the input we gave earlier.

// global variables

var randomAdj = [];

var frequencyOfWords = [];

var randomNumber = function () {
  return Math.floor(Math.random() * randomAdj.length);
};

var gameState = "input";

main = function (adjectivesInput) {
  var madLib =
    '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
    randomAdj[randomNumber()] +
    " wife.";

  if (adjectivesInput == "create") {
    gameState = "";
    frequencyOfWords[randomNumber()] += 1;
    console.log(frequencyOfWords);
    return madLib;
  } else if (adjectivesInput == "popular") {
    var highestNumber = frequencyOfWords.indexOf(Math.max(...frequencyOfWords));
    console.log(highestNumber);
    return "The most popular word is " + randomAdj[highestNumber] + ".";
  } else if (gameState == "input") {
    randomAdj.push(adjectivesInput);
    frequencyOfWords.push(0);
    return "current adjectives are " + randomAdj;
  } else if (gameState == "") {
    frequencyOfWords[randomNumber()] += 1;
    console.log(frequencyOfWords);
    return madLib;
  } else {
    return "Please input adjectives separated by commas.";
  }
};

//  create random number generator

// add a counter for each word that appears everytime we hit the submit button.

// there are 4 different arrays that store, list of exclamations, adverbs, nouns and adjectives.

// var listExclamations = [];

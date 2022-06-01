// A hotel uses an ice machine to prepare ice for guests.

// Estimate how long the ice machine will have to run to prepare enough ice for the guests.

// Each guests require 2 drinks.

// Each drink has 4 ice cubes.

// an ice cube weighs 1.5 grams

// the machine churns about 5 lbs an hour

var calcRuntimeOfIceMachine = function (guests) {
  var totalAmountOfIceForGuests = calcIcePerGuest() * guests;
  var machineChurnRate = convertFivePoundsToGrams();
  var timeRequiredToMakeIce = totalAmountOfIceForGuests / machineChurnRate;
  var result = `The hotel would need to run the ice machine for ${timeRequiredToMakeIce} hours to product enough ice for ${guests} guests.`;
  return result;
};

var calcIcePerGuest = function () {
  var drinksPerGuest = 2;
  var icecubesPerDrink = 4;
  var weightPerCube = 1.5;
  var gramsOfIcePerGuest = drinksPerGuest * icecubesPerDrink * weightPerCube;
  return gramsOfIcePerGuest;
};

var convertFivePoundsToGrams = function () {
  var poundToGram = 453.592;
  var fivePoundsToGrams = poundToGram * 5;
  return fivePoundsToGrams;
};

var weeks = function (input) {
  var week = 10080;
  var weeksToMinutes = input * week;
  return `In ${input} weeks there are ${weeksToMinutes} minutes! Wow!`;
};

var fahrenheit = function (input) {
  var toCelsius = (input - 32) * (5 / 9);
  return `${input} degrees Fahrenheit is ${toCelsius} degrees Celsius.`;
};

var roadtrip = function (input) {
  var km = 1 / 9;
  var petrol = 2.2;
  var fuelCost = km * input * petrol;
  return `It would cost $${fuelCost.toFixed(
    2
  )} to drive your Ferrari ${input} kilometres.`;
};

var icecream = function (input) {
  var container = 400;
  var cups = 70;
  var containersConsumed = (input * 70) / 400;
  return `If you make ${input} trips to the ice cream station and pick up 1 70ml cup each trip, you would consume ${containersConsumed.toFixed(
    2
  )} 400ml containers of ice cream total.`;
};

var sonnets = function (input) {
  var shakespeareSonnets = 17677;
  var typingInHours = input * 60;
  var duration = shakespeareSonnets / typingInHours;
  return `At a typing speed of ${input} words per minute, it would take someone ${duration.toFixed(
    2
  )} hours to type all 17677 words of Shakespeare's sonnets.`;
};

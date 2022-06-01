var calcDistanceTravelled = function () {
  var distanceTravelled = 200 * 2;
  return distanceTravelled;
};

var calcSpeedToTravel = function (delayInMins) {
  var distanceToCover = calcDistanceTravelled();
  var speedToMatch = (distanceToCover / (120 - delayInMins)) * 60;
  return speedToMatch.toFixed(2);
};

var main = function (input) {
  var trainTwoNewSpeed = calcSpeedToTravel(input);
  var myOutputValue = `Given a ${input}min delay, train 2 needs to travel at a speed of ${trainTwoNewSpeed} km/h in order to arrive at the same time as train 1`;
  return myOutputValue;
};

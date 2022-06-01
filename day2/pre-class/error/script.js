var kilometersToMiles = function (distanceInKilometers) {
  var distanceInMiles = distanceInKilometers * 0.62;
  return distanceInMiles;
};

var main = function (input) {
  var myOutputValue = kilometersToMiles(input);
  console.log(myOutputValue);
  return myOutputValue;
};

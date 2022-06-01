// var main = function (input) {
//   var myOutputValue = kilometersToMiles(input);
//   return myOutputValue;
// };

// var kilometersToMiles = function (inputKilometers) {
//   var miles = inputKilometers * 0.62;
//   return miles;
// };

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var main = function (input) {
  var myOutputValue = convertKmToMiles(input);
  return myOutputValue;
};

var main = function (input) {
  var distanceInKm = input;
  var distanceInMiles = distanceInKm * 0.62;

  var myOutputValue = `Hi! ${input} Km is equal to ${distanceInMiles} miles.`;
  return myOutputValue;
};

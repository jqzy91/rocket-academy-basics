// Clock
// A user can enter the number of minutes past 1pm and the app will calculate the angle between the hour and minute hand. You are free to decide how else your clock will work: if the minute hand moves in 5 minute increments or moves every second, etc.

var calcAnglePerSecond = function () {
  var anglePerMinute = 360;
  var anglePerSecond = anglePerMinute / 60;
  return anglePerSecond;
};

var calcAngleOfHourHand = function () {
  var anglePerHour = 360 / 12;
  var angleOfHourHand = anglePerHour * 1;
  return angleOfHourHand;
};

var calcAngleOfMinToHour = function (minutes) {
  var hourHandAngle = calcAngleOfHourHand();
  var minHandAngle = calcAnglePerSecond();

  if (minHandAngle * minutes > 180) {
    var angleDifference = 360 - minHandAngle * minutes;
    console.log("a");
    console.log(angleDifference);
    return angleDifference;
  } else {
    var angleDifference = Math.abs(minHandAngle * minutes - hourHandAngle);
    console.log("b");
    console.log(angleDifference);
    return angleDifference;
  }
};

var main = function (input) {
  var angleDifferences = calcAngleOfMinToHour(input);
  var myOutputValue = `There is an angle difference of ${angleDifferences}.`;
  return myOutputValue;
};

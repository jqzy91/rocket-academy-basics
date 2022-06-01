// User will enter number of hours spent per day on favorite app.

// The program renders how many days will be spent on this app during your lifetime (average of 82 years).

var calcDaysSpentOnAppInLifetime = function (hoursPerDay) {
  // I know the average lifespan is 82. There are 24 hours in a day.
  var averageLifespan = 82;
  var hoursInADay = 24;
  var daysInLifespan = averageLifespan * 365;
  var totalHoursSpan = daysInLifespan * hoursPerDay;
  var hoursToDaysSpent = totalHoursSpan / hoursInADay;
  var result = `You will spend a total of ${hoursToDaysSpent} on your favorite app in your lifetime at ${hoursPerDay} hours a day.`;
  return result;
};

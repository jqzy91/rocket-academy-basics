// var calcYearsToHugAll = function (seconds) {
//   var huggingHoursPerDay = 15;
//   var huggingMinutesPerDay = huggingHoursPerDay * 60;
//   var huggingSecondsPerDay = huggingMinutesPerDay * 60;
//   var huggingPerDay = huggingSecondsPerDay / seconds;
//   var huggingPerYear = huggingPerDay * 365;
//   var populationOfSingapore = 5700000;
//   var result = populationOfSingapore / huggingPerYear;
//   return result;
// };

// var main = function (input) {
//   var myOutputValue = calcYearsToHugAll(input);
//   return `It takes ${myOutputValue.toFixed(
//     2
//   )} years to hug all singaporeans if your average duration is ${input} seconds`;
// };

// var calcHugsPerYear = function (huggingDuration) {
//   var secondsPerMinute = 60;

//   var secondsPerHour = secondsPerMinute * 60;

//   var huggingSecondsPerDay = secondsPerHour * 15;

//   var huggingPerYear = (huggingSecondsPerDay / huggingDuration) * 365;

//   return huggingPerYear;
// };

// var calcYearsToHugAll = function (huggingDuration) {
//   var populationOfSingapore = 5700000;
//   var yearsToHugAll = populationOfSingapore / calcHugsPerYear(huggingDuration);
//   return yearsToHugAll.toFixed(2);
// };

// var main = function (input) {
//   var yearsToHugAllSingaporeans = calcYearsToHugAll(input);
//   var myOutputValue = `It will take ${yearsToHugAllSingaporeans} yrs to hug all Singaporeans if your preferred hug duration is ${input} seconds.`;
//   return myOutputValue;
// };

var convertSecondsToYears = function (seconds) {
  var secondsPerMinute = 60;
  var secondsPerHour = secondsPerMinute * 60;
  var secondsPerDayHugging = secondsPerHour * (24 - 9);
  var secondsPerYearHugging = secondsPerDayHugging * 365;
  var hugsPerYear = secondsPerYearHugging / seconds;
  return hugsPerYear;
};

var yearsToHugAllSingaporeans = function (duration) {
  var populationOfSingapore = 5700000;
  var yearsRequired = populationOfSingapore / convertSecondsToYears(duration);
  return yearsRequired.toFixed(2);
};

var main = function (input) {
  var yearsToHugEverySingaporean = yearsToHugAllSingaporeans(input);
  var myOutputValue = `It will take ${yearsToHugEverySingaporean} yrs to hug all Singaporeans if your preferred hug duration is ${input} seconds.`;
  return myOutputValue;
};

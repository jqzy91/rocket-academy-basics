// var numberOfOranges = function (guests) {
//   var orangesPerGlass = 4;
//   var orangesForGuests = guests * orangesPerGlass;
//   return orangesForGuests;
// };

// var main = function (input) {
//   var myOutputValue = numberOfOranges(input);
//   var totalLitresOfOrangeJuice = (myOutputValue * 90) / 1000;
//   return `${myOutputValue} of orange are needed and you will get ${totalLitresOfOrangeJuice} litres of orange juice.`;
// };

var calcNumberOfOranges = function (guests) {
  var OrangesPerGlass = 4;
  var result = OrangesPerGlass * guests;
  return result;
};

var calcLitresOfOranges = function (guests) {
  var millimetersPerGlass = 90;
  var result = (millimetersPerGlass * guests) / 1000;
  return result;
};

var main = function (input) {
  var orangesNeeded = calcNumberOfOranges(input);
  var litresOfOranges = calcLitresOfOranges(input);
  var myOutputValue = `${orangesNeeded} oranges are needed and you will get ${litresOfOranges} litres of orange juice.`;
  return myOutputValue;
};

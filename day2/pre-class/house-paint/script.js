var calcTotalSquareMeters = function () {
  var roomArea = 9;
  var totalWindowDoorArea = 0.9 * 1.5 * 14;
  var totalRoomArea = roomArea * 6 - totalWindowDoorArea;
  return totalRoomArea;
};

var calcTotalCostOfPaint = function (price) {
  var litresOfPaintRequired = (calcTotalSquareMeters() * 2) / 300;
  var costOfPainting = litresOfPaintRequired * price;
  return costOfPainting.toFixed(2);
};

var main = function (input) {
  var costOfPaint = calcTotalCostOfPaint(input);
  var myOutputValue = `It cost $${costOfPaint} to paint the interior of your home at $${input} per litre.`;
  return myOutputValue;
};

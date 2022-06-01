// User enters number of hours of air-con use, app finds out cost

// aircon machine uses 2 kilowatts per hour

// electricity cost 0.2 per kilowatt-hour

var main = function (numberOfHours) {
  var electricityCost = calcElectricityCostPerHour();
  var airconCost = `It cost $${
    numberOfHours * electricityCost
  } to run your aircon for ${numberOfHours} hours.`;
  return airconCost;
};

var calcElectricityCostPerHour = function () {
  var airconElectricityUsagePerHour = 2;
  var electricityCostPerKwh = 0.2;
  var electricityCostPerHour =
    electricityCostPerKwh * airconElectricityUsagePerHour;
  return electricityCostPerHour;
};

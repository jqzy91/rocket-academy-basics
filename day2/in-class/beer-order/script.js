// calculate how many kegs of beer required per quarter based on average daily customer.

// make an app that will show how many half-barrel size kegs is needed per quarter

// average customer drinks 2 pints per visit

// each keg of beer holds 124 pints

// each keg barrel can serve (124 pints / 2 pints) customers.

// each half barrel can serve (124 pints / half / 2 pints) customers.

// amount of half barrels needed a day = ( no. daily customers * 2 pints / half barrels capacity)

// amount of half barrels needed a quarter = amount of half barrels needed daily * 90 days.

var calcPintsPerHalfBarrel = function () {
  var pintsPerBarrel = 124;
  var pintsPerHalfBarrel = pintsPerBarrel / 2;
  return pintsPerHalfBarrel;
};

var calcHalfBarrelKegsPerQuarter = function (guests) {
  var HalfBarrelOfPints = calcPintsPerHalfBarrel();
  var customersPerHalfBarrel = HalfBarrelOfPints / 2;
  var dailyHalfBarrelKegsRequired = guests / customersPerHalfBarrel;
  var quarterlyHalfKegsRequired = dailyHalfBarrelKegsRequired * 90;
  var result = `The bar would need to buy ${quarterlyHalfKegsRequired} half kegs of beer per quarter for an average of ${guests} customers per day.`;
  return result;
};

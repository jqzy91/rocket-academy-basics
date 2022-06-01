// Calculate how much a user will pay for their 19.99 50gb post-paid data plan.

// user will enter how many GB they use per month, and the app will tell them how much they are paying per GB of data used.

// If the user exceeds 50gb, they will automatically purchase another 50GB plan.

// one plan = 50gb | 19.99

var calcNumOfPlanBought = function (gbUsed) {
  var gbPerPlan = 50;
  var numOfPlanRequired = gbUsed / gbPerPlan;
  console.log(`numOfPlanRequired`);
  console.log(numOfPlanRequired);
  return Math.ceil(numOfPlanRequired);
};

var calcMonthlyCostPerGB = function (gbUsage) {
  var plansBought = calcNumOfPlanBought(gbUsage);
  var plansCost = 19.99;
  var monthlyCostPerGb = ((plansBought * plansCost) / gbUsage).toFixed(2);
  var result = `If one used ${gbUsage} GBs of data per month, one would be purchasing ${plansBought} 50 GB plans and paying $${monthlyCostPerGb} per GB used.`;
  return result;
};

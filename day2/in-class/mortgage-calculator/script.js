// Create a mortgage calculator for a bank.

// loan terms: 3% APR. Loan duration is 10 years.

// Output following values
// How much the customer will pay back in total + principal
// How much the customer will pay just in interest
// How much the customer's monthly payment will be

var main = function (input) {
  var totalPayment = calcTotalPayment(input);
  var totalInterest = calcTotalInterest(input);
  var monthlyPayment = calcMonthlyPayment(totalPayment);
  var result = `For a mortgage loan of $${input}, the customer would pay back a total of $${totalPayment} over 10 years. \n
    The customer would pay a total of $${totalInterest} in interest. \n
    The customer would pay a $${monthlyPayment} over the loan duration.`;
  return result;
};

var calcTotalPayment = function (loanAmt) {
  var totalInterest = calcTotalInterest(loanAmt);
  var totalPayment = Number(loanAmt) + totalInterest;
  return totalPayment;
};

var calcTotalInterest = function (loanAmt) {
  var interestPerYear = 1.03;
  var principalSum = loanAmt;
  var yearsOfLoan = 10;

  for (i = 0; i < yearsOfLoan; i++) {
    var paymentOverYears = interestPerYear * principalSum;
    principalSum = paymentOverYears;
  }

  var interestOverYears = paymentOverYears - loanAmt;

  return interestOverYears;
};

var calcMonthlyPayment = function (totalPayment) {
  var monthlyPayment = totalPayment / (10 * 12);
  return monthlyPayment;
};

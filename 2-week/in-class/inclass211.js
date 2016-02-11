var maxAge = 100;

function calculateSupply(age, dailyAmt){
  var supply = age*(dailyAmt*365);
  console.log(supply);
}
calculateSupply(45, 20);
calculateSupply(100, 5);
calculateSupply(85, 8);

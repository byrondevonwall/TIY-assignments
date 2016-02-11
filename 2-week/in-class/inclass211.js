function calculateSupply(age, dailyAmt){
  var supply = age*(dailyAmt*365);
  console.log("You will need " + supply + " to last you to the ripe old age of " + age);
}
calculateSupply(45, 20);
calculateSupply(100, 5);
calculateSupply(85, 8);

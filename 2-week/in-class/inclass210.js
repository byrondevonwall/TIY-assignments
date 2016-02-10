function calculateAge(birth, current){
  var birthInt = parseInt(birth);
  var currentInt = parseInt(current);
  var age1 = currentInt - birthInt;
  var age2 = (currentInt-1) -birthInt;
  console.log("You are either " + age1 + " or " + age2);
}

calculateAge(1985, 2016);
calculateAge(1990, 2076);
calculateAge(1895, 1947);

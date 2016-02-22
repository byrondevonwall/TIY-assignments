function greaterNum(arg1, arg2){
  var num1 = parseInt(arg1);
  var num2 = parseInt(arg2);
  if(num1 > num2){
    console.log("The greater number of " + num1 + " and " + num2 + " is " + num1);
  }
  else if(num2 > num1){
    console.log("The greater number of " + num1 + " and " + num2 + " is " + num2);
  }
  else if(num2 === num1){
    console.log(num1 + " is equal to " + num2);
  }
  else if(arg1 === NaN || arg2 === NaN){
    console.log("Please insert numbers to compare, not things that are not numbers.  KTHXBAI");
  }
}

greaterNum(10, 8);
greaterNum(11, 3);
greaterNum(100, 82);
greaterNum(17, 17000);
greaterNum(17, 17);
greaterNum("pandas", "kittens");

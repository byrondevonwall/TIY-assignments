//NORMAL MODE
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

var ans = []; //Initialize array!
var sum2 = 0;
//count from 1-1000 one number at a time
for (var num = 1; num < 1000; num++) {
    //if number is divisible by 3 or 5 push it to array ans
    if (num % 3 === 0 || num % 5 === 0) {
      // console.log(i)
        ans.push(num);
        //add each pushed number to the next and output it as sum2
        sum2 += num;
    }
}

console.log("The sum of all multiples of three and five below 1000 is: " + sum2);


//NORMAL MODE
//By considering the terms in the Fibonacci sequence whose values do not exceed 4 million, find the sum of the even-valued terms.
var sum1 = 0;
var i;
var fib = []; // Initialize array!
//place 0 in array fib set to 0, place 1 in array fib set to 1
fib[0] = 0;
fib[1] = 1;
//start at 2 (pos 3 in array fib) and iterate by 1 33 times
for(i=2; i<=33; i++)
{
    // Next fibonacci number = previous + one before previous
    fib[i] = fib[i-2] + fib[i-1];
    //if number is divisible by 2 pass it to fib[i], and add each divisible number to a sum recursively then log the array
    if(fib[i]%2 === 0){
      sum1 += fib[i];
      // console.log(fib[i]);
    }
  }
console.log("The sum of all even terms in the Fibonacci sequence that do not exceed 4,000,000 is: " + sum1);


//HARD MODE
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
var ans = []; //Initialize array!
var sum2 = 0;
//count from 1-1000 one number at a time
for (var i = 1; i < 1000; i++) {
    //if number is divisible by 3 or 5 push it to array ans
    if (i % 3 === 0 || i % 5 === 0) {
      // console.log(i)
        ans.push(i);
        //add each pushed number to the next and output it as sum2
        sum2 += i;
    }
}

console.log("The sum of all multiples of three and five below 1000 is: " + sum2);

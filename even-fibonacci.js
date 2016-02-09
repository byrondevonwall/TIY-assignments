
//NORMAL MODE
//By considering the terms in the Fibonacci sequence whose values do not exceed 4 million, find the sum of the even-valued terms.
var sum1 = 0;
var num; //in the real world, dont use i as a variable name for clarity's sake
var fib = []; // Initialize array!
//place 0 in array fib set to 0, place 1 in array fib set to 1
fib[0] = 0;
fib[1] = 1;
//start at 2 (pos 3 in array fib) and iterate by 1 33+ times
for(num=2; num<=37; num++){
    // Next fibonacci number = previous + one before previous
    fib[num] = fib[num-2] + fib[num-1];
    //if number is divisible by 2 and less than 4000000 pass it to fib[i], and add each divisible number to a sum recursively then log the array
    if(fib[num] %2 === 0  &&  fib[num] <= 4000000){
      sum1 += fib[num];
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

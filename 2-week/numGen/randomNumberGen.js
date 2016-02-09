var input = 3;

var randNum = Math.floor(Math.random() * 10) + 1;

console.log(randNum)

if(randNum === input){
  console.log("You've guessed the correct number, you win!");
}
else if(randNum > input){
  console.log("Oh no! The number you've guessed is too high!");
}
else if(randNum < input){
  console.log("Oh no!  The number you've guessed is too low!");
}
// function getRandomNumber( lower, upper ) {
//   if(isNaN(lower) || isNaN(upper)){
//   throw new Error('Both arguments must be numbers')
//   }
//   return Math.floor(Math.random() * (upper - lower + 1)) + lower;
// }
//
// console.log( getRandomNumber( 'nine', 24 ) );
// console.log( getRandomNumber( 1, 100 ) );
// console.log( getRandomNumber( 200, 'five hundred' ) );
// console.log( getRandomNumber( 1000, 20000 ) );
// console.log( getRandomNumber( 50, 100 ) );

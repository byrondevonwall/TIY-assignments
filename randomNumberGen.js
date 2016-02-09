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

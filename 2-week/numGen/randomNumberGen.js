function rand() {
   var a = document.getElementById('a').value;

   var userNum = parseInt(a);
   var randNum = Math.floor(Math.random() * 10) + 1;
  //  alert(userNum);
  //  alert(randNum);
   if(randNum === userNum){
       document.write("You've guessed the correct number, you win!");
     }
     else if(randNum < userNum){
       document.write("Oh no! The number you've guessed is too high!");
     }
     else if(randNum > userNum){
       document.write("Oh no!  The number you've guessed is too low!");
     }
     document.write("your number is: " + userNum);
     document.write("the random number is: " + randNum);
 }

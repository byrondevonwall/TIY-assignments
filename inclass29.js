for(num = 0; num <= 20; num++){
  if(num %2 === 0){
    console.log(num + " is even");
  }
  else{
    console.log(num + " is odd");
  }
}

//exercise 2

var verb = "swim"
// var ing = "ing"
// var ly = "ly"

function verbing(verb){
  if(verb.length >= 2){
    return(verb.concat("ing"));
  }
  else if(verb.length < 2 && verb.length > 0){
    return(verb);
  }
}
console.log(verb)

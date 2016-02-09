for(num = 0; num <= 20; num++){
  if(num %2 === 0){
    console.log(num + " is even");
  }
  else{
    console.log(num + " is odd");
  }
}

//exercise 2


function verbing(verb){
  if(verb.length >= 3){
    return(verb + "ing");
  }
  else if(verb.length > 3 && verb.length < 0){
    return(verb)
  }
}
console.log(verb)
var verb = "go"

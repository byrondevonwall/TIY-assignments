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
  if(verb.length >= 2){
    return(verb.concat("ing"));
  }
  else if(verb.length < 2 && verb.length > 0){
    return(verb);
  }
}
console.log(verbing("swim"))


//actual answr

function verbing(word){
  if(word.length < 3) return word;
  if(word.slice(-3) === "ing"){
    return word + 'ly'
  } else {
    return word + 'ing';
  }
}
console.log(verbing("swim"))

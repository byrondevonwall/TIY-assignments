function mixUp(str1, str2){
  strArr= [str1, str2];
  chopped1 = strArr[0].substring(0,2);
  chopped2 = strArr[1].substring(0,2);
  sliced1 = strArr[0].slice(2);
  sliced2 = strArr[1].slice(2);
  str1 = chopped2+sliced1;
  str2 = chopped1+sliced2;
  // strArr[0].substring(0,2);
  console.log(str1 +" "+str2);
  // for(var i=0; i < strArr.length; i++){
  //
  // }
}

mixUp('hello', 'world');
mixUp('admiral', 'casper');
mixUp('mix', 'pod');
mixUp('dog', 'dinner');

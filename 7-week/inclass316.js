function sortinLetters(str){
  var strArr = []
  var trimmed= str.trim()
  for(i=1; i<trimmed.length+1; i++){
  strArr.push(trimmed.slice(i-1,i));

  }
    strArr.sort();
    console.log(strArr.join(''));
}

sortinLetters('hello world');

function fixStart(str){
  str = str.toLowerCase()
  var replace = str.charAt(0)
    for (var i=1; i < str.length; i++){
      if(str[i] === replace){
        console.log(replace);
        console.log(str[i].slice(1, '*'));
        console.log(str);
    }
}
fixStart('that');

function fixStart(str){
  str = str.toLowerCase().split(' ');
  var replace = str.charAt(0)
    for (var i=1; i < str.length; i++){
      if(str[i] === replace){
        console.log(replace);
        console.log(str.splice(i, 1, '*'));
        console.log(str);
    }
}
}
fixStart('that');

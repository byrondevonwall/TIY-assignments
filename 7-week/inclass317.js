function dontRepeat(str){
 for (var i = 0; i < str.length; i++){
   var letter = str.charAt(i);
   if (str.indexOf(letter) === i && str.indexOf(letter, i+1) === -1){
     console.log(letter);
     break;
   }
 }

}

dontRepeat('abacddbec');
dontRepeat('hheeerrtttlloooolloddhfhs');

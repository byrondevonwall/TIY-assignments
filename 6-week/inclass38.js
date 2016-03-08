function pigLatin(str){
  str = str.toLowerCase();
  var strArr = str.split(' ');
  for (var i=0; i < strArr.length; i++){
    if(strArr[i].charAt(0) === "a" || strArr[i].charAt(0) === "e" || strArr[i].charAt(0) === "i"  || strArr[i].charAt(0) === 'o' || strArr[i].charAt(0) === "u"){
      console.log(strArr[i]+"ay");
    }else if(strArr[i].charAt(0) === 'h' || strArr[i].charAt(0) === 'q' || strArr[i].charAt(0) === "w" || strArr[i].charAt(0) === "r" || strArr[i].charAt(0) === "t" || strArr[i].charAt(0) === "y" || strArr[i].charAt(0) === 'p' || strArr[i].charAt(0) === 's' || strArr[i].charAt(0) === 'd' || strArr[i].charAt(0) === 'f' || strArr[i].charAt(0) === 'g' || strArr[i].charAt(0) === 'h' || strArr[i].charAt(0) === 'j' || strArr[i].charAt(0) === 'k' || strArr[i].charAt(0) === 'l' || strArr[i].charAt(0) === 'z' || strArr[i].charAt(0) === 'x' || strArr[i].charAt(0) === 'c' || strArr[i].charAt(0) === 'n' || strArr[i].charAt(0) === 'm'){
      console.log(strArr[i].substring(1) + strArr[i].substring(0,1)+"ay");
    }

    }
    }


pigLatin("Hello Andy");
pigLatin('what is even this thing we do');

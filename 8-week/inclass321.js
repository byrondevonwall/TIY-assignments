function largestPalindrome(){
  var max = 0;
  for (var i=999; i>100; i-- ){
    for (var u=999; u>100; u--){
      var pal = u*i;
      if(isPal(pal) && pal > max){
        max = u * i;
      }
    }
  }
  return max;
}

function isPal(i) {

    i = '' + i;

    return i === i.split("").reverse().join("");

}

console.log(largestPalindrome());

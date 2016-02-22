function assignGrade(score){
  var num = parseInt(score);
  switch(num){
    case num > 100:
    console.log("That isn't even a grade!!!!!")
    case num >= 90:
    console.log("A");
    break;
    case num >= 80:
    console.log("B");
    break;
    case num = 70:
    console.log("C");
    break;
    case num >= 60:
    console.log("D");
    break;
    case num >= 0:
    console.log("F");
    break;
    default:
    console.log("please insert a grade between 1 and 100");
  }
  console.log(num);
}
assignGrade(70);

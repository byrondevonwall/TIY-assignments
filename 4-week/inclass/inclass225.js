var favStuff = ["cats", "kittens", "felines", "chats", "gatos", "猫", "🐈"];

for(var c = 0; c<=favStuff.length-1; c++){
  if([c+1]==1){
  console.log("my "+[c+1]+"st choice is "+favStuff[c]);
} else  if([c+1]==2){
  console.log("my "+[c+1]+"nd choice is "+favStuff[c]);
}else  if([c+1]==3){
  console.log("my "+[c+1]+"rd choice is "+favStuff[c]);
} else if([c+1] >= 4){
  console.log("my "+[c+1]+"th choice is "+favStuff[c]);
}
}
//
// favStuff.each(function(c){
// console.log("my "+[c+1]+" choice is "+favStuff[c]);
// })

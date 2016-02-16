function pluralize(noun, number){
  var num = parseInt(number)
  if(num === 1 || noun === "sheep" || noun === "geese" || noun === "moose" || noun === "fish" || noun ==="mice"){
    console.log(num + " " + noun);
  }
  // else if(noun.lastChild.value === "s"){
  //   console.log("This noun is plural");
  else{
    console.log(num + " " + noun + "s")
    // console.log(noun.lastChild.value)
  }
}

pluralize("dog", 2);
pluralize("cat", 1000000);
pluralize("rabbit", 1);
pluralize("sheep", 10);
pluralize("geese", 30);
pluralize("moose", 300);
//
// pluralize('cats', 2);

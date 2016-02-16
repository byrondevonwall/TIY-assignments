function pluralize(noun, number){
  var num = parseInt(number)
  if(num === 1){
    console.log(num + " " + noun);
  }
  else if(noun === "sheep"){
    console.log(num + " " + noun);
  }
  else if(noun === "geese"){
    console.log(num + " " + noun);
  }
  else if(noun === "moose"){
    console.log(num + " " + noun);
  }
  else{
    console.log(num + " " + noun + "s")
  }
}

pluralize("dog", 2);
pluralize("cat", 1000000);
pluralize("rabbit", 1);
pluralize("sheep", 10);
pluralize("geese", 30);
pluralize("moose", 300);

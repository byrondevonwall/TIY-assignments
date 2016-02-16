//code challenge 1
function calculateAge(birth, current){
  var birthInt = parseInt(birth);
  var currentInt = parseInt(current);
  var age1 = currentInt - birthInt;
  var age2 = (currentInt-1) -birthInt;
  console.log("You are either " + age1 + " or " + age2);
}

calculateAge(1985, 2016);
calculateAge(1990, 2076);
calculateAge(1895, 1947);

//code challenge 2
var favoriteRecipe = [];

function createRecipe(title, servings, ingredients){
  favoriteRecipe.push({
    title: title,
    servings: servings,
    ingredients: ingredients
  });
};
createRecipe("Curry", 4, ["coconut milk", " green curry paste", " bell peppers", " winter squash", " chicken", " love", " heat"] );
// console.log(favoriteRecipe);
for (var fr = 0; fr < favoriteRecipe.length-1; fr++)
console.log(favoriteRecipe[fr].title);
console.log("Serves: " + favoriteRecipe[fr].servings);
console.log("Ingredients: " + favoriteRecipe[fr].ingredients);
// console.log(favoriteRecipe[0].title);
// console.log("Serves: " + favoriteRecipe[0].servings);
// console.log("Ingredients: " + favoriteRecipe[0].ingredients);
//code challenge 3

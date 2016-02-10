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


var favoriteRecipe = []

function createRecipe(title, servings, ingredients){
  favoriteRecipe.push({
    title: Title,
    servings: Servings,
    ingredients: Ingredients
  });
}
createRecipe("curry", 4, ["coconut milk", "green curry paste", "bell peppers", "winter squash", "chicken", "love", "heat"] );

console.log(favoriteRecipe.title);
console.log("Serves " + favoriteRecipe.servings);
console.log("Ingredients: " + favoriteRecipe.ingredients);

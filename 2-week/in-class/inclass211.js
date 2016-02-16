// function calculateSupply(age, dailyAmt){
//   var maxAge = 100;
//   var supply = (maxAge - age) * (dailyAmt*365);
//   console.log("You will need " + supply + " to last you to the ripe old age of " + age);
// }
// calculateSupply(45, 20);
// calculateSupply(100, 5);
// calculateSupply(85, 8);


//challenge 2

var favMovie = []

function movieArray(title, duration, stars){
  favMovie.push({
    title: title,
    duration: duration,
    stars: stars
  });
}

movieArray("The Big Lebowski", 117, ["Jeff Bridges", " John Goodman", " Steve Buscemi", " Philip Seymour Hoffman", " Flea"]);

// console.log(favMovie);

function printMovie(){
  console.log(favMovie[0].title + " lasts for " + favMovie[0].duration + " minutes.  Stars: " + favMovie[0].stars + ".");
}

function printMovies(){
  for (mv = 0; mv < favMovie.length; mv++){
    console.log(favMovie[mv].title + " lasts for " + favMovie[mv].duration + " minutes.  Stars: " + favMovie[mv].stars + ".");
  }
}
printMovie(favMovie);
printMovies(favMovie);

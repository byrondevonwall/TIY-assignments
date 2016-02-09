// Add a script tag in the appropriate place.
// Using JavaScript, change the body's tag style so it has a font-family of the sans-serif font stack of your choice.
// Using JavaScript, replace each of the spans with your own information.
// Iterate through each li and change the class to listitem. Add a style tag that sets a rule for listitem to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

//change fonts
var body = document.querySelector("body");
body.style.fontFamily = "verdana", "sans-serif";

//replace each span with your own information
var myName = document.getElementById("fullname");
myName.textContent = "Byron Wall";

var hometown = document.getElementById("hometown");
hometown.textContent = "Chapel Hill, NC";

var movie = document.getElementById("movie");
movie.textContent = "The Big Lebowski";

var food = document.getElementById("food");
food.textContent = "Pho";

// iterate through each li and change the class to listitem
var liChange = document.getElementsByTagName('li')
var length = liChange.length;
for (var liC = 0; liC < length; liC++) {
  liChange[liC].className = liChange[liC].className + "listitem";
  liChange[liC].style = "color:red";
}

 //then add a style tag that sets a rule for listitem to make the color red.
 // var changeRed = document.getElementsByClassName("listitem")
 // changeRed.style.color = "red";

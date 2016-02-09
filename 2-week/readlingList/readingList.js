// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

var booklist = [];

function addEntry(book, author, alreadyRead){
  booklist.push({
    title: book,
    author: author,
    read: alreadyRead
  });
};

addEntry("Year of the Flood", "Margaret Atwood", true);
addEntry("Ender's Game", "Orson Scott Card", true);
addEntry("Men Explain Things To Me", "Rebecca Solnit", true);
addEntry("Bad Feminist", "Roxanne Gay", false);
addEntry("East of Eden", "John Steinbeck", false);
addEntry("A Tree Grows In Brooklyn", "Betty Smith", false);
var listLength = booklist.length;
// console.log(booklist)
// console.log(listLength)

//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
for (var bl = 0; bl <= listLength-1; bl++) {
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
  if(booklist[bl].read === true){
      console.log("You already read " + booklist[bl].title + " by " + booklist[bl].author);
  }
  else {
  console.log("You still need to read " + booklist[bl].title + " by " + booklist[bl].author);
}
}

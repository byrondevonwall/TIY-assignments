/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// .sort()
var cats = ['pringle', 'shambhala', 'funtimes', 'bathands'];
console.log(cats.sort());

// .concat()
var dinos = ['t-rex', 'velociraptor', 'pterydactyl',];
var mammals = ['wombat', 'marmot', 'platypus'];
var dinoMammal = dinos.concat(mammals);
console.log(dinoMammal);

// .indexOf()
var array = [3, 7, 8];
console.log(array.indexOf(3));
console.log(array.indexOf(6));


// .split()
var days = "monday, tuesday, wednesday, thursday, friday";
var split = days.split(',', 1);
console.log(split);

// .join()
var cats = ['pringle', 'shambhala', 'funtimes', 'bathands'];
var runOnCats = cats.join("");
console.log(runOnCats);


// .pop()
var cats = ['pringle', 'shambhala', 'funtimes', 'bathands'];
var popped = cats.pop();
console.log(popped);


// .push()
var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october'];
var allMonths = months.push('november', 'december');
console.log(months);
console.log(allMonths);

// .slice()
var cats = ['pringle', 'shambhala', 'funtimes', 'bathands', 'bumble', 'okra'];
var myCats = cats.slice(1, 4);
console.log(myCats);


// .splice()
var cats = ['pringle', 'shambhala', 'funtimes', 'bathands', 'bumble', 'okra'];
console.log(cats);
  //replace bumble with chairman meow
var splicedCat = cats.splice(4, 1, 'chairman meow');
console.log(cats);

// .shift()
var cats = ['pringle', 'shambhala', 'funtimes', 'bathands', 'bumble', 'okra'];
console.log(cats);
var catsShifted = cats.shift();
console.log(cats);


// .unshift()
var array = [1, 2, 3]
console.log(array)
array.unshift(-3, -2, -1, 0)
console.log(array)


// .filter()
function largeEnough(value) {
  return value >= 10;
}
var filtered = [9, 17, 4, 18, 23, 7, 125, 22].filter(largeEnough);
console.log(filtered)

// .map()
var numbers = [1, 4, 9]
console.log(numbers)
var roots = numbers.map(Math.sqrt)
console.log(roots)

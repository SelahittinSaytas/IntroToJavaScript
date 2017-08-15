// 2 - Basic Concepts

// This is an object has properties such as 'firstName', 'lastName'
// Any Node.js code is going run in your server and it's going to run continuously - server side code
var person1 = {
	firsName: "Bucky",
	lastName: "Roberts",
	age: 28
};

var person2 = {
	firsName: "Selahittin",
	lastName: "Saytaş",
	age: 26
};

console.log(person1, person2);



//
function addNumber(a, b) {
	return a + b;
}

console.log("This is the sum of two numbers: " + addNumber(7, 10));

// Worthless function is undefined - Any function without an explicit return statement is always going to return 'undefined'
function worthless(){

}
console.log(worthless());



// We can set a variable equal to an anonymous function
// What we are doing is this we are taking this entire function and we're setting it equal to 'printBacon' variable
// The point is we don't really need a name for this function 
// In Node.js we don't need to give a name to function this is called an 'Anonymous Function'
// Another cool concept is we can actually take these functions and assign them to variables just like we would like a number or string or anything like that
// Why we would want to do this? One cool thing that we can do is this whenever we have a function stored in a variable
// we can actually use this and pass them to other functions, 'setTimeout()' for example
// 'setTimout()' is used to call a block of code or function in a certain time, 5 second (5000) for example
// Briefly, we can take functions, assign them to variables, and the benefit of this is we can actually use these inside
// other functions
var printBacon = function() {
	console.log("Bacon is healthy, don't believe the doctors!");
};
printBacon(); // This line of code is printed first to the console

setTimeout(printBacon, 5000); // 5 seconds afther this block of code is printed to the console



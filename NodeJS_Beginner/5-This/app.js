// 5 - This

// "this." refers to the thing that called it

// In Node, everything is a reference
// Object initializers 'bucky = {name:"Bucky", surname:"Roberts", age:27};'

// 'Bucky' is an object, 'favoriteFood', 'favoriteDrink', and 'favoriteMovie' are properties

var Bucky = {
	printFirstName: function(){
		console.log("My name is Bucky");
		console.log(this === Bucky); // true - ".this" is just reference to whatever thing or whatever object is calling it
	}
};

// "this." keyword is just a reference to whatever thing is calling it
Bucky.printFirstName(); // "Bucky" is calling "printFirstName"

// The default calling context is global
function doSomethingWorthless(){
	console.log("\nI am worthless!");
	console.log(this === global);
}

doSomethingWorthless();

// Since "doSomethingWorthless" function is not being called by an object (being called by the main program)
// well that refers to global so that's why whenever we test above code, this is equal to global
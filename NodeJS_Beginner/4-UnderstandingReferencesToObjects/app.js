// 4 - Understanding References To Objects

// In Node, everything is a reference
// Object initializers 'bucky = {name:"Bucky", surname:"Roberts", age:27};'

// 'Bucky' is an object, 'favoriteFood', 'favoriteDrink', and 'favoriteMovie' are properties

var Bucky = {
	favoriteFood: "Bacon",
	favoriteDrink: "Beer",
	favoriteMovie: "Chappie"
};

var Person = Bucky;
Person.favoriteFood = "Salad";

console.log(Bucky.favoriteFood);

// Whenever you use the 2 equal signs, it only compares the value
console.log(19 == "19"); // true

// 3 equal signs (Stricly equal sign) compares the value and the types (String or Integer)
console.log(19 === "19"); // false
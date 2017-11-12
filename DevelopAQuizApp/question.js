// This is the "Constructer Function"
// We store parameters inside the variables with "this." then the name of the variable
// "this." keyword is just a reference to whatever object - thing is calling it
// What "prototype." - prototyping gives you the ability to do is you can add cool 'methods' - 'functions' or 'properties'
// to your objects and classes

function Question(text, choices, answer){
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

// First, select this constructor function and then use a "prototype"
// because we are writing this function outside that constructor function
Question.prototype.correctAnswer = function(choice){
	return choice === this.answer;
}
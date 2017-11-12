// 6 - Prototype

// What "prototype." - prototyping gives you the ability to do is you can add cool 'methods' - 'functions' or 'properties'
// to your objects and classes

// "this." keyword is just a reference to whatever object - thing is calling it

function User(){
	this.name = "";
	this.life = 100;
	this.giveLife = function giveLife(targetPlayer){
		targetPlayer.life += 1;
		this.life -= 1;
		console.log(this.name + " gave 1 life to " + targetPlayer.name);
	}
}

var Bucky = new User();
var Wendy = new User();
var Selahittin = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";
Selahittin.name = "Selahittin";

Bucky.giveLife(Wendy);

console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);

// You can add functions to all objects
User.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.life -= 3;
	console.log(this.name + " just uppercuted " + targetPlayer.name);
}

Wendy.uppercut(Bucky);

console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);

// We can add special methods === functions or properties to objects in classes, in other words, our user class

// You can add methods to all objects
User.prototype.magic = 60;
console.log(Bucky.life);
console.log(Wendy.life);
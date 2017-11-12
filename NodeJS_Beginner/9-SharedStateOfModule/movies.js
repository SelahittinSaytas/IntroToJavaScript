// 8 - More On Modules

/*
function printAvatar(){
	console.log("Avatar: PG-13");
}

function printChappie(){
	console.log("Chappie: R");
}
*/

// module.exports.avatar = printAvatar;
// module.exports.chappie = printChappie;

// module.exports = {};

module.exports = {
	printAvatar: function(){
		console.log("Avatar");
	},

	printChappie: function(){
		console.log("Chappie");
	},

	favMovie: "The Matrix"
};
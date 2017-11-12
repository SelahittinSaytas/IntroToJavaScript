function populate(){
	if(quiz.isEnded()){
		showScores();
	}else{
		// Show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		// Show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i < choices.length; i++){
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}
		showProgress();
	}
};

function guess(){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
}

function showScores(){
	var gameOverHTML = "<h1>Result</h1>";
	gameOverHTML += "<h2 id='score'> Your Scores: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHTML;
}

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

// This is sending 3 parameters to "Question" class
var questions = [
	new Question("Which one is not an object oriented programming language?", ["Java", "C#", "C++", "C"], "C"),
	new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
	new Question("There are ___ maing components of object oriented programming?", ["1", "6", "2", "4"], "4"),
	new Question("Which language is used for web apps?", ["PHP", "Python", "JavaScript", "All"], "All"),
	new Question("MVC is a ___.", ["Language", "Library", "Framework", "All"], "Framework")
];

// Let's create an object for this quiz controller
// Creating a new instance of an object
var quiz = new Quiz(questions);

populate();
// This function will contain the scores and the number of questions how many questions
// we are having for our application
function Quiz(questions){
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function(){
	return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function(){
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer){
	if(this.getQuestionIndex().correctAnswer(answer)){
		this.score++;
	}
	this.questionIndex++;
}
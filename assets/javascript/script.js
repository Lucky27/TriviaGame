console.log("im linked")

$(document).ready(function(){


//Create a timer.
var timeLeft = 30;
var timer = document.getElementById("time");
var timerId = setInterval(countdown, 1000);

function countdown(){
	if (timeLeft === 0){
		clearTimeout(timerId);
		timer.innerHTML = "times up";
	}
	else{
		timer.innerHTML = timeLeft + ": time remaining";
		timeLeft --;
	}
};


//start button.
$("#begin").on("click", function(){
	countdown();
	showQuestion();
	console.log("i clicked!")

});


//Possible questions.
var coounter = 0;
var triviaQuestions = [
  {
	question: "Eyes benefits from which vegetables?",
	options: ["Eggplant", "Zucchini", "Carrots", "Squash"],
	answer: "Carrots"
  },

  {
  	question: "Which vegetable has been linked to many health benefits such as reduced heart disease and cancer?",
  	options: ["Cabbage", "Celery", "Brussels sprout", "Tomato"],
  	answer2: "Tomato"

  },

  {
  	question: "This fruit can be helpful in overcoming depression due to high levels of tryptophan which the body converts to serotonin, the mood-elevaating brain neurotransmitter. This fruit is also high in potassium.",
  	options:["Apple", "Banana", "Grapes", "Orange"],
  	answer: "Banana"
  },

  {
  	question: "What fruit can you eat everyday to keep the doctor away?",
  	options: ["pears", "Pineapple", "Strawberry", "Apple"],
  	answer: "Apple"
  }
]

//create a h2 to house the questions in.
function showQuestion(){
	for (var i = 0; i<triviaQuestions.length; i++){
		var quiz = $("<h2>");
		quiz.addClass("question");
		quiz.text(triviaQuestions[i].question);
		$(".quiz").append(quiz);

		var optionsContainer = $("<div>");
		optionsContainer.attr("id", "options"+ i);
		optionsContainer.addClass("container");
		$(".quiz").append(optionsContainer);

		for (var j = 0; j<triviaQuestions[i].options.length; j++){
			var btnGrp = $("<button>");
			btnGrp.addClass("btn-grp");
			btnGrp.text(triviaQuestions[i].options[j]);
			btnGrp.attr("data-group", i);
			btnGrp.attr("data-btn", j);
			$("#options" + i).append(btnGrp);

		}
	};

};

var right = document.getElementById("correct");
var wrong = document.getElementById("incorrect");
$(document).on("click", ".btn-grp", function(){
	// console.log("ding")

var currentQuestion = parseInt($(this).attr("data-group")); 
	// console.log(triviaQuestions[currentQuestion]);
	
	if(".btn-grp", triviaQuestions[currentQuestion].answer ===triviaQuestions[currentQuestion].answer){
		// right.innerHTML = right++;
		// correct++
		console.log(triviaQuestions[currentQuestion].answer);
	}
	// else{
	// 	wrong.innerHTML = wrong++
	// }
})





















})
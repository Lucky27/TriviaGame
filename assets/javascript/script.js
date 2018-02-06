
 
$(document).ready(function(){

	$("#begin").on("click",function(){
		showQuestion();
		 // showOption();
		// startTimer();
	})

var counter = 0;
var triviaQuestions = [
{
	question: "Eyes benefits from which vegetable?",
	options: ["Eggplant", "Zucchini", "Carrots", "Squash"],
	answer: "Carrots"
},

{
	question: "Which vegetable has been linked to many health benefits such as reduced heart disease and cancer?",
	options: ["Cabbage", "Celery", "Brussel sprout", "Tomato"],
	answer: "Tomato"
},

{
	question: "This fruit can be helpful in overcoming depression due to high levels of tryptophan which the body converts to serotonin, the mood-elevating brain neurotransmitter. This fruit is also rich in potassium.",
	options: ["Apple", "Banana", "Grapes", "Orange"],
	answer: "Banana"
},

{
	question: "What fruit can you eat everyday to keep the doctor away?",
	options: ["Pears", "Pineapple", "Strawberry", "Apple"],
	answer: "Apple"
}
]

// var time=5;
var correct=0;
var incorrect=0;

var timer= $("#timer");



// function startQuiz(){
// 	console.log("I started the quiz")
// }

function startTimer(){
	//begin work
	console.log("I started")

}



var mySpecialvariable = 12


function showQuestion(){
	//begin the work\	

	for(var i=0; i<triviaQuestions.length; i++){
		var quiz = $("<h2>");
	 	quiz.addClass("question");
	 	quiz.text(triviaQuestions[i].question);
		$(".quiz").append(quiz);
		
		var optionsContainer = $("<div>");
		optionsContainer.attr("id", "options"+i);
		$(".quiz").append(optionsContainer)
		
		for(var j = 0; j<triviaQuestions[i].options.length;j++){
			var btnGrp = $("<button>");
		 	btnGrp.addClass("btn-group btn-"+i);
		 	btnGrp.text(triviaQuestions[i].options[j]);
		 	$("#options"+i).append(btnGrp);
		}

	

	};
};




 });






// console.log(showOption)
// console.log(showQuestion)

// console.log(triviaQuestions)
 
// console.log(triviaQuestions[0].question);
// console.log(triviaQuestions[0].options);
// console.log(triviaQuestions[0].answer);

// console.log(triviaQuestions[1].question);
// console.log(triviaQuestions[1].options);
// console.log(triviaQuestions[1].answer);

// console.log(triviaQuestions[2].question);
// console.log(triviaQuestions[2].options);
// console.log(triviaQuestions[2].answer);

// console.log(triviaQuestions[3].question);
// console.log(triviaQuestions[3].options);
// console.log(triviaQuestions[3].answer);





















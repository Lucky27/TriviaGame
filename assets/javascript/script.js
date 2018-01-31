
 



$(document).ready(function(){

	$("#begin").on("click",function(){
		showQuestion();
		showOption();
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



function startQuiz(){
	console.log("I started the quiz")
}

function startTimer(){
	//begin work
	console.log("I started")

}

function showQuestion(){
	//begin the work
	
	for(var i=0; i<triviaQuestions.length; i++){

	
	var quiz = $("<h2>");
		quiz.addClass("question");
		quiz.text(triviaQuestions[i].question);
	$(".quiz").append(quiz);
	var btnGrp = $("<div>");
		btnGrp.addClass("btn-group");
		btnGrp.attr("role", "group");
		btnGrp.attr("id" + i);
		btnGrp.attr("aria-label","first group");
		$(".quiz").append(btnGrp);
	}		
}

function showOption(){
for (var j = 0; j <triviaQuestions[i].option.length; j++){
	var btnOption = $("<button>");
		btnOption.addClass("options btn btn-secondary");
		btnOption.attr("type", "button");
		btnOption.attr("name",i)
		btnOption.attr("id","o"+j);
		btnOption.attr("value", j);
		btnOption.text(triviaQuestions[i].option[j]);
	$(".options").append(btnOption);
			};
}

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





















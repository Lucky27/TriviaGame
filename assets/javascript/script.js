
 
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
		optionsContainer.addClass("container")
		$(".quiz").append(optionsContainer)
		
		for(var j = 0; j<triviaQuestions[i].options.length;j++){
			var btnGrp = $("<button>");
		 	btnGrp.addClass("btn-group");
		 	btnGrp.text(triviaQuestions[i].options[j]);
		 	btnGrp.attr("data-group", i);
		 	btnGrp.attr("data-btn", j);
		 	$("#options"+i).append(btnGrp);
		}


	};

	
};

$(document).on("click", ".btn-group", function(){

	console.log("you clicked")
	// console.log(triviaQuestions[0].answer)
	// console.log(triviaQuestions[1].answer)
	// console.log(triviaQuestions[2].answer)
	// console.log(triviaQuestions[3].answer)
	// console.log($(this).val())
	
	var currentQuestion = parseInt($(this).attr("data-group")); 
	console.log(triviaQuestions[currentQuestion]);
	if($(this).text() === triviaQuestions[currentQuestion].answer){
		// console.log("right")
		correct === correct++;
	}else{
		console.log("wrong")
	}

	

		
});

$("#correct").innerhtml="correct:" + correct;

// document.querySelector("#correct").innerHTML = "correct:"+ correct;
document.querySelector("#incorrect").innerHTML = "incorrect:"+ incorrect;
 });


























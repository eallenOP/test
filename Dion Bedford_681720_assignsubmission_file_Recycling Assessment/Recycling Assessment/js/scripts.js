$(document).ready(function() {

  // Run Submit Function and show the results div.
	$('#submitButton').click(function() {
    $(this).addClass('hide');
    $('#resultArea').show();
	});

  // if the checkboxes are changed, assign them a 1 or 0 so that the answer score function 
	// can understand if the answer is correct or not.
	// Note the 1 or 0 will be reversed depending on if the true or false anser is correct
  $('#checkbox1').click(function () {
		$(this).val(this.checked ? 0 : 1)
		});
		
	$('#checkbox2').click(function () {
		$(this).val(this.checked ? 1 : 0)
		});

	$('#checkbox3').click(function () {
		$(this).val(this.checked ? 0 : 1)
		});

	$('#checkbox4').click(function () {
		$(this).val(this.checked ? 1 : 0)
		});

});

///////////////////////////////////////////////////////
//   https://codepen.io/harrysadlermusic/pen/DihjK   /
/////////////////////////////////////////////////////

//The following runs when the Submit button is pressed
function submitQuiz() {

	// get each answer score return a 1 or a 0 which is the value of the checked radio box
		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked || radiosNo[i].selected) {
			// do something with radiosNo
					var answerValue = Number(radiosNo[i].value);
				}
				if(radiosNo[i].name == "q3" || radiosNo[i].name == "q8"){
					var answerValue = Number(radiosNo[i].value);
				}
			}
			// change NaNs to zero
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}


		// Calc score is equal to the return function 'score total'
		// Score total rolls through a for loop and adds the returned variable ( 1 or 0 ) to a running total
		// It then returns this total to the calc score variable as the total number of correct questions
		
		// This was written to replace the original code of:
		//var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') + answerScore('q6') + answerScore('q7') + answerScore('q8') + answerScore('q9') + answerScore('q10')); 

		var calcScore = score_total();
		
		function score_total() {

			var totalNumber = 0;

			for(var i = 0; i<10;i++){

				var questionNum = 'q'+(i+1);

				totalNumber += answerScore(questionNum);
			};

			return totalNumber;
		};


		var AnswerString = "Question # ";
		var correctAnswer = [
			"Cargill Enterprise is at 199 Hillside Road Dunedin.",
			"Only glass can be put in the blue recycle bins in Dunedin.",
			"Although electronic equiptment can be recycled, it must be done at designated e-waste centers.",
			"Waste Busters is in Alexandra.",
			"Nappies can not be recycled.",
			"Currently glass is not recycled.",
			"Mount Cooee has started accepting e-waste from 2016.",
			"The Maximum weight is 75kg.",
			"Cooee Landfill accepts branches less than 150mm.",
			"The quiz send it`s regards..."			
		];

		// This for loop will change the 'questionNUm to be q(i) and then pass that in to answer score function.
		// Every time it rolls around i is incremented so that it can keep track of which question to grab.
		// If it finds a wrong answer the loop will use i to grab the corresponding corect answer from the correct answer array and insert that into the string; 
		// Append all answers to the answers div. 

		for(var i = 0; i<10;i++){

			var questionNum = 'q'+(i+1);

			if (answerScore(questionNum) === 0) {
				document.getElementById('Answers').innerHTML += '<br><p class="wrong-answer">' + AnswerString +  (i+1) + ' : Wrong! ' + correctAnswer[i] + '</p>'
			}else{
				document.getElementById('Answers').innerHTML += '<br><p class="right-answer">' + AnswerString + (i+1) + ' : Correct!</p>';
			 }
		}

		//The above For Loop Replaces the Below Orginal code

		// if (answerScore('q1') === 0) {
		// 	document.getElementById('Answers').innerHTML += '<p class="wrong-answer">' + AnswerString + '1: Wrong! The Correct answer was - (placeholder)</p>'
    // }else{
    //   document.getElementById('Answers').innerHTML += '<p class="right-answer">' + AnswerString + '1: Correct!</p>';
    //  }

    //  if (answerScore('q2') === 0) {
		// 	document.getElementById('Answers').innerHTML += '<br><p class="wrong-answer">' + AnswerString + '2: Wrong! The Correct answer was - (placeholder)</p>'
    // }else{
    //   document.getElementById('Answers').innerHTML += '<br><p class="right-answer">' + AnswerString + '2: Correct!</p>';
    //  }

    //  if (answerScore('q3') === 1) {
		// 	document.getElementById('Answers').innerHTML += '<br><p class="wrong-answer">' + AnswerString + '3: Wrong! Although electronic equiptment can be recycled, it must be done at designated e-waste centers.</p>'
    // }else{
    //   document.getElementById('Answers').innerHTML += '<br><p class="right-answer">' + AnswerString + '3: Correct!</p>';
    //  }

    //  if (answerScore('q4') === 0) {
		// 	document.getElementById('Answers').innerHTML += '<br><p class="wrong-answer">' + AnswerString + '4: Wrong! The Correct answer was - (placeholder)</p>'
    // }else{
    //   document.getElementById('Answers').innerHTML += '<br><p class="right-answer">' + AnswerString + '4: Correct!</p>';
		//  }
		 
		// if (answerScore('q5') === 0) {
		// 	document.getElementById('Answers').innerHTML += '<br><p class="wrong-answer">' + AnswerString + '5: Wrong! The Correct answer was - (placeholder)</p>'
    // }else{
    //   document.getElementById('Answers').innerHTML += '<br><p class="right-answer">' + AnswerString + '5: Correct!</p>';
    //  }

    //  if (answerScore('q6') === 0) {
		// 	document.getElementById('Answers').innerHTML += '<br><p class="wrong-answer">' + AnswerString + '6: Wrong! The Correct answer was - (placeholder)</p>'
    // }else{
    //   document.getElementById('Answers').innerHTML += '<br><p class="right-answer">' + AnswerString + '6: Correct!</p>';
    //  }

    //  if (answerScore('q7') === 0) {
		// 	document.getElementById('Answers').innerHTML += '<br><p class="wrong-answer">' + AnswerString + '7: Wrong! The Correct answer was - (placeholder)</p>'
    // }else{
    //   document.getElementById('Answers').innerHTML += '<br><p class="right-answer">' + AnswerString + '7: Correct!</p>';
    //  }

    //  if (answerScore('q8') === 0) {
		// 	document.getElementById('Answers').innerHTML += '<br><p class="wrong-answer">' + AnswerString + '8: Wrong! The Correct answer was - (placeholder)</p>'
    // }else{
    //   document.getElementById('Answers').innerHTML += '<br><p class="right-answer">' + AnswerString + '8: Correct!</p>';
		//  }
		 
		//  if (answerScore('q9') === 0) {
		// 	document.getElementById('Answers').innerHTML += '<br><p class="wrong-answer">' + AnswerString + '9: Wrong! The Correct answer was - (placeholder)</p>'
    // }else{
    //   document.getElementById('Answers').innerHTML += '<br><p class="right-answer">' + AnswerString + '9: Correct!</p>';
    //  }

    //  if (answerScore('q10') === 0) {
		// 	document.getElementById('Answers').innerHTML += '<br><p class="wrong-answer">' + AnswerString + '10: Wrong! The quiz send it`s regards...</p>'
    // }else{
    //   document.getElementById('Answers').innerHTML += '<br><p class="right-answer">' + AnswerString + '10: Correct!</p>';
    //  }



	// calculate "possible score" integer
		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	// show score as "score/possible score"
		var showScore = "Your Score: " + calcScore +"/" + questionCounter +"..." + '<br><button class="btn waves-effect waves-light deep-orange pulse quiz-button" id="submitButton" type="button" onClick="window.location.href=window.location.href">Retry<i class="material-icons right">loop</i></button>';
	// if 10/10, "perfect score!"
		if (calcScore === questionCounter) {
			showScore = showScore + '&nbsp; <strong>Perfect Score! You saved the Whales!</strong>'
		};
		document.getElementById('userScore').innerHTML = showScore;
	}


	 //////////////////////////////////////////////////////////////////////////////////////////////////////
	// https://stackoverflow.com/questions/16024346/lastmodified-function-returns-current-date-and-time  /
 //////////////////////////////////////////////////////////////////////////////////////////////////////
/* 		JavaScript Functions for last modified		*/
/////////////////////////////////////////////////

	function lastModified() {
		var modiDate = new Date(document.lastModified);
		var showAs = modiDate.getDate() + "-" + (modiDate.getMonth() + 1) + "-" + modiDate.getFullYear();
		return showAs
	}

	function GetTime() {
		var modiDate = new Date();
		var Seconds

		if (modiDate.getSeconds() < 10) {
				Seconds = "0" + modiDate.getSeconds();
		} else {
				Seconds = modiDate.getSeconds();
		}

		var modiDate = new Date();
		var CurTime = modiDate.getHours() + ":" + modiDate.getMinutes() + ":" + Seconds
		return CurTime
	}	
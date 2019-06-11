/*
 * Handles the quiz logic
 */

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#btn').addEventListener('click', (e) => {
        // Number of correct answers
        let correctCount = 0

        // Check Question 1
        if(document.querySelector('#q1-answer').checked) {
            correctCount++
            document.querySelector('#q1').style.color = "green"
        }
        else {
            document.querySelector('#q1').style.color = "red"
        }

        // Check Question 2
        if(document.querySelector('#q2-answer1').checked 
            && document.querySelector('#q2-answer2').checked 
            && !document.querySelector('#q2-wrong1').checked
            && !document.querySelector('#q2-wrong2').checked){
                correctCount++
                document.querySelector('#q2').style.color = "green"
            }
        else {
            document.querySelector('#q2').style.color = "red"
        }

        // Check Question 3
        if(document.querySelector('#q3-input').value === 'officemax') {
            correctCount++
            document.querySelector('#q3').style.color = "green"
        }
        else {
            document.querySelector('#q3').style.color = "red"
        }

        // Check Question 4
        if(document.querySelector('#q4-answer').checked 
        && !document.querySelector('#q4-wrong1').checked
        && !document.querySelector('#q4-wrong2').checked){
            correctCount++
            document.querySelector('#q4').style.color = "green"
        }
		else {
			document.querySelector('#q4').style.color = "red"
		}

        // Check Question 5
        if(document.querySelector('#q5-answer').checked) {
            correctCount++
            document.querySelector('#q5').style.color = "green"
        }
        else {
            document.querySelector('#q5').style.color = "red"
        }

        // Display results
        el = document.querySelector('#output-area')
        el.innerHTML = "<p>Thank you " + document.querySelector('#name-box').value + ", for completing this quiz.</p>"
        el.innerHTML += "<p>You got " + correctCount + " out of 5 questions correct.</p>"
    })
})
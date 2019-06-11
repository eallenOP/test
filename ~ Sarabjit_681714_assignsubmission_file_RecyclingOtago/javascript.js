var myQuestions = [
    {
        question: "Where is the landfill in Dunedin?",
        answers: {
            a: 'Port Chalmers ',
            b: 'Green Island ',
            c: 'St Clair'
        },
        correctAnswer: 'b'
    },
    {
        question: "Which one of these is e-Waste?",
        answers: {
            a: 'Car ',
            b: 'Diapers ',
            c: 'Computer'
        },
        correctAnswer: 'c'
    },
    {
        question: "What to do when you see someone illegally dumping rubbish?",
        answers: {
            a: 'Call the local council ',
            b: 'Call police ',
            c: 'Call your doctor'
        },
        correctAnswer: 'a'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submit2Button = document.getElementById('submit2');

generateQuiz(myQuestions, quizContainer, resultsContainer, submit2Button);

function generateQuiz(questions, quizContainer, resultsContainer, submit2Button) {

    function showQuestions(questions, quizContainer) {
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // first reset the list of answers
            answers = [];

            // for each available answer...
            for (letter in questions[i].answers) {

                // ...add an html radio button
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {

        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers blue
                answerContainers[i].style.color = 'blue';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + ' correct';
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit2, show results
    submit2Button.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }

}
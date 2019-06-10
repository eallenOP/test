let answers = [1, 0, 1, 2, 1, 0, 2, 1]; // init the answers array.
let results = answers.map(() => false); // fill results[] with as many false values as there are answers.

let markQuiz = () => {
    enumResults(); // marks results, puts them in results[].

    // counts the correct results.
    let correct = 0;
    for (let i = 0; i < results.length; i++) {
        correct = results[i] ? correct + 1 : correct; // increments correct counter by 1 if the answer is true.
    }

    let name = document.getElementById("nameBox").value; // gets the name from the name textbox.
    if (correct == results.length) {
        alert(`Nice job ${name}! you got ${correct}/${results.length}!`); // if the player got max score.
    } else {
        alert(`You got ${correct}/${results.length}`);
    }

    // ask if player wants to play again.
    reset = confirm(`Thanks for playing ${name},\nWould you like to clear your answers and play again?`)

    // refreshes the window if the player clicked yes/ok.
    if(reset) {
        window.location.reload();
    }
}

let enumResults = () => {
    for (let i = 0; i < answers.length; i++) {  // for each answer.
        let elements = document.getElementsByClassName('q' + i.toString()); // get all elements for this question.
        for (let j = 0; j < elements.length; j++) { // for each element in the question.
            if (elements[j].checked || elements[j].selected) // if the element has been chosen as an answer.
            {
                results[i] = elements[j].value == answers[i]; // check if it's correct and add it to results[].
            }
        }
    }
}
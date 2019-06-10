$('documennt').ready(function () {
    $(".quiz_results").hide();
});

$("#quizSubmit").click(function () {
    let correct = true;
    let totalCorrect = 0;
    let incorrect = 0;
    let answers = [2, 2, 3, 2, 4, 4];
    let detailsName = $("input[name='name']").val();
    let detailsEmail = $("input[name='email']").val();
    let detailsGender = $("select[name='gender']").val();
    let message = "Thank you " + detailsName + ". Here are your details, Gender: " + detailsGender + ", Email: " + detailsEmail;

    answers.forEach((element, index) => {
        console.log(index);
        if ($("input[name='" + index + "']:checked").val() == element) {
            $("label[for='" + index + "']").removeClass("error");
            totalCorrect++;
        }
        else {
            correct = false;
            $("label[for='" + index + "']").addClass("error");
            incorrect++;
        }
    });

    $('.quiz_results').show();

    let previousResults = $("input[name='previous']").val();
    let first = $("input[name='first']").val();
    let message1 = "<p>You got " + totalCorrect + " of " + answers.length + " correct.</p>";

    if (first == 0) {
        if (totalCorrect > previousResults) {
            message1 = message1 + "<p>You scored " + (totalCorrect - previousResults) + " better than the last attempt, congratulations</p>";
        }
        else if (previousResults > totalCorrect) {
            message1 = message1 + "<p>You scored " + Math.abs(totalCorrect - previousResults) + " worse than the last attempt, sorry</p>";
        }
    }

    $("p.details1").html(message);
    $("p.results").html(message1);
    $("input[name='previous']").val(totalCorrect);
    $("input[name='first']").val(0);
    first = false;
});


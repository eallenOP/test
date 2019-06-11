// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "How good at recycling are you?",
        "main":    "<p>Find out how much you know about recycling with this quiz!</p>",
        "results": "",
        "level1":  "Expert",
        "level2":  "Proficent",
        "level3":  "Competent",
        "level4":  "Beginner",
        "level5":  "Novice" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Can aerosol cans be recycled?",
            "a": [
                {"option": "Yes",      "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> Empty aerosol cans can be recycled.</p>",
            "incorrect": "<p><span>Incorrect.</span> Empty aerosol cans can be recycled.</p>" // no comma here
        },
        { // Question 2
            "q": "How many times can aluminuim cans be recycled?",
            "a": [
                {"option": "Five times",               "correct": false},
                {"option": "Ten times",   "correct": false},
                {"option": "Twenty times",               "correct": false},
                {"option": "Unlimited", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Correct!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Incorrect.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which bins can you put can and bottle lids in?",
            "a": [
                {"option": "Yellow lid",           "correct": true},
                {"option": "Red lid",                  "correct": false},
                {"option": "Blue Bins",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> You can recycle can and bottle lids in the glass recycling and normal recycling bins.</p>",
            "incorrect": "<p><span>Incorrect.</span> You can recycle can and bottle lids in the glass recycling and normal recycling bins.</p>" // no comma here
        },
        { // Question 4
            "q": "Paper cups are recyclable",
            "a": [
                {"option": "True",    "correct": false}, 
                {"option": "False",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> Paper cups are often not recyclable because they have a plastic lining.</p>",
            "incorrect": "<p><span>Incorrect.</span> Paper cups are often not recyclable because they have a plastic lining.</p>" // no comma here
        },
        { // Question 5
            "q": "Drinking glasses are recyclable",
            "a": [
                {"option": "True",    "correct": false},
                {"option": "False",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> They are usually made from recycled glass.</p>",
            "incorrect": "<p><span>Incorrect.</span> They are usually made from recycled glass.</p>" // no comma here
        } // no comma here
    ]
};

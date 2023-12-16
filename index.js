$(document).ready(function() {
    const startButton = $("#startButton");
    const titleSection = $(".title");
    const questionSection = $(".question");
    const questionInfoText = $("#questionInfoText");
    const questionImage = $("#questionImage");
    const questionText = $("#questionText");
    const finishSection = $(".finish");
    const finishText = $("#finishText");
    const finishInfoText = $("#finishInfoText");
    const choices = $(".choice");

const questions = [
    {
        question: "What has the right of way on an incline?",
        choices: ["Vehicle going up", "Vehicle going down", "Priority vehicle", "None of the above"],
        answer: 1
    },
    {
        question: "Which vehicle can I drive with a B license?",
        choices: ["Car", "Motorcycle", "Boat", "None of the above"],
        answer: 0,
        image: "img/license.jpg"
    },
    {
        question: "What color is the traffic light indicating stop?",
        choices: ["Red", "Green", "Orange", "Blue"],
        answer: 0
    },
    {
        question: "What is the maximum speed allowed in urban areas?",
        choices: ["30 km/h", "50 km/h", "70 km/h", "90 km/h"],
        answer: 1
    },
    {
        question: "What is the color of the highway indication sign?",
        choices: ["Blue", "Red", "Green", "Orange"],
        answer: 0
    },
    {
        question: "What does the triangular sign with an exclamation point mean?",
        choices: ["Danger", "Mandatory stop", "Yield", "No parking"],
        answer: 0
    },
    {
        question: "What is the color of the one-way traffic sign?",
        choices: ["Blue", "Red", "White", "Yellow"],
        answer: 2
    },
    {
        question: "What is the color of the no parking sign?",
        choices: ["Blue", "Red", "White", "Yellow"],
        answer: 1
    },
    {
        question: "What is the color of the traffic light indicating caution?",
        choices: ["Red", "Green", "Orange", "Blue"],
        answer: 2
    },
    {
        question: "What does the circular sign with a diagonal bar mean?",
        choices: ["Parking allowed", "No parking", "Priority road", "Pedestrian crossing"],
        answer: 1
    }
];


    let currentQuestionIndex = 0;
    let error = 0;
    let maxError = 2;

    startButton.click(function() {
        titleSection.hide();
        questionSection.show();
        start();
    });

    function start(){
        startButton.hide();
        showQuestion(currentQuestionIndex);
    }

    function showQuestion(index) {
        const currentQuestion = questions[index];
        questionInfoText.text("Question (" + (index + 1) + "/" + questions.length +")");

        if (currentQuestion.image != null) {
            questionImage.attr('src', currentQuestion.image);
            questionImage.css('display', 'inline');
        } else {
            questionImage.css('display', 'none');
        }

        questionText.text(currentQuestion.question);

        choices.each(function(choiceIndex) {
            $(this).text(currentQuestion.choices[choiceIndex]);
        });
    }

    choices.click(function() {
        const currentQuestion = questions[currentQuestionIndex];
        const choiceIndex = choices.index(this);

        if (choiceIndex !== currentQuestion.answer) {
            error++;
        }
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            finish();
        }
    });

    function finish(){
        questionSection.hide();
        finishSection.show();

        if (error <= maxError){
            finishText.text("Congratulations!");
            finishInfoText.text("You have passed the driving theory test with " + error + " errors.");
            finishText.css("color", "green");
        } else {
            finishText.text("You have failed!");
            finishInfoText.text("You answered incorrectly to " + error + " out of " + questions.length + " questions.");
            finishText.css("color", "red");
        }

    }
});
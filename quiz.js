var quizForm = document.querySelector(".quiz-form");
var button = document.querySelector("#button");
var displayText = document.querySelector("#display-text");
var headingText = document.querySelector("#heading");

headingText.style.display = "none";

var correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
];

function calculateScore() {

    var data = new FormData(quizForm);
    let score = 0;
    let index = 0;
        for (let value of data.values()) {
            if (value === correctAnswers[index]) {
                score++;
            }
            console.log(value);
            index++;
        }
        headingText.style.display = "block";
        displayText.innerText = score;
    
}

button.addEventListener("click", calculateScore);
var quizForm = document.querySelector(".quiz-form");
var button=document.querySelector("#button");
var displayText=document.querySelector("#display-text");
var headingText=document.querySelector("#heading");

headingText.style.display="none";

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
    
    var formResults = new FormData(quizForm);
    let score = 0;
    let index = 0;
    for (let value of formResults.values()) {
      if(value==="")
      {
        headingText.style.display="block";
        headingText.innerText= "Please enter all options";
      }  
      else if (value === correctAnswers[index]) {
        score=score + 1;
      }
      index = index + 1;
    }
    headingText.style.display="block";
    displayText.innerText = score;
  }
  
  button.addEventListener("click", calculateScore);
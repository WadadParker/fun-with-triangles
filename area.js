var side= document.querySelectorAll(".side");
var button = document.querySelector("#button");
var displayText = document.querySelector("#display-text");

button.addEventListener("click", checkArea)

function checkArea()
{
    if(Number(side[0].value)<1 || Number(side[1].value<1))
    {
        displayMessage("Please enter a valid number for both sides")
    }
    else {
        var area = computeArea(Number(side[0].value),Number(side[1].value))
        displayMessage("Area is " + area.toFixed(2))
    }
}

function computeArea(num1,num2)
{
    return (0.5*num1*num2);
}


function displayMessage(text)
{
    displayText.innerText = text;
}
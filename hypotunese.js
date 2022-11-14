var side= document.querySelectorAll(".side");
var button = document.querySelector("#button");
var displayText = document.querySelector("#display-text");

button.addEventListener("click", checkHypotunese)

function checkHypotunese()
{
    if(Number(side[0].value)<1 || Number(side[1].value<1))
    {
        displayMessage("Please enter a valid number for both sides")
    }
    else {
        var hypotunese = computeHypotunese(Number(side[0].value),Number(side[1].value))
        displayMessage("Hypotunese is " + hypotunese.toFixed(2))
    }
}

function computeHypotunese(num1,num2)
{
    return Math.sqrt((num1*num1) + (num2*num2)) 
}


function displayMessage(text)
{
    displayText.innerText = text;
}
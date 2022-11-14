var inputButton= document.querySelectorAll(".input-button");
var button=document.querySelector("#button");
var displayText= document.querySelector("#display-text")



button.addEventListener("click", computeTriangle);


function computeTriangle()
{

    if(inputButton[0].value<1 || inputButton[1].value<1 || inputButton[2].value<1)
    {
        displayMessage("Please enter all 3 angles with valid numbers");
       
    }
    else {
        var sum = calculateSum(Number(inputButton[0].value),Number(inputButton[1].value),Number(inputButton[2].value));
        if(sum===180 )
        {
            displayMessage("Yes this will form a Triangle");
        }
        else {
            displayMessage("This will not form a triangle as the sum total of angles is not 180");
        }
    }
}

function displayMessage(text)
{
    displayText.innerText= text;
    
}

function calculateSum(angle1,angle2,angle3)
{
    return angle1+angle2+angle3;
}
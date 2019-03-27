document.addEventListener("DOMContentLoaded", function() {
    runGame("add");
});

function runGame(gameType) {
    
    // Creates two numbers with a value of between 1 and 50
    let num1 = Math.floor(Math.random() * 50) + 1;
    let num2 = Math.floor(Math.random() * 50) + 1;

    // Selects and displays the question depending on the gameType
    // which we set when we called the function

    if (gameType == "add") {
        displayAdditionQuestion(num1, num2);
    }
}

function checkAnswer(event) {
    event.preventDefault(); // Stops the page refreshing when the form is submitted

    let userAnswer = parseInt(document.getElementById("answer-box").value) || 0;
    let calculatedAnswer = calculateRightAnswer(); // calculatedAnswer is an array
    
    let isCorrect = userAnswer === calculatedAnswer[0]; // isCorrect has a true or false value

    if (isCorrect) {
        alert("Hey! You got it right :D");
        incrementScore();
    }
    else {
        alert(`Awww...you answered ${userAnswer}, the correct answer was ${calculatedAnswer[0]} :(`);
    }

    runGame(calculatedAnswer[1]);

}

function calculateRightAnswer() {
    
    // Gets the operands (the numbers) and the operator (plus, minus sign etc.)
    // directly from the DOM
    
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;
    
    if (operator == "+") { // This is the addition game
        return [operand1 + operand2, "add"]; // return an array containing the correct answer and game type
    }
}

function incrementScore() {
    
    // Gets the current score from the DOM and increments it
    
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = oldScore + 1;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

// Wait until the DOM has loaded before running the game
// Get the button elements, and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    runGame("addition");
});

// The main game "loop", called when the script is first loaded
// and after the user's answer has been processed

function runGame(gameType) {

    // Creates two numbers with a value of between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    // Selects and displays the question depending on the gameType
    // which we set when we called the function

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type ${gameType}, aborting`;
    }

}

// Called when the user clicks the Submit button or presses Enter

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateRightAnswer(); // calculatedAnswer is an array
    let isCorrect = userAnswer === calculatedAnswer[0]; // isCorrect has a true or false value

    if (isCorrect) {
        alert("Hey! You got it right :D");
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

    if (operator === "+") { // This is the addition game
        return [operand1 + operand2, "addition"]; // return an array containing the correct answer and game type
    }
    else {
        alert(`Unimplemented operator: ${operator}`);
        throw `Unimplemented operator ${operator}, aborting`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

// Displays the questions.

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

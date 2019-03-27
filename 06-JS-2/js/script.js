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

}

function calculateRightAnswer() {

}

function incrementScore() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

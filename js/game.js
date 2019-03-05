document.addEventListener("DOMContentLoaded", function() {
    runGame("add");
});

function calculateRightAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);

    let operator = document.getElementById("operator").innerText;
    if (operator == "+") {
        return [operand1 + operand2, "add"];
    }
    else {
        alert `Unimplemented operator: ${operator}`;
        throw `Unimplemented operator ${operator}, aborting`;
    }
}

function checkAnswer(event) {
    event.preventDefault();
    
    let userAnswer = parseInt(document.getElementById("answer-box").value) || 0;
    let calculatedAnswer = calculateRightAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right :)");
        incrementScore();
    }
    else {
        alert(`Awww...you answered ${userAnswer}, the correct answer was ${calculatedAnswer[0]} :(`);
    }

    addToAnswerHistory(isCorrect);
    runGame(calculatedAnswer[1]);
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = oldScore + 1;
}

function addToAnswerHistory(isCorrect) {
    let newFace = document.createElement("i");
    newFace.classList.add("fas");
    if (isCorrect) {
        newFace.classList.add("fa-grin-beam", "answer-correct");
    }
    else {
        newFace.classList.add("fa-frown-open", "answer-incorrect");
    }
    document.getElementById("answer-history").appendChild(newFace);
}

function runGame(operation) {
    document.getElementById("answer-box").value = ""; // Erases the last typed answer
    document.getElementById("answer-box").focus(); // Puts the cursor in the answer box

    let num1 = Math.floor(Math.random() * 50) + 1;
    let num2 = Math.floor(Math.random() * 50) + 1;

    if (operation == "add") {
        runAdditionGame(num1, num2);
    }
    else
    if (operation == "subtract") {
        // Call subtraction game here
    }
    else
    if (operation == "multiply") {
        // Call multiplication game here
    }
}

function runAdditionGame(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand1;
    document.getElementById("operator").textContent = "+";
}

let scoreTally = 0;
let answerHistory = [];
let historyDiv = document.getElementById("answer-history");
let scoreBox = document.getElementById("score");
let questionBox = document.getElementById("question");
let answerForm = document.getElementById("answer-form");
let answerBox = document.getElementById("answer-box");

function setAdditionGame() {
    answerForm.setAttribute("data-gametype", "addition");
    additionQuiz();
}

function setSubtractionGame() {
    answerForm.setAttribute("data-gametype", "subtraction");
    subtractionQuiz();
}

function setMultiplicationGame() {
    answerForm.setAttribute("data-gametype", "multiplication");
    multiplicationQuiz();
}

function checkAnswer() {
    let gameType = answerForm.getAttribute("data-gametype");
    if (answerForm["answer"].value == answerForm["rightAnswer"].value) {
        alert("Hey! You got it right :)");
        scoreTally++;
        answerHistory.push(true);
    } else {
        alert("Awww...wrong this time :(");
        answerHistory.push(false);
    }
    answerForm["answer"].value = "";
    scoreBox.textContent = scoreTally;
    let htmlString = "";
    for (let i in answerHistory) {
        if (answerHistory[i]) {
            htmlString += "<i class='fas fa-grin-beam' style='color: green; margin-right: 5px;'></i>";
        } else {
            htmlString += "<i class='fas fa-frown-open' style='color: red; margin-right: 5px;'></i>";
        }
    }
    historyDiv.innerHTML = htmlstring;
    if(gameType == "addition") {
        additionQuiz();
    } else if(gametype == "subtraction") {
        subtractionQuiz();
    } else if(gametype == "multiplication") {
        multiplicationQuiz();
    }
    return false;
}

function additionQuiz() {
    answerBox.focus();
    let num1 = Math.floor(Math.random() * 50) + 1;
    let num2 = Math.floor(Math.random() * 50) + 1;
    questionBox.textContent = `${num1} + ${num2}?`;
    answerForm["rightAnswer"].value = (num1 + num2);
}

additionQuiz();
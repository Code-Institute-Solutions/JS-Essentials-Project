// When the DOM has loaded, create and run the addition game

document.addEventListener("DOMContentLoaded", function() {
    gameStatus = new Game();
    runGame();
});

function Game() {
    this.currentScore = 0;
    this.answerHistory = [];
    this.gameType = 1;
    this.rightAnswer = 0;
}

/*
 Functions that run when the corresponding button is clicked
 Change the game type:
 1 = Addition game
 2 = Subtraction game
 3 = Multiplication game
 Then call runGame with the appropriate type
*/

function setAdditionGame() {
    gameStatus.gameType = 1;
    runGame();
}

function setSubtractionGame() {
    gameStatus.gameType = 2;
    runGame();
}

function setMultiplicationGame() {
    gameStatus.gameType = 3;
    runGame();
}

// Optional code to detect Enter key press

function checkForEnterKey(keyPress) {
    if (keyPress.keyCode == 13) { // 13 is the key code for Enter
        answerSubmitted(); // If Enter was pressed, our answer was submitted
    }
}

// answerSubmitted() is called when our answer is submitted either 
// by clicking the Submit button or pressing the Enter key

function answerSubmitted() {
    checkAnswer(); // Checks our answer
    setScore(); // Sets the score
    setAnswerHistory(); // Display the smiley faces
    runGame(); // Run the next game
}

function checkAnswer() {

    // Compare the submitted answer with the right answer
    // If correct, increase the score
    // Push a true or false value into the answerHistory array

    if (document.getElementById("answer-box").value == gameStatus.rightAnswer) {
        alert("Hey! You got it right :)");
        gameStatus.currentScore++;
        gameStatus.answerHistory.push(true);
    }
    else {
        alert("Awww...wrong this time :(");
        gameStatus.answerHistory.push(false);
    }

}

function setScore() {
    document.getElementById("score").textContent = gameStatus.currentScore;
}

function setAnswerHistory() {

    // Iterates through the array and sets two classes in htmlString - 
    // either a happy face in green or a sad face in red

    let htmlString = "";
    for (let correctAnswer of gameStatus.answerHistory) {
        let answerClass;
        let answerFace;
        if (correctAnswer) {
            answerClass = "answer-correct";
            answerFace = "fa-grin-beam";
        }
        else {
            answerClass = "answer-incorrect";
            answerFace = "fa-frown-open";
        }
        htmlString += `<i class='fas ${answerFace} ${answerClass}'></i>`;
    }
    document.getElementById("answer-history").innerHTML = htmlString;
}

function runGame() {

    /*
     Runs the appropriate game.
     1 = Addition game
     2 = Subtraction game
     3 = Multiplication game
    */

    document.getElementById("answer-box").value = ""; // Erases the last typed answer
    document.getElementById("answer-box").focus(); // Puts the cursor in the answer box

    if (gameStatus.gameType == 1) {
        document.getElementById("question").textContent = runAdditionGame();
    }
    else
    if (gameStatus.gameType == 2) {
        // Subtraction game goes here
    }
    else
    if (gameStatus.gameType == 3) {
        // Multiplication game goes here
    }
}

function runAdditionGame() {
    // Create two random numbers between 1 and 50

    let num1 = Math.floor(Math.random() * 50) + 1;
    let num2 = Math.floor(Math.random() * 50) + 1;

    // Store the correct answer in rightAnswer

    gameStatus.rightAnswer = (num1 + num2);
    
    return `${num1} + ${num2}?`;
}

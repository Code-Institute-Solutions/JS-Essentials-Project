// Wait until the DOM has loaded before running the game
// Get the button elements, and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit")
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

// The main game "loop", called when the script is first loaded
// and after the user's answer has been processed

function runGame(gameType) {

    // Creates two numbers with a value of between 1 and 25

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}

// Called when the user clicks the Submit button or presses Enter

function checkAnswer() {

}

function calculateRightAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

// Displays the questions.

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

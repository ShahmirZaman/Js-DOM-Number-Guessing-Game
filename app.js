const againButton = document.querySelector("#again-btn");
const centerDiv = document.querySelector(".center-div");
const userInput = document.querySelector("#user-number");
const submitbutton = document.querySelector("#submit-btn");
const remarks = document.querySelector(".remarks");
const scoreText = document.querySelector("#score");
const highscoreText = document.querySelector("#highscore");

let score = 20;
scoreText.textContent = score;
let highscore = 0;
highscoreText.textContent = highscore;
let guessFound = false;
let randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);
function submitHandler() {
    let userInputvalue = +userInput.value;
    if(score <= 0) {
        alert("You lose!");
        resetGame();
    } else {
        if(!guessFound) {
            if(userInputvalue === randomNumber) {
                remarks.textContent = "Correct Guess!";
                centerDiv.textContent = randomNumber;
                document.body.style.backgroundColor = "#54aa3d";
                guessFound = true;
                score+=20;
                scoreText.textContent = score;
                if(score > highscore) {
                    highscoreText.textContent = score;
                }
            } else if(userInputvalue > randomNumber) {
                remarks.textContent = "Too High!";
                setScore();
            } else {
                remarks.textContent = "Too Low!"
                setScore();
            }
        }
    }
}
function setScore() {
    score--;
    scoreText.textContent = score;
}
function resetGame() {
    remarks.textContent = "Start guessing...";
    score = 20;
    highscore = 0;
    scoreText.textContent = score;
    highscoreText.textContent = highscore;
    userInput.value = "";
    guessFound = false;
    centerDiv.textContent = "?";
    document.body.style.backgroundColor = "#1f1f1f";
    randomNumber = Math.floor(Math.random() * 20 + 1);
    console.log(randomNumber);
}
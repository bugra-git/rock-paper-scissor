function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*100);
    let computerChoice;
    if (0 < randomNum && randomNum <= 33) {
        computerChoice = "Rock";
    } else if (33 < randomNum && randomNum <= 66) {
        computerChoice = "Paper";
    } else if (66 < randomNum && randomNum <= 99) {
        computerChoice = "Scissors";
    }
    else getComputerChoice();
    return computerChoice;
}

const choiceDiv = document.querySelector("#buttons");
choiceDiv.addEventListener("click",getHumanChoice);

let humanChoice;
function getHumanChoice(event) {
    let choice;
    if (event.target.textContent === "Rock") {
        choice = "Rock";
    } else if ((event.target.textContent === "Paper")) {
        choice = "Paper";
    } else if ((event.target.textContent === "Scissors")) {
        choice = "Scissors";
    }
    humanChoice = choice;
    play();
}

function score() {
    let scoreBoard = `computer score:${computerScore} - human score:${humanScore}`;
    const scorebox = document.querySelector("#scoreboard");
    scorebox.textContent = scoreBoard;
}
let computerScore = 0;
let humanScore = 0;
score();

function play() {
    let message;
    let computerChoice = getComputerChoice(); 
    if (computerChoice === humanChoice) {
        message = "You draw";
    } else if (humanChoice === "Rock") {
        message = (computerChoice === "Paper")? "You lost, computer had paper" : "You won, computer had scissors";
    } else if (humanChoice === "Paper") {
        message = (computerChoice === "Scissors")? "You lost, computer had scissors" : "You won, computer had rock";
    } else if (humanChoice === "Scissors") {
        message = (computerChoice === "Rock")? "You lost, computer had rock" : "You won, computer had paper";
    }
    const messagebox = document.querySelector("#message");
    messagebox.textContent = message;

    if (message.slice(0,7) === "You won") {
        humanScore++;
    } else if (message.slice(0,8) === "You lost") {
        computerScore++;
    }
    score();
    if (humanScore===5) {
        alert("You won the game");
        humanScore=0;
        computerScore=0;
    }
    if (computerScore===5) {
        alert("You lost the game");
        humanScore=0;
        computerScore=0;
    }
}
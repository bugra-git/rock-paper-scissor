console.log("hello");

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

function getHumanChoice() {
    let choice;
    let entry = prompt("enter one of three: 1.rock, 2.paper, 3.scissors", "");
    if ((entry.toLowerCase() === "rock") || (entry === "1")) {
        choice = "Rock";
    } else if ((entry.toLowerCase() === "paper") || (entry === "2")) {
        choice = "Paper";
    } else if ((entry.toLowerCase() === "scissors") || (entry === "3")) {
        choice = "Scissors";
    } else getHumanChoice();
    return choice;
}

function score() {
    let scoreBoard = `computer score:${computerScore}-human score:${humanScore}`;
    console.log(scoreBoard);
}
let computerScore = 0;
let humanScore = 0;
score();

function play() {
    let message;
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    if (computerChoice === humanChoice) {
        message = "You draw";
    } else if (humanChoice === "Rock") {
        message = (computerChoice === "Paper")? "You lost, computer had paper" : "You won, computer had scissors";
    } else if (humanChoice === "Paper") {
        message = (computerChoice === "Scissors")? "You lost, commputer had scissors" : "You won, computer had rock";
    } else if (humanChoice === "Scissors") {
        message = (computerChoice === "Rock")? "You lost, computer had rock" : "You won, computer had paper";
    }
    console.log(message);
    if (message.slice(0,7) === "You won") {
        humanScore++;
    } else if (message.slice(0,8) === "You lost") {
        computerScore++;
    }
}

function game() {
    play();
    score();
    play();
    score();
    play();
    score();
    play();
    score();
    play();
    score();
    if (computerScore < humanScore) {
        console.log("You won the game");
    } else if (humanScore < computerScore) {
        console.log("You lost the game");
    } else (console.log("Game end in draw"))
}

game();
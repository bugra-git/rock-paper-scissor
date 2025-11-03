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
let computerChoice = getComputerChoice();

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
let humanChoice = getHumanChoice();
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
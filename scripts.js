const playerSelection = "Rock";
const computerSelection = computerChoice();
const printPlayerChoice = document.getElementById("player-choice");
const printComputerChoice = document.getElementById("computer-choice");
const printGameResult = document.getElementById("game-result");

printPlayerChoice.innerHTML = "Player choice: " + playerSelection;
printComputerChoice.innerHTML = "Computer choice: " + computerSelection;
printGameResult.innerHTML = "Game result: " + playGame(playerSelection, computerSelection);


console.log(playGame(playerSelection, computerSelection))
console.log("Player: ", playerSelection);
console.log("Computer: ", computerSelection);

function playGame(playerSelection, computerSelection) {
    if (computerSelection === "Rock" && playerSelection === "Scissor") {
        return "You lose! Rock beats Scissor.";
    } else if (computerSelection === "Rock" && playerSelection === "Rock") {
        return "Tie! Pick again.";
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        return "You win! Paper beats Rock.";
    } else if (computerSelection === "Scissor" && playerSelection === "Scissor") {
        return "Tie! Pick again.";
    } else if (computerSelection === "Scissor" && playerSelection === "Rock") {
        return "You win! Rock beats Scissor.";
    } else if (computerSelection === "Scissor" && playerSelection === "Paper") {
        return "You lose! Scissor beats Paper.";
    } else if (computerSelection === "Paper" && playerSelection === "Scissor") {
        return "You win! Scissor beats Paper.";
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return "You lose! Paper beats Rock.";
    } else if (computerSelection === "Paper" && playerSelection === "Paper") {
        return "Tie! Pick again.";
    } else {
        return "Invalid option selected";
    }
}

function computerChoice() {
    const randomNumber = (Math.random() * 10 + 1);
    if (randomNumber <= 3.333) {
        return "Rock";
    } else if (randomNumber > 3.333 && randomNumber <= 6.666) {
        return "Scissor";
    } else {
        return "Paper";
    }
}
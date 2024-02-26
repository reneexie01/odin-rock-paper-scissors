const startGameBtn = document.getElementById("start-game");
startGameBtn.addEventListener("click", startGame);
let playerSelection;

function startGame() {
    const inputValue = document.getElementById("player-input").value;
    let playerSelection = inputValue.toUpperCase();
    const computerSelection = computerChoice();
    const printPlayerChoice = document.getElementById("player-choice");
    const printComputerChoice = document.getElementById("computer-choice");
    const printGameResult = document.getElementById("game-result");

printPlayerChoice.innerHTML = `<strong>Player choice:</strong> ${playerSelection}`;
printComputerChoice.innerHTML = `<strong>Computer choice:</strong> ${computerSelection}`;
printGameResult.innerHTML = `<strong>Game result:</strong> ${playGame(playerSelection, computerSelection)}`;

console.log("Player: ", playerSelection);
console.log("Computer: ", computerSelection);
console.log(playGame(playerSelection, computerSelection))

function playGame(playerSelection, computerSelection) {
    if (computerSelection === "ROCK" && playerSelection === "SCISSOR") {
        return "You lose! ROCK beats SCISSOR.";
    } else if (computerSelection === "ROCK" && playerSelection === "ROCK") {
        return "Tie! Pick again.";
    } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
        return "You win! PAPER beats ROCK.";
    } else if (computerSelection === "SCISSOR" && playerSelection === "SCISSOR") {
        return "Tie! Pick again.";
    } else if (computerSelection === "SCISSOR" && playerSelection === "ROCK") {
        return "You win! ROCK beats SCISSOR.";
    } else if (computerSelection === "SCISSOR" && playerSelection === "PAPER") {
        return "You lose! SCISSOR beats PAPER.";
    } else if (computerSelection === "PAPER" && playerSelection === "SCISSOR") {
        return "You win! SCISSOR beats PAPER.";
    } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
        return "You lose! PAPER beats ROCK.";
    } else if (computerSelection === "PAPER" && playerSelection === "PAPER") {
        return "Tie! Pick again.";
    } else {
        return "Invalid option selected";
    }
}

function computerChoice() {
    const randomNumber = (Math.random() * 10 + 1);
    if (randomNumber <= 3.333) {
        return "ROCK";
    } else if (randomNumber > 3.333 && randomNumber <= 6.666) {
        return "SCISSOR";
    } else {
        return "PAPER";
    }
}
  }

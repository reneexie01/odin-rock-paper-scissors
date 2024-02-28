const startGameBtn = document.getElementById("start-game");
startGameBtn.addEventListener("click", startGame);
const resetGameBtn = document.getElementById("reset-game");
/* resetGameBtn.addEventListener("click", resetGame); */
let playerWins = 0;
let computerWins = 0;
let gameNumber = 0;

function startGame() {
const inputValue = document.getElementById("player-input").value;
const playerSelection = inputValue.toUpperCase();
const computerSelection = computerChoice();
let gameOutcome;

const printPlayerChoice = document.getElementById("player-choice");
const printComputerChoice = document.getElementById("computer-choice");
const printGameResult = document.getElementById("game-result");

printPlayerChoice.innerHTML = `<strong>Player choice:</strong> ${playerSelection}`;
printComputerChoice.innerHTML = `<strong>Computer choice:</strong> ${computerSelection}`;
printGameResult.innerHTML = `<strong>Game result:</strong> ${playGame(playerSelection, computerSelection)}`;

function playGame(playerSelection, computerSelection) {
    if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
        gameOutcome = "loss";
        return "You lose! ROCK beats SCISSORS.";
    } else if (computerSelection === "ROCK" && playerSelection === "ROCK") {
        gameOutcome = "tie";
        return "Tie! Pick again.";
    } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
        gameOutcome = "win";
        return "You win! PAPER beats ROCK.";
    } else if (computerSelection === "SCISSORS" && playerSelection === "SCISSORS") {
        gameOutcome = "tie";
        return "Tie! Pick again.";
    } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
        gameOutcome = "win";
        return "You win! ROCK beats SCISSORS.";
    } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
        gameOutcome = "loss";
        return "You lose! SCISSORS beats PAPER.";
    } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
        gameOutcome = "win";
        return "You win! SCISSORS beats PAPER.";
    } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
        gameOutcome = "loss";
        return "You lose! PAPER beats ROCK.";
    } else if (computerSelection === "PAPER" && playerSelection === "PAPER") {
        gameOutcome = "tie";
        return "Tie! Pick again.";
    } else {
        gameOutcome = "invalid";
        return "Invalid option selected. Try again.";
    }
}

scoreCount(gameOutcome);

console.log("Player: ", playerSelection);
console.log("Computer: ", computerSelection);
console.log(playGame(playerSelection, computerSelection))
console.log("Player wins: ", playerWins);
console.log("Computer wins: ", computerWins);
console.log("Game number: ", gameNumber);

function scoreCount(gameOutcome) {
    if (gameOutcome === "loss") {
        gameNumber++;
        computerWins++;
    } else if (gameOutcome === "win") {
        gameNumber++;
        playerWins++;
    } else {
        gameNumber++;
    }
}

function computerChoice() {
    const randomNumber = (Math.random() * 10 + 1);
    if (randomNumber <= 3.333) {
        return "ROCK";
    } else if (randomNumber > 3.333 && randomNumber <= 6.666) {
        return "SCISSORS";
    } else {
        return "PAPER";
    }
}
  }

  /*
  function resetGame() {
    console.log("clicked");
  }
  */
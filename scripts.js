const startGameBtn = document.getElementById("start-game");
startGameBtn.addEventListener("click", startGame);
const resetGameBtn = document.getElementById("reset-game");
resetGameBtn.addEventListener("click", resetGame);
let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
let gameNumber = 0;

const printPlayerChoice = document.getElementById("player-choice");
const printComputerChoice = document.getElementById("computer-choice");
const printGameResult = document.getElementById("game-result");
const printScore = document.getElementById("score");

function startGame() {
const inputValue = document.getElementById("player-input").value;
const playerSelection = inputValue.toUpperCase();
const computerSelection = computerChoice();
let gameOutcome;

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
printScore.innerHTML = `
<p><strong>Score: </strong><p> 
<p>PLAYER wins: ${playerWins} | COMPUTER wins: ${computerWins}</p>
<p><strong>Games Played:</strong> ${gameNumber}</p>
`

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
    const randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1) {
        return "ROCK";
    } else if (randomNumber === 2) {
        return "SCISSORS";
    } else {
        return "PAPER";
    }
}
  }

  function resetGame() {
    document.getElementById("player-input").value = '';
    playerWins = 0;
    computerWins = 0;
    gameNumber = 0;
    playerSelection;
    computerSelection;
    printPlayerChoice.innerHTML = `<strong>Player choice:</strong>`;
    printComputerChoice.innerHTML = `<strong>Computer choice:</strong>`;
    printGameResult.innerHTML = `<strong>Game result:</strong>`;
    printScore.innerHTML = `<strong>Score: </strong>`;
  }
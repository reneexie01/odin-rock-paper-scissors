const startGameBtn = document.querySelector("#start-game");
startGameBtn.addEventListener("click", startGame);
const resetGameBtn = document.querySelector("#reset-game");
resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.querySelector("#rock-btn");
rockBtn.addEventListener("click", () => startGameChoiceBtns("ROCK"));
const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener("click", () => startGameChoiceBtns("PAPER"));
const scissorsBtn = document.querySelector("#scissors-btn");
scissorsBtn.addEventListener("click", () => startGameChoiceBtns("SCISSORS"));

const results = document.querySelector("#results");

let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
let gameNumber = 0;

function startGameChoiceBtns(playerSelection) {
    clearPreviousGames();
    document.querySelector("#player-input").value = '';
    const computerSelection = computerChoice();
    let gameOutcome;

    const printPlayerChoice = document.createElement("p");
    printPlayerChoice.setAttribute("id", "player-choice");
    printPlayerChoice.innerHTML = `<strong>Player choice:</strong> ${playerSelection}`;
    results.appendChild(printPlayerChoice);

    const printComputerChoice = document.createElement("p");
    printComputerChoice.setAttribute("id", "computer-choice");
    printComputerChoice.innerHTML = `<strong>Computer choice:</strong> ${computerSelection}`;
    results.appendChild(printComputerChoice);

    const printGameResult = document.createElement("p");
    printGameResult.setAttribute("id", "game-result");
    printGameResult.innerHTML = `<strong>Game result:</strong> ${playGame(playerSelection, computerSelection)}`;
    results.appendChild(printGameResult);
    
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


    const printScore = document.createElement("p");
    printScore.setAttribute("id", "score");
    printScore.innerHTML = `
    <p><strong>Score: </strong><p> 
    <p>PLAYER wins: ${playerWins} | COMPUTER wins: ${computerWins}</p>
    <p><strong>Games Played:</strong> ${gameNumber}</p>
    `
    results.appendChild(printScore);
    
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

function startGame() {
clearPreviousGames();
const inputValue = document.querySelector("#player-input").value;
const playerSelection = inputValue.toUpperCase();
const computerSelection = computerChoice();
let gameOutcome;

const printPlayerChoice = document.createElement("p");
printPlayerChoice.setAttribute("id", "player-choice");
printPlayerChoice.innerHTML = `<strong>Player choice:</strong> ${playerSelection}`;
results.appendChild(printPlayerChoice);

const printComputerChoice = document.createElement("p");
printComputerChoice.setAttribute("id", "computer-choice");
printComputerChoice.innerHTML = `<strong>Computer choice:</strong> ${computerSelection}`;
results.appendChild(printComputerChoice);

const printGameResult = document.createElement("p");
printGameResult.setAttribute("id", "game-result");
printGameResult.innerHTML = `<strong>Game result:</strong> ${playGame(playerSelection, computerSelection)}`;
results.appendChild(printGameResult);

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

const printScore = document.createElement("p");
printScore.setAttribute("id", "score");
printScore.innerHTML = `
<p><strong>Score: </strong><p> 
<p>PLAYER wins: ${playerWins} | COMPUTER wins: ${computerWins}</p>
<p><strong>Games Played:</strong> ${gameNumber}</p>
`
results.appendChild(printScore);

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
    document.querySelector("#player-input").value = '';
    playerWins = 0;
    computerWins = 0;
    gameNumber = 0;
    playerSelection;
    computerSelection;

    while (results.firstChild) {
        results.removeChild(results.lastChild);
    }
  }

  function clearPreviousGames() {
    while (results.firstChild) {
        results.removeChild(results.lastChild);
    }
  }
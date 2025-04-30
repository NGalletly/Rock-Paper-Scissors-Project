console.log("Hello World");

let computerChoice = "aa";
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

// HTML selectors
rockButton = document.querySelector(".rockButton");
paperButton = document.querySelector(".paperButton");
scissorButton = document.querySelector(".scissorButton");
scoreBoard = document.querySelector(".scoreBoard");
scoreDisplay = document.querySelector(".scoreDisplay");

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 100);

  computerChoice = choice <= 33 ? "Rock" : choice <= 66 ? "Paper" : "Scissors";
  return computerChoice;
}

function getHumanChoice() {
  humanChoice = prompt("rock paper scissors?");
  return humanChoice;
}

let r = "Rock";
let p = "Paper";
let s = "Scissors";

let yw = "You win! ";
let yl = "You Lose! ";
let pbr = "Paper beats Rock!";
let rbs = "Rock beats Scissors!";
let sbp = "Scissors beats Paper!";
let yd = "You Draw!";

// playRound function

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(yd);
    scoreBoard.textContent = yd + " No score added!";
  } else if (humanChoice == r && computerChoice == s) {
    console.log(yw + rbs);
    scoreBoard.textContent = yw + rbs;
    humanScore++;
    scoreDisplay.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
  } else if (humanChoice == r && computerChoice == p) {
    console.log(yl + pbr);
    scoreBoard.textContent = yl + pbr;
    computerScore++;
    scoreDisplay.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
  } else if (humanChoice == p && computerChoice == r) {
    console.log(yw + pbr);
    scoreBoard.textContent = yw + pbr;
    humanScore++;
    scoreDisplay.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
  } else if (humanChoice == p && computerChoice == s) {
    console.log(yl + sbp);
    scoreBoard.textContent = yl + sbp;
    computerScore++;
    scoreDisplay.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
  } else if (humanChoice == s && computerChoice == p) {
    console.log(yw + sbp);
    scoreBoard.textContent = yw + sbp;
    humanScore++;
    scoreDisplay.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
  } else if (humanChoice == s && computerChoice == r) {
    console.log(yl + rbs);
    scoreBoard.textContent = yl + rbs;
    computerScore++;
    scoreDisplay.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
  }

  if (humanScore >= 5) {
    scoreBoard.textContent = "Human wins!";
    scoreDisplay.textContent = "Game Over";
  } else if (computerScore >= 5) {
    scoreBoard.textContent = "Computer wins!";
    scoreDisplay.textContent = "Game Over";
  } else {
  }
}

rockButton.addEventListener("click", (e) => {
  humanChoice = r;
  getComputerChoice();
  console.log(computerChoice);
  playRound(humanChoice, computerChoice);
});

paperButton.addEventListener("click", (e) => {
  humanChoice = p;
  getComputerChoice();
  console.log(computerChoice);
  playRound(humanChoice, computerChoice);
});

scissorButton.addEventListener("click", (e) => {
  humanChoice = s;
  getComputerChoice();
  console.log(computerChoice);
  playRound(humanChoice, computerChoice);
});

console.log("Hello World");

let computerChoice = "aa";
let humanChoice = "";

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 100);

  computerChoice = choice <= 33 ? "Rock" : choice <= 66 ? "Paper" : "Scissors";
  //   console.log(computerChoice);
  return computerChoice;
}

// getComputerChoice();
// console.log(computerChoice);

function getHumanChoice() {
  humanChoice = prompt("rock paper scissors?");
  return humanChoice;
}

// getHumanChoice();
// console.log(humanChoice);

// console.log(typeof humanAnswer);

// let humanScore = 0;
// let computerScore = 0;

let r = "Rock";
let p = "Paper";
let s = "Scissors";

let yw = "You win! ";
let yl = "You Lose! ";
let pbr = "Paper beats Rock!";
let rbs = "Rock beats Scissors!";
let sbp = "Scissors beats Paper!";
let yd = "You Draw!";

// Start of game JS

/*


function playRound(humanChoice, computerChoice) {
  // Function and reassignment of Capitalized and lower case choices.
  function capitalized(x) {
    return x[0].toUpperCase() + x.slice(1).toLowerCase();
  }
  humanChoice = capitalized(humanChoice);
  computerChoice = capitalized(computerChoice);

  console.log(humanChoice, computerChoice);

  //   Game Logic start:

  if (humanChoice === computerChoice) {
    console.log(yd);
  } else if (humanChoice == r && computerChoice == s) {
    console.log(yw + rbs);
    humanScore++;
  } else if (humanChoice == r && computerChoice == p) {
    console.log(yl + pbr);
    computerScore++;
  } else if (humanChoice == p && computerChoice == r) {
    console.log(yw + pbr);
    humanScore++;
  } else if (humanChoice == p && computerChoice == s) {
    console.log(yl + sbp);
    computerScore++;
  } else if (humanChoice == s && computerChoice == p) {
    console.log(yw + sbp);
    humanScore++;
  } else if (humanChoice == s && computerChoice == r) {
    console.log(yl + rbs);
    computerScore++;
  }
}



*/

// PLAY GAME FUNCTION

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // getComputerChoice();
  // getHumanChoice();

  function playRound(humanChoice, computerChoice) {
    // Function and reassignment of Capitalized and lower case choices.
    function capitalized(x) {
      return x[0].toUpperCase() + x.slice(1).toLowerCase();
    }
    humanChoice = capitalized(humanChoice);
    computerChoice = capitalized(computerChoice);

    console.log(humanChoice, computerChoice);

    //   Game Logic start:

    if (humanChoice === computerChoice) {
      console.log(yd);
    } else if (humanChoice == r && computerChoice == s) {
      console.log(yw + rbs);
      humanScore++;
    } else if (humanChoice == r && computerChoice == p) {
      console.log(yl + pbr);
      computerScore++;
    } else if (humanChoice == p && computerChoice == r) {
      console.log(yw + pbr);
      humanScore++;
    } else if (humanChoice == p && computerChoice == s) {
      console.log(yl + sbp);
      computerScore++;
    } else if (humanChoice == s && computerChoice == p) {
      console.log(yw + sbp);
      humanScore++;
    } else if (humanChoice == s && computerChoice == r) {
      console.log(yl + rbs);
      computerScore++;
    }
    console.log(
      "Human Score: " + humanScore,
      "Computer Score: " + computerScore
    );
  }

  // playRound(humanChoice, computerChoice);

  let n = 0;

  while (n < Infinity) {
    if (humanScore >= 5) {
      console.log("Game over, human wins!");
      break;
    } else if (computerScore >= 5) {
      console.log("Game over, Computer wins!");
      break;
    } else {
      getComputerChoice();
      getHumanChoice();
      playRound(humanChoice, computerChoice);
    }
    n++;
  }
}

playGame();

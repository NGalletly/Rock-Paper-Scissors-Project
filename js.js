console.log("Hello World");

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 100);
  console.log(choice);

  let decision = choice <= 33 ? "rock" : choice <= 66 ? "paper" : "scissors";
  console.log(decision);
  return decision;
}

getComputerChoice();

let humanAnswer = "";

function getHumanChoice() {
  humanAnswer = prompt("rock paper scissors?");
}

getHumanChoice();
console.log(humanAnswer);

// console.log(typeof humanAnswer);

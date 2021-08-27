"use strict";
window.addEventListener("DOMContentLoaded", start);
let computerChoice;
let playerChoice;
let tie;
let winner;
const threeOptions = ["rock", "paper", "scissors"];

function start() {
  console.log("start");
  getPlayerChoice();
}
function getPlayerChoice() {
  console.log("getPlayerChoice");
  document.querySelector(".rock").addEventListener("click", function () {
    let playerChoice = "rock";
    console.log("player chooses " + playerChoice);
    getComputerChoice();
  });
  document.querySelector(".paper").addEventListener("click", function () {
    let playerChoice = "paper";
    console.log("player chooses " + playerChoice);
    getComputerChoice();
  });
  document.querySelector(".scissors").addEventListener("click", function () {
    let playerChoice = "scissors";
    console.log("player chooses " + playerChoice);
    getComputerChoice();
  });
}

function getComputerChoice() {
  console.log("randomComputerChoice");
  let random = Math.floor(Math.random() * threeOptions.length);
  console.log("computer chooses: " + (random, threeOptions[random]));
  computerChoice = (random, threeOptions[random]);
  showAnimations();
}

function showAnimations() {
  console.log("showAnimations");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");

  if (playerChoice === "rock") {
    document.querySelector("#player1").classList.add("rock");
    console.log("player rock is shown");
  }
  if (playerChoice === "paper") {
    document.querySelector("#player1").classList.add("paper");
    console.log("player paper is shown");
  }
  if (playerChoice === "scissors") {
    document.querySelector("#player1").classList.add("scissors");
    console.log("player scissors are shown");
  }
  if (computerChoice === "rock") {
    document.querySelector("#player2").classList.add("rock");
    console.log("comp rock is shown");
  }
  if (computerChoice === "paper") {
    document.querySelector("#player2").classList.add("paper");
    console.log("comp paper is shown");
  }
  if (computerChoice === "scissors") {
    document.querySelector("#player2").classList.add("scissors");
    console.log("comp scissors are shown");
  }

  determineWinner();
}

function determineWinner() {
  console.log("determineWinner");
  if (playerChoice === computerChoice) {
    showDraw();
    console.log("tie");
  }
  //user wins
  else if (computerChoice === "rock" && playerChoice === "paper") {
    winner === "user";
    console.log("user wins");
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    winner === "user";
    console.log("user wins");
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    winner === "user";
    console.log("user wins");
  }

  //computer wins
  else if (computerChoice === "paper" && playerChoice === "rock") {
    console.log("computer wins");
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    console.log("computer wins");
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    console.log("computer wins");
  }
  //then show the winner
  if (winner === "computer") {
    showLose();
  } else if (winner === "user") {
    showWin();
  }
}
function showWin() {
  console.log("winpoint");
}
function showLose() {
  console.log("losePoint");
}
function showDraw() {
  console.log("drawPoint");
}

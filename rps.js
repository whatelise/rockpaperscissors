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
    playerChoice = "rock";
    console.log("player chooses " + playerChoice);
    getComputerChoice();
  });
  document.querySelector(".paper").addEventListener("click", function () {
    playerChoice = "paper";
    console.log("player chooses " + playerChoice);
    getComputerChoice();
  });
  document.querySelector(".scissors").addEventListener("click", function () {
    playerChoice = "scissors";
    console.log("player chooses " + playerChoice);
    getComputerChoice();
  });
}

function getComputerChoice() {
  console.log("randomComputerChoice");
  let random = Math.floor(Math.random() * threeOptions.length);
  console.log("computer chooses: " + (random, threeOptions[random]));
  computerChoice = (random, threeOptions[random]);
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  showAnimations();
}

function showAnimations() {
  console.log("showAnimations");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", removeShake);
  document.querySelector("#player2").addEventListener("animationend", removeShake);
}

function removeShake() {
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");

  if (playerChoice === "rock") {
    document.querySelector("#player1").classList.add(playerChoice);
    console.log("player rock is shown");
  } else if (playerChoice === "paper") {
    document.querySelector("#player1").classList.add(playerChoice);
    console.log("player paper is shown");
  } else if (playerChoice === "scissors") {
    document.querySelector("#player1").classList.add(playerChoice);
    console.log("player scissors are shown");
  }
  if (computerChoice === "rock") {
    document.querySelector("#player2").classList.add(computerChoice);
    console.log("comp rock is shown");
  } else if (computerChoice === "paper") {
    document.querySelector("#player2").classList.add(computerChoice);
    console.log("comp paper is shown");
  } else if (computerChoice === "scissors") {
    document.querySelector("#player2").classList.add(computerChoice);
    console.log("comp scissors are shown");
  }
  determineWinner();
}

function determineWinner() {
  console.log("determineWinner");

  //user wins
  if (computerChoice === "rock" && playerChoice === "paper") {
    winner === "user";
    showWin();
    console.log("user wins");
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    winner === "user";
    showWin();
    console.log("user wins");
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    winner === "user";
    showWin();
    console.log("user wins");
  }

  //computer wins
  else if (computerChoice === "paper" && playerChoice === "rock") {
    showLose();
    console.log("computer wins");
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    showLose();
    console.log("computer wins");
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    showLose();
    console.log("computer wins");
  } else if (playerChoice === computerChoice) {
    showDraw();
    console.log("tie");
  }
}
function showWin() {
  console.log("winPoint");
  document.querySelector("#win").classList.remove("hidden");
}
function showLose() {
  document.querySelector("#lose").classList.remove("hidden");
  console.log("losePoint");
}
function showDraw() {
  document.querySelector("#draw").classList.remove("hidden");
  console.log("drawPoint");
}

"use strict";
window.addEventListener("DOMContentLoaded", start);
let computerChoice;
let playerChoice;

function start() {
  console.log("start");
  getPlayerChoice();
}
function getPlayerChoice() {
  console.log("getPlayerChoice");
  document.querySelector(".rock").addEventListener("click", function () {
    let playerChoice = "rock";
    console.log(playerChoice);
  });
  document.querySelector(".paper").addEventListener("click", function () {
    let playerChoice = "paper";
    console.log(playerChoice);
  });
  document.querySelector(".rock").addEventListener("click", function () {
    let playerChoice = "scissors";
    console.log(playerChoice);
  });
  getComputerChoice();
}

function getComputerChoice() {
  console.log("randomComputerChoice");
  // document.querySelector(".rock").removeEventListener("click", function () {
  //   let playerChoice = "rock";
  //   console.log(playerChoice);
  // });
  // document.querySelector(".paper").removeEventListener("click", function () {
  //   let playerChoice = "paper";
  //   console.log(playerChoice);
  // });
  // document.querySelector(".rock").removeEventListener("click", function () {
  //   let playerChoice = "scissors";
  //   console.log(playerChoice);
  // });

  var options = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * options.length);
  console.log(options[computerChoice]);
  showAnimations();
}

function showAnimations() {
  console.log("showAnimations");

  determineWinner();
}

function determineWinner() {
  console.log("determineWinner");
  if (computerChoice === rock && playerChoice === paper) {
    winner === "user";
  }

  if (winner === "computer") {
    showLose();
  } else if (winner === "user") {
    showWin();
  } else {
    showDraw();
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

"use strict";

let secretNmber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  //No guess
  if (!guess) {
    document.querySelector(".message").textContent = "No Guess Number";
  }
  //if guess is correct
  else if (guess === secretNmber) {
    document.querySelector(".secret-number").textContent = secretNmber;
    document.querySelector(".message").textContent = "🎉✨ Correct Number";
    document.querySelector("body").style.backgroundColor = "#63ff00";
    document.querySelector(".secret-number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //if number is great
  else if (guess > secretNmber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High⬆⬆";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost 💥";
      score--;
      document.querySelector(".score").textContent = 0;

      document.querySelector("body").style.backgroundColor = "#fe1800";
    }
  }
  //if number is low
  else if (guess < secretNmber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low⬇⬇";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost 💥";
      score--;
      document.querySelector(".score").textContent = 0;

      document.querySelector("body").style.backgroundColor = "#fe1800";
    }
  }
});

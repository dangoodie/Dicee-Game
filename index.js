document.querySelector("button").addEventListener("click", playDiceGame);

function playDiceGame() {
  var randomNum1 = rng(1, 6);
  var randomNum2 = rng(1, 6);

  setDiceImg(randomNum1, ".img1");
  setDiceImg(randomNum2, ".img2");

  displayWinner(randomNum1, randomNum2);

  function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function setDiceImg(num, imgclass) {
    document
      .querySelector(imgclass)
      .setAttribute("src", "images/dice" + num + ".png");
  }

  function displayWinner(num1, num2) {
    if (num1 == num2) {
      changeH1Text("Draw!");
    }
    if (num1 > num2) {
      changeH1Text("🚩Player 1 Wins!");
    }
    if (num1 < num2) {
      changeH1Text("Player 2 Wins! 🚩");
    }
  }

  function changeH1Text(string) {
    document.querySelector("h1").textContent = string;
  }
}

var currentPlayer = "X";
var gameEnded = false;

function play(cell) {
  if (!gameEnded && cell.innerText === "") {
    cell.innerText = currentPlayer;

    if (checkWin()) {
      alert("Player " + currentPlayer + " wins!");
      gameEnded = true;
    } else if (checkDraw()) {
      alert("It's a draw!");
      gameEnded = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  var cells = document.getElementsByClassName("cell");
  var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  for (var i = 0; i < winningCombinations.length; i++) {
    var [a, b, c] = winningCombinations[i];
    if (
      cells[a].innerText !== "" &&
      cells[a].innerText === cells[b].innerText &&
      cells[a].innerText === cells[c].innerText
    ) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  var cells = document.getElementsByClassName("cell");
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].innerText === "") {
      return false;
    }
  }
  return true;
}

function restartGame() {
  var cells = document.getElementsByClassName("cell");
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
  currentPlayer = "X";
  gameEnded = false;
}

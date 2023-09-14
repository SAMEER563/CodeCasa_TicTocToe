const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      alert(`${currentPlayer} wins!`);
      resetGame();
      return;
    }
  }

  if (!board.includes("")) {
    alert("It's a draw!");
    resetGame();
  }
}

function makeMove(cellIndex) {
  if (board[cellIndex] === "") {
    board[cellIndex] = currentPlayer;
    cells[cellIndex].textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  cells.forEach((cell) => (cell.textContent = ""));
}
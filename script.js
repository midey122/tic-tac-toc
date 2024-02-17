document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const cells = document.querySelectorAll(".cell");
  let currentPlayer = "X";
  let gameBoard = ["", "", "", "", "", "", "", "", ""];
  let gameActive = true;

  const checkWinner = () => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        return gameBoard[a];
      }
    }

    return null;
  };

  const checkDraw = () => {
    return !gameBoard.includes("");
  };

  const handleClick = (index) => {
    if (!gameActive || gameBoard[index] !== "") {
      return;
    }

    gameBoard[index] = currentPlayer;
    cells[index].innerText = currentPlayer;

    const winner = checkWinner();
    const draw = checkDraw();

    if (winner) {
      alert(`Player ${winner} wins!`);
      gameActive = false;
    } else if (draw) {
      alert("It's a draw!");
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  };

  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => handleClick(index));
  });
});

let playerX = "X";
let gameEnd = false;
const winPos = [
  [1, 2, 3], [4, 5, 6],
  [7, 8, 9], [1, 4, 7],
  [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
let movesCount = 0;

function checkWinner(player) {
  for (let i = 0; i < winPos.length; i++) {
    const [a, b, c] = winPos[i];
    if (
      document.getElementById(a.toString()).innerHTML === player &&
      document.getElementById(b.toString()).innerHTML === player &&
      document.getElementById(c.toString()).innerHTML === player
    ) {
      document.getElementById(a.toString()).classList.add("win");
      document.getElementById(b.toString()).classList.add("win");
      document.getElementById(c.toString()).classList.add("win");
      gameEnd = true;
      showOfficeGIF();
      alert(player + " wins!");
      break;
    }
  }
}

function showOfficeGIF() {
  const officeGIF = document.getElementById("winImage");
  officeGIF.style.display = "block";
  officeGIF.src = "thumbsup.gif"; 
}

function checkTie() {
  movesCount++;
  if (movesCount === 9 && !gameEnd) {
    gameEnd = true;
    alert("Nobody wins. Reset the game.");
  }
}

function resetGame() {
  gameEnd = false;
  playerX = "X";
  const officeImage = document.getElementById("winImage");
  officeImage.style.display = "none";
  officeImage.src = "";
  movesCount = 0;
  for (let i = 1; i <= 9; i++) {
    const cell = document.getElementById(i.toString());
    cell.innerHTML = "";
    cell.classList.remove("win", "X", "O");
  }
}

for (let i = 1; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener(
    "click",
    function () {
      if (this.innerHTML === "" && !gameEnd) {
        this.innerHTML = playerX;
        this.classList.add(playerX.toLowerCase());
        checkWinner(playerX);
        checkTie();

      
        playerX = playerX === "X" ? "O" : "X";
      }
    }
  );
}
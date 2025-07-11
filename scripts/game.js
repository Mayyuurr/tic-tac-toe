
function restGameBoard(){
    gameIsOver=false;
    activePlayer=0;
    currentRound=1;

    gameOverElement.firstElementChild.innerHTML='You Won <span id="winner-name">Player name</span>!';
    gameOverElement.style.display='none';

    let gameBoardIndex=0;
    for(let i=0; i<3;i++){
        for(let j=0;j<3;j++){
            gameData[i][j]=0;
            const gameBoardItemElements=gameFieldElements.children[gameBoardIndex];
            gameBoardItemElements.textContent='';
            gameBoardItemElements.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}


function startGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please Enter Player name to Start Game!!");
    return;
  }

  restGameBoard();

  activePlayerNameElement.textContent = players[activePlayer].name;
  activeGameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI" || gameIsOver) {
    return;
  }

  const selectedField = event.target;
  const selectedrow = selectedField.dataset.row - 1;
  const selectedcolumn = selectedField.dataset.col - 1;

  if (gameData[selectedrow][selectedcolumn] > 0) {
    alert("select an empty Field!");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedrow][selectedcolumn] = activePlayer + 1;
  // console.log(gameData);
  const winnerId = checkGameOver();
//   console.log(winnerId);

if(winnerId!==0){
    gameEnd(winnerId);
}

  currentRound++;
  switchPlayer();
}

function checkGameOver() {
  //checking row
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  //checking column
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0 ][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  //checking diagonal top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  //checking diagonal top right to bottom left
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[2][0] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function gameEnd(winnerId){
    gameIsOver=true;

    gameOverElement.style.display='block';

    if(winnerId>0){
        const winnerName=players[winnerId-1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent=winnerName;
    }else{
        gameOverElement.firstElementChild.textContent='It\'s a Draw!';
    }
    
}
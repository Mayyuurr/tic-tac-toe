
const gameData=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

let editedPlayer=0;
let activePlayer=0;
let currentRound=1;
let gameIsOver=false;

const players=[
    {
        name:'',
        symbol:'X'
    },
    {
        name:'',
        symbol:'O'
    }
];

const PlayerOverlayConfigElement= document.getElementById('config-overlay');
const backdropElement= document.getElementById('backdrop');
const formElement=document.querySelector('form');
const errorOutputElement=document.getElementById('error');
const activeGameAreaElement=document.getElementById('active-game');
const activePlayerNameElement=document.getElementById('active-player-name');

const gameOverElement=document.getElementById('game-over');

const editPlayer1BtnElement=document.getElementById('edit-player1-btn');
const editPlayer2BtnElement=document.getElementById('edit-player2-btn');
const cancleConfigBtnElement=document.getElementById('cancle-config-btn');
const startGametnElement=document.getElementById('start-game-btn');
// const gameFieldElements=document.querySelectorAll('#game-board li');
const gameFieldElements=document.getElementById('game-board');

editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);
cancleConfigBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);
startGametnElement.addEventListener('click',startGame);

// for (const gameFieldElement of gameFieldElements) {
//     gameFieldElement.addEventListener('click',selectGameField);    
// }

gameFieldElements.addEventListener('click',selectGameField);
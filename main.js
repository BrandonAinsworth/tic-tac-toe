var currentGame = new Game();

//QUERY SELECTORS
var gameBoard = document.querySelector('.game')
var gameCells = document.querySelectorAll('.game-cell')
var turnDisplay = document.querySelector('.turn-display')
//EVENT LISTENERS
gameBoard.addEventListener('click',currentGame.playerMove)
console.log(gameCells)
//FUNCTIONS
window.onclick = e => {
    showPiece(e)
//    var cellIndex = gameCells.findIndex(e.target)
//    console.log(cellIndex)
//    console.log(e.target.index)
}

function updatePlayerTurnText(){
    console.log('Helloo!')
turnDisplay.innerText = `It's the ${currentGame.currentPlayer.token}'s turn!`
}
updatePlayerTurnText()
// gameBoard.addEventListener('click', showPiece)

function showPiece(e){
    var closest = e.target.closest('.game-cell');
    closest.innerText = currentGame.currentPlayer.token
};
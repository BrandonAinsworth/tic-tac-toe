var currentGame = new Game();

//QUERY SELECTORS

var gameBoard = document.querySelector('.game')
var gameCells = document.querySelectorAll('.game-cell')
var turnDisplay = document.querySelector('.turn-display')

//EVENT LISTENERS

// gameBoard.addEventListener('click',currentGame.playerMove)
gameBoard.addEventListener('click', showPiece)

//FUNCTIONS
function updatePlayerTurnText(){
    console.log('Helloo!')
turnDisplay.innerText = `It's the ${currentGame.currentPlayer.token}'s turn!`
}
updatePlayerTurnText()

// window.onclick = e => {
//     showPiece(e)
// }
//    var cellIndex = gameCells.findIndex(e.target)
//    console.log(cellIndex)
//    console.log(e.target.index)

// window.onclick = e => {
//     console.log(e.target.id)
        // e.target.id.innerHTML = currentGame.board[0]
    
// }


// function scanCells(){
//     for (var i = 0; gameCells.length; i++){
//         gameCells[i] = currentGame.board
// }







// function dataModeltoDOMBoard(){

// var A1 = currentGame.board[0]

// for (var i = 0; i < currentGame.board.length; i++)
//     currentGame.board[i].push()
//     gameCells.id
// }


function showPiece(e){
    var closest = e.target.closest('.game-cell');
    closest.innerText = currentGame.currentPlayer.token
    currentGame.board.push()[currentGame.playerMove(e.target.id)]
};

var currentGame = new Game();

//QUERY SELECTORS

var gameBoard = document.querySelector('.game')
var gameCells = document.querySelectorAll('.game-cell')
var turnDisplay = document.querySelector('.turn-display')

//EVENT LISTENERS

// gameBoard.addEventListener('click',currentGame.playerMove)
gameBoard.addEventListener('click', showPiece)

//FUNCTIONS
function updatePlayerTurnAndConditionText() {
    if (!currentGame.win) {
        turnDisplay.innerText = `It's the ${currentGame.currentPlayer.token}'s turn!`
    } else if (currentGame.draw) {
        turnDisplay.innerText = "It's a draw!"
    } else {
        turnDisplay.innerText = `${currentGame.currentPlayer.token} WINS!!!`
    }
}
updatePlayerTurnAndConditionText()

function resetBoard() {
    //for loop game cells innertext = null or ''
}

function updatePlayerWins() {
    //update that div innertext this.wins 
}

function blockExistingPlacementOnGrid(){
    //
}

function gameStateHandler() {
    if (this.win || this.draw) {
        updateWins()
        setTimeout(function () {}, 2000)
        resetBoard()
    }
}

// window.onclick = e => {
//     console.log(e.target.id)

function insertPlayerMoveOnDOM(e) {
    var closest = e.target.closest('.game-cell');
    closest.innerText = currentGame.currentPlayer.token
    currentGame.board.push()[currentGame.playerMove(e.target.id)]
    updatePlayerTurnAndConditionText()
};
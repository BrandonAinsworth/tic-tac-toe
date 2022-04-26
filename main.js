var currentGame = new Game();

//QUERY SELECTORS

var gameBoard = document.querySelector('.game')
var gameCells = document.querySelectorAll('.game-cell')
var turnDisplay = document.querySelector('.turn-display')
var leftCounter = document.querySelector('.left-counter')
var rightCounter = document.querySelector('.right-counter')

console.log(gameBoard)
//EVENT LISTENERS

// gameBoard.addEventListener('click',currentGame.playerMove)
gameBoard.addEventListener('click', insertPlayerMoveOnDOM)

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
updatePlayerWins()

function resetDOMBoard() {
    // for (var i = 0; i < gameBoard.length; i++){
    //     gameBoard[i].innerText = '';
        gameCells.innerText = ''
        // gameBoard.addEventListener('click',insertPlayerMoveOnDOM)
    }


function updatePlayerWins() {    
    leftCounter.innerText = `${currentGame.astronaut.wins.toString()} WINS`
    rightCounter.innerText = `${currentGame.alien.wins.toString()} WINS`
}

function gameStateHandler() {
    if (currentGame.win === true || currentGame.draw === true) {
        gameBoard.removeEventListener('click',insertPlayerMoveOnDOM)    
        updatePlayerWins()
        // setTimeout(function () {}, 200)
        resetDOMBoard()
    }
}

// window.onclick = e => {
//     console.log(e.target.id)

function insertPlayerMoveOnDOM(e) {
    // blockExistingPlacementOnGrid()
    var closest = e.target.closest('.game-cell');
    if (closest.innerText === ''){
    closest.innerText = currentGame.currentPlayer.token
    currentGame.board.push()[currentGame.playerMove(e.target.id)]
    gameStateHandler()
    updatePlayerTurnAndConditionText()
    
    }
};
var currentGame = new Game();

//QUERY SELECTORS

var gameBoard = document.querySelector('.game')
var gameCells = document.querySelectorAll('.game-cell')
var turnDisplay = document.querySelector('.turn-display')
var leftCounter = document.querySelector('.left-counter')
var rightCounter = document.querySelector('.right-counter')

//EVENT LISTENERS

// gameBoard.addEventListener('click',currentGame.playerMove)
gameBoard.addEventListener('click', insertPlayerMoveOnDOM)

//FUNCTIONS
function updatePlayerTurnAndConditionText() {
    if (currentGame.draw) {
    turnDisplay.innerText = "It's a draw!"
    } else if (!currentGame.win) {
        turnDisplay.innerText = `It's the ${currentGame.currentPlayer.token}'s turn!`
    } else {
        turnDisplay.innerText = `${currentGame.currentPlayer.token} WINS!!!`
    }
}
updatePlayerTurnAndConditionText()
updatePlayerWins()

function resetDOMBoard() {
    blockMovesAfterWinDraw()
    for (var i = 0; i < gameCells.length; i++) {
        gameCells[i].innerText = ''
    }
}

function startNewGame(){
    console.log('Hello start new game')
    updatePlayerTurnAndConditionText()
    gameBoard.addEventListener('click',insertPlayerMoveOnDOM)
}



function blockMovesAfterWinDraw(){
gameBoard.removeEventListener('click', insertPlayerMoveOnDOM)
}

function updatePlayerWins() {
    leftCounter.innerText = `${currentGame.astronaut.wins.toString()} WINS`
    rightCounter.innerText = `${currentGame.alien.wins.toString()} WINS`
}

function gameStateHandler() {
    if (currentGame.win === true || currentGame.draw === true) {
        console.log("Hello handler")
        currentGame.resetGame()
        updatePlayerWins()
        setTimeout(function () {
            resetDOMBoard()
            startNewGame()
        }, 2000)
    }
}

// window.onclick = e => {
//     console.log(e.target.id)

function insertPlayerMoveOnDOM(e) {
    var closest = e.target.closest('.game-cell');
    if (closest.innerText === '') {
        console.log('closest inner text')
        closest.innerText = currentGame.currentPlayer.token
        currentGame.board.push()[currentGame.playerMove(e.target.id)]
        updatePlayerTurnAndConditionText()
        gameStateHandler()
    }
};
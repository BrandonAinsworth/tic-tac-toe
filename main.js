var currentGame = new Game();

//QUERY SELECTORS
var gameBoard = document.querySelector('.game')
//EVENT LISTENERS

//FUNCTIONS
window.onclick = e => {
    console.log(e.target)
}

// gameBoard.addEventListener('click', showPiece)

// function showPiece(e){
//     var closest = e.target.closest('.game-piece');
//     closest.classList.toggle('hidden');
// };
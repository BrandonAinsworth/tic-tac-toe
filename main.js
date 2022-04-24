//QUERY SELECTORS
var gameBoard = document.querySelector('.game')
var gamePiece = document.querySelector('.game-piece')
//EVENT LISTENERS

//FUNCTIONS
window.onclick = e => {
    console.log(e.target)
}

gamePiece.addEventListener('click', showPiece)

function showPiece(e){
    var closest = e.target.closest('.game-piece');
    closest.classList.toggle('hidden');
};

//PSEUDOCODING

// 1. 
// 2. 
// 3. 
// 4. 
// 5.
// 6. 
// 7. 
// 8. 
// 9. 
// 10. 
// 11. 
// 12.
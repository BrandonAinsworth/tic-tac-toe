class Game {
    constructor() {
        this.board = ["", "", "", "", "", "", "", "", ""],
        this.astronaut = new Player(1, "🧑‍🚀")
        this.alien = new Player(2, "👽")
        this.currentPlayer = this.astronaut
        this.turns = 0
        this.winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.win = false;
    }
    playerMove(boardIndex){
        if ((this.currentPlayer === this.astronaut) && !this.board[boardIndex]){
            this.board[boardIndex] = 1;
            this.switchTurn()
            this.checkWinner();
            return this.board
        } else if (!this.board[boardIndex]){
            this.board[boardIndex] = 2; 
            this.switchTurn()
            this.checkWinner()
            return this.board
        } else {
            return "This position is unnaccapetable."
        }
        
    }
    checkBoard() {
        for (var i = 0; i < this.board.length; i++) {
            return this.board[i]
        }
        this.checkWinner();
    }
    checkWinner() {
        for (var i = 0; this.winConditions.length; i++) {
            if (this.winConditions[i][i].includes(this.board)){
            this.win = true
            return 'You are winner'
            }
        }
    }
    switchTurn() {
        if (this.currentPlayer === this.astronaut) {
            this.currentPlayer = this.alien
        } else {
            if (this.currentPlayer === this.alien) {
                this.currentPlayer = this.astronaut
            }
        }
    }
    isDraw() {
        if (this.turns === 9) {
            return 'A Draw!'
        }
        this.resetGame();
    }
    resetGame() {
        if (this.win){
        this.currentPlayer.wins++
        this.board = ["", "", "", "", "", "", "", "", ""]
    }
}
}
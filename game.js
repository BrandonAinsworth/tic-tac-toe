class Game {
    constructor() {
        this.board = []
        this.astronaut = new Player(1, "🧑‍🚀")
        this.alien = new Player(2, "👽")
        this.currentPlayer = this.astronaut
        this.turns = 0
        this.win = false;
        this.draw = false;
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
    }
    playerMove(boardIndex) {
        this.turns++
        if (this.currentPlayer === this.astronaut) {
            this.currentPlayer.move.push(parseInt(boardIndex))
            this.board[boardIndex] = 1;
            this.checkWinner(this.currentPlayer)
            this.switchTurn()
        } else {
            this.currentPlayer.move.push(parseInt(boardIndex))
            this.board[boardIndex] = 2;
            this.checkWinner(this.currentPlayer)
            this.switchTurn()
        }
    }

    checkWinner(currentPlayer) {
        for (var i = 0; i < this.winConditions.length; i++) {
            if (this.winConditions[i].every(position => {
                    return currentPlayer.move.includes(position)
                })) {
                this.win = true
            } else {
                this.isDraw()
            }
        }
    }

    switchTurn() {
        if (this.win || this.draw) return;
        if (this.currentPlayer === this.astronaut) {
            this.currentPlayer = this.alien
        } else {
            if (this.currentPlayer === this.alien) {
                this.currentPlayer = this.astronaut
            }
        }
    }

    isDraw() {
        if (this.turns === 9 && !this.win) {
            this.draw = true
        } else {
            this.draw = false
        }
    }

    resetGame() {
        if (this.win) {
            this.currentPlayer.wins++
            this.board = []
            this.astronaut.move = []
            this.alien.move = []
            this.win = false
            this.turns = 0
        } else if (this.draw) {
            this.board = []
            this.astronaut.move = []
            this.alien.move = []
            this.draw = false;
            this.turns = 0
        }
    }
}
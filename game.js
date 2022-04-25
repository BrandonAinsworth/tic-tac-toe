class Game {
    constructor() {
        this.board = ["", "", "", "", "", "", "", ""],
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
    playerMove(boardIndex) {

        if ((this.currentPlayer === this.astronaut) && !this.board[boardIndex]) {
            this.currentPlayer.move.push(boardIndex)
            this.board[boardIndex] = 1;
            this.checkWinner(this.currentPlayer);
            this.switchTurn()
            return this.board
        } else if (!this.board[boardIndex]) {
            this.currentPlayer.move.push(boardIndex)
            this.board[boardIndex] = 2;
            this.checkWinner(this.currentPlayer)
            this.switchTurn()
            return this.board
        } else {
            return "This position is unnaccapetable."
        }

    }
    // checkBoard() {
    //     for (var i = 0; i < this.board.length; i++) {
    //         return this.board[i]
    //     }
    //     // this.checkWinner();
    // }

//    checkWinner(currentPlayer){
//        return this.winConditions.some(banana => {
//            return banana.every(currentPlayer.move => {
//             return this.board.contains(currentPlayer.move)
//            })
//        })
//    }
    checkWinner(currentPlayer) {
        for (var i = 0; i < this.winConditions.length; i++) {
            if (this.winConditions[i].every(position => {
                    return currentPlayer.move.includes(position)
                })) {
                this.win = true
                this.winnerWinner(currentPlayer)
                console.log('WinWinWinWin')
                this.resetGame()
            }
        }
    }

winnerWinner(currentPlayer){
    currentPlayer.wins++

}

    // checkWinner() {
    //     for (var i = 0; this.winConditions.length; i++) {
    //         if (this.winConditions[i].includes(this.board)){
    //         this.win = true
    //         window.alert("You win!")
    //         this.resetGame()
    //         }
    //     }
    // }

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
        window.alert('A Draw!')
        this.resetGame();
    }
    resetGame() {
        if (this.win) {
            this.currentPlayer.wins++
            this.board = ["", "", "", "", "", "", "", "", ""]
        }
    }
}

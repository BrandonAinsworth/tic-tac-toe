class Game {
    constructor(board =["","","","","","","",""], player1, player2){
        this.board = board
        this.player1 = player1
        this.player2 = player2
    }
    checkBoard(){
        //Check data model for positions
        //Call win condition function
        //Call if board is full function
    }
    checkTurn(){
        //
    }
    isDraw(){
        //Call checkBoard to check if full
    }
    resetBoard(){
        this.board = this.board
    }
}
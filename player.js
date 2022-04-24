class Player {
    constructor(id){
        this.id = id
        this.wins = 0
        this.token = 'X'
    }
    increaseWins(id){
        this.wins++
    }
}

module.exports = Player
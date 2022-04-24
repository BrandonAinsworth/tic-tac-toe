class Player {
    constructor(id, token){
        this.id = id
        this.wins = 0
        this.token = token
    }
    increaseWins(id){
        this.wins++
    }
}

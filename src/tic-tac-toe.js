class TicTacToe {
    constructor() {

    }

    getCurrentPlayerSymbol() {
        this.symbol = this.symbol || 'x'

        return this.symbol
    }

    nextTurn(rowIndex, columnIndex) {
        this.symbol = this.symbol || 'x'

        if (this.poligon === undefined) {
            this.poligon = []
            this.poligon[0] = [null, null, null]
            this.poligon[1] = [null, null, null]
            this.poligon[2] = [null, null, null]
        }

        if (this.poligon[rowIndex][columnIndex] !== this.symbol
            && this.poligon[rowIndex][columnIndex] === null
        ) {
            this.poligon[rowIndex][columnIndex] = this.symbol
            this.symbol = this.symbol === 'x' ? 'o' : 'x'
        }
    }

    isFinished() {
        return this.getWinner() || this.isDraw() ? true : false
    }

    getWinner() {
        if (
            (this.poligon[0][0] === this.poligon[0][1] && this.poligon[0][1] === this.poligon[0][2] && this.poligon[0][1] !== null) ||
            (this.poligon[1][0] === this.poligon[1][1] && this.poligon[1][1] === this.poligon[1][2] && this.poligon[1][1] !== null) ||
            (this.poligon[2][0] === this.poligon[2][1] && this.poligon[2][1] === this.poligon[2][2] && this.poligon[2][1] !== null) ||
            (this.poligon[0][0] === this.poligon[1][0] && this.poligon[1][0] === this.poligon[2][0] && this.poligon[1][0] !== null) ||
            (this.poligon[0][1] === this.poligon[1][1] && this.poligon[1][1] === this.poligon[2][1] && this.poligon[1][1] !== null) ||
            (this.poligon[0][2] === this.poligon[1][2] && this.poligon[1][2] === this.poligon[2][2] && this.poligon[1][2] !== null) ||
            (this.poligon[0][0] === this.poligon[1][1] && this.poligon[1][1] === this.poligon[2][2] && this.poligon[1][1] !== null) ||
            (this.poligon[0][2] === this.poligon[1][1] && this.poligon[1][1] === this.poligon[2][0] && this.poligon[1][1] !== null)
        ) {
            return this.symbol === 'x' ? 'o' : 'x'
        }

        return null
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.poligon[i][j] === null) {
                    return false
                }
            }
        }

        return true
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner()
    }

    getFieldValue(rowIndex, colIndex) {
        return this.poligon[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;

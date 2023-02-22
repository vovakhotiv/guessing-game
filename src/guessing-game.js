class GuessingGame {
    constructor() {
    this.min = 0
    this.max = 0
    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        return this.number = Math.round((this.min + this.max) / 2)
    }

    lower() {
        this.max = this.number
    }

    greater() {
        this.min = this.number
    }
}

module.exports = GuessingGame;

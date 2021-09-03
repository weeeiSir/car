const Direction = require('./direction')

const map = {
    [Direction.N]: {
        left: Direction.W
    },
    [Direction.W]: {
        left: Direction.S
    },
    [Direction.S]: {
        left: Direction.E
    },
    [Direction.E]: {
        left: Direction.N
    }
}

module.exports = {
    turnLeft: direction => map[direction].left
}
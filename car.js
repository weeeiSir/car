const Direction = require('./constant/direction')
const { turnLeft } = require('./constant/directionMap')

module.exports = class Car{
    constructor(position, direction) {
        this.position = position
        this.direction = direction
    }
    getState() {
        return {
            position: this.position,
            direction: this.direction
        }
    }
    turnLeft() {
        // const map = {
        //     [Direction.N]: {
        //         left: Direction.W
        //     },
        //     [Direction.W]: {
        //         left: Direction.S
        //     },
        //     [Direction.S]: {
        //         left: Direction.E
        //     },
        //     [Direction.E]: {
        //         left: Direction.N
        //     }
        // }



        // if(this.direction === Direction.N){
        //     // this.direction = Direction.W
        //     this.direction = map[Direction.N].left
        //     return
        // }
        // if(this.direction === Direction.W){
        //     // this.direction = Direction.S
        //     this.direction = map[Direction.W].left
        //     return
        // }
        // if(this.direction === Direction.S){
        //     this.direction = map[Direction.S].left
        //     // this.direction = Direction.E
        //     return
        // }
        // if(this.direction === Direction.E){
        //     this.direction = map[Direction.E].left
        //     // this.direction = Direction.N
        //     return
        // }


        this.direction = turnLeft(this.direction)

    }
}
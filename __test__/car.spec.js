// 1. 测试环境是否搭建好了
// test('jest', () => {
//     expect(1).toBe(1)
// })
const Direction = require('../constant/direction')
const Position = require('../position')
const Car = require('../car')
// 2. 按需求编写对应的测试用例
// describe('car', () => {
//     it('init position and directon', () => {
//         const position = new Position(0, 0)
//         const car = new Car(position, 'north')

//         expect(car.getState()).toEqual({
//             position: {
//                 x: 0,
//                 y: 0
//             },
//             direction: 'north'
//         })
//     })
// })

// 3. 重构
describe('car', () => {
    it('init position and directon', () => {
        const position = new Position(0, 0)
        const car = new Car(position, Direction.N)

        expect(car.getState()).toEqual({
            position: {
                x: 0,
                y: 0
            },
            direction: Direction.N
        })
    })

    describe('turnLeft', () => {
        it('North  --- West', () => {
            const car = new Car(new Position(0, 0), Direction.N)
            car.turnLeft()
            expect(car.getState()).toEqual({
                position: {
                    x: 0,
                    y: 0,
                },
                direction: Direction.W,
            })
        })
        it('West  --- South', () => {
            const car = new Car(new Position(0, 0), Direction.W)
            car.turnLeft()
            expect(car.getState()).toEqual({
                position: {
                    x: 0,
                    y: 0,
                },
                direction: Direction.S,
            })
        })
        it('South --- East', () => {
            const car = new Car(new Position(0, 0), Direction.S)
            car.turnLeft()
            expect(car.getState()).toEqual({
                position: {
                    x: 0,
                    y: 0,
                },
                direction: Direction.E,
            })
        })
        it('East --- North', () => {
            const car = new Car(new Position(0, 0), Direction.E)
            car.turnLeft()
            expect(car.getState()).toEqual({
                position: {
                    x: 0,
                    y: 0,
                },
                direction: Direction.N,
            })
        })
    })

})
const Calculator = require('./task3')
const object = new Calculator();

describe('sum of the two inputs', ()=>{
    test('add', ()=>{
        expect(object.add(6, 3)).toBe(9)
    })
    test('add', ()=>{
        expect(object.add(10, 2)).toBe(12)
    })
    test('add', ()=>{
        expect(object.add(5, 1)).toBe(6)
    })
})
describe('substraction of the two inputs', ()=>{
    test('substract', ()=>{
        expect(object.substract(6, 3)).toBe(3)
    })
    test('substract', ()=>{
        expect(object.substract(10, 2)).toBe(8)
    })
    test('substract', ()=>{
        expect(object.substract(5, 1)).toBe(4)
    })
})
describe('division of the two inputs', ()=>{
    test('divide', ()=>{
        expect(object.divide(6, 3)).toBe(2)
    })
    test('divide', ()=>{
        expect(object.divide(10, 2)).toBe(5)
    })
    test('divide', ()=>{
        expect(object.divide(6, 2)).toBe(3)
    })
})
describe('multiplication of the two inputs', ()=>{
    test('multiplication', ()=>{
        expect(object.multiply(6, 3)).toBe(18)
    })
    test('multiplication', ()=>{
        expect(object.multiply(10, 2)).toBe(20)
    })
    test('multiplication', ()=>{
        expect(object.multiply(5, 2)).toBe(10)
    })
})
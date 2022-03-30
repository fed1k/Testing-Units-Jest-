// const { test, expect } = require('@jest/globals')
const reverseString = require('./task2')

test('check whether input string is reversed', ()=>{
    expect(reverseString('fed')).toBe('def');
})
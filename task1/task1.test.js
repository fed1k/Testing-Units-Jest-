// const { test } = require('@jest/globals');
// const { expect } = require('@jest/globals');
const { test } = require('@jest/globals');
const stringLength = require('./task1');

test('return length of the input string', ()=>{
    expect(stringLength('salom')).toBe('salom'.length);
})

test('checking the length of the string whether it is greater than 1 and not longer than 10', ()=>{
    expect(stringLength('salom')).not.toBe('salom'.length < 1 && 'salom'.length > 10);
})
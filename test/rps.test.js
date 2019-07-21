import { getThrowFromNumber } from '../src/get-throw.js';
const test = QUnit.test;

QUnit.module('Get Throw');

test('rock if 0', assert => {

    const number = 0;
    const expected = 'rock';
    
    const randomWeapon = getThrowFromNumber(number);

    assert.equal(randomWeapon, expected);
});

test('paper if 1', assert => {

    const number = 1;
    const expected = 'paper';
    
    const randomWeapon = getThrowFromNumber(number);

    assert.equal(randomWeapon, expected);
});

test('scissors if 2', assert => {

    const number = 2;
    const expected = 'scissors';
    
    const randomWeapon = getThrowFromNumber(number);

    assert.equal(randomWeapon, expected);
});
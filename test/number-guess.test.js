import compareNumbers from '../src/number-guess.js';

const test = QUnit.test;

test('checks to see if it is the same', (assert) => {
    const userGuess = 4;
    const correctNumber = 4;
    const expected = 0;

    const result = compareNumbers(correctNumber, userGuess);

    assert.equal(result, expected);

});

test('checks to see if it is too low', (assert) => {
    const userGuess = 2;
    const correctNumber = 4;
    const expected = 1;

    const result = compareNumbers(correctNumber, userGuess);

    assert.equal(result, expected);

});

test('checks to see if it is too low', (assert) => {
    const userGuess = 7;
    const correctNumber = 4;
    const expected = -1;

    const result = compareNumbers(correctNumber, userGuess);

    assert.equal(result, expected);

});

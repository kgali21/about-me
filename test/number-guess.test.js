import compareNumbers from '../src/number-guess.js';

const test = QUnit.test;

test('checks to see if it is the same', (assert) => {
    const correctNumber = 4;
    const expected = '4';

    const result = compareNumbers(correctNumber);

    assert.equal(result, expected);

});
import isYes from '../src/isYes.js';

const test = Qunit.test;

test('yes is yes', function(assert){

    const text = 'yes';
    const expected = true;

    const result = isYes(text);

    assert.equal(result, expected);

});
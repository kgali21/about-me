import isYes from '../src/isYes.js';

const test = qunit.test;

test('yes is yes', function(assert){

    const text = 'yes';
    const expected = true;

    const result = isYes(text);

    assert.equal(result, expected);

});

test('yep is yes', function(assert){

    const text = 'yep';
    const expected = true;

    const result = isYes(text);

    assert.equal(result, expected);

});

test('yea is yes', function(assert){

    const text = 'yea';
    const expected = true;

    const result = isYes(text);

    assert.equal(result, expected);

});

test('yeah is yes', function(assert){

    const text = 'yeah';
    const expected = true;

    const result = isYes(text);

    assert.equal(result, expected);

});

test('true is yes', function(assert){

    const text = 'true';
    const expected = true;

    const result = isYes(text);

    assert.equal(result, expected);

});

test('no is no', function(assert){

    const text = 'no';
    const expected = false;

    const result = isYes(text);

    assert.equal(result, expected);

});
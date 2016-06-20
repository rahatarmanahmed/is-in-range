const test = require('ava');
const inRange = require('../lib/index');

test('int in single value', t => {
    t.true(inRange('23', 23));
    t.true(inRange('23-23', 23));

    t.false(inRange('23', 32));
});

test('int in range', t => {
    t.true(inRange('1-10', 1));
    t.true(inRange('1-10', 5));
    t.true(inRange('1-10', 10));

    t.false(inRange('1-10', -1));
    t.false(inRange('1-10', 0));
    t.false(inRange('1-10', 11));
});

test('int in reverse range', t => {
    t.true(inRange('10-1', 1));
    t.true(inRange('10-1', 5));
    t.true(inRange('10-1', 10));

    t.false(inRange('10-1', -1));
    t.false(inRange('10-1', 0));
    t.false(inRange('10-1', 11));
});

test('float in range', t => {
    t.true(inRange('1.5-1.6', 1.5));
    t.true(inRange('1.5-1.6', 1.55));
    t.true(inRange('1.5-1.6', 1.6));

    t.false(inRange('1.5-1.6', 1.49999999));
    t.false(inRange('1.5-1.6', 1.60000001));
});

test('int in multiple overlapping ranges', t => {
    const range = '23, 1-10, 42, 5-15';
    t.true(inRange(range, 23));
    t.true(inRange(range, 1));
    t.true(inRange(range, 5));
    t.true(inRange(range, 10));
    t.true(inRange(range, 42));
    t.true(inRange(range, 15));

    t.false(inRange(range, 0));
    t.false(inRange(range, 16));
    t.false(inRange(range, 22));
    t.false(inRange(range, 24));
    t.false(inRange(range, 41));
    t.false(inRange(range, 43));
    t.false(inRange(range, Infinity));
});

test('non-numbers', t => {
    t.true(inRange('1-10', '1'));
    t.true(inRange('1-10', '5'));
    t.true(inRange('1-10', '10'));

    t.false(inRange('1-10', null));
    t.false(inRange('1-10', undefined));
    t.false(inRange('1-10', NaN));
    t.false(inRange('1-10', {}));
    t.false(inRange('1-10', []));
    t.false(inRange('1-10', ''));
    t.false(inRange('1-10', '0'));
    t.false(inRange('1-10', '11'));
});

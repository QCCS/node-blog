import test from 'ava';
import {min} from '../min.js';

test('测试1', t => {
    t.is(min(1,2), 1);
});

test('测试2', t => {
    t.is(min(3,2), 2);
});


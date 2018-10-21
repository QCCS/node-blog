import test from 'ava';
import {fibonacci} from '../main.js';

test('fibonacci函数测试', t => {
    // 断言
    t.is(fibonacci(10), 55);
});


test('should equal 0 when n === 0', t => {
    t.is(fibonacci(0), 0);
});

test('should equal 1 when n === 1', t => {
    t.is(fibonacci(1), 1);
});

test('should equal 55 when n === 10', t => {
    t.is(fibonacci(10), 55);
});

test('should throw when n < 0', t => {
    t.throws(() => fibonacci(-1), 'n should >= 0');
});

test('should throw when n isnt Number', t => {
    t.throws(() => fibonacci('hha'), 'n should be a Number');
});

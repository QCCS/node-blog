import test from 'ava';
console.log(1)
function min(a,b) {
    if(a>b){
        return b;
    } else {
        return a;
    };
}

var fibonacci = function (n) {
    if (typeof n !== 'number') {
        throw new Error('n should be a Number');
    }

    if (n < 0) {
        throw new Error('n should >= 0');
    }

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2);
};
test('测试1', t => {
    t.is(min(1,2), 1);
});

test('测试2', t => {
    t.is(min(3,2), 2);
});

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

test('bar', async t => {
    const bar = Promise.resolve('bar');
    console.log(33)

    t.is(await bar, 'bar');
});
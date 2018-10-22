import test from 'ava';
let installCli = require('../../src/utils/install.js');
let commandJson = installCli.installCli.commandJson;

test('测试命名行工具1', t => {
    t.is(commandJson.help.com, "help");
});

test('测试命名行工具2', t => {
    t.is(commandJson.test.com, "npm run test");
});


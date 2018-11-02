// 这里做接口测试
import test from 'ava';
import request from 'request';
import appSetting from '../../settings/appSettings'

test.cb('接口测试1', t => {
    // 基于 Request API 创建 http 请求的配置
    const options = {
        baseUrl: 'http://localhost:' + appSetting.development.app_port,
        url: '/',
        // 请求超时时间
        timeout: 5 * 1000,
        // http 请求头部，模拟得跟浏览器越像越好，不然被服务器处理成爬虫或者其他就可能得不到我们想要的响应
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
        }
    };
    // Request API 发送 GET 请求
    request.get(options, (err, res, body) => {
        if (err) {
            t.fail('服务器响应超时！')
        };
        if (res && res.statusCode === 200) {
            t.is(body.substr(0, 6), "<!DOCT");
        } else {
            t.fail('无响应内容或状态码错误！');
        }
        // 异步结束
        t.end();
    });
});

test.cb('登陆接口测试', t => {
    const options = {
        baseUrl: 'http://localhost:' + appSetting.development.app_port,
        url: '/api/login?mobile=15921552991&password=mac123',
        json: true//返回json，不然是字符串
    };
    request.get(options, (err, res, body) => {
        t.is(body.mobile, "15921552991");
        // 异步结束
        t.end();
    });
});

test.cb('refresh_token接口测试', t => {
    const options = {
        baseUrl: 'http://localhost:' + appSetting.development.app_port,
        url: '/api/refresh',
        headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
        body: {
            refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiLlkajnq4siLCJwYXNzd29yZCI6IiQyYSQxMCRESUswcjlXLjRpaFZqVkpMUUFJTjJPSDdGai92MHI0N3lLbWZ4RHRzL1dhV0hNdndpNU1uaSIsIm1vYmlsZSI6IjE1OTIxNTUyOTkxIiwiZW1haWwiOiIxNTkyMTU1Mjk0MUBxcS5jb20iLCJzdGF0dXMiOjAsImNyZWF0ZWRfYnkiOjIsImNyZWF0ZWRfYXQiOiIyMDE4LTEwLTI0VDAyOjQ3OjI5LjAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAxOC0xMC0yNFQwMjo0NzoyOS4wMDBaIiwiaWF0IjoxNTQxMTQwMTk3LCJleHAiOjE1NDE3NDQ5OTd9.kky51uVbrEkQp9NQ6ZKoDQPAWO_oXieCtFmlrP8MF-g'
        },
        json: true
    };
    request.post(options, (err, res, body) => {
        t.is(body.mobile, "15921552991");
        // 异步结束
        t.end();
    });
})
// test.cb('注册接口测试', t => {
//     const options = {
//         baseUrl: 'http://localhost:' + appSetting.development.app_port,
//         url: '/api/register',
//         headers: {
//             'cache-control': 'no-cache',
//             'content-type': 'application/json'
//         },
//         body: {
//             "name":"post周",
//             "password":"mac123",
//             "mobile":"15821552948",
//             "email":"post605@111"
//         },
//         json: true
//     };
//     request.post(options, (err, res, body) => {
//         t.is(body.mobile, "15821552948");
//         t.end();
//     });
// })


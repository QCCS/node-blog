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
        }
        ;
        if (res && res.statusCode === 200) {
            t.is(body.substr(0, 6), "<!DOCT");
        } else {
            t.fail('无响应内容或状态码错误！');
        }
        // 异步结束
        t.end();
    });
});


// 这里做接口测试
import test from 'ava';
import request from 'request';
import appSetting from '../../settings/appSettings'

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiLlkajnq4siLCJlbWFpbCI6IjE1OTIxNTUyOTQxQHFxLmNvbSIsIm1vYmlsZSI6IjE1OTIxNTUyOTkxIiwiaWF0IjoxNTQxMTY5NDA1LCJleHAiOjE1NDExNzMwMDV9.G3T4xPHCYdlMVOADzP9N1a06uo-N2vxmgUZs4xvNnvk';
test.cb('新增博客测试', t => {
    const options = {
        baseUrl: 'http://localhost:' + appSetting.development.app_port,
        url: '/admin/post',
        headers: {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            'authorization': 'Bearer '+token
        },
        body: { title: '测试博客9',
            desc: 11,
            content: 'id为9id',
            content_md: 'id为9id',
            is_delete: 1,
            is_draft: 1,
            name: 'mac1234' },
        json: true
    };
    request.post(options, (err, res, body) => {
        if (err) throw new Error(err);
        t.is(body.title, "测试博客9");
        t.end();
    });
})

test.cb('修改博客测试', t => {
    const options = {
        baseUrl: 'http://localhost:' + appSetting.development.app_port,
        url: '/admin/post',
        headers: {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            'authorization': 'Bearer '+token
        },
        body: {
            id:24,
            title: '测试博客9',
            desc: 11,
            content: 'asasasasa',
            content_md: 'id为9id',
            is_delete: 1,
            is_draft: 1,
            name: 'mac1234' },
        json: true
    };
    request.put(options, (err, res, body) => {
        if (err) throw new Error(err);
        t.is(body[0], 1);//返回数组1 代表成功
        t.end();
    });
})

test.cb('查询博客列表', t => {
    const options = {
        baseUrl: 'http://localhost:' + appSetting.development.app_port,
        url: '/admin/post',
        headers: {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            'authorization': 'Bearer '+token
        },
        json: true
    };
    request.get(options, (err, res, body) => {
        if (err) throw new Error(err);
        t.is(body[0].id, 1);//返回数组1 代表成功
        t.end();
    });
})

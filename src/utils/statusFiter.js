/**
 * Created by zhouli on 18/9/24
 * 错误状态封装
 */
const status = {
    '403': () => {
        return {
            code: '0',
            reason: 'Forbidden'
        }
    },
    '404': () => {
        return {
            code: '0',
            reason: 'Not Found'
        }
    },
    '401': () => {
        return {
            code: '0',
            reason: 'Unauthorized'
        }
    },
    '200': () => {
        return {
            code: '1',
            reason: 'Success'
        }
    },
    '500': () => {
        return {
            code: '1',
            reason: 'Internal Server Error'
        }
    }
};

function statusFilter(code) {
    return status[code]()
}
let statusFilter = {
    statusFilter
}
export default statusFilter;

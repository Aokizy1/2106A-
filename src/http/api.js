import request from './request'

export function LoginApi(data) {
    return request({
        url: '/login',
        mrthod: 'POST',
        params: data
    })
}
import Axios from 'axios'
import encConfig from './env'
import { Message } from 'element-ui'

const service = Axios.create({
    baseURL: encConfig.prod.baseURL,
    timeout: 5000
})
// 创建请求连接器
service.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
//创建响应式拦截
service.interceptors.response.use(
    (res) => {
        console.log('res:::', res)
        const {
            meta: { msg, status: code },
            data: result
        } = res.data
        const successCodeArr = [200, 201, 204]
        if (successCodeArr.includes(code)) {
            Message({
                message: msg,
                type: 'success'
            })

            if (res.config.url === '/login') {
                // 数据存到服务端,浏览器关闭会删除
                sessionStorage.setItem('token', request.token)
            }
            return result
        }
        Message({
            message: msg,
            type: 'error'
        })
        return Promise.reject(msg)
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default service
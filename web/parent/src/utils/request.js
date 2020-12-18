import axios from 'axios'
import { message } from 'antd';
import { getToken } from '../utils/auth'

const service = axios.create({
    baseURL: 'localhost:3000',
    timeout: 5000
})

const token = getToken()
// 拦截请求
service.interceptors.request.use(
    config => {
        if (token) {
            config.headers['X-Token'] = getToken()
        }
        return config
    },
    error => {
        message.error('请求失败,请稍后再试');
        return
    }
)

// 拦截响应
service.interceptors.response.use(
    response => {
        const res = response.data
        console.log(res)

        if (res.code !== 20000) {
            message.error( res.message || '加载失败,请稍后再试');
            return 
        } else {
            return res
        }
    },
    error => {
        message.success('加载失败');
        return 
    }
)

export default service

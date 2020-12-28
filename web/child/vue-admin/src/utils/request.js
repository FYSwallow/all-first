import axios from 'axios'
import { Message} from 'element-ui'
import store from '@/store/index'
import { getToken } from './auth';

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000,
})

service.interceptors.request.use(
    config => {
        if(store.getters.token) {
            config.headers['X-Token'] = getToken()
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        const res = response.data
        console.log(res)
        if (res.code !== 20000) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5*100
            })
        }
        return res
    },
    error => {
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
          })
          return Promise.reject(error)
    }
)

export default service
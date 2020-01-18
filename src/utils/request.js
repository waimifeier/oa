import axios from 'axios'
import { getToken } from '@/utils/auth'

axios.defaults.baseURL = "http://localhost:8081:/api/";
axios.defaults.timeout = 60000;

// request拦截器
axios.interceptors.request.use(
    config => {
        config.headers['authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// response 拦截器
axios.interceptors.response.use(
    response => {
        if (res.status === 200) {
            return Promise.resolve(res.content)
        } else {
            return Promise.reject(res)
        }
    },
    error => {
        let state = 500
        let message = ''
        try {
            state = error.response.status
        } catch (error) {
            state = 502
        }
        if (state === 504) message = '服务器超时'
        else if (state === 500) message = '服务器异常'
        else if (state === 400) message = '请求参数错误'
        else if (state === 405) message = '请求方法未允许'
        else if (state === 404) message = '请求错误,未找到该资源'
        else if (state === 502) message = '服务器未响应'
        return Promise.reject(error)
    }
)
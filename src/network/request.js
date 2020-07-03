import axios from 'axios'

export const request = (config)=>{
    // 创建一个实例
    const instance = axios.create({
        // 公共路径
        baseURL:"http://127.0.0.1:8888/api/private/v1/",
        timeout:5000
    })
    //响应拦截
    instance.interceptors.response.use(response=>{
        return response.data
    })
    //请求拦截
    instance.interceptors.request.use(config=>{
        return config
    })
    return instance(config)
}
import {request} from './request'

export const reqLogin = (username,password)=>{
    return request({
        url:'login',
        method:'post',
        data:{
            username,
            password 
        }
    })
}
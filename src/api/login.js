import http from '../http/request'

// 地图
export const reqLogin =(data) =>{
    return http({
        url:'/get-user-login',
        method:'post',
        data

    })
}
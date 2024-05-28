import http from '../http/request'

// 地图
export const mapJson =() =>{
    return http({
        url:'/get-map-info',
        method:'get',

    })
}
import request from '@/utils/request'

export function getBaseInfo() {
    return request({
        url: '/vue-element-admin/dashboard/baseInfo',
        method: 'get',
    })
}

export function getpackageRank() {
    return request({
        url: '/vue-element-admin/dashboard/packageRank',
        method: 'get',
    })
}
export function getShopCategory() {
    return request({
        url: '/vue-element-admin/dashboard/shopCategory',
        method: 'get',
    })
}
export function getPaltformData() {
    return request({
        url: '/vue-element-admin/dashboard/platformData',
        method: 'get',
    })
}

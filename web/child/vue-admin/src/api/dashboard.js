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

const Mock = require('mockjs')
const baseInfo = Mock.mock({
    "成交额": '@integer(0, 9999999)',
    "成交量": '@integer(0, 9999999)', 
    "在线总数": '@integer(0, 9999999)', 
    "总包国量": '@integer(0, 9999999)',
    "在线商家": '@integer(0, 9999999)', 
    "已发件": '@integer(0, 9999999)' 
})

function packageRank() {
    return Mock.mock({
        city: '@city()',
        packageNum: '@integer(0,9999999)'
    })
}

let packageRankList = []

// 获取不重复的五个省份数据
while(packageRankList.length < 5) {
    let item = packageRank()
    let index = packageRankList.findIndex(val => {
        return val.city === item.city
    })
    if (index === -1) {
        packageRankList.push(item)
    }
}

// 对某个属性排序

function compare(key) {
    return function(a, b) {
        return b[key] - a[key]
    }
}
packageRankList.sort(compare('packageNum'))

// 对五个省份数据排序
module.exports = [
    {
        url: '/vue-element-admin/dashboard/baseInfo',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: baseInfo
            }
        }
    },
    {
        url: '/vue-element-admin/dashboard/packageRank',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: packageRankList
            }
        }
    }
]
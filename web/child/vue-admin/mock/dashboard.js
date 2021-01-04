const Mock = require('mockjs')

// 对五个省份数据排序
module.exports = [
    {
        url: '/vue-element-admin/dashboard/baseInfo',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: Mock.mock({
                    "成交额": '@integer(0, 9999999)',
                    "成交量": '@integer(0, 9999999)',
                    "在线总数": '@integer(0, 9999999)',
                    "总包国量": '@integer(0, 9999999)',
                    "在线商家": '@integer(0, 9999999)',
                    "已发件": '@integer(0, 9999999)'
                })
            }
        }
    },
    {
        url: '/vue-element-admin/dashboard/packageRank',
        type: 'get',
        response: () => {
            function packageRank() {
                return Mock.mock({
                    city: '@province()',
                    packageNum: '@integer(0,9999999)'
                })
            }

            let packageRankList = []

            // 获取不重复的五个省份数据
            while (packageRankList.length < 5) {
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
                return function (a, b) {
                    return b[key] - a[key]
                }
            }
            packageRankList.sort(compare('packageNum'))
            return {
                code: 20000,
                data: packageRankList
            }
        }
    },
    {
        url: '/vue-element-admin/dashboard/shopCategory',
        type: 'get',
        response: () => {
            let category = ['化妆品', '手机', '电脑', '羽绒服', '扫地机', '电视', '洗发露', '其他'],shopCategory = []
            category.forEach(val => {
                shopCategory.push({...Mock.mock({
                    "value": '@integer(0, 100)',
                }), name: val })
            })
            return {
                code: 20000,
                data: shopCategory
            }
        }
    },
    {
        url: '/vue-element-admin/dashboard/platformData',
        type: 'get',
        response: () => {
            let category = ['天猫', '京东', '苏宁易购', '拼多多', '国美', '亚马逊', '唯品会', '其他'],platform = []
            category.forEach(val => {
                platform.push({...Mock.mock({
                    "value": '@integer(0, 100)',
                }), name: val })
            })
            return {
                code: 20000,
                data: platform
            }
        }
    },
]
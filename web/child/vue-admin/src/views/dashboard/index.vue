<!--  -->
<template>
    <div class="dashboard-container">
        <header class="dashboard-header clearfix">
            <div class="header-left fl">{{ date }}</div>
            <div class="header-center fl">大数据屏</div>
            <div class="header-right fl"></div>
            <div class="header-bottom fl"></div>
        </header>
        <main class="dashboard-content clearfix">
            <div class="content-left fl">
                <base-info class="dashboard-border" :baseInfo="baseInfo" />
                <package-rank
                    class="dashboard-border"
                    :packageRank="packageRank"
                />
                <shop-category
                    class="dashboard-border"
                    :shopCategory="shopCategory"
                ></shop-category>
            </div>
            <div class="content-center fl">
                <map-chart1 class="dashboard-border"></map-chart1>
                <count-chart class="dashboard-border"/>
            </div>
            <div class="content-right fl">
                <platform-chart
                    class="dashboard-border"
                    :platformData="platformData"
                />
                <bar-chart2 class="dashboard-border"></bar-chart2>
            </div>
        </main>
    </div>
</template>

<script>
import { parseTime } from '@/utils/index.js'
import {
    getBaseInfo,
    getpackageRank,
    getShopCategory,
    getPaltformData
} from '@/api/dashboard'
import BaseInfo from './components/baseInfo/index.vue'
import PackageRank from './components/packageRank/index.vue'
import ShopCategory from './components/pie/shopCategory.vue'
import PlatformChart from './components/pie/platformChart.vue'
import CountChart from './components/bar/countChart.vue'
import Barchart2 from './components/bar/barChart2.vue'
import Mapchart1 from './components/map/mapChart1.vue'
export default {
    data() {
        return {
            date: parseTime(),
            baseInfo: {},
            packageRank: [],
            shopCategory: [],
            platformData: []
        }
    },
    mounted() {
        this.timer = setInterval(() => {
            this.date = parseTime()
        }, 1000)
        this.getAllData()
    },
    beforeDestroy() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    },
    components: {
        PackageRank,
        BaseInfo,
        ShopCategory,
        PlatformChart,
        CountChart,
        barChart2: Barchart2,
        mapChart1: Mapchart1
    },
    methods: {
        getAllData: function() {
            this.getBaseInfo()
            this.getpackageRank()
            this.getShopCategory()
            this.getPaltformData()
        },
        // 获取基本信息
        getBaseInfo() {
            getBaseInfo().then(res => {
                this.baseInfo = this.filterNum(res.data)
            })
        },
        // 获取包裹排名
        getpackageRank() {
            getpackageRank().then(res => {
                let data = res.data
                let paramList = []
                data.forEach(item => {
                    let val = item.packageNum.toString()
                    if (val.length > 4) {
                        paramList.push({
                            ...item,
                            packageNum: val.slice(0, val.length - 4) + '万'
                        })
                    } else {
                        paramList.push(item)
                    }
                })

                this.packageRank = paramList
            })
        },

        // 获取商品分类占比
        getShopCategory() {
            getShopCategory().then(res => {
                this.shopCategory = res.data
            })
        },

        // 获取平台占比
        getPaltformData() {
            getPaltformData().then(res => {
                this.platformData = res.data
            })
        },
        filterNum(data) {
            let paramObj = {}
            for (const key in data) {
                let item = data[key].toString()
                paramObj[key] = item
                if (item.length > 4) {
                    paramObj[key] = item.slice(0, item.length - 4) + '万'
                }
            }
            return paramObj
        }
    }
}
</script>
<style lang="scss" scoped>
.dashboard-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: #101129 0 0 / cover no-repeat;
    color: #fff;
    .dashboard-header {
        clear: both;
        height: 100px;
        color: #fff;
        text-align: center;
        .header-left {
            width: 25%;
            height: 80px;
            line-height: 80px;
            font-size: 12px;
        }
        .header-center {
            width: 50%;
            height: 80px;
            line-height: 80px;
            position: relative;
            font-size: 24px;

            &::after {
                content: '';
                position: absolute;
                top: 30px;
                left: 0;
                width: 100%;
                height: 100%;
                background: url('./styles/images/head.gif') 0 no-repeat;
                background-size: cover;
            }
        }
        .header-right {
            width: 25%;
            height: 80px;
            line-height: 80px;
        }
        .header-bottom {
            height: 20px;
            width: 100%;
            background: url('./styles/images/header.png') 0 no-repeat;
            background-size: contain;
        }
    }
    .dashboard-content {
        height: calc(100% - 100px);
        width: 100%;
        padding: 10px 5px;
        overflow: hidden;
        .content-left {
            width: 25%;
            height: 100%;
            padding: 5px;
        }
        .content-center {
            width: 50%;
            padding: 5px;
            display: flex;
            flex-direction: column;
            .dashboard-border {
                flex: 1;
            }
        }
        .content-right {
            width: 25%;
            padding: 5px;
            display: flex;
            flex-direction: column;
            .dashboard-border {
                flex: 1;
            }
        }
    }
    .dashboard-border {
        position: relative;
        border: 1px solid #0bc4e9;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin-bottom: 20px;
        padding: 10px 20px;
        &::before {
            content: '';
            position: absolute;
            bottom: -1px;
            top: -1px;
            left: 10%;
            width: 80%;
            border-top: 1px solid #007297;
            border-bottom: 1px solid #007297;
            transition: all 1s;
        }
        &::after {
            content: '';
            position: absolute;
            left: -1px;
            right: -1px;
            top: 10%;
            height: 80%;
            border-left: 1px solid #007297;
            border-right: 1px solid #007297;
            transition: all 1s;
        }
        &:hover::before {
            width: 0%;
        }
        &:hover::after {
            height: 0%;
        }
    }
}
</style>
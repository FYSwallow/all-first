<!--  -->
<template>
    <dv-full-screen-container>
        <div class="bigScreen-container">
            <header class="bigScreen-header clearfix">
                <div class="header-left fl">{{ date }}</div>
                <div class="header-center fl">大数据屏</div>
                <div class="header-right fl"></div>
                <div class="header-bottom fl"></div>
            </header>
            <main class="bigScreen-content clearfix">
                <div class="content-left">
                    <div class="left-top">
                        <dv-border-box-1>
                            <chart-card title="基本信息">
                                <base-info :baseInfo="baseInfo" />
                            </chart-card>
                        </dv-border-box-1>
                    </div>
                    <div class="left-middle">
                        <dv-border-box-8>
                            <chart-card title="基本信息">
                                <package-rank :packageRank="packageRank" />
                            </chart-card>
                        </dv-border-box-8>
                    </div>
                    <div class="left-bottom">
                        <dv-border-box-12>
                            <chart-card title="基本信息">
                                <shop-category
                                    class=""
                                    :shopCategory="shopCategory"
                                />
                            </chart-card>
                        </dv-border-box-12>
                    </div>
                </div>
                <div class="content-center">
                    <div class="center-top">
                        <dv-border-box-11 title="数据流通图"
                            ><map-chart1
                        /></dv-border-box-11>
                    </div>
                    <div class="center-bottom">
                        <dv-border-box-13>
                            <chart-card title="月统计">
                                <count-chart />
                            </chart-card>
                        </dv-border-box-13>
                    </div>
                </div>
                <div class="content-right">
                    <div class="right-top">
                        <dv-border-box-8>
                            <chart-card title="基本信息">
                                <package-rank :packageRank="packageRank" />
                            </chart-card>
                        </dv-border-box-8>
                    </div>
                    <div class="right-middle">
                        <dv-border-box-12>
                            <chart-card title="基本信息">
                                <platform-chart :platformData="platformData" />
                            </chart-card>
                        </dv-border-box-12>
                    </div>
                    <div class="right-bottom">
                        <dv-border-box-3>
                            <chart-card title="基本信息">
                                <bar-chart2 />
                            </chart-card>
                        </dv-border-box-3>
                    </div>
                </div>
            </main>
        </div>
    </dv-full-screen-container>
</template>

<script>
import './config/flexible'
import { parseTime } from '@/utils/index.js'
import {
    getBaseInfo,
    getpackageRank,
    getShopCategory,
    getPaltformData
} from '@/api/bigScreen'
import ChartCard from './components/chartCard/index.vue'
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
            platformData: [],
            loading: true
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
        ChartCard,
        PackageRank,
        BaseInfo,
        ShopCategory,
        PlatformChart,
        CountChart,
        barChart2: Barchart2,
        mapChart1: Mapchart1
    },
    methods: {
        getAllData: async function() {
            await this.getBaseInfo()
            await this.getpackageRank()
            await this.getShopCategory()
            await this.getPaltformData()
            this.loading = false
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
.bigScreen-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: #101129 0 0 / cover no-repeat;
    color: #fff;
    .bigScreen-header {
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
    .bigScreen-content {
        display: flex;
        justify-content: space-around;
        height: calc(100% - 100px);
        width: 100%;
        padding: 10px 5px;
        overflow: hidden;
        .content-left {
            width: 25%;
            height: 100%;
            padding: 5px;
            display: flex;
            flex-direction: column;
            .left-top {
                height: 20%;
            }
            .left-middle {
                height: 30%;
            }
            .left-bottom {
                flex: 1;
            }
        }
        .content-center {
            width: 50%;
            padding: 5px;
            display: flex;
            flex-direction: column;
            .center-top {
                height: 50%;
            }
            .center-bottom {
                flex: 1;
            }
        }
        .content-right {
            width: 25%;
            padding: 5px;
            display: flex;
            flex-direction: column;
            .right-top {
                height: 40%;
            }
            .right-middle {
                height: 30%;
            }
            .right-bottom {
                flex: 1;
            }
        }
    }
    .bigScreen-border {
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
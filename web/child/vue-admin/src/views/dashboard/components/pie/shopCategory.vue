<template>
    <div class="shopCategory-container">
        <div class="content-title">商品分类占比</div>
        <div class="shopCategory-canvas" ref="shopCategory"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
import mixin from '../mixin'
export default {
    props: {
        shopCategory: {
            // type: Array,
            // default: []
        }
    },
    data() {
        return {
            option: {
                /*backgroundColor: '#000',*/
                animation: true,
                title: {
                    textStyle: {
                        color: '#fff',
                        fontSize: 10,
                        fontWeight: 'normal',
                        align: 'center',
                        width: '200px'
                    },
                    subtextStyle: {
                        color: '#fff',
                        fontSize: 12,
                        fontWeight: 'normal',
                        align: 'center'
                    }
                },
                legend: {
                    width: '100%',
                    left: 'center',
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    },
                    icon: 'circle',
                    right: '0',
                    bottom: '0',
                    padding: [15, 20],
                    itemGap: 5,
                    data: [
                        '化妆品',
                        '手机',
                        '电脑',
                        '羽绒服',
                        '扫地机',
                        '电视',
                        '洗发露',
                        '其它'
                    ]
                },
                series: [
                    {
                        type: 'pie',
                        center: ['50%', '40%'],
                        radius: ['20%', '43%'],
                        color: [
                            '#FEE449',
                            '#00FFFF',
                            '#00FFA8',
                            '#9F17FF',
                            '#FFE400',
                            '#F76F01',
                            '#01A4F7',
                            '#FE2C8A'
                        ],
                        startAngle: 135,
                        labelLine: {
                            normal: {
                                length: 15
                            }
                        },
                        label: {
                            normal: {
                                formatter: '{b|{b}:}  {per|{d}%} ',
                                backgroundColor: 'rgba(255, 147, 38, 0)',
                                borderColor: 'transparent',
                                borderRadius: 4,
                                rich: {
                                    a: {
                                        color: '#999',
                                        lineHeight: 12,
                                        align: 'center'
                                    },
                                    hr: {
                                        borderColor: '#aaa',
                                        width: '100%',
                                        borderWidth: 1,
                                        height: 0
                                    },
                                    b: {
                                        color: '#b3e5ff',
                                        fontSize: 16,
                                        lineHeight: 33
                                    },
                                    c: {
                                        fontSize: 14,
                                        color: '#eee'
                                    },
                                    per: {
                                        color: '#FDF44E',
                                        fontSize: 14,
                                        padding: [5, 8],
                                        borderRadius: 2
                                    }
                                },
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16
                                }
                            }
                        },
                        emphasis: {
                            label: {
                                show: true,
                                formatter: '{b|{b}:}  {per|{d}%}  ',
                                backgroundColor: 'rgba(255, 147, 38, 0)',
                                borderColor: 'transparent',
                                borderRadius: 4,
                                rich: {
                                    a: {
                                        color: '#999',
                                        lineHeight: 22,
                                        align: 'center'
                                    },
                                    hr: {
                                        borderColor: '#aaa',
                                        width: '100%',
                                        borderWidth: 1,
                                        height: 0
                                    },
                                    b: {
                                        color: '#fff',
                                        fontSize: 14,
                                        lineHeight: 33
                                    },
                                    c: {
                                        fontSize: 14,
                                        color: '#eee'
                                    },
                                    per: {
                                        color: '#FDF44E',
                                        fontSize: 14,
                                        padding: [5, 6],
                                        borderRadius: 2
                                    }
                                }
                            }
                        },
                        data: []
                    },
                    {
                        type: 'pie',
                        center: ['50%', '40%'],
                        radius: ['15%', '14%'],
                        label: {
                            show: false
                        },
                        data: [
                            {
                                value: 78,
                                name: '实例1',
                                itemStyle: {
                                    normal: {
                                        color: {
                                            x: 0,
                                            y: 0,
                                            x2: 1,
                                            y2: 0,
                                            type: 'linear',
                                            global: false,
                                            colorStops: [
                                                {
                                                    offset: 0,
                                                    color: '#9F17FF'
                                                },
                                                {
                                                    offset: 0.2,
                                                    color: '#01A4F7'
                                                },
                                                {
                                                    offset: 0.5,
                                                    color: '#FE2C8A'
                                                },
                                                {
                                                    offset: 0.8,
                                                    color: '#FEE449'
                                                },
                                                {
                                                    offset: 1,
                                                    color: '#00FFA8'
                                                }
                                            ]
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            myChart: {}
        }
    },
    mixins: [mixin],
    watch: {
        shopCategory: function() {
            this.option.series[0].data = this.shopCategory
            this.drawCanvas()
        }
    },
    methods: {
        drawCanvas: function() {
            this.myChart = echarts.init(this.$refs.shopCategory)
            this.myChart.setOption(this.option)
        }
    }
}
</script>

<style lang="scss" scoped>
.shopCategory-container {
    font-size: 12px;
    .content-title {
        padding-left: 5px;
        border-left: 3px solid #0bc4e9;
    }
    .shopCategory-canvas {
        height: 300px;
    }
}
</style>
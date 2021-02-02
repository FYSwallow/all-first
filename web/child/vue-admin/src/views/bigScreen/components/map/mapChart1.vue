<template>
    <div class="mapchart-container">
        <!-- <div class="mapchart-canvas" ref="mapchart1"></div> -->
    </div>
</template>

<script>
import * as echarts from 'echarts'
import '../../config/china'
import {
    geoGpsMap,
    colors,
    geoCoordMap,
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
    year
} from '../../config/mapChart'
export default {
    data() {
        return {
            optionXyMap01: {
                timeline: {
                    data: year,
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 3000,
                    left: '10%',
                    right: '10%',
                    bottom: '3%',
                    width: '80%',
                    //  height: null,
                    label: {
                        normal: {
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    symbolSize: 10,
                    lineStyle: {
                        color: '#555'
                    },
                    checkpointStyle: {
                        borderColor: '#777',
                        borderWidth: 2
                    },
                    controlStyle: {
                        showNextBtn: true,
                        showPrevBtn: true,
                        normal: {
                            color: '#666',
                            borderColor: '#666'
                        },
                        emphasis: {
                            color: '#aaa',
                            borderColor: '#aaa'
                        }
                    }
                },
                baseOption: {
                    animation: true,
                    animationDuration: 1000,
                    animationEasing: 'cubicInOut',
                    animationDurationUpdate: 1000,
                    animationEasingUpdate: 'cubicInOut',
                    grid: {
                        right: '1%',
                        top: '15%',
                        bottom: '10%',
                        width: '20%'
                    },
                    tooltip: {
                        trigger: 'axis', // hover触发器
                        axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                            shadowStyle: {
                                color: 'rgba(150,150,150,0.1)' //hover颜色
                            }
                        }
                    },
                    geo: {
                        show: true,
                        map: 'china',
                        roam: true,
                        zoom: 1,
                        center: [113.83531246, 34.0267395887],
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(147, 235, 248, 1)',
                                borderWidth: 1,
                                areaColor: {
                                    type: 'radial',
                                    x: 0.5,
                                    y: 0.5,
                                    r: 0.8,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                                        }
                                    ],
                                    globalCoord: false // 缺省为 false
                                },
                                shadowColor: 'rgba(128, 217, 248, 1)',
                                // shadowColor: 'rgba(255, 255, 255, 1)',
                                shadowOffsetX: -2,
                                shadowOffsetY: 2,
                                shadowBlur: 10
                            },
                            emphasis: {
                                areaColor: '#389BB7',
                                borderWidth: 0
                            }
                        }
                    }
                },
                options: []
            },
            colorIndex: 0
        }
    },
    mounted() {
        this.drawerCanvas()
    },
    methods: {
        drawerCanvas: function() {
            var mapData = [[], [], [], [], [], []]
            /*柱子Y名称*/
            var categoryData = []
            var barData = []
            for (var key in geoCoordMap) {
                mapData[0].push({
                    year: '长春',
                    name: key,
                    value: d1[key] / 100,
                    value1: d1[key] / 100
                })
                mapData[1].push({
                    year: '长春',
                    name: key,
                    value: d1[key] / 100,
                    value1: d2[key] / 100
                })
                mapData[2].push({
                    year: '青岛',
                    name: key,
                    value: d3[key] / 100,
                    value1: d3[key] / 100
                })
                mapData[3].push({
                    year: '青岛',
                    name: key,
                    value: d3[key] / 100,
                    value1: d4[key] / 100
                })
                mapData[4].push({
                    year: '成都',
                    name: key,
                    value: d5[key] / 100,
                    value1: d5[key] / 100
                })
                mapData[5].push({
                    year: '成都',
                    name: key,
                    value: d5[key] / 100,
                    value1: d6[key] / 100
                })
            }

            for (var i = 0; i < mapData.length; i++) {
                mapData[i].sort(function sortNumber(a, b) {
                    return a.value - b.value
                })
                barData.push([])
                categoryData.push([])
                for (var j = 0; j < mapData[i].length; j++) {
                    barData[i].push(mapData[i][j].value1)
                    categoryData[i].push(mapData[i][j].name)
                }
            }

            for (var n = 0; n < year.length; n++) {
                this.optionXyMap01.options.push({
                    /*backgroundColor: '#013954',*/
                    title: [
                        {
                            text: '物流平台',
                            subtext: '   ',
                            left: '35%',
                            top: '15%',
                            textStyle: {
                                color: '#fff',
                                fontSize: 25
                            }
                        },
                        {
                            id: 'statistic',
                            text: year[n] + '数据统计情况',
                            left: '75%',
                            top: '8%',
                            textStyle: {
                                color: '#fff',
                                fontSize: 25
                            }
                        }
                    ],
                    xAxis: {
                        type: 'value',
                        scale: true,
                        position: 'top',
                        min: 0,
                        boundaryGap: false,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            margin: 2,
                            textStyle: {
                                color: '#aaa'
                            }
                        }
                    },
                    yAxis: {
                        type: 'category',
                        //  name: 'TOP 20',
                        nameGap: 16,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        data: categoryData[n]
                    },

                    series: [
                        //未知作用
                        {
                            //文字和标志
                            name: 'light',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            data: this.convertData(mapData[n]),
                            symbolSize: function(val) {
                                return val[2] / 10
                            },
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: colors[this.colorIndex][n]
                                }
                            }
                        },
                        //地图？
                        {
                            type: 'map',
                            map: 'china',
                            geoIndex: 0,
                            aspectScale: 0.75, //长宽比
                            showLegendSymbol: false, // 存在legend时显示
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            roam: true,
                            itemStyle: {
                                normal: {
                                    areaColor: '#031525',
                                    borderColor: '#FFFFFF'
                                },
                                emphasis: {
                                    areaColor: '#2B91B7'
                                }
                            },
                            animation: false,
                            data: mapData
                        },
                        //地图点的动画效果
                        {
                            //  name: 'Top 5',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: this.convertData(
                                mapData[n]
                                    .sort(function(a, b) {
                                        return b.value - a.value
                                    })
                                    .slice(0, 20)
                            ),
                            symbolSize: function(val) {
                                return val[2] / 10
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: colors[this.colorIndex][n],
                                    shadowBlur: 10,
                                    shadowColor: colors[this.colorIndex][n]
                                }
                            },
                            zlevel: 1
                        },
                        //地图线的动画效果
                        {
                            type: 'lines',
                            zlevel: 2,
                            effect: {
                                show: true,
                                period: 4, //箭头指向速度，值越小速度越快
                                trailLength: 0.1, //特效尾迹长度[0,1]值越大，尾迹越长重
                                symbol: 'arrow', //箭头图标
                                symbolSize: 5 //图标大小
                            },
                            lineStyle: {
                                normal: {
                                    color: colors[this.colorIndex][n],
                                    width: 0.3, //尾迹线条宽度
                                    opacity: 0.8, //尾迹线条透明度
                                    curveness: 0.3 //尾迹线条曲直度
                                }
                            },
                            data: this.convertToLineData(
                                mapData[n],
                                geoGpsMap[n + 1]
                            )
                        },
                        //柱状图
                        {
                            zlevel: 1.5,
                            type: 'bar',
                            symbol: 'none',
                            itemStyle: {
                                normal: {
                                    color: colors[this.colorIndex][n]
                                }
                            },
                            data: barData[n]
                        }
                    ]
                })
            }
            let mapchart = echarts.init(this.$refs.mapchart1)
            mapchart.setOption(this.optionXyMap01)
        },
        convertData: function(data) {
            var res = []
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name]
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    })
                }
            }
            return res
        },

        convertToLineData: function(data, gps) {
            var res = []
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i]
                var toCoord = geoCoordMap[dataItem.name]
                //debugger;
                var fromCoord = gps //郑州
                //  var toCoord = geoGps[Math.random()*3];
                if (fromCoord && toCoord) {
                    res.push([
                        {
                            coord: fromCoord,
                            value: dataItem.value
                        },
                        {
                            coord: toCoord
                        }
                    ])
                }
            }
            return res
        }
    }
}
</script>

<style lang="scss" scoped>
.mapchart-container {
    height: 100%;
    .mapchart-canvas {
        padding-top: 40px;
        padding-left: -10px;
        height: 100%;
    }
}
</style>
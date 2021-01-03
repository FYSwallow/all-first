<template>
    <div class="piechart-container">
        <div class="piechart-canvas" ref="piechart2"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    data() {
        let ydata = [
                {
                    name: '天猫',
                    value: 18
                },
                {
                    name: '京东',
                    value: 16
                },
                {
                    name: '苏宁易购',
                    value: 15
                },
                {
                    name: '拼多多',
                    value: 14
                },
                {
                    name: '国美',
                    value: 10
                },
                {
                    name: '亚马逊',
                    value: 7.9
                },
                {
                    name: '唯品会',
                    value: 6.7
                },
                {
                    name: '其他',
                    value: 6
                }
            ],
            color = [
                '#8d7fec',
                '#5085f2',
                '#e75fc3',
                '#f87be2',
                '#f2719a',
                '#fca4bb',
                '#f59a8f',
                '#fdb301',
                '#57e7ec',
                '#cf9ef1'
            ],
            xdata = [
                '天猫',
                '京东',
                '苏宁易购',
                '拼多多',
                '国美',
                '亚马逊',
                '唯品会',
                '唯品会'
            ]
        return {
            option: {
                /*backgroundColor: "rgba(255,255,255,1)",*/
                color: color,
                legend: {
                    orient: 'vartical',
                    x: 'left',
                    top: 'center',
                    left: '53%',
                    bottom: '0%',
                    data: xdata,
                    itemWidth: 8,
                    itemHeight: 8,
                    textStyle: {
                        color: '#fff'
                    },
                    /*itemGap: 16,*/
                    /*formatter:function(name){
                  var oa = option.series[0].data;
                  var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value+oa[4].value + oa[5].value + oa[6].value + oa[7].value+oa[8].value + oa[9].value ;
                  for(var i = 0; i < option.series[0].data.length; i++){
                      if(name==oa[i].name){
                          return ' '+name + '    |    ' + oa[i].value + '    |    ' + (oa[i].value/num * 100).toFixed(2) + '%';
                      }
                  }
                }*/

                    formatter: function(name) {
                        return '' + name
                    }
                },
                series: [
                    {
                        type: 'pie',
                        clockwise: false, //饼图的扇区是否是顺时针排布
                        minAngle: 2, //最小的扇区角度（0 ~ 360）
                        radius: ['20%', '60%'],
                        center: ['30%', '45%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            //图形样式
                            normal: {
                                borderColor: '#ffffff',
                                borderWidth: 1
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'center',
                                formatter: '{text|{b}}\n{c} ({d}%)',
                                rich: {
                                    text: {
                                        color: '#fff',
                                        fontSize: 14,
                                        align: 'center',
                                        verticalAlign: 'middle',
                                        padding: 8
                                    },
                                    value: {
                                        color: '#8693F3',
                                        fontSize: 24,
                                        align: 'center',
                                        verticalAlign: 'middle'
                                    }
                                }
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: 24
                                }
                            }
                        },
                        data: ydata
                    }
                ]
            }
        }
    },
    mounted() {
        this.drawerCanvas()
    },
    methods: {
        drawerCanvas: function() {
            let pieChart = echarts.init(this.$refs.piechart2)
            pieChart.setOption(this.option)
        }
    }
}
</script>

<style lang="scss" scoped>
.piechart-canvas {
    height: 300px;
}
</style>
<template>
    <div class="platformChart-canvas" ref="platformChart"></div>
</template>

<script>
import * as echarts from 'echarts'
import mixin from '../mixin'
export default {
    props: {
        platformData: {}
    },
    data() {
        let color = [
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
                        data: []
                    }
                ]
            },
            myChart: {}
        }
    },
    mixins: [mixin],
    watch: {
        platformData: function() {
            this.option.series[0].data = this.platformData
            this.drawCanvas()
        }
    },
    methods: {
        drawCanvas: function() {
            this.myChart = echarts.init(this.$refs.platformChart)
            this.myChart.setOption(this.option)
        }
    }
}
</script>

<style lang="scss" scoped>
.platformChart-canvas {
    height: 100%;
}
</style>
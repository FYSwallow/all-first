//需引入 echarts
import * as echarts from 'echarts/core'
// 引入线图
import { LineChart, BarChart, PieChart, RadarChart,GaugeChart } from 'echarts/charts'
// 引入提示框和标题组件
import { DatasetComponent, TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([DatasetComponent, TitleComponent, TooltipComponent, GridComponent, LegendComponent, LineChart, BarChart, PieChart, RadarChart, CanvasRenderer, GaugeChart]);
export default echarts
import React, { useEffect } from "react";
import { message } from "antd";
import echarts from "@/components/echarts";

function ChartTemp({ domId, chartCode }) {
    let chart = {};
    useEffect(() => {
        if (chartCode) {
            try {
                let option = eval("(" + chartCode + ")");
                chart = echarts.init(document.getElementById(domId));
                chart.setOption(option);
            } catch (error) {
                console.log(error)
                message.info('请检查数据格式')
            }
        } else {
            message.warning("数据源没有数据，请重新选择");
        }
    }, [chartCode]);
    return <div style={{ height: "500px" }} id={domId} />;
}
export default ChartTemp;

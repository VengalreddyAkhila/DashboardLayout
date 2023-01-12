import React from 'react'
import ReactECharts from 'echarts-for-react'
//import echarts from 'echarts/lib/echarts'
//import BarChart from 'echarts/charts'

const BarChart = () => {
 
    const options = {
      axisLine: {
        show: false
      },
      xAxis: {
        type: 'category',
        data:['feb','mar','apr','may','jun','jul','aug','sep','oct']
      },
      yAxis: {
        type: 'value',
        min:0,
        max:40
      },
      series: [
        {
          type: 'bar',
          stack:1,
          color:'white',
          barWidth:'20%',
           data: [5, {value: 20, itemStyle: { color: 'white'} }, 6, 10, 10, 20,15,20]
         
              
        },
         {
          type: 'bar',
          barWidth:'20%',
          stack:1,
           data: [5,  14, 4, 16, 10, 10, 12,11,9]
         
              
        }
      ]
    };
    
      return <ReactECharts option={options} />;
}
export default BarChart

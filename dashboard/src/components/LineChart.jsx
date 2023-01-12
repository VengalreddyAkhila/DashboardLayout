import React from 'react'
import ReactECharts from 'echarts-for-react'

const LineChart =() => {
  
    const colors = ['#5470C6', '#EE6666'];
const options  = {
  color: colors,
  tooltip: {
    trigger: 'none',
    
  },
  legend: {
    icon:'circle'
  },
  grid: {
    top: 90,
    bottom: 70
  },
  xAxis: [
    {
      type: 'category',
     
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[1]
        }
      },
    
      // prettier-ignore
      data: ['Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun', 'Mon']
    },
    {
      type: 'category',
     
      axisLine: {
       
        lineStyle: {
          color: colors[0]
        }
      },
       
       }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'current',
      type: 'line',
      areaStyle: {},
      smooth: true,
      emphasis: {
        focus: 'series'
      },
    
      data: [20, 60, 40, 84, 90, 45, 55]
    },
    {
      name: 'Previous',
      type: 'line',
      areaStyle: {},
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: [40, 30, 60, 34, 70, 50, 45]
    }
  ]
};
return <ReactECharts option={options} />;
}
 export default LineChart

import React from 'react'
import ReactECharts from 'echarts-for-react';

const PieChart =() => {
    //const colors = ['#5470C6', '#EE6666','white'];
   const options = {
    
    legend: {
       bottom: '5%',
      left: 'center',
      icon:false
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        color:['#5c3ed8','white','brown'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: 'white',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Completed' },
          { value: 535, name: 'Pending' },
          { value: 300, name: 'Cancel' }
        ]
      }
    ]
  };
      return <ReactECharts option={options} />;
}

export default PieChart
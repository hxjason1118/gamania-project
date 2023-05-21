import React, { useEffect, useRef } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  BarController,
} from 'chart.js';
import AnnotationPlugin from 'chartjs-plugin-annotation';

const BarChart = () => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    Chart.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      BarController,
    );
    Chart.register(AnnotationPlugin); // 注册注释插件

    const ctx = chartRef.current.getContext('2d');
    if (chartInstance) {
      chartInstance.destroy(); // 销毁
      chartInstance = null;
    }
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['日', '月'],
        datasets: [
          {
            label: 'Dataset',
            data: [
              [4, 6],
              [2, 8],
            ], // 每个柱状的数据
            backgroundColor: ['rgba(0, 123, 255, 0.5)', 'rgba(3,176,80,0.5)'], // bar顏色
          },
        ],
      },
      options: {
        responsive: true,
        barThickness: 20,
        scales: {
          y: {
            type: 'linear',
            beginAtZero: true,
            min: 'auto',
            max: 'auto',
          },
        },
        plugins: {
          annotation: {
            annotations: [
              {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y',
                value: 5,
                borderColor: '#678eff',
                borderWidth: 1,
                borderDash: [5, 5],
                label: {
                  display: true,
                  content: '5',
                  enabled: true,
                  offsetX: 100,
                },
              },
            ],
          },
        },
      },
    });

    chartInstance.update();
  }, []);

  return (
    <div>
      <canvas
        ref={chartRef}
        style={{ height: '500px', width: '400px' }}
      ></canvas>
    </div>
  );
};

export default BarChart;

import ReactApexChart from 'react-apexcharts';
import GenerateData from '../global/generateData';

const LineChart = () => {
  const options = {
    chart: {
      height: 350,
      type: 'line',
      foreColor: '#595993',
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        colorStops: [
          [
            {
              offset: 0,
              color: '#b77f00',
              opacity: 0.2,
            },
            {
              offset: 55,
              color: '#b77f00',
              opacity: 0.03,
            },
            {
              offset: 55,
              color: '#003ea2',
              opacity: 0.03,
            },
            {
              offset: 100,
              color: '#003ea2',
              opacity: 0.2,
            },
          ],
        ],
      },
      //
      // type:['solid','solid'],
      // opacity: [0.35, 0.2],
    },
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    markers: {
      size: 0,
    },
    grid: {
      borderColor: '#31314d',
      clipMarkers: false,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    stroke: {
      width: 1,
    },
    colors: ['#ffa142', '#87fff3'],
    tooltip: {
      theme: 'dark',
    },
  };

  const series = [
    {
      name: 'TEAM A',
      type: 'area',
      data: GenerateData().map((item) => Object.values(item)[1]),
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={250}
    />
  );
};

export default LineChart;

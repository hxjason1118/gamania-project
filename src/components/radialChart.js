import ReactApexChart from 'react-apexcharts';

const radialChart = ({ mainColor, bgColor }) => {
  const options = {
    chart: {
      height: 280,
      type: 'radialBar',
    },

    series: [67],
    colors: [mainColor],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '55%',
          // background: "#293450"
        },
        track: {
          show: true,
          background: bgColor,
          strokeWidth: '97%',
          opacity: 1,
          margin: 5,
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
        dataLabels: {
          name: {
            offsetY: 5,
            color: '#fff',
            fontSize: '13px',
          },
          value: {
            show: false,
            // color: "#fff",
            // fontSize: "13px",
          },
        },
      },
    },
    // fill: {
    //     type: "gradient",
    //     gradient: {
    //         shade: "dark",
    //         type: "vertical",
    //         gradientToColors: ["#87D4F9"],
    //         stops: [0, 100]
    //     }
    // },
    labels: ['交易失敗'],
  };

  const series = [70];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="radialBar"
      height={250}
    />
  );
};

export default radialChart;

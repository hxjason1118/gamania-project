import LineChart from '../components/lineChart';
import BarChart from '../components/barChart2';
import TwoLineChart from '../components/twoLineChart';
import RadialChart from '../components/radialChart';
import GenerateData from '../global/generateData';
const ChartPage = () => {
  const data = GenerateData();
  console.log('data', data);

  const divStyle = {
    height: '100%',
  };
  return (
    <div className="row g-0 text-white">
      <div className="row g-0">
        <div className="col-md-6 p-2">
          <div className="border d-flex p-2" style={divStyle}>
            <div className="w-50"></div>
            <div className="w-50">
              <BarChart />
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2">
          <div className="border d-flex p-2" style={divStyle}>
            <div className="w-50"></div>
            <div className="w-50">
              <TwoLineChart />
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-md-6 p-2">
          <div className="border d-flex p-2" style={divStyle}>
            <div className="w-50"></div>
            <div className="w-50">
              <LineChart data={data} />
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2">
          <div className="border d-flex p-2" style={divStyle}>
            <div className="w-50">
              <RadialChart mainColor={'#07aaff'} bgColor={'#ffc74f'} />
            </div>
            <div className="w-50">
              <RadialChart mainColor={'#2b8c66'} bgColor={'#07aaff'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartPage;

import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";

const MyPieChart = ({pieData}) => {

    const options = {
        title:{
            text:"Overall Portfolio Shares"
        },
        chart: {
          type: "pie",
          keys: ['name', 'y', 'sliced', 'selected']
        },
        series: [
          { name: 'Stock Share USD',
            data: pieData
          }
        ]
      };
      
    return (
        <>
            <PieChart highcharts={Highcharts} constructor-type={'stockChart'} options={options} />
        </>
    )
}

export default MyPieChart;
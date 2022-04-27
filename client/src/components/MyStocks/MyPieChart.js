import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";

const MyPieChart = ({pieData}) => {

    const options = {
        title:{
            text:"Overall Portfolio Shares"
        },
        colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
          return {
              radialGradient: {
                  cx: 0.5,
                  cy: 0.3,
                  r: 0.7
              },
              stops: [
                  [0, color],
                  [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
              ]
          };
      }),
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
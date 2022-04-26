import {useEffect, useState} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const MyStockItemsGraph = ({selectedStock}) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        makeChart()
    }, [selectedStock] )

    const makeChart = () => {
        const stockDataValuesList = selectedStock.values.map((value, index) => {
            return parseInt(value.close)
        }) 
        let reversedArray =[]
            for (let i=0; i<stockDataValuesList.length; i++){
                reversedArray.unshift(stockDataValuesList[i])
            }
        setData(reversedArray)
    }
    
    // const stockDataDatesList = selectedStock.values.map((value, index) => {
    //     return value.close
    // })

    const options = {
        title: {
            text:'last 30 months stock close price'
    },
    xAxis: {
        title: {
            text:'month'
        }
    },
    yAxis: {
        title: {
            text:'Price(USD)'
        }
    },
    series: [
        {
            name: 'Monthly close',
            data: data
        }
    ]
};

    return(
        <div className="my-stock-items-graph">
            <div className="stock-details">
                <h3>STOCK: {selectedStock.meta.symbol} : EXCHANGE: {selectedStock.meta.exchange}</h3>
                <h4>{selectedStock.meta.interval}</h4>
                <h4>CURRENCY: {selectedStock.meta.currency}</h4>
            </div>
            {data !== null ? <HighchartsReact highcharts={Highcharts} constructor-type={'stockChart'} options={options}/> :null}
        </div>
    )
}

export default MyStockItemsGraph;
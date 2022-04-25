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
        setData(stockDataValuesList)
    }
    
    // const stockDataDatesList = selectedStock.values.map((value, index) => {
    //     return value.close
    // })

    const options = {
       
        title: {
            text:'last 30 months stock close price'
    },
    series: [
        {
            data: data
        }
    ]
};

    return(
        <>
            <h3>{selectedStock.meta.symbol} : {selectedStock.meta.exchange}</h3>
            <h4>{selectedStock.meta.interval}</h4>
            <h4>{selectedStock.meta.currency}</h4>
            {data !== null ? <HighchartsReact highcharts={Highcharts} constructor-type={'stockChart'} options={options}/> :null}
        </>
    )
}

export default MyStockItemsGraph;
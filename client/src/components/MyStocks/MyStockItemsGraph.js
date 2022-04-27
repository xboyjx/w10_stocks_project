import {useEffect, useState} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const MyStockItemsGraph = ({selectedStock, ticker}) => {

    const [data, setData] = useState(null)
    const [interval, setInterval] = useState("1month")
    const [myStockData, setMyStockData] = useState(null)
    

    const handleClick = (event) => {
        setInterval(event.target.value)
    }

    const keys = ["b9807276d5104b33b92d92ff766ab531", "45bcd3cd4e5744298c4fdb0dcd6a1249", "f95ae7b120094694aa29d206c16751f4", "4d3df07bd71d4d198ec7b0071f70c982", "8603921c05d4466f92b11e6ebb617a1b", "785770a8e60c4e02a239d14734459b72"]
    const randKey = keys[Math.floor(Math.random() * keys.length)]

    const fetchMyStockData = function(ticker){
        fetch(`https://api.twelvedata.com/time_series?symbol=${ticker}&interval=${interval}&apikey=${randKey}`)
        .then(res => res.json())
        .then(data => setMyStockData(data))}

        useEffect(() => {
            fetchMyStockData(ticker)
        }, [ticker, interval])

    useEffect(() => {
        if (myStockData !== null ){
            makeChart()
        } 
        }, [myStockData] )

    const makeChart = () => {
        const stockDataValuesList = myStockData.values.map((value, index) => {
            return parseFloat(value.close)
        }) 
        let reversedArray =[]
            for (let i=0; i<stockDataValuesList.length; i++){
                reversedArray.unshift(stockDataValuesList[i])
            }
        // setData(reversedArray)
        const stockDataDatesList = myStockData.values.map((value, index) => {
            return (value.datetime)
        }) 

        let reversedArrayTwo =[]
            for (let i=0; i<stockDataDatesList.length; i++){
                reversedArrayTwo.unshift(stockDataDatesList[i])
            }

            let dataSet =[]
            for (let i=0; i<stockDataDatesList.length; i++){
                let name = reversedArrayTwo[i]
                let value = parseInt(reversedArray[i])
                dataSet.push({ name : name, y:value});
            } setData(dataSet)
        
    }
    
    // const stockDataDatesList = myStockData.values.map((value, index) => {
    //     return value.close
    // })

    const options = {
        title: {
            text:`last 30 ${interval} stock close price`
    },
    xAxis: {
        title: {
            text:`${interval}`
        }
    },
    yAxis: {
        title: {
            text:'Price(USD)'
        }
    },
    series: [
        {
            name: `${interval} close price`,
            data: data
        }
    ]
};

    return(
        <div className="my-stock-items-graph">
            <div className="stock-details">
                <div>
                <h3>STOCK:    <span className="info">{selectedStock.meta.symbol}  </span></h3>
                 <h4>EXCHANGE: <span className="info">{selectedStock.meta.exchange}</span></h4>
                </div>
                <div>
                <h3>INTERVAL: <span className="info">{interval}</span></h3>
                <h4>CURRENCY: <span className="info">{selectedStock.meta.currency}</span></h4>

                </div>
            </div>
            <div className="buttons">
                <button onClick={handleClick} value="1h">Hourly</button>
                <button onClick={handleClick} value="1day">Daily</button>
                <button onClick={handleClick} value="1week">Weekly</button>
                <button onClick={handleClick} value="1month">Monthly</button>
            </div>
            {data !== null ? <HighchartsReact highcharts={Highcharts} constructor-type={'stockChart'} options={options}/> :null}
        </div>
    )
}

export default MyStockItemsGraph;
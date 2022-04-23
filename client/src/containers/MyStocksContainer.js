import {useState, useEffect} from 'react';

const MyStockContainer = () => {

    const [myStockSearchTerms, setMyStockSearchTerms] = useState(["AAPL", "TSLA", "GOOG", "QQQ", "BBBY"])
    const [myStockObj, setMyStockObj] = useState(null)
    const [myStockObjectList, setMyStockObjectList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchMyStockObj(myStockSearchTerms);
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    const fetchMyStockObj = function(searchValues){
        fetch(`https://api.twelvedata.com/time_series?symbol=${searchValues.toString()}&interval=1month&apikey=4d3df07bd71d4d198ec7b0071f70c982`)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setMyStockObj(data))
    }

    useEffect(() => {
    if (myStockObj !== null)
     {
        let newArray = [];
        for (let i=0; i < myStockSearchTerms.length; i++){
            newArray.push(myStockObj[myStockSearchTerms[i]])
        } 
        setMyStockObjectList(newArray)
    }
    }, [myStockObj])

    return(
        <div>
            <h1>My Stocks</h1>
            {isLoading === true ? <p>Loading...Loading...Loading...</p> : <p>{myStockObjectList[0].meta.symbol}</p>}
        </div>
    )
}

export default MyStockContainer
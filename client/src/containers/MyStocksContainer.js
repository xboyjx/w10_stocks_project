import {useState, useEffect} from 'react';

const MyStockContainer = () => {

    const [myStockSearchTerms, setMyStockSearchTerms] = useState(["AAPL", "TSLA", "GOOG", "QQQ", "BBBY"])
    const [myStockObj, setMyStockObj] = useState(null)

    useEffect(() => {
        fetchMyStockObj(myStockSearchTerms);
        // console.log(myStockObj)
    }, [])

    const fetchMyStockObj = function(searchValues){
        fetch(`https://api.twelvedata.com/time_series?symbol=${searchValues[0]}&interval=1month&apikey=45bcd3cd4e5744298c4fdb0dcd6a1249`)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setMyStockObj(data))
    }



    return(
        <div>
            <h1>My Stocks</h1>
            {myStockObj ? <p>{myStockObj.meta.symbol}</p> : null}
        </div>
    )
}

export default MyStockContainer
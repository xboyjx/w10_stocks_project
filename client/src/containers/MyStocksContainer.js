import {useState, useEffect} from 'react';

const MyStockContainer = () => {

    const [myStockSearchTerms, setMyStockSearchTerms] = useState([])
    const [myStockObj, setMyStockObj] = useState(null)
    const [myStockObjectList, setMyStockObjectList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        fetchDB()
        tickerMap()
        fetchMyStockObj(myStockSearchTerms);
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    const fetchDB = function() {
        fetch('http://localhost:9000/api/userStocks/')
        .then(res => res.json())
        .then(data => setUserDetails(data))
    }

    const tickerMap = function() {
        let newArray = []
        newArray = userDetails.stocksHeld.map((stock) => {
            return stock
        }) 
        setMyStockSearchTerms(newArray)
    }

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
            {/* {isLoading === true ? <p>Loading...Loading...Loading...</p> : <p>{myStockObjectList[1].meta.symbol}</p>} */}
        </div>
    )
}

export default MyStockContainer
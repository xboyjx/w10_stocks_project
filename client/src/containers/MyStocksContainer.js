import {useState, useEffect} from 'react';
import MyStocksList from '../components/MyStocks/MyStocksList';

const MyStockContainer = () => {

    const [myStockSearchTerms, setMyStockSearchTerms] = useState([])
    const [myStockObj, setMyStockObj] = useState(null)
    const [myStockObjectList, setMyStockObjectList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        fetchDB()
        setTimeout(() => {
            setIsLoading(false)
        }, 5000)
    }, [])

    const fetchDB = function() {
        fetch('http://localhost:9000/api/userStocks/')
        .then(res => res.json())
        // .then (data => console.log(data))
        .then(data => setUserDetails(data))
    }

    useEffect(() => {
        if (userDetails !== null){
            tickerMap()
        }
    }, [userDetails])

    const tickerMap = function() {
        
        const newArray = userDetails[0].stocksHeld.map((stock) => {
            return stock.stock
        }) 
        setMyStockSearchTerms(newArray)
    }

    useEffect(() => {
        if (myStockSearchTerms.length > 0){
            fetchMyStockObj(myStockSearchTerms);
        }
    }, [myStockSearchTerms])

    const keys = ["b9807276d5104b33b92d92ff766ab531", "45bcd3cd4e5744298c4fdb0dcd6a1249", "f95ae7b120094694aa29d206c16751f4", "4d3df07bd71d4d198ec7b0071f70c982", "8603921c05d4466f92b11e6ebb617a1b"]
    const randKey = keys[Math.floor(Math.random() * keys.length)]

    const fetchMyStockObj = function(searchValues){
        fetch(`https://api.twelvedata.com/time_series?symbol=${searchValues.toString()}&interval=1month&apikey=${randKey}`)
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
            {isLoading === true ? <p>Loading...Loading...Loading...</p> : <MyStocksList stocks={myStockObjectList} />}
        </div>
    )
}

export default MyStockContainer;
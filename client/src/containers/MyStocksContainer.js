import {useState, useEffect} from 'react';
import MyStocksList from '../components/MyStocks/MyStocksList';
import {css} from '@emotion/react';
// import ClipLoader from 'react-spinners/ClipLoader';
import PulseLoader from 'react-spinners/PulseLoader'; //https://www.npmjs.com/package/react-spinners


const MyStockContainer = () => {

    const [myStockSearchTerms, setMyStockSearchTerms] = useState([])
    const [myStockObj, setMyStockObj] = useState(null)
    const [myStockObjectList, setMyStockObjectList] = useState([])
    const [loading, setIsLoading] = useState(true)
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

    const fetchMyStockObj = function(searchValues){
        fetch(`https://api.twelvedata.com/time_series?symbol=${searchValues.toString()}&interval=1month&apikey=8603921c05d4466f92b11e6ebb617a1b`)
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
            {loading === true ? <PulseLoader /> : <MyStocksList stocks={myStockObjectList} />}
        </div>
    )
}

export default MyStockContainer;
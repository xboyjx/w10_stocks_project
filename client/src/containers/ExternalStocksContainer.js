import ExternalStockSearchForm from "../components/MyExternalStocks/ExternalStockSearchForm";
import ExternalStockDetail from "../components/MyExternalStocks/ExternalStockDetail";
import SearchResultsList from "../components/MyExternalStocks/SearchResultsList";
import { useState, useEffect } from 'react';

const ExternalStocksContainer = () => {

    const [searchedTerm, setSearchedTerm] = useState(null)
    const [searchedResults, setSearchedResults] = useState([])
    
    useEffect (() => {
        if (searchedTerm !== null) {
            fetchMySearchResults()
        } 
    }, [searchedTerm])

    const fetchMySearchResults = function(searchValues){
        fetch(`https://api.twelvedata.com/symbol_search?symbol=${searchedTerm}`)
        .then(res => res.json())
        .then(data => setSearchedResults(data.data))
    }


    const handleSearchTerm = (search) => {
        setSearchedTerm(search)
    } 

    return (
        <>
        <h1>Potato</h1>
        <ExternalStockSearchForm handleSearchTerm={handleSearchTerm} />
    {searchedResults.length > 0? <SearchResultsList searchedResults={searchedResults}/>: null }
        <ExternalStockDetail />
        </>
    )

}

export default ExternalStocksContainer
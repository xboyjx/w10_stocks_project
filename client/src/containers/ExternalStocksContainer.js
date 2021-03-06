import ExternalStockSearchForm from "../components/MyExternalStocks/ExternalStockSearchForm";
import SearchResultsList from "../components/MyExternalStocks/SearchResultsList";
import { useState, useEffect } from 'react';

const ExternalStocksContainer = ({addStock}) => {

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
        <div className="external-stocks-container">
          
            <ExternalStockSearchForm handleSearchTerm={handleSearchTerm} />
            <div className="results-container">
            {searchedResults.length > 0? <SearchResultsList searchedResults={searchedResults} addStock={addStock} />: null }
            </div>
        </div>
    )

}

export default ExternalStocksContainer
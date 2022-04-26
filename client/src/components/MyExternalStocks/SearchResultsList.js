import SearchResult from './SearchResult'

const SearchResultsList = ({searchedResults, addStock}) => {

    const filteredSearchedResults = searchedResults.filter(result => result.exchange == "NASDAQ" || result.exchange =="LSE" || result.exchange == "NYSE")

    const searchResults = filteredSearchedResults.map((result, index) => {
        return <SearchResult result = {result} key={index} addStock={addStock}/>
    })

    return (
        <div>
            <table>
                <tr>
                   <th>Ticker</th>
                   <th>Stock Name</th>
                   <th>Exchange</th> 
                   <th>amount</th>
                   <th>add</th>
                </tr>
                {searchResults}
            </table>
        </div>
    )

}

export default SearchResultsList
import SearchResult from './SearchResult'

const SearchResultsList = ({searchedResults}) => {

    const searchResults = searchedResults.map((result, index) => {
        return <SearchResult result = {result} key={index}/>
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
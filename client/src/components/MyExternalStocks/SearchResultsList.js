import SearchResult from './SearchResult'

const SearchResultsList = ({searchedResults}) => {

    const searchResults = searchedResults.map((result, index) => {
        return <SearchResult result = {result} key={index}/>
    })

    return (
        <>
        <ul>
            {searchResults}
        </ul>
        </>
    )

}

export default SearchResultsList
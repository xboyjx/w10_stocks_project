

const SearchResult = ({result}) => {
    return (
        <>
        <li>{result.symbol} {result.instrument_name} {result.exchange}</li>
        </>
    )
}

export default SearchResult
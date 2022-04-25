

const SearchResult = ({result}) => {
    return (
        <>
            <tr>
                <td>{result.symbol}</td>
                <td>{result.instrument_name}</td>
                <td>{result.exchange}</td>
                <td><input type="number" /></td>
                <td><button>add</button></td>
            </tr>
        </>
    )
}

{/* <li>{result.symbol} {result.instrument_name} {result.exchange}</li> */}

export default SearchResult
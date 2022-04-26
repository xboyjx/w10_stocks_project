import { useState } from "react"

const SearchResult = ({result, addStock}) => {

    const [stockNumber, setStockNumber] = useState(null)
    const handleChange = (event) => {
        setStockNumber(event.target.value)
    }

    const handleClick = (event) => {
        const stockToAdd = {
            stock: result.symbol,
            noHeld: stockNumber
        }
        addStock(stockToAdd)
    }

    return (
        <>
            <tr>
                <td>{result.symbol}</td>
                <td>{result.instrument_name}</td>
                <td>{result.exchange}</td>
                <td><input type="number" name="stockNumber" onChange={handleChange}/></td>
                <td><button onClick={handleClick}>add</button></td>
            </tr>
        </>
    )
}

{/* <li>{result.symbol} {result.instrument_name} {result.exchange}</li> */}

export default SearchResult
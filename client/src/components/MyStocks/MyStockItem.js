
const MyStockItem = ({stock, index, handleStockSelect, userDetails}) => {

    const handleClick = () => {
        handleStockSelect(index)
    }

    

    return(
        <>
            <tr>
                <td onClick={handleClick}><span className="stock-symbol">{stock.meta.symbol}</span></td>
                <td>{userDetails[0].stocksHeld[index].noHeld}</td>
                <td>{Math.round(stock.values[0].close).toFixed(2)}</td>
                <td>{Math.round(userDetails[0].stocksHeld[index].noHeld * stock.values[0].close).toFixed(2)}</td>
                <td>{userDetails[0].stocksHeld[index].buyPrice}</td>
                {Math.round((Math.round(userDetails[0].stocksHeld[index].noHeld * stock.values[0].close).toFixed(2)) - (userDetails[0].stocksHeld[index].buyPrice * Math.round(userDetails[0].stocksHeld[index].noHeld))).toFixed(2) > 0 ? <td className="green">{Math.round((Math.round(userDetails[0].stocksHeld[index].noHeld * stock.values[0].close).toFixed(2)) - (userDetails[0].stocksHeld[index].buyPrice * Math.round(userDetails[0].stocksHeld[index].noHeld))).toFixed(2)}</td> : <td className="red">{Math.round((Math.round(userDetails[0].stocksHeld[index].noHeld * stock.values[0].close).toFixed(2)) - (userDetails[0].stocksHeld[index].buyPrice * Math.round(userDetails[0].stocksHeld[index].noHeld))).toFixed(2)}</td>}
            </tr>
        </>
    )
}

export default MyStockItem;
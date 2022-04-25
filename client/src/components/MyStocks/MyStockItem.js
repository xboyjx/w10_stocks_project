
const MyStockItem = ({stock, index, handleStockSelect, userDetails}) => {

    const handleClick = () => {
        handleStockSelect(index)
    }


    return(
        <>
            <tr>
                <td onClick={handleClick}>{stock.meta.symbol}</td>
                <td>{userDetails[0].stocksHeld[index].noHeld}</td>
                <td>{Math.round(stock.values[0].close).toFixed(2)}</td>
                <td>{Math.round(userDetails[0].stocksHeld[index].noHeld * stock.values[0].close)}</td>
            </tr>
        </>
    )
}

export default MyStockItem;

const MyStockItem = ({stock, index, handleStockSelect}) => {

    const handleClick = () => {
        handleStockSelect(index)
    }

    return(
        <div>
            <tr>
                <td onClick={handleClick}>{stock.meta.symbol}</td>
                <td>{stock.values[0].close}</td>
            </tr>
        </div>
    )
}

export default MyStockItem;
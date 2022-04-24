
const MyStockItem = ({stock}) => {

    return(
        <div>
            <tr>
                <td>{stock.meta.symbol}</td>
                <td>{stock.values[0].close}</td>
            </tr>
        </div>
    )
}

export default MyStockItem;
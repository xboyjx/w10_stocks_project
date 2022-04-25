import MyStockItem from "./MyStockItem";

const MyStocksList = ({stocks, handleStockSelect})  => {

    const stockItems = stocks.map((stock, index) => {
        return <MyStockItem stock={stock} key={index} index={index} handleStockSelect={handleStockSelect} />
    });

    return(
        <div>
            <table>
                <tr>
                    <th>Stock Name</th>
                    <th>Current Price</th>
                </tr>
                {stockItems}
            </table>
        </div>
    )
}

export default MyStocksList;
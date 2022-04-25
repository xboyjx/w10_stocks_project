import MyStockItem from "./MyStockItem";

const MyStocksList = ({stocks, handleStockSelect, userDetails})  => {

    const stockItems = stocks.map((stock, index) => {
        return <MyStockItem stock={stock} key={index} index={index} handleStockSelect={handleStockSelect} userDetails={userDetails} />
    });

    return(
        <div>
            <table>
                <tr>
                    <th>Stock Name</th>
                    <th>Number of Stocks</th>
                    <th>Current Price</th>
                    <th>Holding Value</th>
                    
                </tr>
                {stockItems}
            </table>
        </div>
    )
}

export default MyStocksList;
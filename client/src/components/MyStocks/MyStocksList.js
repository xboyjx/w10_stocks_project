import MyStockItem from "./MyStockItem";

const MyStocksList = ({stocks})  => {

    const stockItems = stocks.map((stock, index) => {
        return <MyStockItem stock={stock} key={index} />
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